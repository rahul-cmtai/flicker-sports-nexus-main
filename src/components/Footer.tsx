import React from 'react';
import { Link } from 'react-router-dom';
import flickerLogo1 from '../assets/icon.png';
import { Zap, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
               <div className="relative group flex-shrink-0">
              <img
                src={flickerLogo1}
                alt="Company Logo"
                className="relative z-10 w-12 h-12 md:w-20 md:h-20 object-contain rounded-2xl border-4 border-accent/60 bg-background shadow-2xl transition-transform duration-300 group-hover:scale-105"
              />
            </div>
              <span className="text-xl font-bold">Flicker Sports</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              <span className="font-bold">FLICKER SPORTS INDUSTRIES</span><br />
              Ground floor M N - 877 Islam Nagar Shekh Chowk Maliyana<br />
              Pin code 250002<br />
              <span className="font-semibold">GST No.:</span> 09BZMPA7204C1ZP
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-accent transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-accent transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-accent transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-accent transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-accent transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-accent transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/clients" className="text-gray-300 hover:text-accent transition-colors">
                  Clients
                </Link>
              </li>
              <li>
                <Link to="/quote" className="text-gray-300 hover:text-accent transition-colors">
                  Get Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products/native/basketball" className="text-gray-300 hover:text-accent transition-colors">
                  Basketball
                </Link>
              </li>
              <li>
                <Link to="/products/native/football" className="text-gray-300 hover:text-accent transition-colors">
                  Football
                </Link>
              </li>
              <li>
                <Link to="/products/native/badminton" className="text-gray-300 hover:text-accent transition-colors">
                  Badminton
                </Link>
              </li>
              <li>
                <Link to="/products/cricket" className="text-gray-300 hover:text-accent transition-colors">
                  Cricket
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-accent transition-colors">
                  View All →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                  Ground floor M N - 877 Islam Nagar Shekh Chowk Maliyana<br />
                  Pin code 250002
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <p className="text-gray-300 text-sm">9045440618 / 8858687912</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <p className="text-gray-300 text-sm">flickersports@gmail.com</p>
              </div>
            </div>
          </div>
        </div>



        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Flicker Sports Industries. All rights reserved. | 
            <span className="text-accent"> Powering Performance Across India</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;