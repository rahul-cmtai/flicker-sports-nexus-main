  import React, { useState } from 'react';
  import Navbar from '@/components/Navbar';
  import Footer from '@/components/Footer';
  import { Camera, Video, ArrowRight, X } from 'lucide-react';
  import { Link } from 'react-router-dom';
  // images import
  // Basketball imports
  import Basketball1 from '@/assets/products/basketball-1.jpg';
  import Basketball2 from '@/assets/products/basketball-2.jpg';
  import Basketball3 from '@/assets/products/basketball-3.jpg';
  import Basketball4 from '@/assets/products/basketball-4.jpg';
  import Basketball5 from '@/assets/products/basketball-5.jpg';
  import Basketball6 from '@/assets/products/basketball-6.jpg';
  import BasketballMain from '@/assets/products/basketball.jpg';
  import BasketballAlt from '@/assets/products/baskehyhgtball-1.jpg';

  // Basketball Post imports
  import BasketballPostFixed1 from '@/assets/products/Basketball Post ( Fixed (1.20 MTR EXT. )-1.jpg';
  import BasketballPostFixed2 from '@/assets/products/Basketball Post ( Fixed (1.20 MTR EXT. )-2.jpg';
  import BasketballPostFixed3 from '@/assets/products/Basketball Post ( Fixed (1.20 MTR EXT. )-3.jpg';
  import BasketballPostFixed4 from '@/assets/products/Basketball Post ( Fixed (1.20 MTR EXT. )-4.jpg';
  import BasketballPostFixed5 from '@/assets/products/Basketball Post ( Fixed (1.20 MTR EXT. )-5.jpg';
  import BasketballPostFixedExt1 from '@/assets/products/Basketball Post (Fixed 2.20 MTR EXT.)-1.jpg';
  import BasketballPostFixedExt3 from '@/assets/products/Basketball Post (Fixed 2.20 MTR EXT.)-3.jpg';
  import BasketballPostFixedExt4 from '@/assets/products/Basketball Post (Fixed 2.20 MTR EXT.)-4.jpg';
  import BasketballPostFoundation1 from '@/assets/products/Basketball Post ( Fixed With Foundation)-1.jpg';
  import BasketballPostFoundation2 from '@/assets/products/Basketball Post ( Fixed With Foundation)-2.jpg';
  import BasketballPostFoundation3 from '@/assets/products/Basketball Post ( Fixed With Foundation)-3.jpg';
  import BasketballPostMovable1 from '@/assets/products/Basketball Post (Movable)-1.jpg';
  import BasketballPostMovable2 from '@/assets/products/Basketball Post (Movable)-2.jpg';
  import BasketballPostMovable3 from '@/assets/products/Basketball Post (Movable)-3.jpg';
  import BasketballPostMovable4 from '@/assets/products/Basketball Post (Movable)-4.jpg';
  import BasketballPostMovableHeight1 from '@/assets/products/Basketball Post ( Movable With Height  Adjustable)-1.jpg';
  import BasketballPostMovableHeight2 from '@/assets/products/Basketball Post ( Movable With Height  Adjustable)-2.jpg';
  import BasketballPostMovableX1 from '@/assets/products/Basketball Post ( Movable X Design)-1.jpg';
  import BasketballPostMovableX2 from '@/assets/products/Basketball Post ( Movable X Design)-2.jpg';
  import BasketballPostHydraulic1 from '@/assets/products/Basketball Post Movable ( Manual  Hydraulic )-1.jpg';
  import BasketballPostHydraulic2 from '@/assets/products/Basketball Post Movable ( Manual  Hydraulic )-2.jpg';
  import BasketballPostHydraulic3 from '@/assets/products/Basketball Post Movable ( Manual  Hydraulic )-3.jpg';
  import BasketballPoles1 from '@/assets/products/Basketball poles ( Fix & Height Adjustable)-1.jpg';
  import BasketballPoles2 from '@/assets/products/Basketball poles ( Fix & Height Adjustable)-2.jpg';
  import BasketballRing1 from '@/assets/products/Basketball Ring ( Dunking & Simple solid Rim)-1.jpg';
  import BasketballRing2 from '@/assets/products/Basketball Ring ( Dunking & Simple solid Rim)-2.jpg';
  import BasketballRing3 from '@/assets/products/Basketball Ring ( Dunking & Simple solid Rim)-3.jpg';

  // Badminton imports
  import BadmintonMain from '@/assets/products/Badminton.jpg';
  import BadmintonPostFixed1 from '@/assets/products/Badminton Post ( Fixed )-1.jpg';
  import BadmintonPostFixed2 from '@/assets/products/Badminton Post ( Fixed )-2.jpg';
  import BadmintonPostFixed3 from '@/assets/products/Badminton Post ( Fixed )-3.jpg';
  import BadmintonPostMovable1 from '@/assets/products/Badminton Post ( Movable)-1.jpg';
  import BadmintonPostMovable2 from '@/assets/products/Badminton Post ( Movable)-2.jpg';
  import BadmintonPostMovable3 from '@/assets/products/Badminton Post ( Movable)-3.jpg';
  import BadmintonPostMovable4 from '@/assets/products/Badminton Post ( Movable)-4.jpg';
  import BadmintonPostMovable5 from '@/assets/products/Badminton Post ( Movable)-5.jpg';
  import BadmintonPostMovable6 from '@/assets/products/Badminton Post ( Movable)-6.jpg';
  import BadmintonPostMovable7 from '@/assets/products/Badminton Post ( Movable)-7.jpg';
  import BadmintonPostMovable8 from '@/assets/products/Badminton Post ( Movable)-8.jpg';

  // Tennis imports
import TennisMain from '@/assets/products/Lawn Tennis.jpg';
import TennisAlt from '@/assets/products/tennis.jpg';
import TennisPostAnchor1 from '@/assets/products/Lawn Tennis  Post ( ( Fixed With  Anchor Bolt )-1.jpg';
import TennisPostAnchor2 from '@/assets/products/Lawn Tennis  Post ( ( Fixed With  Anchor Bolt )-2.jpg';
import TennisPostAnchor3 from '@/assets/products/Lawn Tennis  Post ( ( Fixed With  Anchor Bolt )-3.jpg';

  // Football imports
import FootballMain from '@/assets/products/Football.jpg';

  // Volleyball imports
  import VolleyballMain from '@/assets/products/Volleyball.jpg';

  // Other sports imports
  import BoxingRing from '@/assets/products/Boxing Ring.jpg';
  import Foosball from '@/assets/products/Foosball.jpg';
  import Gymnastics from '@/assets/products/Gymnastics.jpg';
  import Handball from '@/assets/products/Handball.jpg';
  import Hockey from '@/assets/products/Hockey.jpg';
  import Pickleball from '@/assets/products/Pickleball.jpg';
  import PoolSnooker from '@/assets/products/Pool and Snooker Tables.jpg';

  // Flooring and Gym imports
  import SportsFlooring from '@/assets/products/Sports-flooring.jpg';
  import OutdoorGym from '@/assets/products/outdoor-gym.png';

  // Additional images
  import Dugouts from '@/assets/products/dugouts-premium-1.jpg';

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
      { id: 'badminton', name: 'Badminton' },
      { id: 'tennis', name: 'Lawn Tennis' },
      { id: 'volleyball', name: 'Volleyball' },
      { id: 'other-sports', name: 'Other Sports' }
    ];

    const galleryItems = [
      // Basketball Equipment
      {
        id: 1,
        title: "Basketball Equipment Collection",
        category: "basketball",
        image: BasketballMain,
        images: [BasketballMain, Basketball1, Basketball2, Basketball3, Basketball4, Basketball5, Basketball6, BasketballAlt]
      },
      {
        id: 2,
        title: "Basketball Posts - Fixed (1.20 MTR EXT)",
        category: "basketball",
        image: BasketballPostFixed1,
        images: [BasketballPostFixed1, BasketballPostFixed2, BasketballPostFixed3, BasketballPostFixed4, BasketballPostFixed5]
      },
      {
        id: 3,
        title: "Basketball Posts - Fixed (2.20 MTR EXT)",
        category: "basketball",
        image: BasketballPostFixedExt1,
        images: [BasketballPostFixedExt1, BasketballPostFixedExt3, BasketballPostFixedExt4]
      },
      {
        id: 4,
        title: "Basketball Posts - Fixed with Foundation",
        category: "basketball",
        image: BasketballPostFoundation1,
        images: [BasketballPostFoundation1, BasketballPostFoundation2, BasketballPostFoundation3]
      },
      {
        id: 5,
        title: "Basketball Posts - Movable",
        category: "basketball",
        image: BasketballPostMovable1,
        images: [BasketballPostMovable1, BasketballPostMovable2, BasketballPostMovable3, BasketballPostMovable4]
      },
      {
        id: 6,
        title: "Basketball Posts - Movable with Height Adjustable",
        category: "basketball",
        image: BasketballPostMovableHeight1,
        images: [BasketballPostMovableHeight1, BasketballPostMovableHeight2]
      },
      {
        id: 7,
        title: "Basketball Posts - Movable X Design",
        category: "basketball",
        image: BasketballPostMovableX1,
        images: [BasketballPostMovableX1, BasketballPostMovableX2]
      },
      {
        id: 8,
        title: "Basketball Posts - Manual Hydraulic",
        category: "basketball",
        image: BasketballPostHydraulic1,
        images: [BasketballPostHydraulic1, BasketballPostHydraulic2, BasketballPostHydraulic3]
      },
      {
        id: 9,
        title: "Basketball Poles - Fix & Height Adjustable",
        category: "basketball",
        image: BasketballPoles1,
        images: [BasketballPoles1, BasketballPoles2]
      },
      {
        id: 10,
        title: "Basketball Rings - Dunking & Simple Solid Rim",
        category: "basketball",
        image: BasketballRing1,
        images: [BasketballRing1, BasketballRing2, BasketballRing3]
      },

      // Football Equipment
      {
        id: 11,
        title: "Football Equipment",
        category: "football",
        image: FootballMain,
        images: [FootballMain]
      },

      // Badminton Equipment
      {
        id: 12,
        title: "Badminton Equipment",
        category: "badminton",
        image: BadmintonMain,
        images: [BadmintonMain]
      },
      {
        id: 13,
        title: "Badminton Posts - Fixed",
        category: "badminton",
        image: BadmintonPostFixed1,
        images: [BadmintonPostFixed1, BadmintonPostFixed2, BadmintonPostFixed3]
      },
      {
        id: 14,
        title: "Badminton Posts - Movable",
        category: "badminton",
        image: BadmintonPostMovable1,
        images: [BadmintonPostMovable1, BadmintonPostMovable2, BadmintonPostMovable3, BadmintonPostMovable4, BadmintonPostMovable5, BadmintonPostMovable6, BadmintonPostMovable7, BadmintonPostMovable8]
      },

      // Tennis Equipment
      {
        id: 15,
        title: "Lawn Tennis Equipment",
        category: "tennis",
        image: TennisMain,
        images: [TennisMain, TennisAlt]
      },
      {
        id: 16,
        title: "Tennis Posts - Fixed with Anchor Bolt",
        category: "tennis",
        image: TennisPostAnchor1,
        images: [TennisPostAnchor1, TennisPostAnchor2, TennisPostAnchor3]
      },


      // Volleyball Equipment
      {
        id: 18,
        title: "Volleyball Equipment",
        category: "volleyball",
        image: VolleyballMain,
        images: [VolleyballMain]
      },

      // Sports Flooring
      {
        id: 19,
        title: "Sports Flooring",
        category: "flooring",
        image: SportsFlooring,
        images: [SportsFlooring]
      },

      // Outdoor Gym
      {
        id: 20,
        title: "Outdoor Gym Equipment",
        category: "outdoor-gym",
        image: OutdoorGym,
        images: [OutdoorGym]
      },

      // Other Sports
      {
        id: 21,
        title: "Boxing Ring",
        category: "other-sports",
        image: BoxingRing,
        images: [BoxingRing]
      },
      {
        id: 22,
        title: "Foosball Tables",
        category: "other-sports",
        image: Foosball,
        images: [Foosball]
      },
      {
        id: 23,
        title: "Gymnastics Equipment",
        category: "other-sports",
        image: Gymnastics,
        images: [Gymnastics]
      },
      {
        id: 24,
        title: "Handball Equipment",
        category: "other-sports",
        image: Handball,
        images: [Handball]
      },
      {
        id: 25,
        title: "Hockey Equipment",
        category: "other-sports",
        image: Hockey,
        images: [Hockey]
      },
      {
        id: 26,
        title: "Pickleball Equipment",
        category: "other-sports",
        image: Pickleball,
        images: [Pickleball]
      },
      {
        id: 27,
        title: "Pool and Snooker Tables",
        category: "other-sports",
        image: PoolSnooker,
        images: [PoolSnooker]
      },
      {
        id: 28,
        title: "Premium Dugouts",
        category: "other-sports",
        image: Dugouts,
        images: [Dugouts]
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
                className="absolute top-4 right-4 text-blue-500 hover:text-blue-400 z-10"
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
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-500 hover:text-blue-400 disabled:opacity-50"
                  >
                    <ArrowRight className="w-8 h-8 rotate-180" />
                  </button>
                  <button
                    onClick={nextImage}
                    disabled={currentImageIndex === selectedImages.length - 1}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-blue-500 hover:text-blue-400 disabled:opacity-50"
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