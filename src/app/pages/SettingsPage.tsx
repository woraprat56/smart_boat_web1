import { useState } from "react";
import { Link } from "react-router";
import { NeuCard } from "../components/NeuCard";
import { User, Lock, Bell, Moon, Info, ChevronRight } from "lucide-react";
import { Switch } from "../components/ui/switch";

export function SettingsPage() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-1">Settings</h2>
        <p className="text-sm text-gray-500">Manage your account and preferences</p>
      </div>

      {/* Profile Section */}
      <NeuCard>
        <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-200">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center text-white text-2xl font-semibold shadow-lg shadow-teal-200">
            W
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-gray-900">Woraprat</h3>
            <p className="text-sm text-gray-500">woraprat@smartboat.com</p>
            <span className="inline-block mt-2 px-3 py-1 bg-teal-100 text-teal-700 text-xs font-medium rounded-full">
              Administrator
            </span>
          </div>
        </div>

        <div className="space-y-2">
          <Link
            to="/edit-profile"
            className="flex items-center justify-between p-4 rounded-xl hover:bg-gray-50 transition-colors group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                <User className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="font-medium text-gray-900">Edit Profile</p>
                <p className="text-sm text-gray-500">Update your personal information</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </Link>

          <button className="w-full flex items-center justify-between p-4 rounded-xl hover:bg-gray-50 transition-colors group">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                <Lock className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="font-medium text-gray-900">Change Password</p>
                <p className="text-sm text-gray-500">Update your security credentials</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>
        </div>
      </NeuCard>

      {/* Preferences */}
      <NeuCard>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Preferences</h3>
        
        <div className="space-y-2">
          <div className="flex items-center justify-between p-4 rounded-xl hover:bg-gray-50 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                <Bell className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="font-medium text-gray-900">Notifications</p>
                <p className="text-sm text-gray-500">Receive system alerts and updates</p>
              </div>
            </div>
            <Switch
              checked={notifications}
              onCheckedChange={setNotifications}
            />
          </div>

          <div className="flex items-center justify-between p-4 rounded-xl hover:bg-gray-50 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
                <Moon className="w-5 h-5 text-indigo-600" />
              </div>
              <div>
                <p className="font-medium text-gray-900">Dark Mode</p>
                <p className="text-sm text-gray-500">Switch to dark theme</p>
              </div>
            </div>
            <Switch
              checked={darkMode}
              onCheckedChange={setDarkMode}
            />
          </div>
        </div>
      </NeuCard>

      {/* About */}
      <NeuCard>
        <Link
          to="/about"
          className="flex items-center justify-between p-4 rounded-xl hover:bg-gray-50 transition-colors group"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center group-hover:bg-orange-200 transition-colors">
              <Info className="w-5 h-5 text-orange-600" />
            </div>
            <div>
              <p className="font-medium text-gray-900">About Us</p>
              <p className="text-sm text-gray-500">Learn more about our team</p>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </Link>
      </NeuCard>
    </div>
  );
}