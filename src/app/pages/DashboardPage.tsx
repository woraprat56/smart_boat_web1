import { NeuCard } from "../components/NeuCard";
import { Activity, Zap, Gauge, Navigation, Video } from "lucide-react";

export function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-1">Dashboard</h2>
        <p className="text-sm text-gray-500">Overview of your boat system statistics</p>
      </div>

      {/* Desktop Layout - Camera Full Width on Top */}
      <div className="hidden lg:block space-y-6">
        {/* Camera Feed - Full Width */}
        <NeuCard>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Video className="w-5 h-5 text-teal-500" />
              <h3 className="text-lg font-semibold text-gray-900">Camera Feed</h3>
            </div>
            <div className="flex items-center gap-2 px-3 py-1 bg-red-100 text-red-700 rounded-full">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-xs font-medium">LIVE</span>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-6">
            {/* Camera Display Area */}
            <div className="col-span-2">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl aspect-video flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                
                <div className="relative z-10 text-center">
                  <Video className="w-20 h-20 text-gray-600 mx-auto mb-4" />
                  <p className="text-gray-400 text-lg mb-2">Camera Feed</p>
                  <p className="text-gray-500 text-sm">Waiting for video stream...</p>
                </div>

                {/* Camera Info Overlay */}
                <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm px-3 py-2 rounded-lg">
                  <p className="text-white text-xs font-mono">CAM-01</p>
                </div>

                <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm px-3 py-2 rounded-lg">
                  <p className="text-white text-xs font-mono">{new Date().toLocaleTimeString()}</p>
                </div>
              </div>
            </div>

            {/* Camera Info & Controls */}
            <div className="space-y-4">
              {/* Camera Controls */}
              <div className="space-y-2">
                <button className="w-full px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-sm font-medium transition-colors">
                  📸 Snapshot
                </button>
                <button className="w-full px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-sm font-medium transition-colors">
                  🎥 Record
                </button>
                <button className="w-full px-4 py-3 bg-gradient-to-r from-teal-400 to-cyan-500 text-white rounded-lg text-sm font-semibold shadow-lg shadow-teal-200 hover:shadow-xl transition-all">
                  🔄 Refresh
                </button>
              </div>

              {/* Camera Info */}
              <div className="p-4 bg-gray-50 rounded-xl space-y-3">
                <div>
                  <p className="text-xs text-gray-600">Resolution</p>
                  <p className="font-semibold text-gray-900">1920 x 1080</p>
                </div>
                <div>
                  <p className="text-xs text-gray-600">FPS</p>
                  <p className="font-semibold text-gray-900">30</p>
                </div>
                <div>
                  <p className="text-xs text-gray-600">Status</p>
                  <p className="font-semibold text-green-600">Connected</p>
                </div>
                <div>
                  <p className="text-xs text-gray-600">Latency</p>
                  <p className="font-semibold text-gray-900">45ms</p>
                </div>
              </div>
            </div>
          </div>
        </NeuCard>

        {/* Stats Grid Below - 4 Columns + Weather + Summary 3 Columns */}
        <div className="grid grid-cols-4 gap-6">
          <NeuCard>
            <div className="flex items-center justify-between mb-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-200">
                <Activity className="w-6 h-6 text-white" />
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-1">System Status</p>
            <p className="text-2xl font-semibold text-gray-900">Active</p>
            <div className="mt-2 flex items-center gap-2">
              <div className="h-2 flex-1 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-blue-400 to-blue-500 w-[95%]"></div>
              </div>
              <span className="text-xs text-gray-600">95%</span>
            </div>
          </NeuCard>

          <NeuCard>
            <div className="flex items-center justify-between mb-3">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-teal-200">
                <Zap className="w-6 h-6 text-white" />
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-1">Power Usage</p>
            <p className="text-2xl font-semibold text-gray-900">2.4 kW</p>
            <div className="mt-2 flex items-center gap-2">
              <div className="h-2 flex-1 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-teal-400 to-cyan-500 w-[60%]"></div>
              </div>
              <span className="text-xs text-gray-600">60%</span>
            </div>
          </NeuCard>

          <NeuCard>
            <div className="flex items-center justify-between mb-3">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg shadow-orange-200">
                <Gauge className="w-6 h-6 text-white" />
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-1">Engine RPM</p>
            <p className="text-2xl font-semibold text-gray-900">2,450</p>
            <div className="mt-2 flex items-center gap-2">
              <div className="h-2 flex-1 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-orange-400 to-orange-500 w-[70%]"></div>
              </div>
              <span className="text-xs text-gray-600">70%</span>
            </div>
          </NeuCard>

          <NeuCard>
            <div className="flex items-center justify-between mb-3">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-500 rounded-xl flex items-center justify-center shadow-lg shadow-purple-200">
                <Navigation className="w-6 h-6 text-white" />
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-1">Distance</p>
            <p className="text-2xl font-semibold text-gray-900">45.2 km</p>
            <div className="mt-2">
              <p className="text-xs text-gray-600">Today's travel</p>
            </div>
          </NeuCard>
        </div>

        {/* Weather + Summary - 3 Columns + 1 Larger Weather */}
        <div className="grid grid-cols-4 gap-6">
          <NeuCard className="col-span-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Weather</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="text-2xl">☀️</div>
                <div className="flex-1">
                  <p className="text-xs text-gray-600">Condition</p>
                  <p className="font-semibold text-gray-900">Sunny</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-2xl">🌡️</div>
                <div className="flex-1">
                  <p className="text-xs text-gray-600">Temp</p>
                  <p className="font-semibold text-gray-900">28°C</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-2xl">💨</div>
                <div className="flex-1">
                  <p className="text-xs text-gray-600">Wind</p>
                  <p className="font-semibold text-gray-900">12 km/h</p>
                </div>
              </div>
            </div>
          </NeuCard>

          <NeuCard>
            <div className="text-center">
              <div className="w-14 h-14 mx-auto mb-3 bg-gradient-to-br from-green-400 to-green-500 rounded-2xl flex items-center justify-center shadow-lg shadow-green-200">
                <span className="text-2xl">✅</span>
              </div>
              <p className="text-xs text-gray-600 mb-1">Total Trips</p>
              <p className="text-2xl font-semibold text-gray-900">142</p>
            </div>
          </NeuCard>

          <NeuCard>
            <div className="text-center">
              <div className="w-14 h-14 mx-auto mb-3 bg-gradient-to-br from-blue-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-200">
                <span className="text-2xl">⏱️</span>
              </div>
              <p className="text-xs text-gray-600 mb-1">Running Time</p>
              <p className="text-2xl font-semibold text-gray-900">248h</p>
            </div>
          </NeuCard>

          <NeuCard>
            <div className="text-center">
              <div className="w-14 h-14 mx-auto mb-3 bg-gradient-to-br from-purple-400 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-200">
                <span className="text-2xl">⚡</span>
              </div>
              <p className="text-xs text-gray-600 mb-1">Efficiency</p>
              <p className="text-2xl font-semibold text-gray-900">92%</p>
            </div>
          </NeuCard>
        </div>
      </div>

      {/* Mobile Layout - 3 Columns */}
      <div className="lg:hidden grid grid-cols-3 gap-3">
        {/* System Status */}
        <NeuCard className="col-span-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-500 rounded-lg flex items-center justify-center shadow-lg shadow-blue-200">
              <Activity className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-xs text-gray-600">System Status</p>
              <p className="text-lg font-semibold text-gray-900">Active</p>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-blue-500">95%</p>
            </div>
          </div>
        </NeuCard>

        {/* Engine RPM */}
        <NeuCard>
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-2 bg-gradient-to-br from-orange-400 to-orange-500 rounded-lg flex items-center justify-center">
              <Gauge className="w-5 h-5 text-white" />
            </div>
            <p className="text-xs text-gray-600 mb-1">RPM</p>
            <p className="text-sm font-semibold text-gray-900">2,450</p>
          </div>
        </NeuCard>

        {/* Distance */}
        <NeuCard>
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-2 bg-gradient-to-br from-purple-400 to-purple-500 rounded-lg flex items-center justify-center">
              <Navigation className="w-5 h-5 text-white" />
            </div>
            <p className="text-xs text-gray-600 mb-1">Distance</p>
            <p className="text-sm font-semibold text-gray-900">45.2 km</p>
          </div>
        </NeuCard>

        {/* Camera Feed - Full Width on Mobile */}
        <NeuCard className="col-span-3">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Video className="w-4 h-4 text-teal-500" />
              <h3 className="text-sm font-semibold text-gray-900">Camera Feed</h3>
            </div>
            <div className="flex items-center gap-1 px-2 py-1 bg-red-100 text-red-700 rounded-full">
              <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-xs font-medium">LIVE</span>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg aspect-video flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
            
            <div className="relative z-10 text-center">
              <Video className="w-12 h-12 text-gray-600 mx-auto mb-2" />
              <p className="text-gray-400 text-xs mb-1">Camera Feed</p>
              <p className="text-gray-500 text-xs">Waiting for stream...</p>
            </div>

            <div className="absolute top-2 left-2 bg-black/50 backdrop-blur-sm px-2 py-1 rounded">
              <p className="text-white text-xs font-mono">CAM-01</p>
            </div>
          </div>

          <div className="mt-3 grid grid-cols-3 gap-2">
            <button className="px-3 py-2 bg-gray-100 text-gray-700 rounded-lg text-xs font-medium">
              Snapshot
            </button>
            <button className="px-3 py-2 bg-gray-100 text-gray-700 rounded-lg text-xs font-medium">
              Record
            </button>
            <button className="px-3 py-2 bg-gradient-to-r from-teal-400 to-cyan-500 text-white rounded-lg text-xs font-semibold">
              Refresh
            </button>
          </div>
        </NeuCard>

        {/* Summary */}
        <NeuCard>
          <div className="text-center">
            <div className="text-2xl mb-1">✅</div>
            <p className="text-xs text-gray-600">Trips</p>
            <p className="text-sm font-semibold text-gray-900">142</p>
          </div>
        </NeuCard>

        <NeuCard>
          <div className="text-center">
            <div className="text-2xl mb-1">⏱️</div>
            <p className="text-xs text-gray-600">Time</p>
            <p className="text-sm font-semibold text-gray-900">248h</p>
          </div>
        </NeuCard>
      </div>
    </div>
  );
}