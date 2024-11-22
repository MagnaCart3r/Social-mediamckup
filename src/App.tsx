import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { CreatePost } from './components/CreatePost';
import { Post } from './components/Post';
import { FriendsModal } from './components/modals/FriendsModal';
import { SavedModal } from './components/modals/SavedModal';
import { EventsModal } from './components/modals/EventsModal';
import { SettingsModal } from './components/modals/SettingsModal';
import { NotificationsModal } from './components/modals/NotificationsModal';
import { MessagesModal } from './components/modals/MessagesModal';
import { ProfileModal } from './components/modals/ProfileModal';

const posts = [
  {
    id: 1,
    author: {
      name: 'Magna Carter',
      username: 'Cart3r',
      image: 'https://img.freepik.com/free-vector/businessman-get-idea_1133-350.jpg'
    },
    content: 'Just launched my Mock social media web app website! Check it out and let me know what you think 🚀',
    image: 'https://ih1.redbubble.net/image.2107196555.7107/st,small,507x507-pad,600x600,f8f8f8.jpg',
    timestamp: new Date('2024-03-10T15:30:00'),
    likes: 42,
    comments: 12,
    shares: 5
  },
  {
    id: 2,
    author: {
      name: 'Juice Wrld',
      username: 'TPNE',
      image: 'https://pyxis.nymag.com/v1/imgs/d79/bff/040c860b0018eef6520ecc3d9a70be2a39-09-juice-wrld.rvertical.w600.jpg'
    },
    content: 'Might Miss The world someday 🌅',
    image: 'https://preview.redd.it/i-edit-my-random-character-into-crazy-places-when-i-am-upset-v0-opyvd4x1g2pd1.jpg?width=640&crop=smart&auto=webp&s=048dc8c891f5b174f23b3930b722257200d2ea84',
    timestamp: new Date('2024-03-10T14:20:00'),
    likes: 128,
    comments: 24,
    shares: 20
  },
  {
    id: 3,
    author: {
      name: 'Wizkid Ayo',
      username: 'Bigwiz',
      image: 'https://i.scdn.co/image/ab6761610000e5ebd0b8b43ab4d1bfa6bcea0073'
    },
    content: 'Anticipated Album Morayo ',
    image: 'https://newscentral.africa/wp-content/uploads/Wizkid-X-Brent-Faiyaz-News-Central-TV.jpg',
    timestamp: new Date('2024-03-10T14:20:00'),
    likes: 999,
    comments: 881,
    shares: 90
  },
  {
    id: 4,
    author: {
      name: 'Cruel Santino',
      username: 'subaruboyz',
      image: 'https://i.scdn.co/image/ab6761610000e5eb45fdcd1ade93056dd23a9fc8'
    },
    content: 'ThrowBack days of Mandy And The Jungle',
    image: 'https://m.media-amazon.com/images/I/61ZC0qT6t1S._UXNaN_FMjpg_QL85_.jpg',
    timestamp: new Date('2024-03-10T14:20:00'),
    likes: 578,
    comments: 300,
    shares: 250
  },
  {
    id: 5,
    author: {
      name: 'Sarah Wilson',
      username: 'sarahw',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    content: 'Beautiful sunset at the beach today! 🌅',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
    timestamp: new Date('2024-03-10T14:20:00'),
    likes: 128,
    comments: 24,
    shares: 20
  },
  {
    id: 6,
    author: {
      name: 'Elon Musk',
      username: 'Elontesla',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Elon_Musk_Royal_Society_crop.jpg/800px-Elon_Musk_Royal_Society_crop.jpg'
    },
    content: 'Let that sink in 😂😜',
    image: 'https://external-preview.redd.it/gwzU4BKx8xLQmfbdQuKsizDQiMCS6c2lty-NoDWBFdg.jpg?auto=webp&s=caf178fbe42d3273751ab84f1d6565c7cc1c516a',
    timestamp: new Date('2024-03-10T14:20:00'),
    likes: 128,
    comments: 24,
    shares: 20
  }













];

function App() {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const closeModal = () => setActiveModal(null);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar
        onFriendsClick={() => setActiveModal('friends')}
        onSavedClick={() => setActiveModal('saved')}
        onEventsClick={() => setActiveModal('events')}
        onSettingsClick={() => setActiveModal('settings')}
        onNotificationsClick={() => setActiveModal('notifications')}
        onMessagesClick={() => setActiveModal('messages')}
        onProfileClick={() => setActiveModal('profile')}
      />
      <Sidebar
        onFriendsClick={() => setActiveModal('friends')}
        onSavedClick={() => setActiveModal('saved')}
        onEventsClick={() => setActiveModal('events')}
        onSettingsClick={() => setActiveModal('settings')}
      />
      
      <main className="pl-64 pt-16">
        <div className="max-w-2xl mx-auto py-8 px-4">
          <CreatePost />
          
          <div className="mt-6 space-y-6">
            {posts.map((post) => (
              <Post key={post.id} {...post} />
            ))}
          </div>
        </div>
      </main>

      {activeModal === 'friends' && <FriendsModal onClose={closeModal} />}
      {activeModal === 'saved' && <SavedModal onClose={closeModal} />}
      {activeModal === 'events' && <EventsModal onClose={closeModal} />}
      {activeModal === 'settings' && <SettingsModal onClose={closeModal} />}
      {activeModal === 'notifications' && <NotificationsModal onClose={closeModal} />}
      {activeModal === 'messages' && <MessagesModal onClose={closeModal} />}
      {activeModal === 'profile' && <ProfileModal onClose={closeModal} />}
    </div>
  );
}

export default App;