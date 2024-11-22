import React from 'react';
import { X, Bookmark } from 'lucide-react';

const savedItems = [
  {
    id: 1,
    title: 'Developing  a React App',
    author: 'Magna Carter',
    date: '3 weeks ago',
    type: 'article'
  },
  {
    id: 2,
    title: 'Amazing Sunset Photo',
    author: 'Sarah Wilson',
    date: '1 week ago',
    type: 'photo'
  }
];

interface SavedModalProps {
  onClose: () => void;
}

export function SavedModal({ onClose }: SavedModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg w-full max-w-md p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Saved Items</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="space-y-4">
          {savedItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white">{item.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Saved by {item.author} • {item.date}
                </p>
              </div>
              <Bookmark className="h-5 w-5 text-purple-600 dark:text-purple-400 fill-current" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}