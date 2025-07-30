import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';
import heroImage from '@/assets/hero-sports.jpg';
import flickerLogo from '@/assets/icon.png';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-primary/80 to-accent/70"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-2 h-2 bg-accent rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-white rounded-full animate-ping"></div>
        <div className="absolute bottom-40 left-16 w-3 h-3 bg-accent/50 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Lightning Bolt Icon */}
          <div className="flex justify-center mb-6">
              <img 
                src={flickerLogo} 
                alt="Flicker Sports Logo" 
                className="w-15 h-14 object-contain"
              />
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="block">Driving Sports</span>
            <span className="block bg-gradient-to-r from-accent to-white bg-clip-text text-transparent">
            Excellence Across
            </span>
            <span className="block">India</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
          Delivering high-quality, Made-in-India sports equipment trusted by athletes, schools, academies, and institutions to achieve top-level performance.
          </p>

          {/* Stats Bar */}
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-12 mb-10">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-1">25+</div>
              <div className="text-gray-300 text-sm">Years Experience</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-gray-500"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-1">25+</div>
              <div className="text-gray-300 text-sm">States Covered</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-gray-500"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-1">1000+</div>
              <div className="text-gray-300 text-sm">Satisfied Clients</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link 
              to="/products" 
              className="group inline-flex items-center cta-primary"
            >
              Explore Products
              <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              to="/contact" 
              className="group inline-flex items-center cta-secondary text-white"
            >
              Get Info
              <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Video Play Button */}
          <div className="mt-12">
            <button className="group flex items-center justify-center mx-auto space-x-3 text-white hover:text-accent transition-colors">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-accent/30 transition-all">
                <Play className="w-6 h-6 ml-1" />
              </div>
              <span className="text-lg font-medium">Watch Our Story</span>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;