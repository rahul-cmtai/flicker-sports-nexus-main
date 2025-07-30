import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Camera, Video, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'basketball', name: 'Basketball Equipment' },
    { id: 'football', name: 'Football Equipment' },
    { id: 'flooring', name: 'Sports Flooring' },
    { id: 'outdoor-gym', name: 'Outdoor Gym' },
    { id: 'table-tennis', name: 'Table Tennis' },
    { id: 'volleyball', name: 'Volleyball' },
    { id: 'badminton', name: 'Badminton' },
    { id: 'tennis', name: 'Lawn Tennis' }
  ];

  const galleryItems = [
    {
      id: 1,
      title: "Basketball Equipment",
      category: "basketball",
      count: 19,
      image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=300&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"
      ]
    },
    {
      id: 2,
      title: "Football Equipment",
      category: "football", 
      count: 15,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop"
      ]
    },
    {
      id: 3,
      title: "Sports Flooring",
      category: "flooring",
      count: 13,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1594736797933-d0cc4634deed?w=400&h=300&fit=crop"
      ]
    },
    {
      id: 4,
      title: "Outdoor Gym Equipment",
      category: "outdoor-gym",
      count: 32,
      image: "https://images.unsplash.com/photo-1594736797933-d0cc4634deed?w=400&h=300&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1594736797933-d0cc4634deed?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
      ]
    },
    {
      id: 5,
      title: "Table Tennis Equipment",
      category: "table-tennis",
      count: 9,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
      ]
    },
    {
      id: 6,
      title: "Volleyball Equipment",
      category: "volleyball",
      count: 9,
      image: "https://images.unsplash.com/photo-1594736797933-d0cc4634deed?w=400&h=300&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1594736797933-d0cc4634deed?w=400&h=300&fit=crop"
      ]
    }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-primary/10 to-accent/5">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-secondary mb-6">
            Our Gallery
          </h1>
          <p className="text-xl text-foreground max-w-3xl mx-auto mb-8">
            Explore our extensive collection of sports equipment installations and 
            see the quality and craftsmanship that sets us apart.
          </p>
          
          {/* Video Channel Link */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link 
              to="https://youtube.com/@flickersports" 
              target="_blank"
              className="group flex items-center gap-3 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
            >
              <Video className="w-5 h-5" />
              <span className="font-medium">Visit Our YouTube Channel</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-primary text-white'
                    : 'bg-card text-foreground hover:bg-muted border border-border'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <Link
                key={item.id}
                to={`/gallery/${item.id}`}
                className="group sports-card bg-card rounded-xl overflow-hidden border border-border"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">
                      {item.count} Photos
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold mb-1 group-hover:text-accent transition-colors">
                      {item.title}
                    </h3>
                    <div className="flex items-center text-sm text-gray-200">
                      <Camera className="w-4 h-4 mr-2" />
                      View Gallery
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;