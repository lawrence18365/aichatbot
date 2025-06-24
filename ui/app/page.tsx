"use client"; // This is important! It tells Next.js this is an interactive component.

import { useState, useEffect, useRef, FormEvent } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

// Define a type for our message objects for better code quality
type Message = {
  role: 'user' | 'assistant';
  content: string;
};

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "Hello! How can I help you today?" }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  // Function to scroll to the bottom of the messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // This is the function we already built to talk to the backend
  const handleSendMessage = async (e: FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: inputValue };
    const newMessages = [...messages, userMessage];
    
    setMessages(newMessages);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_INTERNAL_API_KEY}`
        },
        body: JSON.stringify({ messages: newMessages.slice(-10) }), // Send last 10 messages for context
      });

      if (!response.ok) throw new Error(`API Error: ${response.statusText}`);
      
      const data = await response.json();
      const aiResponse: Message = { role: 'assistant', content: data.response };
      
      setMessages(prev => [...prev, aiResponse]);

    } catch (error) {
      console.error("Failed to send message:", error);
      const errorMessage: Message = { role: 'assistant', content: "Sorry, I'm having a little trouble right now. Please try again later." };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    // This div acts as a dummy background page.
    <div className="font-sans bg-gray-50 h-screen">
      {/* The Floating Action Button */}
      <div className="fixed bottom-5 right-5 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-slate-800 text-white w-16 h-16 rounded-full shadow-xl flex items-center justify-center hover:bg-slate-700 transition-transform duration-200 ease-in-out transform hover:scale-110"
          aria-label="Toggle chat"
        >
          {isOpen ? <X size={30} /> : <MessageCircle size={30} />}
        </button>
      </div>

      {/* The Chat Window - conditionally rendered with animation */}
      <div className={`fixed bottom-24 right-5 w-[calc(100vw-40px)] max-w-md h-[70vh] max-h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col transition-transform duration-300 ease-in-out origin-bottom-right ${isOpen ? 'scale-100' : 'scale-0'}`}>
          {/* Header */}
          <div className="bg-slate-800 text-white p-4 rounded-t-2xl flex justify-between items-center">
            <div>
                <h3 className="font-bold text-lg">AI Assistant</h3>
                <p className="text-sm text-slate-300">Powered by Leadaisy</p>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-50">
            {messages.map((msg, index) => (
              <div key={index} className={`flex items-end gap-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs md:max-w-sm px-4 py-2 rounded-2xl ${msg.role === 'user' ? 'bg-blue-600 text-white rounded-br-none' : 'bg-slate-200 text-slate-900 rounded-bl-none'}`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                  <div className="bg-slate-200 text-slate-900 px-4 py-2 rounded-2xl rounded-bl-none">
                      <div className="flex items-center space-x-2">
                          <span className="h-2 w-2 bg-slate-500 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                          <span className="h-2 w-2 bg-slate-500 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                          <span className="h-2 w-2 bg-slate-500 rounded-full animate-bounce"></span>
                      </div>
                  </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Form */}
          <form onSubmit={handleSendMessage} className="p-4 bg-white border-t border-slate-200 rounded-b-2xl">
            <div className="flex items-center bg-slate-100 rounded-lg p-1">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 p-2 bg-transparent rounded-lg focus:outline-none"
                disabled={isLoading}
              />
              <button type="submit" className="p-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700 disabled:bg-slate-400 transition-colors" disabled={isLoading || !inputValue.trim()}>
                <Send size={20} />
              </button>
            </div>
          </form>
        </div>
    </div>
  );
}
```

After you've updated the code, commit the changes and push to GitHub. Vercel will start a new deployment. This time, it will compile successfully because we have removed all the dead code.

This is the final cleanup. This is how we make it professional. Let's get it do