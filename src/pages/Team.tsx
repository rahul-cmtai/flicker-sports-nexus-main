import React from "react";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Users, Target, Zap, Shield } from 'lucide-react';

const teamMembers = [
  {
    name: "Nawab Sharif Ansari",
    position: "Founder and CEO",
    letter: "N",
    description: "Visionary leader driving Flicker Sports' mission and strategic direction."
  },
  {
    name: "Meraj Sharif Ansari",
    position: "Co-Founder and MD",
    letter: "M",
    description: "Oversees daily operations and ensures excellence across all departments."
  },
  {
    name: "Mohd Faisal",
    position: "Chief Financial Officer (CFO)",
    letter: "M",
    description: "Manages financial strategy and ensures sustainable business growth."
  },
  {
    name: "Amit Singh",
    position: "Sales Manager",
    letter: "A",
    description: "Leads our sales team to deliver exceptional client experiences nationwide."
  },
  {
    name: "Ankit Singh",
    position: "Digital Marketing Incharge",
    letter: "A",
    description: "Crafts our digital presence and builds our brand in the digital space."
  },
  {
    name: "Sunil Kumar Prajapati",
    position: "Production Head and Quality Incharge",
    letter: "S",
    description: "Ensures every product meets our rigorous quality standards."
  }
];

const values = [
  {
    title: "Excellence",
    description: "We strive for excellence in everything we do, from product quality to customer service.",
    icon: <Target className="w-10 h-10 text-primary" />
  },
  {
    title: "Innovation",
    description: "We constantly innovate to provide cutting-edge sports equipment solutions that meet evolving needs.",
    icon: <Zap className="w-10 h-10 text-accent" />
  },
  {
    title: "Integrity",
    description: "We conduct our business with honesty, transparency and the highest ethical standards.",
    icon: <Shield className="w-10 h-10 text-primary" />
  }
];

const Team = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section with animated gradient */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/20"></div>
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-8">
              <div className="p-4 bg-white/30 backdrop-blur-md rounded-full shadow-xl border border-white/40">
                <Users className="w-16 h-16 text-accent drop-shadow-lg" />
              </div>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-secondary mb-6 bg-clip-text text-transparent bg-gradient-to-r from-secondary via-accent to-primary">
              Our Leadership Team
            </h1>
            <p className="text-xl text-foreground leading-relaxed max-w-3xl mx-auto">
              Meet the passionate leaders behind Flicker Sports Industries who drive our vision forward with expertise, innovation, and commitment to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members Section with cards */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="relative bg-white/80 dark:bg-black/60 backdrop-blur-lg rounded-2xl shadow-xl border border-accent/30 p-8 hover:shadow-2xl transition-all duration-500 hover:border-accent/60 group overflow-hidden"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-accent/20 to-transparent rounded-bl-3xl"></div>
                
                {/* Letter icon with animated background */}
                <div className="relative z-10 flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="absolute inset-0 bg-white/50 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                  <span className="text-3xl font-bold text-accent group-hover:text-primary transition-colors duration-300">{member.letter}</span>
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold text-secondary mb-2 group-hover:text-accent transition-colors">{member.name}</h3>
                <p className="text-lg font-medium mb-4 bg-clip-text text-transparent bg-gradient-to-r from-accent to-primary">{member.position}</p>
                <p className="text-foreground/80 mb-5">{member.description}</p>
                
                {/* Animated underline */}
                <div className="h-1 w-16 bg-gradient-to-r from-accent to-primary rounded-full group-hover:w-full transition-all duration-500 ease-in-out"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Values with animated cards */}
      <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-accent/10 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-30"></div>
        
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-bold text-secondary mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-primary">Our Core Values</span>
            </h2>
            <p className="text-xl text-foreground">
              The principles that guide our leadership and shape our company culture
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="relative bg-white/40 dark:bg-black/40 backdrop-blur-md p-10 rounded-2xl border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="flex justify-center mb-6 relative z-10">
                  <div className="p-4 bg-white/20 backdrop-blur-sm rounded-xl shadow-inner group-hover:bg-white/30 transition-colors duration-300">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-4 text-center relative z-10">{value.title}</h3>
                <p className="text-foreground text-center relative z-10">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Join Our Team CTA */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center bg-white/50 backdrop-blur-md p-10 rounded-3xl shadow-lg border border-white/30">
            <h2 className="text-3xl font-bold text-secondary mb-4">Join Our Winning Team</h2>
            <p className="text-lg text-foreground mb-8">
              We're always looking for talented individuals who share our passion for sports and excellence.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-accent to-primary text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Team;