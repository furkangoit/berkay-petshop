
import React, { useState, useRef, useEffect } from 'react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

const AiChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Merhaba! Ben Berkay Petshop Asistanı. 🐾 Size nasıl yardımcı olabilirim?' }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  // Reference to the bottom of the chat window for auto-scrolling
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Scroll to bottom whenever messages change or chat is opened
  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim() || isLoading) return;

    // Add User Message
    const userMessage: ChatMessage = { role: 'user', text: inputText };
    setMessages((prev) => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);

    try {
      // Call Gemini API
      const responseText = await sendMessageToGemini(inputText);
      const botMessage: ChatMessage = { role: 'model', text: responseText };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      setMessages((prev) => [...prev, { role: 'model', text: 'Bir hata oluştu.', isError: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    /* 
      Floating Action Button & Chat Window Wrapper
      - fixed bottom-6 right-6: Pins component to bottom right corner.
      - z-50: Ensures it stays above all other page content.
    */
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Chat Window Panel */}
      {isOpen && (
        <div className="bg-white rounded-2xl shadow-2xl w-80 sm:w-96 h-[500px] mb-4 flex flex-col overflow-hidden border border-gray-100 animate-fade-in-up">
          {/* Header */}
          <div className="bg-brand-600 p-4 text-white flex justify-between items-center shadow-sm">
            <div className="flex items-center gap-2">
              <div className="bg-white/20 p-1.5 rounded-full">
                {/* Bot Avatar SVG */}
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-sm">Pet Asistanı</h3>
                <p className="text-xs text-brand-100">Çevrimiçi</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-brand-100 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages List Area */}
          <div className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-3">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed shadow-sm ${
                    msg.role === 'user'
                      ? 'bg-brand-600 text-white rounded-tr-none'
                      : 'bg-white text-gray-800 border border-gray-100 rounded-tl-none'
                  } ${msg.isError ? 'bg-red-50 text-red-600 border-red-200' : ''}`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {/* Loading Typing Indicator */}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white rounded-2xl rounded-tl-none border border-gray-100 px-4 py-3 shadow-sm">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Footer */}
          <form onSubmit={handleSend} className="p-3 bg-white border-t border-gray-100 flex gap-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Sorunuzu yazın..."
              className="flex-1 bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-full px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent placeholder-gray-400"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading || !inputText.trim()}
              className="bg-brand-600 text-white p-2.5 rounded-full hover:bg-brand-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <svg className="w-5 h-5 transform rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </form>
        </div>
      )}

      {/* Floating Toggle Button (Open/Close) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${
          isOpen ? 'bg-gray-400' : 'bg-brand-600 hover:bg-brand-700'
        } text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500`}
        aria-label="Chatbot'u aç/kapa"
      >
        {isOpen ? (
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        ) : (
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </button>
    </div>
  );
};

export default AiChatbot;