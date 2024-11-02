import React from 'react';
import { Navigation } from './components/Navigation';
import { HeroSlider } from './components/HeroSlider';
import { OutfitCard } from './components/OutfitCard';
import { Sparkles, TrendingUp, Users } from 'lucide-react';

const featuredOutfits = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=960",
    title: "Summer Breeze Collection",
    category: "Casual",
    likes: 234,
    description: "Light and airy pieces perfect for warm summer days. Featuring neutral tones and breathable fabrics."
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=80&w=960",
    title: "Urban Professional",
    category: "Work",
    likes: 187,
    description: "Sophisticated workwear that transitions seamlessly from office to evening events."
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=960",
    title: "Evening Elegance",
    category: "Party",
    likes: 312,
    description: "Statement pieces that make you stand out at any special occasion."
  }
];

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-16">
        <HeroSlider />
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Daily Inspiration</h3>
              <p className="text-gray-600">Fresh outfit ideas curated daily for every style and occasion.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Trending Styles</h3>
              <p className="text-gray-600">Stay ahead with the latest fashion trends and styling tips.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Community Picks</h3>
              <p className="text-gray-600">Discover and share outfits with our fashion community.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Outfits */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Outfits</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredOutfits.map((outfit) => (
              <OutfitCard key={outfit.id} {...outfit} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-4 bg-indigo-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Get Style Updates</h2>
          <p className="text-gray-600 mb-8">Subscribe to our newsletter for daily style inspiration and exclusive content.</p>
          <form className="flex gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default App;