"use client";

import { useState, useEffect, useRef, FormEvent } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

export default function OriginalChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "Hello! How can I help you today?" }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

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
        body: JSON.stringify({ messages: newMessages.slice(-10) }),
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
    <div className="font-sans">
      <div className="fixed bottom-5 right-5 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-emerald-600 text-white w-16 h-16 rounded-full shadow-xl flex items-center justify-center hover:bg-emerald-500 transition-transform duration-200 ease-in-out transform hover:scale-110"
          aria-label="Toggle chat"
        >
          {isOpen ? <X size={30} /> : <MessageCircle size={30} />}
        </button>
      </div>
      <div className={`fixed bottom-24 right-5 w-[calc(100vw-40px)] max-w-md h-[70vh] max-h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col transition-transform duration-300 ease-in-out origin-bottom-right ${isOpen ? 'scale-100' : 'scale-0'}`}>
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-4 rounded-t-2xl flex justify-between items-center">
            <div>
                <h3 className="font-bold text-lg">AI Assistant</h3>
                <p className="text-sm text-emerald-100">Powered by Leadaisy</p>
            </div>
          </div>
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-gray-50">
            {messages.map((msg, index) => (
              <div key={index} className={`flex items-end gap-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs md:max-w-sm px-4 py-2 rounded-2xl ${msg.role === 'user' ? 'bg-emerald-600 text-white rounded-br-none' : 'bg-white text-gray-900 rounded-bl-none shadow-sm border border-gray-100'}`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                  <div className="bg-white text-gray-900 px-4 py-2 rounded-2xl rounded-bl-none shadow-sm border border-gray-100">
                      <div className="flex items-center space-x-2">
                          <span className="h-2 w-2 bg-emerald-500 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                          <span className="h-2 w-2 bg-emerald-500 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                          <span className="h-2 w-2 bg-emerald-500 rounded-full animate-bounce"></span>
                      </div>
                  </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          <form onSubmit={handleSendMessage} className="p-4 bg-white border-t border-gray-200 rounded-b-2xl">
            <div className="flex items-center bg-gray-50 rounded-lg p-1 border border-gray-200">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 p-2 bg-transparent rounded-lg focus:outline-none text-gray-900 placeholder-gray-500"
                disabled={isLoading}
              />
              <button type="submit" className="p-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-500 disabled:bg-gray-400 transition-colors" disabled={isLoading || !inputValue.trim()}>
                <Send size={20} />
              </button>
            </div>
          </form>
        </div>
    </div>
  );
}
