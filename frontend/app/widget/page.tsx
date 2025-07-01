"use client"

import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import OriginalChatWidget from '@/components/OriginalChatWidget';

export default function WidgetPage() {
  const [isOpen, setIsOpen] = useState(false);

  // Handle iframe resize communication
  const toggleChat = () => {
    setIsOpen(!isOpen);
    
    // Notify parent window to resize iframe
    if (window.parent) {
      window.parent.postMessage({
        type: isOpen ? 'LEADAISY_CHAT_CLOSE' : 'LEADAISY_CHAT_OPEN'
      }, '*');
    }
  };

  return (
    <div className="w-full h-full bg-transparent">
      {!isOpen ? (
        // Chat Button
        <button
          onClick={toggleChat}
          className="w-20 h-20 bg-emerald-600 text-white rounded-full shadow-xl flex items-center justify-center hover:bg-emerald-500 transition-all duration-200 hover:scale-110"
          aria-label="Open chat"
        >
          <MessageCircle size={30} />
        </button>
      ) : (
        // Full Chat Interface
        <div className="w-full h-full bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-4 flex justify-between items-center">
            <div>
              <h3 className="font-bold text-lg">AI Assistant</h3>
              <p className="text-sm text-emerald-100">How can I help?</p>
            </div>
            <button
              onClick={toggleChat}
              className="text-white hover:text-emerald-200 transition-colors"
            >
              <X size={24} />
            </button>
          </div>
          
          {/* Embed the existing chat component without the fixed positioning */}
          <div className="h-[500px] relative">
            <OriginalChatWidget embedded={true} />
          </div>
        </div>
      )}
    </div>
  );
}