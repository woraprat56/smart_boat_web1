import { Bell, Menu } from "lucide-react";

interface HeaderProps {
  onMenuClick: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200 px-4 sm:px-8 py-4 flex items-center justify-between shadow-sm">
      <div className="flex items-center gap-3">
        {/* Hamburger menu for mobile */}
        <button 
          onClick={onMenuClick}
          className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
        >
          <Menu className="w-6 h-6 text-gray-600" />
        </button>
        
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">Hi, Woraprat 👋</h2>
          <p className="text-xs sm:text-sm text-gray-500 hidden sm:block">Welcome back to your boat control system</p>
        </div>
      </div>
      
      <div className="flex items-center gap-3 sm:gap-4">
        <button className="relative p-2 rounded-xl hover:bg-gray-50 transition-colors">
          <Bell className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        
        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-medium text-gray-900">Woraprat</p>
            <p className="text-xs text-gray-500">Admin</p>
          </div>
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center text-white font-semibold shadow-md">
            W
          </div>
        </div>
      </div>
    </header>
  );
}