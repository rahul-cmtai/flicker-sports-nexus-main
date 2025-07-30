import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, MessageCircle } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-accent">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center">
          {/* Heading */}
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Elevate Your Sports Facility?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto">
            Get a personalized quote for your sports equipment needs. Our team will help you 
            create the perfect setup for peak performance.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <Link 
              to="/quote" 
              className="group inline-flex items-center bg-white text-primary px-8 py-4 rounded-lg font-semibold transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Get Custom Quote
              <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              to="/catalog" 
              className="group inline-flex items-center border-2 border-white text-white bg-transparent px-8 py-4 rounded-lg font-semibold transform transition-all duration-300 hover:bg-white hover:text-primary hover:scale-105"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Catalog
              <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-12 text-white/80">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>24/7 Customer Support</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>Free Shipping Across India</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>1 Year Warranty</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;