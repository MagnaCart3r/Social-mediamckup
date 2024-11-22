import React from 'react';
import { X, Heart, MessageCircle, UserPlus } from 'lucide-react';

const notifications = [
  {
    id: 1,
    type: 'like',
    user: {
      name: 'Magna Carter',
      image: 'https://img.freepik.com/free-vector/businessman-get-idea_1133-350.jpg'
    },
    content: 'liked your post',
    time: '2m ago'
  },
  {
    id: 2,
    type: 'comment',
    user: {
      name: 'Sarah Wilson',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    content: 'commented on your photo',
    time: '1h ago'
  },
  {
    id: 3,
    type: 'follow',
    user: {
      name: 'Michael Foster',
      image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    content: 'started following you',
    time: '3h ago'
  }
];

const icons = {
  like: Heart,
  comment: MessageCircle,
  follow: UserPlus
};

interface NotificationsModalProps {
  onClose: () => void;
}

export function NotificationsModal({ onClose }: NotificationsModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg w-full max-w-md p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Notifications</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="space-y-4">
          {notifications.map((notification) => {
            const Icon = icons[notification.type as keyof typeof icons];
            return (
              <div key={notification.id} className="flex items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <img src={notification.user.image} alt="" className="h-10 w-10 rounded-full" />
                <div className="ml-3 flex-1">
                  <p className="text-sm text-gray-900 dark:text-white">
                    <span className="font-medium">{notification.user.name}</span> {notification.content}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{notification.time}</p>
                </div>
                <Icon className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}