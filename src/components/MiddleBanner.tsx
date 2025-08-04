import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react'; // Added CheckCircle for bullet points

const MiddleBanner = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-gray-900 text-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Side */}
          <div className="relative w-full lg:w-1/2 flex justify-center items-center">
            <img
              src={'/assets/Home/energy.png'} // Adjusted height for better aspect ratio
              alt="Sports Facility Transformation"
              className="rounded-xl shadow-2xl transform transition-transform duration-500 hover:scale-105" // Enhanced image styling
            />
            {/* Optional: Overlay for a more artistic look, if desired */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-700/30 via-purple-700/20 to-red-600/30 rounded-xl"></div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-6 animate-fade-in-up">
              Ready to <span className="text-blue-400 drop-shadow-lg">Elevate</span> Your Sports Facility?
            </h2>
            <p className="text-lg text-gray-200 mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-in-up delay-200">
              Discover why top facilities choose us. We provide:
            </p>

            {/* Bullet Points */}
            <ul className="space-y-4 mb-10 text-lg text-gray-100 max-w-xl mx-auto lg:mx-0">
              <li className="flex items-start animate-fade-in-up delay-300">
                <CheckCircle className="w-6 h-6 text-blue-400 mr-3 flex-shrink-0 mt-1" />
                <span>Premium, Durable Equipment built for performance and longevity.</span>
              </li>
              <li className="flex items-start animate-fade-in-up delay-400">
                <CheckCircle className="w-6 h-6 text-blue-400 mr-3 flex-shrink-0 mt-1" />
                <span>Expert Installation Services ensuring safety and precision.</span>
              </li>
              <li className="flex items-start animate-fade-in-up delay-500">
                <CheckCircle className="w-6 h-6 text-blue-400 mr-3 flex-shrink-0 mt-1" />
                <span>Tailored Solutions designed to meet your unique facility needs.</span>
              </li>
            </ul>

            {/* Call to Action */}
            <Link
              to="/contact"
              className="group inline-flex items-center px-8 py-4 rounded-full bg-white text-gray-900 font-bold text-lg shadow-xl
                         hover:bg-gray-100 hover:scale-105 transition-all duration-300 ease-in-out
                         transform-gpu animate-bounce-subtle"
            >
              Get a Free Consultation
              <ArrowRight className="w-6 h-6 ml-3 transform group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MiddleBanner;