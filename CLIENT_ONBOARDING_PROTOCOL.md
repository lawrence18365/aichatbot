# CLIENT ONBOARDING PROTOCOL
## Complete Guide for Creating Client Demos

### 🎯 OVERVIEW
This protocol transforms our master Leadaisy template into personalized client demos for sales outreach. Each client gets their own unique demo URL showcasing their AI assistant.

### 📋 STEP-BY-STEP PROCESS

#### **Step 1: Create Client Repository**
```bash
# For client "Kitsilano Dental" example:
1. Create new PRIVATE GitHub repository: leadaisy-kitsilanodental
2. Clone master template into new repository
3. Push initial code to client repository
```

#### **Step 2: Restore Chat Widget UI**
**ACTION:** Replace the holding page with chat widget in client repo
**FILE:** `ui/app/page.tsx`
**INSTRUCTIONS:**
1. Open client repository: `ui/app/page.tsx`
2. Delete entire contents
3. Replace with Chat Widget Code (see CHAT_WIDGET_CODE.tsx)
4. This ensures client demo shows chat widget while master shows landing page

#### **Step 3: Personalize AI Brain**
**ACTION:** Update client business information
**FILE:** `python-backend/client_config.py`
**INSTRUCTIONS:**
1. Research client's website thoroughly
2. Update CLIENT_DATA dictionary with:
   - business_name: "Client Business Name"
   - location: "Full Address"
   - phone: "Contact Number"
   - booking_link: "Client's booking URL"
   - lead_email: "Where leads should be sent"
   - business_email: "Client's main email"
   - services: [List of their services]
   - faq_data: Comprehensive business information

#### **Step 4: Deploy Client Demo**
```bash
# Deploy to Vercel
1. Connect client repository to Vercel
2. Set environment variables:
   - NEXT_PUBLIC_INTERNAL_API_KEY
   - OPENAI_API_KEY (backend)
   - CLIENT_EMAIL_PASSWORD (if using email delivery)
3. Deploy
4. Result: Golden URL (e.g., kitsilano-dental-demo.vercel.app)
```

### 🎯 SUCCESS CRITERIA
- Master domain (leadaisy.com) shows professional landing page
- Client demo URL shows working chat widget
- AI assistant knows client's business information
- Lead capture works and delivers to client email
- Demo URL ready for sales outreach

### 📧 SALES OUTREACH TEMPLATE
```
Subject: AI Assistant Demo for [CLIENT_NAME]

Hi [CLIENT_NAME],

I've created a personalized AI assistant demo for your business.

👉 Try it here: [GOLDEN_URL]

This AI assistant:
- Knows your services and business hours
- Captures leads 24/7
- Sends you instant notifications
- Takes 5 minutes to add to your website

Interested in seeing how it could help [BUSINESS_NAME]?

Best regards,
[YOUR_NAME]
```

### 🔧 TECHNICAL REQUIREMENTS
- GitHub repository (private)
- Vercel account for deployment
- OpenAI API key
- SMTP credentials for lead delivery

### 📁 FILE STRUCTURE FOR CLIENT REPOS
```
leadaisy-[clientname]/
├── python-backend/
│   ├── client_config.py      # ← CUSTOMIZE THIS
│   ├── api.py               # ← Keep as-is
│   └── requirements.txt     # ← Keep as-is
├── ui/
│   ├── app/
│   │   ├── page.tsx         # ← REPLACE WITH CHAT WIDGET
│   │   └── layout.tsx       # ← Keep as-is
│   └── ...
└── README.md
```

### ⚡ QUICK CHECKLIST
- [ ] New private GitHub repo created
- [ ] Master template code copied
- [ ] Chat widget restored in ui/app/page.tsx
- [ ] Client data updated in client_config.py
- [ ] Environment variables configured
- [ ] Deployed to Vercel
- [ ] Golden URL tested and working
- [ ] Lead capture tested
- [ ] Demo ready for outreach
