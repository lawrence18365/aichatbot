// Helper to call the server with proper authentication
export async function callChatAPI(message: string, conversationId?: string) {
  try {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.NEXT_PUBLIC_INTERNAL_API_KEY}`
      },
      body: JSON.stringify({ message }),
    });
    
    if (!res.ok) {
      throw new Error(`Chat API error: ${res.status}`);
    }
    
    return res.json();
  } catch (err) {
    console.error("Error sending message:", err);
    return null;
  }
}

// Helper to get business information
export async function getBusinessInfo() {
  try {
    const res = await fetch("/api/health", {
      method: "GET",
      headers: { 
        "Authorization": `Bearer ${process.env.NEXT_PUBLIC_INTERNAL_API_KEY}`
      },
    });
    
    if (!res.ok) {
      throw new Error(`Health API error: ${res.status}`);
    }
    
    return res.json();
  } catch (err) {
    console.error("Error getting business info:", err);
    return { business_name: "AI Assistant" }; // Fallback
  }
}
