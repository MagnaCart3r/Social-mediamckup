import React from 'react';
import { Users, Bookmark, Calendar, Settings } from 'lucide-react';

interface SidebarProps {
  onFriendsClick: () => void;
  onSavedClick: () => void;
  onEventsClick: () => void;
  onSettingsClick: () => void;
}

export function Sidebar({ onFriendsClick, onSavedClick, onEventsClick, onSettingsClick }: SidebarProps) {
  const navigation = [
    { name: 'Friends', icon: Users, count: 12, onClick: onFriendsClick },
    { name: 'Saved', icon: Bookmark, onClick: onSavedClick },
    { name: 'Events', icon: Calendar, count: 3, onClick: onEventsClick },
    { name: 'Settings', icon: Settings, onClick: onSettingsClick },
  ];

  return (
    <div className="w-64 fixed left-0 top-16 h-[calc(100vh-4rem)] border-r border-gray-200 bg-white dark:bg-gray-800 dark:border-gray-700 p-4">
      <div className="space-y-1">
        {navigation.map((item) => (
          <button
            key={item.name}
            onClick={item.onClick}
            className="flex items-center w-full px-3 py-2 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <item.icon className="h-5 w-5 mr-3 text-gray-500 dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400" />
            <span className="font-medium group-hover:text-purple-600 dark:group-hover:text-purple-400">{item.name}</span>
            {item.count && (
              <span className="ml-auto bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 px-2.5 py-0.5 rounded-full text-xs font-medium">
                {item.count}
              </span>
            )}
          </button>
        ))}
      </div>
      
      <div className="mt-8">
        <h3 className="px-3 text-sm font-medium text-gray-500 dark:text-gray-400">Suggested Friends</h3>
        <div className="mt-4 space-y-4">
          {[
            {
              name: 'Leslie Alexander',
              image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
              mutual: 4
            },
            {
              name: 'Michael Foster',
              image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
              mutual: 2
            }
          ].map((person) => (
            <div key={person.name} className="flex items-center px-3 py-2">
              <img src={person.image} alt="" className="h-8 w-8 rounded-full" />
              <div className="ml-3 min-w-0 flex-1">
                <p className="text-sm font-medium text-gray-900 dark:text-gray-100">{person.name}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{person.mutual} mutual friends</p>
              </div>
              <button className="ml-2 text-sm text-purple-600 dark:text-purple-400 font-medium hover:text-purple-700 dark:hover:text-purple-300">
                Add
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}