import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const MajorInstallations = () => {
  const installations = [
    {
      name: "National Sports Academy",
      location: "Delhi",
      image: "/assets/Home/delhi.jpg",
      website: "#"
    },
    {
      name: "State Sports Complex", 
      location: "Mumbai",
      image: "/assets/Home/mumbai.jpg",
      website: "#"
    },
    {
      name: "Central University Sports",
      location: "Bangalore",
      image: "/assets/Home/bangalore.jpg",
      website: "#"
    },
    {
      name: "Defense Sports Academy",
      location: "Pune",
      image: "/assets/Home/Pune.jpg",
      website: "#"
    },
    {
      name: "Olympic Training Center",
      location: "Hyderabad",
      image: "/assets/Home/hyderabad.jpg",
      website: "#"
    },
    {
      name: "Regional Sports Hub",
      location: "Chennai",
      image: "/assets/Home/chennai.jpg", 
      website: "#"
    }
  ];

  const [modalOpen, setModalOpen] = useState(false);
  const [activeInstallation, setActiveInstallation] = useState(null);

  const openModal = (installation) => {
    setActiveInstallation(installation);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setActiveInstallation(null);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      {/* Modal */}
      {modalOpen && activeInstallation && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="bg-white rounded-xl shadow-2xl p-6 max-w-md w-full flex flex-col items-center relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-black text-2xl"
              aria-label="Close"
            >
              &times;
            </button>
            <img
              src={activeInstallation.image}
              alt={activeInstallation.name}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold text-center mb-1">{activeInstallation.name}</h3>
            <p className="text-lg text-gray-600 text-center">{activeInstallation.location}</p>
          </div>
        </div>
      )}
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-secondary mb-4">
          Our Partnerships and Collaborations
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </div>

        <div className="relative">
          {/* Navigation Arrows */}
          {/* <button className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all">
            <ChevronRight className="w-6 h-6" />
          </button> */}

          {/* Installations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-0 md:px-16">
            {installations.map((installation, index) => (
              <Link
                key={index}
                to="#"
                onClick={e => {
                  e.preventDefault();
                  openModal(installation);
                }}
                className="group sports-card bg-card rounded-xl overflow-hidden border border-border shadow-lg hover:shadow-xl transition-all"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={installation.image}
                    alt={installation.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-bold mb-1">{installation.name}</h3>
                    <p className="text-sm text-gray-200">{installation.location}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MajorInstallations;