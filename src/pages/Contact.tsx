'use client';
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

export default function Contact() {
  const [result, setResult] = React.useState('');
  const [showPopup, setShowPopup] = React.useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult('Sending...');
    const formData = new FormData(event.currentTarget);
    formData.append('access_key', '173c1e41-4388-4cf1-81e5-711cf1f4a049');

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult('Form Submitted Successfully');
      setShowPopup(true); // Show thank you popup
      event.currentTarget.reset();

      setTimeout(() => {
        setShowPopup(false); // Hide popup after 3 sec
        window.location.reload(); // Reload page
      }, 3000);
    } else {
      console.log('Error', data);
      setResult(data.message);
    }
  };

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
            Get in touch with our team for quotes, inquiries, or support. We're here to help you create the perfect sports facility.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-secondary mb-8">Get In Touch</h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center">
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
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-secondary mb-2">Contact</h3>
                    <p className="text-foreground">9045440618</p>
                    <p className="text-foreground">8858687912</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-secondary mb-2">Email</h3>
                    <p className="text-foreground">flickersportsindustries@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center">
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

              <form onSubmit={onSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">First Name</label>
                    <input type="text" name="first_name" required placeholder="John"
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Last Name</label>
                    <input type="text" name="last_name" required placeholder="Doe"
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <input type="email" name="email" required placeholder="john@example.com"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
                  <input type="tel" name="phone" placeholder="+91-XXXXXXXXXX"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
                  <select name="subject"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent">
                    <option value="">Select a subject</option>
                    <option value="quote">Request Quote</option>
                    <option value="product">Product Inquiry</option>
                    <option value="support">Ground Flooring</option>
                    <option value="partnership">Partnership</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                  <textarea name="message" rows={5} required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-accent"
                    placeholder="Tell us about your sports facility requirements..."></textarea>
                </div>

                <button type="submit" className="w-full cta-primary">
                  Send Message
                </button>
              </form>

              <p className="text-sm text-center text-muted-foreground mt-4">{result}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Thank You Popup */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-xl shadow-xl p-8 text-center max-w-sm w-full scale-100 transition-all duration-500">
            <h2 className="text-2xl font-bold text-green-600 mb-2">Thank You!</h2>
            <p className="text-gray-700">Your message has been submitted successfully.</p>
          </div>
        </div>
      )}



      <Footer />
    </div>
  );
}
