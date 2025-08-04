import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from 'lucide-react';
import flickerLogo from '/assets/flicker-logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const allProducts = [
    'Basketball', 'Pickleball', 'Badminton', 'Lawn Tennis', 'Foosball', 
    'Volleyball', 'Handball', 'Boxing Ring', 'Football', 'Table Tennis',
    'Pool and Snooker Tables', 'Gymnastics', 'Hockey', 'Dugout', 
    'Outdoor Gym and Children Play Equipment', 'Sports Flooring'
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/10 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 lightning-glow">
            <img 
              src={flickerLogo} 
              alt="Flicker Sports Logo" 
              className="w-21 h-20 object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-black hover:text-accent transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-black hover:text-accent transition-colors">
              About
            </Link>
            
            {/* Products Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button className="flex items-center text-black hover:text-accent transition-colors">
                Products
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              
              {dropdownOpen && (
                <div className="absolute top-full left-0 w-96 bg-white rounded-lg shadow-xl border border-border mt-2 p-6 z-50">
                  <div className="grid grid-cols-1 gap-6">
                    <div>
                      <h3 className="font-semibold text-secondary mb-3">All Products</h3>
                      <div className="grid grid-cols-2 gap-2">
                        {allProducts.map((product) => (
                          <Link
                            key={product}
                            to={`/products/${product.toLowerCase().replace(/\s+/g, '-')}`}
                            className="block text-sm text-foreground hover:text-primary transition-colors"
                          >
                            {product}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-border">
                    <Link 
                      to="/products" 
                      className="text-primary font-medium hover:text-accent transition-colors"
                    >
                      View All Products →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link to="/gallery" className="text-black hover:text-accent transition-colors">
              Gallery
            </Link>
            <Link to="/clients" className="text-black hover:text-accent transition-colors">
              Clients
            </Link>
            <Link to="/contact" className="text-black hover:text-accent transition-colors">
              Contact
            </Link>
            
            {/* <Link to="/quote" className="cta-primary">
              Get Quote
            </Link> */}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-black"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-border">
            <div className="px-4 py-6 space-y-4">
              <Link to="/" className="block text-black hover:text-accent transition-colors">
                Home
              </Link>
              <Link to="/about" className="block text-black hover:text-accent transition-colors">
                About
              </Link>
              {/* Products Mobile Dropdown */}
              <div>
                <button
                  className="flex items-center w-full text-black hover:text-accent transition-colors focus:outline-none"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  Products
                  <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {dropdownOpen && (
                  <div className="pl-4 mt-2 space-y-1">
                    {allProducts.map((product) => (
                      <Link
                        key={product}
                        to={`/products/${product.toLowerCase().replace(/\s+/g, '-')}`}
                        className="block text-sm text-foreground hover:text-primary transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {product}
                      </Link>
                    ))}
                    <Link
                      to="/products"
                      className="block text-primary font-medium hover:text-accent transition-colors mt-2"
                      onClick={() => setIsOpen(false)}
                    >
                      View All Products →
                    </Link>
                  </div>
                )}
              </div>
              <Link to="/gallery" className="block text-black hover:text-accent transition-colors">
                Gallery
              </Link>
              <Link to="/clients" className="block text-black hover:text-accent transition-colors">
                Clients
              </Link>
              <Link to="/contact" className="block text-black hover:text-accent transition-colors">
                Contact
              </Link>
              {/* <Link to="/quote" className="cta-primary inline-block">
                Get Quote
              </Link> */}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;