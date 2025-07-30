import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { ArrowRight, Filter } from 'lucide-react';

const Products = () => {
  const allProducts = [
    { name: 'Cricket', image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=300&fit=crop', category: 'Outdoor' },
    { name: 'Football', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop', category: 'Outdoor' },
    { name: 'Badminton', image: 'https://images.unsplash.com/photo-1594736797933-d0cc4634deed?w=400&h=300&fit=crop', category: 'Indoor' },
    { name: 'Kabaddi', image: 'https://images.unsplash.com/photo-1622546016830-a02e0a531fbb?w=400&h=300&fit=crop', category: 'Outdoor' },
    { name: 'Hockey', image: 'https://images.unsplash.com/photo-1594736797933-d0cc4634deed?w=400&h=300&fit=crop', category: 'Outdoor' },
    { name: 'Table Tennis', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop', category: 'Indoor' },
    { name: 'Outdoor Gym', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop', category: 'Outdoor' },
    { name: 'Athletics', image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop', category: 'Outdoor' },
    { name: 'Basketball', image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=300&fit=crop', category: 'Indoor' },
    { name: 'Volleyball', image: 'https://images.unsplash.com/photo-1594736797933-d0cc4634deed?w=400&h=300&fit=crop', category: 'Both' },
    { name: 'Lawn Tennis', image: 'https://images.unsplash.com/photo-1622546016830-a02e0a531fbb?w=400&h=300&fit=crop', category: 'Outdoor' },
    { name: 'Kho-Kho', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop', category: 'Outdoor' }
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