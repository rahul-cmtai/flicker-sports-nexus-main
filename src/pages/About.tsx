import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import flickerLogo from '../assets/flicker-logo.png';
import flickerLogo1 from '../assets/icon.png';
import { Award, Globe, Users, Target, Zap } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-primary/10 to-accent/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <img 
                src={flickerLogo1} 
                alt="Flicker Sports Logo" 
                className="w-15 h-14 object-contain"
              />
          </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-secondary mb-6">
              About Flicker Sports
            </h1>
            <p className="text-xl text-foreground leading-relaxed">
              Powering athletic excellence for over 5 years with world-class sports equipment 
              that empowers athletes, teams, and institutions to achieve peak performance.
            </p>
          </div>
        </div>
      </section>
      {/* Company Details */}
      <section className="relative py-24 bg-gradient-to-br from-primary/10 via-background to-accent/10 overflow-hidden">
        {/* Neon animated border */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[90%] h-[90%] rounded-3xl border-4 border-accent animate-pulse blur-[2px] opacity-40"></div>
        </div>
        {/* Decorative blurred circles */}
        <div className="absolute -top-24 -left-24 w-80 h-80 bg-accent/30 rounded-full blur-3xl z-0"></div>
        <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-primary/30 rounded-full blur-3xl z-0"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Logo */}
            <div className="relative group flex-shrink-0">
              <img
                src={flickerLogo}
                alt="Company Logo"
                className="relative z-10 w-44 h-44 object-contain rounded-2xl border-4 border-accent/60 bg-background shadow-2xl transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            {/* Glassmorphism Card */}
            <div className="flex-1 bg-white/60 dark:bg-black/60 backdrop-blur-2xl rounded-3xl shadow-2xl p-12 border border-accent/30 relative overflow-hidden">
              {/* Gradient highlight */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-accent to-primary rounded-t-3xl opacity-60"></div>
              <h2 className="text-5xl font-extrabold text-secondary mb-4 flex items-center gap-4">
                <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent drop-shadow-lg">Company Details</span>
                <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm rounded-full font-bold tracking-wider shadow border border-primary/20">Flicker Sports Industries</span>
              </h2>
              <p className="text-xl text-foreground mb-6 font-medium">
                Flicker Sports Industries is a <span className="font-semibold text-accent">leading manufacturer</span> and supplier of sports equipment in India, serving <span className="font-semibold text-primary">schools, colleges, clubs,</span> and <span className="font-semibold text-primary">institutions</span> nationwide. Our legacy is built on <span className="text-accent font-semibold">trust</span>, <span className="text-primary font-semibold">innovation</span>, and a passion for sports.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-8 text-foreground/90 text-lg font-semibold">
                <li className="flex items-center gap-3">
                  <Award className="w-6 h-6 text-accent drop-shadow" />
                  5+ Years of Excellence
                </li>
                <li className="flex items-center gap-3">
                  <Users className="w-6 h-6 text-primary drop-shadow" />
                  Trusted by 1000+ Clients
                </li>
                <li className="flex items-center gap-3">
                  <Globe className="w-6 h-6 text-accent drop-shadow" />
                  Pan-India Presence
                </li>
                <li className="flex items-center gap-3">
                  <Zap className="w-6 h-6 text-primary drop-shadow" />
                  Driven by Innovation & Passion
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Mission */}
            <div className="sports-card bg-card p-8 rounded-xl border border-border">
              <Target className="w-12 h-12 text-accent mb-6" />
              <h3 className="text-2xl font-bold text-secondary mb-4">Our Mission</h3>
              <p className="text-foreground leading-relaxed">
                To manufacture and deliver world-class sports equipment that empowers athletes 
                and institutions across India. We are committed to excellence, innovation, and 
                supporting the dreams of every Indian athlete who uses our equipment.
              </p>
            </div>

            {/* Vision */}
            <div className="sports-card bg-card p-8 rounded-xl border border-border">
              <Globe className="w-12 h-12 text-accent mb-6" />
              <h3 className="text-2xl font-bold text-secondary mb-4">Our Vision</h3>
              <p className="text-foreground leading-relaxed">
                To be India's preferred partner for sports infrastructure, recognized 
                for our innovative solutions, superior quality, and commitment to powering 
                performance across all sporting disciplines in India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20 relative overflow-hidden bg-[#181e29] text-white">
        {/* Artistic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-700/30 via-primary/20 to-accent/30 pointer-events-none"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Trusted Across India
            </h2>
            <p className="text-xl text-gray-200">
              Our numbers speak for our commitment to excellence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Award, number: '25+', label: 'Years Experience' },
              { icon: Globe, number: '28+', label: 'States Covered' },
              { icon: Users, number: '1000+', label: 'Happy Clients' },
              { icon: Zap, number: '10000+', label: 'Products Delivered' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-blue-400 mb-2">{stat.number}</div>
                <div className="text-gray-100 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Director Section */}
      <section className="py-24 bg-gradient-to-br from-primary/10 via-accent/10 to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Image Side */}
            <div className="flex-shrink-0 w-full lg:w-1/3 flex justify-center">
              <div className="relative group">
                <img
                  src="/images/director-nawab-sharif.jpg"
                  alt="Nawab Sharif - Director"
                  className="rounded-3xl shadow-2xl w-72 h-72 object-cover border-4 border-accent transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-accent text-white px-6 py-2 rounded-full shadow-lg text-lg font-semibold">
                  Director
                </div>
              </div>
            </div>
            {/* Content Side */}
            <div className="w-full lg:w-2/3">
              <div className="backdrop-blur-lg bg-white/70 dark:bg-black/40 rounded-3xl shadow-xl p-10 border border-accent/30">
                <h2 className="text-4xl font-extrabold text-secondary mb-2 flex items-center gap-3">
                  <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Nawab Sharif</span>
                  <span className="hidden lg:inline text-accent text-xl font-semibold">(Director)</span>
                </h2>
                <p className="text-lg text-foreground mb-8 italic">
                  “Leading Flicker Sports with vision, passion, and a relentless drive for excellence.”
                </p>
                <ul className="space-y-5">
                  <li className="flex items-start gap-4">
                    <span className="flex-shrink-0 mt-1">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-accent to-primary shadow-lg">
                        <Award className="w-5 h-5 text-white" />
                      </span>
                    </span>
                    <span>
                      <span className="font-semibold text-secondary">25+ years</span> of leadership in the sports industry
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex-shrink-0 mt-1">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-accent to-primary shadow-lg">
                        <Zap className="w-5 h-5 text-white" />
                      </span>
                    </span>
                    <span>
                      Committed to <span className="font-semibold text-secondary">innovation</span> and <span className="font-semibold text-secondary">quality</span>
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex-shrink-0 mt-1">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-accent to-primary shadow-lg">
                        <Users className="w-5 h-5 text-white" />
                      </span>
                    </span>
                    <span>
                      Empowering athletes and institutions <span className="font-semibold text-secondary">across India</span>
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex-shrink-0 mt-1">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-accent to-primary shadow-lg">
                        <Globe className="w-5 h-5 text-white" />
                      </span>
                    </span>
                    <span>
                      Building a legacy of <span className="font-semibold text-secondary">trust</span> and <span className="font-semibold text-secondary">excellence</span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      

      {/* We Serve */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 rounded-xl bg-gradient-to-br from-accent/10 to-primary/10 shadow">
              <Users className="w-8 h-8 mx-auto text-accent mb-2" />
              <h3 className="font-semibold text-secondary mb-1">Schools & Colleges</h3>
              <p className="text-foreground text-sm">Supplying quality equipment for budding athletes and students.</p>
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 shadow">
              <Award className="w-8 h-8 mx-auto text-primary mb-2" />
              <h3 className="font-semibold text-secondary mb-1">Sports Clubs</h3>
              <p className="text-foreground text-sm">Partnering with clubs to foster competitive excellence.</p>
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-br from-accent/10 to-primary/10 shadow">
              <Globe className="w-8 h-8 mx-auto text-accent mb-2" />
              <h3 className="font-semibold text-secondary mb-1">Institutions</h3>
              <p className="text-foreground text-sm">Equipping institutions for national and international events.</p>
            </div>
          </div>
        </div>
      </section>

     

      {/* Support & Conclusion Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row gap-10 w-full">
            {/* Our Support */}
            <div className="flex-1 rounded-2xl bg-white/80 dark:bg-black/40 shadow-lg p-10 flex flex-col items-center justify-center">
              <Users className="w-12 h-12 text-accent mb-4" />
              <h2 className="text-2xl md:text-3xl font-extrabold text-secondary mb-3 text-center">Our Support</h2>
              <p className="text-foreground text-center">
                Our dedicated support team is always ready to assist you, from product selection to after-sales service.<br />
                We value long-term relationships and customer satisfaction above all.
              </p>
            </div>
            {/* Conclusion */}
            <div className="flex-1 rounded-2xl bg-white/80 dark:bg-black/40 shadow-lg p-10 flex flex-col items-center justify-center">
              <Award className="w-12 h-12 text-accent mb-4" />
              <h2 className="text-2xl md:text-3xl font-extrabold text-secondary mb-3 text-center">
                Ready to Elevate Your Game?
              </h2>
              <p className="text-lg text-foreground mb-4 text-center">
                Join hands with <span className="font-semibold text-primary">Flicker Sports Industries</span> and experience the difference in <span className="text-accent font-semibold">quality</span>, <span className="text-primary font-semibold">service</span>, and <span className="text-accent font-semibold">commitment</span>.
              </p>
              <p className="text-foreground text-center">
                Together, let’s build a stronger sporting future for India.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;