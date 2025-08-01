  import React, { useState } from 'react';
  import Navbar from '@/components/Navbar';
  import Footer from '@/components/Footer';
  import { Camera, Video, ArrowRight, X } from 'lucide-react';
  import { Link } from 'react-router-dom';
  // images import
  import Basketball1 from '@/assets/products/basketball-1.jpg';
import Basketball2 from '@/assets/products/basketball-2.jpg';
import Basketball3 from '@/assets/products/basketball-3.jpg';
import Basketball4 from '@/assets/products/basketball-4.jpg';
import Basketball5 from '@/assets/products/basketball-5.jpg';
import Basketball6 from '@/assets/products/basketball-6.jpg';


  const Gallery = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [selectedImages, setSelectedImages] = useState<string[]>([]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
        title: "Basketball Equipment 1",
        category: "basketball",
        image: Basketball1,
        images: [Basketball1]
      },
      {
        id: 2,
        title: "Basketball Equipment 2",
        category: "basketball",
        image: Basketball2,
        images: [Basketball2]
      },
      {
        id: 3,
        title: "Basketball Equipment 3",
        category: "basketball",
        image: Basketball3,
        images: [Basketball3]
      },
      {
        id: 4,
        title: "Basketball Equipment 4",
        category: "basketball",
        image: Basketball4,
        images: [Basketball4]
      },
      {
        id: 5,
        title: "Basketball Equipment 5",
        category: "basketball",
        image: Basketball5,
        images: [Basketball5]
      },
      {
        id: 6,
        title: "Basketball Equipment 6",
        category: "basketball",
        image: Basketball6,
        images: [Basketball6]
      },
      {
        id: 7,
        title: "Football Equipment",
        category: "football", 
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
        images: [
          "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
          "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop"
        ]
      },
      {
        id: 8,
        title: "Sports Flooring",
        category: "flooring",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
        images: [
          "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
          "https://images.unsplash.com/photo-1594736797933-d0cc4634deed?w=400&h=300&fit=crop"
        ]
      },
      {
        id: 9,
        title: "Outdoor Gym Equipment",
        category: "outdoor-gym",
        image: "https://images.unsplash.com/photo-1594736797933-d0cc4634deed?w=400&h=300&fit=crop",
        images: [
          "https://images.unsplash.com/photo-1594736797933-d0cc4634deed?w=400&h=300&fit=crop",
          "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
        ]
      },
      {
        id: 10,
        title: "Table Tennis Equipment",
        category: "table-tennis",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
        images: [
          "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
        ]
      },
      {
        id: 11,
        title: "Volleyball Equipment",
        category: "volleyball",
        image: "https://images.unsplash.com/photo-1594736797933-d0cc4634deed?w=400&h=300&fit=crop",
        images: [
          "https://images.unsplash.com/photo-1594736797933-d0cc4634deed?w=400&h=300&fit=crop"
        ]
      }
    ];

    const filteredItems = selectedCategory === 'all' 
      ? galleryItems 
      : galleryItems.filter(item => item.category === selectedCategory);

    const openImageModal = (images: string[], initialIndex: number = 0) => {
      setSelectedImages(images);
      setCurrentImageIndex(initialIndex);
      setSelectedImage(images[initialIndex]);
    };

    const closeImageModal = () => {
      setSelectedImage(null);
      setSelectedImages([]);
      setCurrentImageIndex(0);
    };

    const nextImage = () => {
      if (currentImageIndex < selectedImages.length - 1) {
        setCurrentImageIndex(currentImageIndex + 1);
        setSelectedImage(selectedImages[currentImageIndex + 1]);
      }
    };

    const prevImage = () => {
      if (currentImageIndex > 0) {
        setCurrentImageIndex(currentImageIndex - 1);
        setSelectedImage(selectedImages[currentImageIndex - 1]);
      }
    };

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
                <div
                  key={item.id}
                  className="group sports-card bg-card rounded-xl overflow-hidden border border-border cursor-pointer"
                  onClick={() => openImageModal(item.images)}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-bold mb-1 group-hover:text-accent transition-colors">
                        {item.title}
                      </h3>
                      <div className="flex items-center text-sm text-gray-200">
                        <Camera className="w-4 h-4 mr-2" />
                        Click to view
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Image Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={closeImageModal}
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
              >
                <X className="w-8 h-8" />
              </button>
              
              <img
                src={selectedImage}
                alt="Gallery Image"
                className="max-w-full max-h-full object-contain"
              />
              
              {/* Navigation Arrows */}
              {selectedImages.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    disabled={currentImageIndex === 0}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 disabled:opacity-50"
                  >
                    <ArrowRight className="w-8 h-8 rotate-180" />
                  </button>
                  <button
                    onClick={nextImage}
                    disabled={currentImageIndex === selectedImages.length - 1}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 disabled:opacity-50"
                  >
                    <ArrowRight className="w-8 h-8" />
                  </button>
                </>
              )}
              
              {/* Image Counter */}
              {selectedImages.length > 1 && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black/50 px-4 py-2 rounded-full">
                  {currentImageIndex + 1} / {selectedImages.length}
                </div>
              )}
            </div>
          </div>
        )}

        <Footer />
      </div>
    );
  };

  export default Gallery;