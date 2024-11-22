import React from 'react';
import { X, Camera, MapPin, Link, Mail } from 'lucide-react';

interface ProfileModalProps {
  onClose: () => void;
}

export function ProfileModal({ onClose }: ProfileModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg w-full max-w-md p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Profile</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="text-center mb-6">
          <div className="relative inline-block">
            <img
              src="https://img.freepik.com/free-vector/businessman-get-idea_1133-350.jpg"
              alt="Profile"
              className="h-24 w-24 rounded-full"
            />
            <button className="absolute bottom-0 right-0 bg-purple-600 p-2 rounded-full text-white hover:bg-purple-700">
              <Camera className="h-4 w-4" />
            </button>
          </div>
          <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">Magna Carter</h3>
          <p className="text-gray-500 dark:text-gray-400">@cart3r</p>
        </div>

        <div className="space-y-4">
          <div className="flex items-center text-gray-500 dark:text-gray-400">
            <MapPin className="h-5 w-5 mr-2" />
            <span>Lagos, NG</span>
          </div>
          <div className="flex items-center text-gray-500 dark:text-gray-400">
            <Link className="h-5 w-5 mr-2" />
            <a href="https://twitter.com/magnacart3r" className="text-purple-600 dark:text-purple-400 hover:underline">follow me on Twitter</a>
          </div>
          <div className="flex items-center text-gray-500 dark:text-gray-400">
            <Mail className="h-5 w-5 mr-2" />
            <span>cnd.ewanfohimolecarter@gmail.com</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-6 text-center">
          <div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">542</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Posts</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">12.8k</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Followers</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">489</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Following</div>
          </div>
        </div>

        <button className="mt-6 w-full py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
          Edit Profile
        </button>
      </div>
    </div>
  );
}