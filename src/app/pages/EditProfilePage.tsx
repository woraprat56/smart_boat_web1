import { useState } from "react";
import { useNavigate } from "react-router";
import { NeuCard } from "../components/NeuCard";
import { ArrowLeft, Upload } from "lucide-react";

export function EditProfilePage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "Woraprat",
    username: "woraprat",
    email: "woraprat@smartboat.com",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    navigate("/settings");
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="flex items-center gap-3 sm:gap-4">
        <button
          onClick={() => navigate("/settings")}
          className="w-10 h-10 rounded-xl bg-white shadow-md flex items-center justify-center hover:shadow-lg transition-shadow"
        >
          <ArrowLeft className="w-5 h-5 text-gray-600" />
        </button>
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">Edit Profile</h2>
          <p className="text-xs sm:text-sm text-gray-500">Update your personal information</p>
        </div>
      </div>

      <NeuCard>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Profile Image */}
          <div className="flex flex-col sm:flex-row items-center gap-6 pb-6 border-b border-gray-200">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center text-white text-3xl font-semibold shadow-lg shadow-teal-200">
              W
            </div>
            <div className="text-center sm:text-left">
              <h4 className="font-semibold text-gray-900 mb-2">Profile Picture</h4>
              <button
                type="button"
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-medium transition-colors flex items-center gap-2"
              >
                <Upload className="w-4 h-4" />
                Upload New Image
              </button>
            </div>
          </div>

          {/* Form Fields */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Username
              </label>
              <input
                type="text"
                value={formData.username}
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
                placeholder="Enter your username"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                New Password (Optional)
              </label>
              <input
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
                placeholder="Enter new password"
              />
              <p className="text-xs text-gray-500 mt-2">
                Leave blank to keep your current password
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-gray-200">
            <button
              type="button"
              onClick={() => navigate("/settings")}
              className="flex-1 px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-semibold transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-6 py-3 bg-gradient-to-r from-teal-400 to-cyan-500 text-white rounded-xl font-semibold shadow-lg shadow-teal-200 hover:shadow-xl hover:shadow-teal-300 transition-all"
            >
              Save Changes
            </button>
          </div>
        </form>
      </NeuCard>
    </div>
  );
}