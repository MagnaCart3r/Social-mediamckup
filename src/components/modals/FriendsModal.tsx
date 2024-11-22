import React from 'react';
import { X, UserPlus } from 'lucide-react';

const friendsList = [
  {
    id: 1,
    name: 'Leslie Alexander',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    status: 'online',
    lastActive: 'Active now'
  },
  {
    id: 2,
    name: 'Michael Foster',
    image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    status: 'offline',
    lastActive: '2h ago'
  }
];

interface FriendsModalProps {
  onClose: () => void;
}

export function FriendsModal({ onClose }: FriendsModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg w-full max-w-md p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Friends</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="space-y-4">
          {friendsList.map((friend) => (
            <div key={friend.id} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <img src={friend.image} alt={friend.name} className="h-10 w-10 rounded-full" />
                  <span className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white dark:border-gray-800 ${friend.status === 'online' ? 'bg-green-400' : 'bg-gray-400'}`} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">{friend.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{friend.lastActive}</p>
                </div>
              </div>
              <button className="text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300">
                <UserPlus className="h-5 w-5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}