import { useState } from "react";
import { NeuCard } from "../components/NeuCard";
import { Calendar, Clock, Activity, Play, Square, MessageCircle, Send } from "lucide-react";

export function HomePage() {
  const [message, setMessage] = useState("");
  const [systemRunning, setSystemRunning] = useState(false);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Status Card */}
        <NeuCard className="lg:col-span-2">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">System Status</h3>
              <p className="text-sm text-gray-500">Real-time monitoring</p>
            </div>
            <div className={`px-3 sm:px-4 py-2 rounded-full ${systemRunning ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}`}>
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${systemRunning ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`}></div>
                <span className="text-xs sm:text-sm font-medium">{systemRunning ? 'Running' : 'Stopped'}</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 p-4 bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-xl">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-xs text-gray-600">Date</p>
                <p className="font-semibold text-gray-900">Mar 17, 2026</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-xl">
              <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-xs text-gray-600">Time</p>
                <p className="font-semibold text-gray-900">14:30 PM</p>
              </div>
            </div>
          </div>
        </NeuCard>

        {/* Control Panel */}
        <NeuCard>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Control Panel</h3>
          
          <div className="space-y-3">
            <button
              onClick={() => setSystemRunning(true)}
              className="w-full px-6 py-4 bg-gradient-to-r from-green-400 to-green-500 text-white rounded-xl font-semibold shadow-lg shadow-green-200 hover:shadow-xl hover:shadow-green-300 transition-all flex items-center justify-center gap-2"
            >
              <Play className="w-5 h-5" />
              Start System
            </button>

            <button
              onClick={() => setSystemRunning(false)}
              className="w-full px-6 py-4 bg-gradient-to-r from-red-400 to-red-500 text-white rounded-xl font-semibold shadow-lg shadow-red-200 hover:shadow-xl hover:shadow-red-300 transition-all flex items-center justify-center gap-2"
            >
              <Square className="w-5 h-5" />
              Stop System
            </button>
          </div>
        </NeuCard>
      </div>

      {/* Mode and System Indicators */}
      <div className="grid grid-cols-2 gap-4 sm:gap-6">
        <NeuCard className="text-center">
          <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg shadow-teal-200">
            <span className="text-xl sm:text-2xl">🤖</span>
          </div>
          <p className="text-xs sm:text-sm text-gray-600 mb-1">Mode</p>
          <p className="font-semibold text-gray-900">Auto</p>
        </NeuCard>

        <NeuCard className="text-center">
          <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 bg-gradient-to-br from-green-400 to-green-500 rounded-2xl flex items-center justify-center shadow-lg shadow-green-200">
            <span className="text-xl sm:text-2xl">🧭</span>
          </div>
          <p className="text-xs sm:text-sm text-gray-600 mb-1">Direction</p>
          <p className="font-semibold text-gray-900">North</p>
        </NeuCard>
      </div>

      {/* AI Assistant Chat Box */}
      {/* <NeuCard>
        <div className="flex items-center gap-2 mb-4">
          <MessageCircle className="w-5 h-5 text-teal-500" />
          <h3 className="text-lg font-semibold text-gray-900">AI Assistant</h3>
          <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">Online</span>
        </div>

        <div className="bg-gray-50 rounded-xl p-4 mb-4 min-h-[120px]">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center text-white text-sm font-semibold">
              AI
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-700">
                Hello! I'm your AI assistant. How can I help you with your boat control system today?
              </p>
            </div>
          </div>
        </div> */}

        {/* <div className="flex gap-3">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
          />
          <button className="px-6 py-3 bg-gradient-to-r from-teal-400 to-cyan-500 text-white rounded-xl font-semibold shadow-lg shadow-teal-200 hover:shadow-xl hover:shadow-teal-300 transition-all flex items-center gap-2">
            <Send className="w-5 h-5" />
            Send
          </button>
        </div>
      </NeuCard> */}
    </div>
  );
}