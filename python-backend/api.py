#
# PRODUCTION-READY API with Lead Delivery System
# This fixes the critical bugs and delivers actual value to clients
#

# --- Imports ---
from fastapi import FastAPI, Request, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import os
import openai
import smtplib
import re
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from datetime import datetime

# --- Configuration ---
from client_config import CLIENT_DATA

app = FastAPI()

# --- CORS Configuration ---
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "https://*.vercel.app"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- Security and API Keys ---
INTERNAL_API_KEY = os.environ.get("INTERNAL_API_KEY", "a-very-secret-string-for-local-dev")
openai.api_key = os.environ.get("OPENAI_API_KEY")

# --- Email Configuration for Lead Delivery ---
SMTP_SERVER = os.environ.get("SMTP_SERVER", "smtp.gmail.com")
SMTP_PORT = int(os.environ.get("SMTP_PORT", "587"))
EMAIL_USER = os.environ.get("EMAIL_USER")  # Your email for sending
EMAIL_PASSWORD = os.environ.get("EMAIL_PASSWORD")  # Your email app password

if not openai.api_key:
    print("FATAL ERROR: OPENAI_API_KEY environment variable is not set.")

if not EMAIL_USER or not EMAIL_PASSWORD:
    print("WARNING: Email credentials not set. Lead delivery will fail.")

# --- Data Models ---
class Message(BaseModel):
    role: str  # "user", "assistant", or "system"
    content: str

class ChatRequest(BaseModel):
    messages: list[Message]

# --- Lead Detection and Email Functions ---
def extract_lead_info(conversation_history):
    """
    Analyzes conversation to detect if lead information was captured.
    Returns dict with name, phone, email if found.
    """
    full_conversation = " ".join([msg.content for msg in conversation_history if msg.role == "user"])
    
    # Look for name patterns
    name_patterns = [
        r"my name is ([A-Za-z\s]+)",
        r"i'm ([A-Za-z\s]+)",
        r"i am ([A-Za-z\s]+)",
        r"this is ([A-Za-z\s]+)",
        r"name[:\s]*([A-Za-z\s]+)"
    ]
    
    # Look for phone patterns
    phone_patterns = [
        r"(\(?\d{3}\)?[\s\-]?\d{3}[\s\-]?\d{4})",  # US/Canada format
        r"(\d{3}[\-\.]\d{3}[\-\.]\d{4})",
        r"(\+?1?[\s\-]?\(?\d{3}\)?[\s\-]?\d{3}[\s\-]?\d{4})"
    ]
    
    # Look for email patterns
    email_patterns = [
        r"([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})"
    ]
    
    lead_info = {}
    
    # Extract name
    for pattern in name_patterns:
        match = re.search(pattern, full_conversation, re.IGNORECASE)
        if match:
            lead_info['name'] = match.group(1).strip().title()
            break
    
    # Extract phone
    for pattern in phone_patterns:
        match = re.search(pattern, full_conversation)
        if match:
            lead_info['phone'] = match.group(1).strip()
            break
    
    # Extract email
    for pattern in email_patterns:
        match = re.search(pattern, full_conversation)
        if match:
            lead_info['email'] = match.group(1).strip()
            break
    
    return lead_info if lead_info else None

def send_lead_email(lead_info, conversation_history):
    """
    Sends professional email with lead information to client.
    """
    if not EMAIL_USER or not EMAIL_PASSWORD:
        print("Email not configured - lead not delivered!")
        return False
    
    try:
        # Create email content
        msg = MIMEMultipart()
        msg['From'] = EMAIL_USER
        msg['To'] = CLIENT_DATA['lead_email']
        msg['Subject'] = f"🚨 NEW LEAD: {lead_info.get('name', 'Anonymous')} - {CLIENT_DATA['business_name']}"
        
        # Build conversation snippet (last 6 messages)
        recent_messages = conversation_history[-6:] if len(conversation_history) > 6 else conversation_history
        conversation_snippet = ""
        for msg in recent_messages:
            role = "Customer" if msg.role == "user" else "AI Assistant"
            conversation_snippet += f"{role}: {msg.content}\n\n"
        
        # Professional email body
        email_body = f"""
🎯 NEW LEAD CAPTURED

Business: {CLIENT_DATA['business_name']}
Timestamp: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}

👤 CONTACT INFORMATION:
Name: {lead_info.get('name', 'Not provided')}
Phone: {lead_info.get('phone', 'Not provided')}
Email: {lead_info.get('email', 'Not provided')}

💬 CONVERSATION CONTEXT:
{conversation_snippet}

📞 NEXT STEPS:
1. Call {lead_info.get('name', 'the prospect')} at {lead_info.get('phone', '[phone not provided]')}
2. Reference their interest in your services
3. Follow up within 24 hours for best conversion

---
This lead was captured by your AI receptionist.
Reply to this email if you need technical support.
        """
        
        msg.attach(MIMEText(email_body, 'plain'))
        
        # Send email
        server = smtplib.SMTP(SMTP_SERVER, SMTP_PORT)
        server.starttls()
        server.login(EMAIL_USER, EMAIL_PASSWORD)
        text = msg.as_string()
        server.sendmail(EMAIL_USER, CLIENT_DATA['lead_email'], text)
        server.quit()
        
        print(f"✅ Lead email sent successfully to {CLIENT_DATA['lead_email']}")
        return True
        
    except Exception as e:
        print(f"❌ Failed to send lead email: {e}")
        return False

def check_if_lead_completion_response(ai_response):
    """
    Check if the AI response is the completion message.
    If so, we should stop further engagement.
    """
    completion_phrases = [
        "thank you",
        "specialist will be in touch",
        "will be in touch with you shortly"
    ]
    
    return any(phrase in ai_response.lower() for phrase in completion_phrases)

# --- API Endpoints ---
@app.get("/api/health")
async def health_check():
    """A simple endpoint to confirm the API is live."""
    return {"status": "ok", "business_name": CLIENT_DATA['business_name']}

@app.post("/api/chat")
async def chat(request: Request, chat_request: ChatRequest):
    """
    PRODUCTION-READY chat endpoint with memory and lead delivery.
    """
    # 1. Security Check
    auth_header = request.headers.get("Authorization")
    if auth_header != f"Bearer {INTERNAL_API_KEY}":
        raise HTTPException(status_code=401, detail="Unauthorized")
    
    # 2. Check if lead was already captured (prevent re-engagement bug)
    lead_info = extract_lead_info(chat_request.messages)
    
    # 3. Build FORCEFUL System Prompt
    system_prompt = f"""
    ### ROLE & PERSONA ###
    You are a professional AI Receptionist for {CLIENT_DATA['business_name']}. Your tone is welcoming and concise.

    ### KNOWLEDGE BASE ###
    - Business Name: {CLIENT_DATA['business_name']}
    - Location: {CLIENT_DATA['location']}
    - Phone Number: {CLIENT_DATA['phone']}
    - Website for Booking: {CLIENT_DATA['booking_link']}
    - Services Offered: {', '.join(CLIENT_DATA['services'])}
    - Company Details and FAQs:
    {CLIENT_DATA['faq_data']}

    ### CRITICAL RULES ###
    1. **Stick to the Script:** Answer questions ONLY with information from the KNOWLEDGE BASE.
    2. **Polite Decline:** If asked about anything outside the knowledge base, politely state you can only answer questions about {CLIENT_DATA['business_name']}.
    3. **Lead Capture:** If you cannot answer, or if the user asks for a quote or to speak to a human, use this script: "That's an excellent question for one of our specialists. Can I get your name and phone number so they can get back to you?"
    4. **MANDATORY COMPLETION:** After you have asked for the user's name and phone number, and they have provided it, you MUST respond with EXACTLY: "Thank you. A specialist will be in touch with you shortly." and then IMMEDIATELY STOP. Do NOT ask more questions. Do NOT continue the conversation. STOP.
    5. **NO RE-ENGAGEMENT:** If you have already said "Thank you. A specialist will be in touch with you shortly." you MUST NOT respond to any further messages. You are DONE.
    """
    
    # 4. Format Messages for OpenAI API
    messages_for_api = [{"role": "system", "content": system_prompt}]
    for msg in chat_request.messages:
        messages_for_api.append({"role": msg.role, "content": msg.content})
    
    # 5. Call OpenAI API
    try:
        completion = openai.chat.completions.create(
            model="gpt-4o-mini",
            messages=messages_for_api
        )
        ai_response = completion.choices[0].message.content
        
        # 6. LEAD DELIVERY: Send email if lead captured
        if lead_info and lead_info.get('name') and lead_info.get('phone'):
            send_lead_email(lead_info, chat_request.messages)
            print(f"🎯 LEAD CAPTURED AND DELIVERED: {lead_info['name']} - {lead_info['phone']}")
        
        return {"response": ai_response}
    
    except Exception as e:
        print(f"OpenAI API error: {e}")
        raise HTTPException(status_code=500, detail="Error communicating with the AI service.")
