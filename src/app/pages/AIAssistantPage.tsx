import { useState } from "react";
import { NeuCard } from "../components/NeuCard";
import { Send, Bot, User } from "lucide-react";

interface Message {
  id: number;
  sender: "user" | "ai";
  text: string;
  time: string;
}

export function AIAssistantPage() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: "ai",
      text: "Hello! I'm your Smart Boat AI Assistant. I'm here to help you with navigation, system monitoring, and any questions about your boat.",
      time: "14:25",
    },
    {
      id: 2,
      sender: "user",
      text: "What's the current status of the battery?",
      time: "14:26",
    },
    {
      id: 3,
      sender: "ai",
      text: "The battery is currently at 85% capacity. This should give you approximately 6 hours of operation at current usage levels. Would you like me to optimize power consumption?",
      time: "14:26",
    },
  ]);

  const handleSend = () => {
    if (message.trim()) {
      const newMessage: Message = {
        id: messages.length + 1,
        sender: "user",
        text: message,
        time: new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages([...messages, newMessage]);
      setMessage("");

      // Simulate AI response
      setTimeout(() => {
        const aiResponse: Message = {
          id: messages.length + 2,
          sender: "ai",
          text: "I'm processing your request. How else can I assist you today?",
          time: new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }),
        };
        setMessages((prev) => [...prev, aiResponse]);
      }, 1000);
    }
  };

  return (
    <div className="h-[calc(100vh-180px)] sm:h-[calc(100vh-200px)]">
      <NeuCard className="h-full flex flex-col">
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-1">AI Assistant</h2>
            <p className="text-xs sm:text-sm text-gray-500">Chat with your intelligent boat assistant</p>
          </div>
          <div className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-green-100 text-green-700 rounded-full">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs sm:text-sm font-medium">Online</span>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto mb-6 space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex items-start gap-3 ${
                msg.sender === "user" ? "flex-row-reverse" : ""
              }`}
            >
              <div
                className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                  msg.sender === "ai"
                    ? "bg-gradient-to-br from-teal-400 to-cyan-500 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                {msg.sender === "ai" ? <Bot className="w-4 h-4 sm:w-5 sm:h-5" /> : <User className="w-4 h-4 sm:w-5 sm:h-5" />}
              </div>

              <div
                className={`max-w-[75%] sm:max-w-[70%] ${
                  msg.sender === "user" ? "text-right" : ""
                }`}
              >
                <div
                  className={`px-4 py-3 rounded-2xl ${
                    msg.sender === "ai"
                      ? "bg-gray-100 text-gray-900"
                      : "bg-gradient-to-r from-teal-400 to-cyan-500 text-white"
                  }`}
                >
                  <p className="text-sm">{msg.text}</p>
                </div>
                <p className="text-xs text-gray-500 mt-1 px-2">{msg.time}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-3 pt-4 border-t border-gray-200">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            placeholder="Type your message..."
            className="flex-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent text-sm sm:text-base"
          />
          <button
            onClick={handleSend}
            className="px-4 sm:px-6 py-3 bg-gradient-to-r from-teal-400 to-cyan-500 text-white rounded-xl font-semibold shadow-lg shadow-teal-200 hover:shadow-xl hover:shadow-teal-300 transition-all flex items-center gap-2"
          >
            <Send className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="hidden sm:inline">Send</span>
          </button>
        </div>
      </NeuCard>
    </div>
  );
}