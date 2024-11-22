import React from 'react';
import { X, Calendar, MapPin } from 'lucide-react';

const events = [
  {
    id: 1,
    title: 'Tech Meetup 2024',
    date: 'March 15, 2024',
    time: '6:00 PM',
    location: 'Tech Hub, Downtown',
    attendees: 42
  },
  {
    id: 2,
    title: 'Design Workshop',
    date: 'March 20, 2024',
    time: '2:00 PM',
    location: 'Creative Space',
    attendees: 28
  }
];

interface EventsModalProps {
  onClose: () => void;
}

export function EventsModal({ onClose }: EventsModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg w-full max-w-md p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Upcoming Events</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="space-y-4">
          {events.map((event) => (
            <div key={event.id} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="flex justify-between items-start">
                <h3 className="font-medium text-gray-900 dark:text-white">{event.title}</h3>
                <span className="text-sm text-purple-600 dark:text-purple-400">{event.attendees} attending</span>
              </div>
              <div className="mt-2 space-y-2">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <Calendar className="h-4 w-4 mr-2" />
                  {event.date} at {event.time}
                </div>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <MapPin className="h-4 w-4 mr-2" />
                  {event.location}
                </div>
              </div>
              <button className="mt-3 w-full py-2 px-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600">
                RSVP
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}