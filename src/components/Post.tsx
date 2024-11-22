import React, { useState } from 'react';
import { Heart, MessageCircle, Share2, MoreHorizontal } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

interface PostProps {
  author: {
    name: string;
    image: string;
    username: string;
  };
  content: string;
  image?: string;
  timestamp: Date;
  likes: number;
  comments: number;
  shares: number;
  liked?: boolean;
}

export function Post({ author, content, image, timestamp, likes, comments, shares, liked: initialLiked = false }: PostProps) {
  const [liked, setLiked] = useState(initialLiked);
  const [likesCount, setLikesCount] = useState(likes);

  const handleLike = () => {
    setLiked(!liked);
    setLikesCount(prev => liked ? prev - 1 : prev + 1);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src={author.image} alt={author.name} className="h-10 w-10 rounded-full" />
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="font-semibold text-gray-900">{author.name}</h3>
                <span className="text-gray-500">@{author.username}</span>
              </div>
              <p className="text-sm text-gray-500">
                {formatDistanceToNow(timestamp, { addSuffix: true })}
              </p>
            </div>
          </div>
          <button className="text-gray-400 hover:text-gray-500">
            <MoreHorizontal className="h-5 w-5" />
          </button>
        </div>
        
        <p className="mt-4 text-gray-900">{content}</p>
        
        {image && (
          <div className="mt-4 -mx-4">
            <img src={image} alt="Post content" className="w-full" />
          </div>
        )}
        
        <div className="mt-4 flex items-center justify-between pt-4 border-t border-gray-100">
          <button
            onClick={handleLike}
            className="flex items-center space-x-2 text-gray-500 hover:text-red-500 transition-colors"
          >
            <Heart className={`h-5 w-5 ${liked ? 'fill-red-500 text-red-500' : ''}`} />
            <span>{likesCount}</span>
          </button>
          
          <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-500">
            <MessageCircle className="h-5 w-5" />
            <span>{comments}</span>
          </button>
          
          <button className="flex items-center space-x-2 text-gray-500 hover:text-green-500">
            <Share2 className="h-5 w-5" />
            <span>{shares}</span>
          </button>
        </div>
      </div>
    </div>
  );
}