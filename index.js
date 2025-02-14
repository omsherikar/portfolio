import React, { useState, useEffect } from 'react';
import { Heart, Music, XCircle, ChevronDown, Play, Pause, SkipForward, SkipBack, Calendar, Star, Mail, Home, Image, Menu, X } from 'lucide-react';

// Simulating React Router behavior since we can't import it
const ValentinesWebsite = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const songs = [
    { title: "Perfect", artist: "Ed Sheeran", duration: "4:23" },
    { title: "All of Me", artist: "John Legend", duration: "4:29" },
    { title: "Can't Help Falling in Love", artist: "Elvis Presley", duration: "3:00" },
    { title: "A Thousand Years", artist: "Christina Perri", duration: "4:45" },
    { title: "Thinking Out Loud", artist: "Ed Sheeran", duration: "4:41" }
  ];

  const memories = [
    { title: "First Date", date: "April 15, 2023", description: "That magical evening at the riverside café" },
    { title: "Beach Vacation", date: "July 20, 2023", description: "Watching the sunset together in Maldives" },
    { title: "Concert Night", date: "September 5, 2023", description: "Dancing to our favorite songs" },
    { title: "Holiday Season", date: "December 25, 2023", description: "Our first Christmas together" }
  ];

  const navigation = [
    { name: 'Home', icon: Home, path: 'home' },
    { name: 'Our Story', icon: Star, path: 'story' },
    { name: 'Gallery', icon: Image, path: 'gallery' },
    { name: 'Music', icon: Music, path: 'music' },
    { name: 'Love Notes', icon: Mail, path: 'notes' },
  ];

  // Navigation Component
  const Navigation = () => (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Heart className="text-red-500" size={24} />
              <span className="text-xl font-semibold text-gray-800">Our Love Story</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6">
              {navigation.map((item) => (
                <button
                  key={item.path}
                  onClick={() => setCurrentPage(item.path)}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors ${
                    currentPage === item.path ? 'text-red-500 bg-red-50' : 'text-gray-600 hover:text-red-500'
                  }`}
                >
                  <item.icon size={18} />
                  <span>{item.name}</span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-red-50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="text-gray-600" size={24} />
              ) : (
                <Menu className="text-gray-600" size={24} />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-black/20" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="fixed right-0 top-0 bottom-0 w-64 bg-white shadow-lg">
            <div className="p-4 space-y-2">
              {navigation.map((item) => (
                <button
                  key={item.path}
                  onClick={() => {
                    setCurrentPage(item.path);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                    currentPage === item.path ? 'text-red-500 bg-red-50' : 'text-gray-600 hover:text-red-500'
                  }`}
                >
                  <item.icon size={18} />
                  <span>{item.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );

  // Page Components
  const HomePage = () => (
    <div className="min-h-screen pt-16">
      <section className="min-h-[calc(100vh-64px)] flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Our Love Story
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Every moment with you is a treasure, every memory a precious gift.
            This is our story, written in the stars and cherished in our hearts.
          </p>
          <button 
            onClick={() => setCurrentPage('story')}
            className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-colors"
          >
            Begin Our Journey
          </button>
        </div>
      </section>
    </div>
  );

  const StoryPage = () => (
    <div className="min-h-screen pt-16 px-4">
      <div className="max-w-4xl mx-auto py-8">
        <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Our Journey Together</h2>
        <div className="space-y-8">
          {memories.map((memory, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-102 transition-transform">
              <div className="flex items-start space-x-4">
                <div className="bg-red-100 p-3 rounded-full">
                  <Calendar className="text-red-500" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">{memory.title}</h3>
                  <p className="text-sm text-gray-500 mb-2">{memory.date}</p>
                  <p className="text-gray-600">{memory.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const GalleryPage = () => (
    <div className="min-h-screen pt-16 px-4">
      <div className="max-w-6xl mx-auto py-8">
        <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Our Photo Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform"
            >
              <img
                src={`/api/placeholder/400/300`}
                alt={`Memory ${index}`}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-gray-800">Beautiful Memory {index}</h3>
                <p className="text-gray-600 text-sm">A magical moment frozen in time</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const MusicPage = () => (
    <div className="min-h-screen pt-16 px-4">
      <div className="max-w-4xl mx-auto py-8">
        <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Our Playlist</h2>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="mb-8">
            <div className="text-center mb-4">
              <h3 className="text-2xl font-semibold text-gray-800">{songs[currentSong].title}</h3>
              <p className="text-gray-600">{songs[currentSong].artist}</p>
            </div>
            <div className="flex justify-center items-center space-x-4">
              <button onClick={() => setCurrentSong((prev) => (prev - 1 + songs.length) % songs.length)} className="p-2 hover:bg-pink-100 rounded-full">
                <SkipBack className="text-gray-600" size={24} />
              </button>
              <button onClick={() => setIsPlaying(!isPlaying)} className="p-4 bg-red-500 rounded-full hover:bg-red-600">
                {isPlaying ? (
                  <Pause className="text-white" size={24} />
                ) : (
                  <Play className="text-white" size={24} />
                )}
              </button>
              <button onClick={() => setCurrentSong((prev) => (prev + 1) % songs.length)} className="p-2 hover:bg-pink-100 rounded-full">
                <SkipForward className="text-gray-600" size={24} />
              </button>
            </div>
          </div>
          <div className="space-y-2">
            {songs.map((song, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg flex justify-between items-center cursor-pointer hover:bg-pink-50 transition-colors ${
                  currentSong === index ? 'bg-pink-100' : ''
                }`}
                onClick={() => setCurrentSong(index)}
              >
                <div>
                  <h4 className="font-medium text-gray-800">{song.title}</h4>
                  <p className="text-sm text-gray-600">{song.artist}</p>
                </div>
                <span className="text-gray-500">{song.duration}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const NotesPage = () => (
    <div className="min-h-screen pt-16 px-4">
      <div className="max-w-4xl mx-auto py-8">
        <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Love Notes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center space-x-2 mb-4">
              <Star className="text-yellow-500" size={24} />
              <h3 className="text-xl font-semibold text-gray-800">Reasons I Love You</h3>
            </div>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Heart className="text-red-500" size={16} />
                <span className="text-gray-600">Your beautiful smile</span>
              </li>
              <li className="flex items-center space-x-2">
                <Heart className="text-red-500" size={16} />
                <span className="text-gray-600">Your kindness to others</span>
              </li>
              <li className="flex items-center space-x-2">
                <Heart className="text-red-500" size={16} />
                <span className="text-gray-600">The way you make me laugh</span>
              </li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center space-x-2 mb-4">
              <Mail className="text-blue-500" size={24} />
              <h3 className="text-xl font-semibold text-gray-800">Sweet Messages</h3>
            </div>
            <div className="space-y-4">
              <p className="text-gray-600 italic">"You make every day feel like Valentine's Day."</p>
              <p className="text-gray-600 italic">"Your love is the best gift I've ever received."</p>
              <p className="text-gray-600 italic">"You're my favorite hello and my hardest goodbye."</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-red-50">
      <Navigation />
      
      {/* Page Content */}
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'story' && <StoryPage />}
      {currentPage === 'gallery' && <GalleryPage />}
      {currentPage === 'music' && <MusicPage />}
      {currentPage === 'notes' && <NotesPage />}
    </div>
  );
};

export default ValentinesWebsite;
