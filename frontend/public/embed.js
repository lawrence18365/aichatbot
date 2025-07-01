// embed.js - Customer website embed script
(function() {
  // Prevent multiple installations
  if (window.leadaisyChatInstalled) return;
  window.leadaisyChatInstalled = true;

  // Get the current script to extract the base URL
  const currentScript = document.currentScript || 
    (function() {
      const scripts = document.getElementsByTagName('script');
      return scripts[scripts.length - 1];
    })();
  
  const baseUrl = currentScript.src.replace('/embed.js', '');

  // Create chat widget container
  const chatContainer = document.createElement('div');
  chatContainer.id = 'leadaisy-chat-widget';
  chatContainer.style.cssText = `
    position: fixed !important;
    bottom: 20px !important;
    right: 20px !important;
    z-index: 9999 !important;
    font-family: -apple-system, BlinkMacSystemFont, sans-serif !important;
  `;

  // Create iframe for the chat widget
  const iframe = document.createElement('iframe');
  iframe.src = `${baseUrl}/widget`;
  iframe.style.cssText = `
    width: 80px !important;
    height: 80px !important;
    border: none !important;
    border-radius: 50% !important;
    transition: all 0.3s ease !important;
    box-shadow: 0 4px 20px rgba(0,0,0,0.15) !important;
  `;
  
  // Handle iframe resize when chat opens
  iframe.onload = function() {
    window.addEventListener('message', function(event) {
      if (event.origin !== baseUrl) return;
      
      if (event.data.type === 'LEADAISY_CHAT_OPEN') {
        iframe.style.width = '400px';
        iframe.style.height = '600px';
        iframe.style.borderRadius = '20px';
      } else if (event.data.type === 'LEADAISY_CHAT_CLOSE') {
        iframe.style.width = '80px';
        iframe.style.height = '80px';
        iframe.style.borderRadius = '50%';
      }
    });
  };

  chatContainer.appendChild(iframe);
  
  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      document.body.appendChild(chatContainer);
    });
  } else {
    document.body.appendChild(chatContainer);
  }
})();