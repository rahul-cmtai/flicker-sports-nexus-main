import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-primary/10 to-accent/5">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-secondary mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-foreground max-w-3xl mx-auto">
            Get in touch with our team for quotes, inquiries, or support. 
            We're here to help you create the perfect sports facility.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-secondary mb-8">
                Get In Touch
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-secondary mb-2">Address</h3>
                    <p className="text-foreground">
                      <span className="font-bold">FLICKER SPORTS INDUSTRIES</span><br />
                      Ground floor M N - 877 Islam Nagar Shekh Chowk Maliyana<br />
                      Pin code 250002<br />
                      <span className="font-semibold">GST No.:</span> 09BZMPA7204C1ZP
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-secondary mb-2">Contact</h3>
                    <p className="text-foreground">9045440618</p>
                    <p className="text-foreground">8858687912</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-secondary mb-2">Email</h3>
                    <p className="text-foreground">flickersports@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-secondary mb-2">Business Details</h3>
                    <p className="text-foreground mb-1"><span className="font-semibold">Entry Type:</span> Proprietorship</p>
                    <p className="text-foreground mb-1"><span className="font-semibold">Registration Type:</span> Regular</p>
                    <p className="text-foreground mb-1"><span className="font-semibold">Nature of Business:</span> Factory, Manufacturing, Wholesale, Business</p>
                    <p className="text-foreground mb-1"><span className="font-semibold">Registration Date:</span> 10/11/2020</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="sports-card bg-card p-8 rounded-xl border border-border">
              <h3 className="text-2xl font-bold text-secondary mb-6">Send us a Message</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <select className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all">
                    <option value="">Select a subject</option>
                    <option value="quote">Request Quote</option>
                    <option value="product">Product Inquiry</option>
                    <option value="support">Support</option>
                    <option value="partnership">Partnership</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                    placeholder="Tell us about your sports facility requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full cta-primary"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Float Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/911234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-all transform hover:scale-110"
        >
          <MessageCircle className="w-6 h-6 text-white" />
        </a>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;