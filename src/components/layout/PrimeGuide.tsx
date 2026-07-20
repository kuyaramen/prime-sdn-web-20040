"use client";

import { useState, useEffect, useRef } from "react";
import { X, Send, Map, Lightbulb, TrendingUp, BookOpen } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface QuickAction {
  icon: React.ReactNode;
  label: string;
  query: string;
}

const QUICK_ACTIONS: QuickAction[] = [
  {
    icon: <Map size={16} strokeWidth={1.5} />,
    label: "Explore",
    query: "Tell me about destinations and experiences in Surigao del Norte.",
  },
  {
    icon: <Lightbulb size={16} strokeWidth={1.5} />,
    label: "Innovation",
    query: "What innovation and startup programs does PRIME SDN support?",
  },
  {
    icon: <TrendingUp size={16} strokeWidth={1.5} />,
    label: "Opportunities",
    query: "What are the key investment and business opportunities in Surigao?",
  },
  {
    icon: <BookOpen size={16} strokeWidth={1.5} />,
    label: "Stories",
    query: "Show me the latest editorial stories from PRIME SDN.",
  },
];

type Message = { id: string; text: string; sender: "user" | "ai" };

// Mascot SVG reused in button and header
function MascotSvg({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="15" fill="#0F2345" />
      <circle cx="20" cy="20" r="14.5" stroke="#CFA94A" strokeWidth="0.75" strokeDasharray="3 2" />
      <rect x="9" y="13" width="22" height="11" rx="5.5" fill="#EEF2FF" />
      <circle cx="15" cy="18" r="2" fill="#18479B" className="guide-blink" />
      <circle cx="25" cy="18" r="2" fill="#18479B" className="guide-blink" />
      <path d="M17 21C17.5 22 18.8 22.8 20 22.8C21.2 22.8 22.5 22 23 21" stroke="#18479B" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function PrimeGuide() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isThinking, setIsThinking] = useState(false);
  const [hasStarted, setHasStarted] = useState(false); // once user sends first message

  const chatEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const prefersReduced = useReducedMotion();

  // Auto-scroll to latest message
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: prefersReduced ? "auto" : "smooth" });
  }, [messages, isThinking, prefersReduced]);

  // Focus input when panel opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 250);
    }
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen]);

  const handleSend = (text: string) => {
    if (!text.trim() || isThinking) return;

    if (!hasStarted) setHasStarted(true);

    setMessages((prev) => [...prev, { id: Date.now().toString(), sender: "user", text }]);
    setInputValue("");
    setIsThinking(true);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: "ai",
          text: "AI functionality coming soon. In the meantime, explore the PRIME SDN platform for opportunities, destinations, and innovation stories from Surigao del Norte.",
        },
      ]);
      setIsThinking(false);
    }, 1100);
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/10 z-40"
          style={{ backdropFilter: "blur(1px)", transition: "opacity 200ms ease" }}
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Floating Trigger Button */}
      <button
        ref={buttonRef}
        onClick={() => setIsOpen((v) => !v)}
        className="fixed right-10 bottom-10 w-16 h-16 rounded-full bg-[#18479B] flex items-center justify-center z-50 transition-all duration-250 hover:bg-[#123677] hover:-translate-y-px focus:outline-none focus:ring-2 focus:ring-[#CFA94A] focus:ring-offset-2 max-sm:right-6 max-sm:bottom-6"
        style={{ boxShadow: "0 8px 24px rgba(24,71,155,0.28), 0 2px 6px rgba(24,71,155,0.16)" }}
        aria-label={isOpen ? "Close PRIME Guide" : "Open PRIME Guide"}
        aria-expanded={isOpen}
        aria-haspopup="dialog"
      >
        <span className="guide-float flex items-center justify-center">
          <MascotSvg size={38} />
        </span>
      </button>

      {/* Panel */}
      {isOpen && (
        <div
          role="dialog"
          aria-labelledby="guide-panel-title"
          aria-modal="true"
          className="fixed right-10 bottom-[104px] w-[432px] bg-white rounded-[24px] flex flex-col z-50 overflow-hidden max-sm:right-3 max-sm:left-3 max-sm:w-auto max-sm:bottom-4 max-sm:rounded-[20px]"
          style={{
            height: "580px",
            boxShadow: "0 20px 60px rgba(15,35,69,0.14), 0 4px 16px rgba(15,35,69,0.06)",
            animation: prefersReduced ? undefined : "guide-panel-in 220ms cubic-bezier(.22,.61,.36,1) both",
          }}
        >
          {/* ── HEADER (fixed, ~72px) ── */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-black/[0.05] shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#0F2345] flex items-center justify-center shrink-0">
                <MascotSvg size={26} />
              </div>
              <div>
                <h2
                  id="guide-panel-title"
                  className="text-[15px] font-semibold text-[#0F2345] leading-none"
                  style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.01em" }}
                >
                  PRIME Guide
                </h2>
                <p className="text-[11px] font-medium text-[#CFA94A] uppercase tracking-[0.1em] mt-[3px]">
                  AI Companion · Surigao del Norte
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 flex items-center justify-center rounded-full transition-colors hover:bg-black/[0.04] focus:outline-none focus:ring-1 focus:ring-[#18479B]"
              aria-label="Close"
            >
              <X size={18} strokeWidth={1.5} className="text-[#0F2345]/50" />
            </button>
          </div>

          {/* ── CONVERSATION BODY (scrollable) ── */}
          <div className="flex-1 overflow-y-auto px-5 py-5 space-y-3 min-h-0">

            {/* Welcome — one short line only */}
            {!hasStarted && messages.length === 0 && (
              <div className="rounded-[18px] rounded-tl-[4px] bg-[#F3F6FC] px-4 py-3 inline-block max-w-[88%]">
                <p className="text-[14px] text-[#0F2345]/85 leading-[1.55]">
                  Hello. How can I help you with Surigao del Norte today?
                </p>
              </div>
            )}

            {/* Conversation messages */}
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`text-[14px] leading-[1.55] px-4 py-3 max-w-[82%] ${
                    msg.sender === "user"
                      ? "bg-[#18479B] text-white rounded-[18px] rounded-tr-[4px] font-medium"
                      : "bg-[#F3F6FC] text-[#0F2345]/85 rounded-[18px] rounded-tl-[4px]"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {/* Thinking dots */}
            {isThinking && (
              <div className="flex justify-start">
                <div className="bg-[#F3F6FC] rounded-[18px] rounded-tl-[4px] px-4 py-3 flex items-center gap-[5px]">
                  {[0, 150, 300].map((delay) => (
                    <span
                      key={delay}
                      className="w-[6px] h-[6px] rounded-full bg-[#18479B]/50 animate-bounce"
                      style={{ animationDelay: `${delay}ms`, animationDuration: "900ms" }}
                    />
                  ))}
                </div>
              </div>
            )}

            <div ref={chatEndRef} />

            {/* Quick Actions — shown only before first message, independently scrollable row */}
            {!hasStarted && messages.length === 0 && (
              <div className="pt-4">
                <p className="text-[11px] uppercase tracking-[0.12em] text-[#0F2345]/35 font-semibold mb-3">
                  Quick topics
                </p>
                {/* Scrollable row */}
                <div className="overflow-x-auto pb-1 -mx-1 px-1">
                  <div className="flex gap-2 w-max">
                    {QUICK_ACTIONS.map((action, i) => (
                      <button
                        key={i}
                        onClick={() => handleSend(action.query)}
                        className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-black/[0.07] bg-white text-[13px] font-medium text-[#0F2345]/75 hover:border-[#18479B] hover:text-[#18479B] hover:bg-[#F3F6FC] transition-all duration-200 whitespace-nowrap shrink-0 focus:outline-none focus:ring-1 focus:ring-[#18479B] cursor-pointer"
                      >
                        <span className="text-[#18479B]">{action.icon}</span>
                        {action.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* ── INPUT BAR (fixed bottom) ── */}
          <form
            onSubmit={(e) => { e.preventDefault(); handleSend(inputValue); }}
            className="px-4 py-3.5 border-t border-black/[0.05] flex items-center gap-2.5 shrink-0 bg-white"
          >
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask anything about Surigao del Norte…"
              disabled={isThinking}
              className="flex-1 h-11 px-4 rounded-full bg-[#F3F6FC] text-[13.5px] font-medium text-[#0F2345] placeholder-[#0F2345]/40 focus:outline-none focus:ring-1 focus:ring-[#18479B] focus:bg-white transition-all disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={!inputValue.trim() || isThinking}
              className="w-11 h-11 rounded-full bg-[#18479B] text-white flex items-center justify-center hover:bg-[#123677] transition-colors disabled:opacity-25 disabled:cursor-not-allowed shrink-0"
              aria-label="Send"
            >
              <Send size={16} strokeWidth={2} />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
