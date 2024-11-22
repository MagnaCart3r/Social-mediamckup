import React from 'react';
import { Home, Bell, MessageSquare, User, Search, Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  onFriendsClick: () => void;
  onSavedClick: () => void;
  onEventsClick: () => void;
  onSettingsClick: () => void;
  onNotificationsClick: () => void;
  onMessagesClick: () => void;
  onProfileClick: () => void;
}

export function Navbar({
  onNotificationsClick,
  onMessagesClick,
  onProfileClick
}: NavbarProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-purple-600 dark:text-purple-400">social</span>
          </div>
          
          <div className="flex-1 max-w-xl px-8">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-full bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent dark:text-white"
                placeholder="Search..."
              />
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <button
              onClick={toggleTheme}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
            >
              {theme === 'dark' ? (
                <Sun className="h-6 w-6 text-gray-500 dark:text-gray-400" />
              ) : (
                <Moon className="h-6 w-6 text-gray-500" />
              )}
            </button>
            <NavIcon Icon={Home} active />
            <NavIcon Icon={Bell} count={3} onClick={onNotificationsClick} />
            <NavIcon Icon={MessageSquare} count={5} onClick={onMessagesClick} />
            <button
              onClick={onProfileClick}
              className="flex items-center space-x-2 hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded-full"
            >
              <img
                src="https://img.freepik.com/free-vector/businessman-get-idea_1133-350.jpg"
                alt="Profile"
                className="h-8 w-8 rounded-full"
              />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavIcon({ Icon, active = false, count, onClick }: { Icon: React.ElementType; active?: boolean; count?: number; onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="relative p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
    >
      <Icon className={`h-6 w-6 ${active ? 'text-purple-600 dark:text-purple-400' : 'text-gray-500 dark:text-gray-400'}`} />
      {count !== undefined && count > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
          {count}
        </span>
      )}
    </button>
  );
}