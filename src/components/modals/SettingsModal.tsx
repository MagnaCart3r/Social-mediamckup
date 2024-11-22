import React from 'react';
import { X, Moon, Bell, Lock, User, HelpCircle } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

interface SettingsModalProps {
  onClose: () => void;
}

export function SettingsModal({ onClose }: SettingsModalProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg w-full max-w-md p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Settings</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <div className="flex items-center">
              <Moon className="h-5 w-5 text-gray-500 dark:text-gray-400 mr-3" />
              <span className="text-gray-900 dark:text-white">Dark Mode</span>
            </div>
            <button
              onClick={toggleTheme}
              className={`relative inline-flex h-6 w-11 items-center rounded-full ${
                theme === 'dark' ? 'bg-purple-600' : 'bg-gray-200'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                  theme === 'dark' ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>

          <SettingsItem icon={Bell} title="Notifications" />
          <SettingsItem icon={Lock} title="Privacy" />
          <SettingsItem icon={User} title="Account" />
          <SettingsItem icon={HelpCircle} title="Help & Support" />
        </div>
      </div>
    </div>
  );
}

function SettingsItem({ icon: Icon, title }: { icon: React.ElementType; title: string }) {
  return (
    <button className="flex items-center w-full p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600">
      <Icon className="h-5 w-5 text-gray-500 dark:text-gray-400 mr-3" />
      <span className="text-gray-900 dark:text-white">{title}</span>
    </button>
  );
}