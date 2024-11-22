import React from 'react';
import { X, Send } from 'lucide-react';

const messages = [
  {
    id: 1,
    user: {
      name: 'Sarah Wilson',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      online: true
    },
    lastMessage: 'Hey, how are you?',
    time: '2m ago',
    unread: 2
  },
  {
    id: 2,
    user: {
      name: 'Michael Foster',
      image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      online: false
    },
    lastMessage: 'The project looks great!',
    time: '1h ago',
    unread: 0
  }
];

interface MessagesModalProps {
  onClose: () => void;
}

export function MessagesModal({ onClose }: MessagesModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg w-full max-w-md p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Messages</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="space-y-4">
          {messages.map((message) => (
            <div key={message.id} className="flex items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer">
              <div className="relative">
                <img src={message.user.image} alt="" className="h-12 w-12 rounded-full" />
                <span className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white dark:border-gray-800 ${
                  message.user.online ? 'bg-green-400' : 'bg-gray-400'
                }`} />
              </div>
              <div className="ml-4 flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-gray-900 dark:text-white">{message.user.name}</h3>
                  <span className="text-xs text-gray-500 dark:text-gray-400">{message.time}</span>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">{message.lastMessage}</p>
              </div>
              {message.unread > 0 && (
                <span className="ml-2 bg-purple-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {message.unread}
                </span>
              )}
            </div>
          ))}
        </div>

        <div className="mt-6 relative">
          <input
            type="text"
            placeholder="Type a message..."
            className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:text-white"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300">
            <Send className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}