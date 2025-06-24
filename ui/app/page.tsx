"use client"; // This is important! It tells Next.js this is an interactive component.

import { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react'; // Using icons for a professional touch

export default function Home() {
  // State to manage if the chat window is open or closed
  const [isOpen, setIsOpen] = useState(false);
  // Updated message format to match backend API
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Hello! How can I help you today?" }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // UPGRADED: Now sends full conversation history for AI memory
  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMessage = { role: 'user', content: inputValue };
    const updatedMessages = [...messages, userMessage];
    
    setMessages(updatedMessages); // Add user's message to the UI
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_INTERNAL_API_KEY}`
        },
        // CRITICAL CHANGE: Send entire conversation history, not just current message
        body: JSON.stringify({ messages: updatedMessages }),
      });

      if (!response.ok) throw new Error(`API Error: ${response.statusText}`);
      const data = await response.json();
      const aiMessage = { role: 'assistant', content: data.response };
      setMessages(prev => [...prev, aiMessage]); // Add AI's response to the UI

    } catch (error) {
      console.error("Failed to send message:", error);
      const errorMessage = { role: 'assistant', content: "Sorry, I'm having a little trouble right now. Please try again later." };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="font-sans">
      {/* The Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-slate-800 text-white w-16 h-16 rounded-full shadow-xl flex items-center justify-center hover:bg-slate-700 transition-colors"
          aria-label="Toggle chat"
        >
          {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        </button>
      </div>

      {/* The Chat Window - conditionally rendered */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-[600px] bg-white rounded-xl shadow-2xl flex flex-col transition-all">
          {/* Header */}
          <div className="bg-slate-800 text-white p-4 rounded-t-xl">
            <h3 className="font-semibold text-lg">Vancouver Digital Dental</h3>
            <p className="text-sm text-slate-300">How can we help you today?</p>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs px-4 py-2 rounded-2xl ${msg.role === 'user' ? 'bg-blue-500 text-white' : 'bg-slate-200 text-slate-800'}`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                  <div className="bg-slate-200 text-slate-800 px-4 py-2 rounded-2xl">
                      <div className="flex items-center space-x-2">
                          <span className="h-2 w-2 bg-slate-500 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                          <span className="h-2 w-2 bg-slate-500 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                          <span className="h-2 w-2 bg-slate-500 rounded-full animate-bounce"></span>
                      </div>
                  </div>
              </div>
            )}
          </div>

          {/* Input Form */}
          <form onSubmit={handleSendMessage} className="p-4 bg-white border-t border-slate-200 rounded-b-xl">
            <div className="flex items-center">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 p-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500"
                disabled={isLoading}
              />
              <button type="submit" className="ml-2 p-3 bg-slate-800 text-white rounded-lg hover:bg-slate-700 disabled:bg-slate-400" disabled={isLoading}>
                <Send size={16} />
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

