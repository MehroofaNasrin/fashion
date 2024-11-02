import React from 'react';
import { Heart, Share2, Bookmark } from 'lucide-react';

interface OutfitCardProps {
  image: string;
  title: string;
  category: string;
  likes: number;
  description: string;
}

export function OutfitCard({ image, title, category, likes, description }: OutfitCardProps) {
  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 space-x-2">
          <button className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors">
            <Heart className="w-5 h-5 text-gray-700" />
          </button>
          <button className="p-2 bg-white/90 rounded-full hover:bg-white transition-colors">
            <Bookmark className="w-5 h-5 text-gray-700" />
          </button>
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm font-medium text-indigo-600">{category}</span>
          <div className="flex items-center space-x-1">
            <Heart className="w-4 h-4 text-pink-500 fill-current" />
            <span className="text-sm text-gray-600">{likes}</span>
          </div>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <button className="text-indigo-600 hover:text-indigo-700 text-sm font-medium">
            Read More
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <Share2 className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
}