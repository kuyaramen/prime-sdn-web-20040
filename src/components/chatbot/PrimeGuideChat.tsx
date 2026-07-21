"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send } from "lucide-react";
import { PrimeGuideMascot } from "./PrimeGuideMascot";

interface Message {
  id: string;
  type: "bot" | "user";
  content: string;
  timestamp: Date;
}

interface QuickAction {
  id: string;
  label: string;
  icon?: string;
  action: () => void;
}

interface PrimeGuideChatProps {
  onClose: () => void;
}

export function PrimeGuideChat({ onClose }: PrimeGuideChatProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [mascotState, setMascotState] = useState<"idle" | "thinking" | "speaking">("idle");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickActions: QuickAction[] = [
    { id: "discover", label: "Discover Surigao", action: () => handleQuickAction("discover") },
    { id: "investment", label: "Investment Areas", action: () => handleQuickAction("investment") },
    { id: "innovation", label: "Innovation Framework", action: () => handleQuickAction("innovation") },
    { id: "startup", label: "Startup Ecosystem", action: () => handleQuickAction("startup") },
    { id: "roadmap", label: "Roadmap 2040", action: () => handleQuickAction("roadmap") },
    { id: "ask", label: "Ask Anything", action: () => handleQuickAction("ask") },
  ];

  useEffect(() => {
    // Initial greeting
    const initialMessage: Message = {
      id: "1",
      type: "bot",
      content: "Welcome to PRIME SDN. I'm PRIME Guide, your AI Innovation Guide for Surigao del Norte. I'm here to help you discover investment opportunities, innovation programs, tourism destinations, government services, and the PRIME SDN 2040 vision.",
      timestamp: new Date(),
    };
    setMessages([initialMessage]);
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleQuickAction = (actionId: string) => {
    const action = quickActions.find((a) => a.id === actionId);
    if (action) {
      const userMessage: Message = {
        id: Date.now().toString(),
        type: "user",
        content: action.label,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, userMessage]);
      
      setIsTyping(true);
      setMascotState("thinking");
      
      setTimeout(() => {
        const botResponse: Message = {
          id: (Date.now() + 1).toString(),
          type: "bot",
          content: getBotResponse(actionId),
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botResponse]);
        setIsTyping(false);
        setMascotState("speaking");
        
        setTimeout(() => setMascotState("idle"), 2000);
      }, 1500);
    }
  };

  const getBotResponse = (actionId: string): string => {
    const responses: Record<string, string> = {
      discover: "Surigao del Norte is a paradise of innovation and natural beauty. From the world-famous Siargao Island to emerging tech hubs in Surigao City, discover how we're blending island ecology with cutting-edge development.",
      investment: "PRIME SDN offers strategic investment opportunities in tourism, technology, renewable energy, and sustainable agriculture. Our Innovation Zones provide tax incentives and streamlined processes for qualified investors.",
      innovation: "The PRIME SDN Innovation Framework focuses on four pillars: Education & Talent, Infrastructure & Connectivity, Sustainable Development, and Digital Transformation. Each pillar supports our vision for Surigao 2040.",
      startup: "Our startup ecosystem includes incubation programs, mentorship networks, and access to regional markets. The Siargao Innovation Hub and Surigao City Tech Park provide world-class facilities for entrepreneurs.",
      roadmap: "The PRIME SDN 2040 Roadmap outlines our journey to becoming a premier innovation destination. Key milestones include smart city implementation, green energy transition, and digital government services by 2030.",
      ask: "I'm here to help with any questions about PRIME SDN, investment opportunities, government services, tourism, or innovation programs. What would you like to know?",
    };
    return responses[actionId] || "I'd be happy to help you with that. Let me provide you with relevant information.";
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: inputValue,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");

    setIsTyping(true);
    setMascotState("thinking");

    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: "bot",
        content: "Thank you for your message. I'm processing your request and will provide you with relevant information about PRIME SDN.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
      setMascotState("speaking");
      
      setTimeout(() => setMascotState("idle"), 2000);
    }, 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 25,
      }}
      className="fixed bottom-24 right-6 w-[400px] max-w-[calc(100vw-3rem)] bg-white rounded-2xl shadow-2xl overflow-hidden z-50"
      style={{
        maxHeight: "calc(100vh - 8rem)",
      }}
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-[#1E4FBF] to-[#18479B] px-5 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            <PrimeGuideMascot size={40} state={mascotState} />
            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white" />
          </div>
          <div>
            <h3 className="text-white font-semibold text-lg">PRIME Guide</h3>
            <p className="text-white/70 text-xs">Your AI Innovation Guide for Surigao del Norte</p>
          </div>
        </div>
        <motion.button
          onClick={onClose}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="text-white/70 hover:text-white transition-colors"
          aria-label="Close chat"
        >
          <X size={20} />
        </motion.button>
      </div>

      {/* Messages Area */}
      <div className="p-5 overflow-y-auto" style={{ maxHeight: "calc(100vh - 14rem)" }}>
        <div className="space-y-4">
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[85%] px-4 py-3 rounded-2xl ${
                  message.type === "user"
                    ? "bg-gradient-to-r from-[#1E4FBF] to-[#18479B] text-white"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                <p className="text-sm leading-relaxed">{message.content}</p>
                <p className={`text-xs mt-1 ${message.type === "user" ? "text-white/60" : "text-gray-500"}`}>
                  {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                </p>
              </div>
            </motion.div>
          ))}

          {isTyping && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-start"
            >
              <div className="bg-gray-100 px-4 py-3 rounded-2xl">
                <div className="flex gap-1">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-2 h-2 bg-gray-400 rounded-full"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick Actions */}
        {messages.length === 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6"
          >
            <p className="text-sm text-gray-600 mb-3 font-medium">Quick Actions</p>
            <div className="grid grid-cols-2 gap-2">
              {quickActions.map((action) => (
                <motion.button
                  key={action.id}
                  onClick={action.action}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-4 py-3 bg-gradient-to-r from-gray-50 to-gray-100 hover:from-[#1E4FBF]/5 hover:to-[#18479B]/5 border border-gray-200 rounded-xl text-sm font-medium text-gray-700 transition-all"
                >
                  {action.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </div>

      {/* Input Area */}
      <div className="border-t border-gray-200 p-4">
        <div className="flex items-center gap-3">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            placeholder="Ask PRIME Guide anything..."
            className="flex-1 px-4 py-3 bg-gray-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#1E4FBF]/20 transition-all"
          />
          <motion.button
            onClick={handleSendMessage}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={!inputValue.trim()}
            className="w-10 h-10 bg-gradient-to-r from-[#1E4FBF] to-[#18479B] rounded-xl flex items-center justify-center text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            aria-label="Send message"
          >
            <Send size={18} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
