import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Football from '@/assets/products/football-1.jpg';
import Basketball from '@/assets/products/Basketball.jpg';
import Badminton from '@/assets/products/Badminton.jpg';
import LawnTennis from '@/assets/products/Lawn_Tennis.jpg';
import OutdoorGym from '@/assets/products/outdoor_gym.png';
import SportsFlooring from '@/assets/products/Sports_flooring.jpg';


const categories = [
  {
    name: 'Basketball',
    image: Basketball,
    description: 'Professional basketball equipment & courts',
    link: '/products/basketball'
  },
  {
    name: 'Football',
    image: Football,
    description: 'Goals, nets & training equipment',
    link: '/products/football'
  },
  {
    name: 'Badminton',
    image: Badminton,
    description: 'Courts, nets & professional gear',
    link: '/products/badminton'
  },
  {
    name: 'Lawn Tennis',
    image: LawnTennis,
    description: 'Professional tennis courts & equipment',
    link: '/products/lawn-tennis'
  },
  {
    name: 'Outdoor Gym and Children Play Equipment',
    image: OutdoorGym,
    description: 'Complete gym setups & play equipment',
    link: '/products/outdoor-gym-and-children-play-equipment'
  },
  {
    name: 'Sports Flooring',
    image: SportsFlooring,
    description: 'Professional sports flooring solutions',
    link: '/products/sports-flooring'
  }
];

const FeaturedCategories = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-secondary mb-6">
            Featured Categories
          </h2>
          <p className="text-xl text-foreground max-w-3xl mx-auto">
            Discover our comprehensive range of sports equipment designed for excellence. 
            From traditional Indian sports to modern athletic equipment.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Link
              key={category.name}
              to={category.link}
              className="group sports-card bg-card rounded-xl overflow-hidden border border-border"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-secondary mb-2 group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                <p className="text-foreground mb-4">
                  {category.description}
                </p>
                
                <div className="flex items-center text-primary group-hover:text-accent transition-colors">
                  <span className="font-medium">Explore</span>
                  <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link to="/products" className="cta-primary">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;