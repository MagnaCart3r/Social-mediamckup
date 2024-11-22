import React, { useState, useEffect, useRef } from 'react';
import { Image, Smile, MapPin } from 'lucide-react';

interface PostData {
  content: string;
  image?: File;
  location?: string;
  feeling?: string;
}

export function CreatePost() {
  const [postData, setPostData] = useState<PostData>({
    content: '',
    location: '',
    feeling: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [showFeelingModal, setShowFeelingModal] = useState(false);
  const [showLocationModal, setShowLocationModal] = useState(false);

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    // Auto-focus textarea on mount
    textareaRef.current?.focus();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      if (!postData.content.trim()) {
        throw new Error('Post content cannot be empty');
      }
      
      await submitPost(postData);
      resetForm();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create post. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        setError('Image size must be less than 5MB');
        return;
      }
      if (!file.type.startsWith('image/')) {
        setError('Only image files are allowed');
        return;
      }
      setPostData(prev => ({ ...prev, image: file }));
      const previewUrl = URL.createObjectURL(file);
      setImagePreview(previewUrl);
    }
  };

  const handleFeelingSelect = (feeling: string) => {
    setPostData(prev => ({ ...prev, feeling }));
    setShowFeelingModal(false);
  };

  const handleLocationSelect = (location: string) => {
    setPostData(prev => ({ ...prev, location }));
    setShowLocationModal(false);
  };

  useEffect(() => {
    return () => {
      if (imagePreview) {
        URL.revokeObjectURL(imagePreview);
      }
    };
  }, [imagePreview]);

  const resetForm = () => {
    setPostData({
      content: '',
      location: '',
      feeling: '',
    });
    setImagePreview(null);
    setError(null);
  };

  const MAX_CHARS = 500;

  const LoadingSpinner = () => (
    <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
      {/* Add spinner SVG path */}
    </svg>
  );

  return (
    <form 
      onSubmit={handleSubmit} 
      className="bg-white rounded-xl shadow-sm border border-gray-200 p-4"
      aria-label="Create a new post"
    >
      <div className="flex space-x-4">
        <img
          src="https://img.freepik.com/free-vector/businessman-get-idea_1133-350.jpg"
          alt="Your profile"
          className="h-10 w-10 rounded-full"
        />
        <div className="flex-1">
          <label htmlFor="postContent" className="sr-only">Post content</label>
          <textarea
            ref={textareaRef}
            id="postContent"
            value={postData.content}
            onChange={(e) => setPostData(prev => ({ ...prev, content: e.target.value }))}
            placeholder="What's on your mind?"
            className="w-full resize-none border-0 focus:ring-0 placeholder-gray-400 text-gray-900 bg-transparent"
            rows={3}
            maxLength={500}
            required
          />
          
          <div className="text-xs text-gray-400 mt-1">
            {postData.content.length}/{MAX_CHARS} characters
          </div>
          
          {error && (
            <p className="text-red-500 text-sm mt-2" role="alert">{error}</p>
          )}
          
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <div className="flex space-x-4">
              <button 
                type="button"
                onClick={() => document.getElementById('imageInput')?.click()}
                aria-label="Add photo"
                disabled={isSubmitting}
                className={`text-gray-500 hover:text-purple-500 flex items-center space-x-2 ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                <Image className="h-5 w-5" />
                <span className="text-sm font-medium">Photo</span>
              </button>
              <input
                id="imageInput"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
              
              <button 
                type="button"
                aria-label="Add feeling"
                className="text-gray-500 hover:text-purple-500 flex items-center space-x-2"
              >
                <Smile className="h-5 w-5" />
                <span className="text-sm font-medium">Feeling</span>
              </button>
              
              <button 
                type="button"
                aria-label="Add location"
                className="text-gray-500 hover:text-purple-500 flex items-center space-x-2"
              >
                <MapPin className="h-5 w-5" />
                <span className="text-sm font-medium">Location</span>
              </button>
            </div>
            
            <button
              type="submit"
              className={`px-4 py-2 rounded-full font-medium ${
                postData.content.trim() && !isSubmitting
                  ? 'bg-purple-600 text-white hover:bg-purple-700'
                  : 'bg-gray-100 text-gray-400 cursor-not-allowed'
              }`}
              disabled={!postData.content.trim() || isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <LoadingSpinner />
                  Posting...
                </>
              ) : 'Post'}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

// Helper function for submitting the post (implement according to your API)
async function submitPost(postData: PostData): Promise<void> {
  // Implement your API call here
  // Example:
  // const response = await fetch('/api/posts', {
  //   method: 'POST',
  //   body: JSON.stringify(postData),
  // });
  // if (!response.ok) throw new Error('Failed to create post');
}