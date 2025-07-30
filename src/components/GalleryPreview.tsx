import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, Video, ArrowRight } from 'lucide-react';

const GalleryPreview = () => {
  const galleryItems = [
    {
      title: "Basketball Equipment",
      count: 19,
      image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=300&fit=crop",
      link: "/gallery/basketball-equipment"
    },
    {
      title: "Football Equipment", 
      count: 15,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      link: "/gallery/football-equipment"
    },
    {
      title: "Sports Flooring",
      count: 13,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      link: "/gallery/sports-flooring"
    },
    {
      title: "Outdoor Gym Equipment",
      count: 32,
      image: "https://images.unsplash.com/photo-1594736797933-d0cc4634deed?w=400&h=300&fit=crop",
      link: "/gallery/outdoor-gym"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-secondary mb-4">
            Our Gallery
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          
          {/* Video Channel Link */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
            <Link 
              to="https://youtube.com/@flickersports" 
              target="_blank"
              className="group flex items-center gap-3 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
            >
              <Video className="w-5 h-5" />
              <span className="font-medium">All Videos</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              to="/gallery"
              className="group flex items-center gap-3 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              <Camera className="w-5 h-5" />
              <span className="font-medium">All Photos</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {galleryItems.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="group sports-card bg-card rounded-xl overflow-hidden border border-border"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <span className="bg-accent text-white px-2 py-1 rounded text-xs font-medium">
                    {item.count} Photos
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-bold group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;