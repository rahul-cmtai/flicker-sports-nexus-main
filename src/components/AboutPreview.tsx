import React from 'react';
import { Link } from 'react-router-dom';
import { Award, MapPin, Users, ArrowRight } from 'lucide-react';

const AboutPreview = () => {
  const stats = [
    {
      icon: Award,
      number: '25+',
      label: 'Years of Excellence',
      description: 'Decades of experience in sports equipment manufacturing'
    },
    {
      icon: MapPin,
      number: '25+',
      label: 'States Covered',
      description: 'Pan-India presence with strong distribution network'
    },
    {
      icon: Users,
      number: '1000+',
      label: 'Happy Clients',
      description: 'Schools, clubs, and institutions across India trust our equipment'
    }
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-secondary mb-6">
              Why Choose 
              <span className="text-primary"> Flicker Sports?</span>
            </h2>
            <p className="text-lg text-foreground mb-8 leading-relaxed">
              We are a leading Indian manufacturer of high-performance sports equipment, 
              committed to empowering athletes and institutions across India with world-class 
              products that deliver strength, agility, and peak performance.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-foreground">ISO certified manufacturing processes</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-foreground">Premium quality materials and construction</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-foreground">Made in India with international standards</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-foreground">Comprehensive after-sales support across India</span>
              </div>
            </div>

            <Link to="/about" className="group inline-flex items-center cta-primary">
              Learn More About Us
              <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="group sports-card bg-background p-8 rounded-xl border border-border"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center flex-shrink-0 lightning-glow">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-1">{stat.number}</div>
                    <h3 className="text-lg font-semibold text-secondary mb-2">{stat.label}</h3>
                    <p className="text-foreground text-sm">{stat.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;