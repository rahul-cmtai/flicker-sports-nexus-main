import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { ArrowRight, Filter } from 'lucide-react';
// Updated image imports with correct file names
// import Basketball from '/assets/products/basketball.jpg';
// import Table from '/assets/products/tennis.jpg';
// import Dugout from '/assets/products/dugouts-premium-1.jpg';
// import OutdoorGym from '/assets/products/outdoor_gym.png';
// import SportsFlooring from '/assets/products/Sports_flooring.jpg';
// import Pickalball from '/assets/products/Pickleball.jpg';
// import Badminton from '/assets/products/Badminton.jpg';
// import LawnTennis from '/assets/products/Lawn_Tennis.jpg';
// import Foosball from '/assets/products/Foosball.jpg';
// import Volleyball from '/assets/products/Volleyball.jpg';
// import Handball from '/assets/products/Handball.jpg';
// import BoxingRing from '/assets/products/Boxing_Ring.jpg';
// import Football from '/assets/products/Football.jpg';
// import SnookerTable from '/assets/products/Pool_and_Snooker_Tables.jpg';
// import Gymnastics from '/assets/products/Gymnastics.jpg';
// import Hockey from '/assets/products/Hockey.jpg';




const Products = () => {
  const allProducts = [
    { name: 'Basketball', image: '/assets/products/basketball.jpg', category: 'Indoor' },
    { name: 'Pickleball', image: '/assets/products/Pickleball.jpg', category: 'Outdoor' },
    { name: 'Badminton', image: '/assets/products/Badminton.jpg', category: 'Indoor' },
    { name: 'Lawn Tennis', image: '/assets/products/Lawn_Tennis.jpg', category: 'Outdoor' },
    { name: 'Foosball', image: '/assets/products/Foosball.jpg', category: 'Indoor' },
      { name: 'Volleyball', image: '/assets/products/Volleyball.jpg', category: 'Both' },
      { name: 'Handball', image: '/assets/products/Handball.jpg', category: 'Indoor' },
      { name: 'Boxing Ring', image: '/assets/products/Boxing_Ring.jpg', category: 'Indoor' },
    { name: 'Football', image: '/assets/products/Football.jpg', category: 'Outdoor' },
    { name: 'Table Tennis', image: '/assets/products/tennis.jpg', category: 'Indoor' },
    { name: 'Pool and Snooker Tables', image: '/assets/products/Pool_and_Snooker_Tables.jpg', category: 'Indoor' },
    { name: 'Gymnastics', image: '/assets/products/Gymnastics.jpg', category: 'Indoor' },
    { name: 'Hockey', image: '/assets/products/Hockey.jpg', category: 'Outdoor' },
    { name: 'Dugout', image: '/assets/products/dugouts-premium-1.jpg', category: 'Outdoor' },
    { name: 'Outdoor Gym and Children Play Equipment', image: '/assets/products/outdoor_gym.png', category: 'Outdoor' },
    { name: 'Sports Flooring', image: '/assets/products/Sports_flooring.jpg', category: 'Both' }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-primary/10 to-accent/5">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-secondary mb-6">
            Our Products
          </h1>
          <p className="text-xl text-foreground max-w-3xl mx-auto">
            Discover our comprehensive range of sports equipment designed for excellence, 
            durability, and peak performance across India.
          </p>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">


          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {allProducts.map((product) => (
              <Link
                key={product.name}
                to={`/products/${product.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="group sports-card bg-card rounded-xl overflow-hidden border border-border"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-accent text-white px-2 py-1 rounded text-xs font-medium">
                      {product.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-secondary mb-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center text-primary group-hover:text-accent transition-colors">
                    <span className="font-medium">View Details</span>
                    <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
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

export default Products;