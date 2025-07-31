import React from 'react';
import airforceAcademyBangalore from '../assets/clients/airforce-academy-bangalore.png';
import airforceAcademyHyderabad from '../assets/clients/airforce-academy-hyderabad.jpg';
import centuryRealEstate from '../assets/clients/century-real-estate-holding-pvt-ltd.png';
import crpfDeptJammu from '../assets/clients/crpf-dept-jammu.jpg';
import garwareTechnicalFibres from '../assets/clients/garware-technical-fibres-ltd.jpg';
import greatSportsTech from '../assets/clients/great-sports-tech-limited.jpg';
import mechezoSports from '../assets/clients/mechezo-sports-pvt-ltd.jpg';
import sainikSchoolSambalpur from '../assets/clients/sainik-school-sambalpur-logo.jpg';
import sreenidhiDeccanFootball from '../assets/clients/sreenidhi-deccan-football-club-pvt-ltd-hyderabad.png';
import tataJamshedpur from '../assets/clients/tata-jamshedpur.jpg';
import woxsenUniversity from '../assets/clients/woxsen-university-hyderabad.jpg';

const ClientsSection = () => {
  const clients = [
    { name: "Air Force Academy Bangalore", logo: airforceAcademyBangalore },
    { name: "Air Force Academy Hyderabad", logo: airforceAcademyHyderabad },
    { name: "Century Real Estate Holding Pvt Ltd", logo: centuryRealEstate },
    { name: "CRPF Department Jammu", logo: crpfDeptJammu },
    { name: "Garware Technical Fibres Ltd", logo: garwareTechnicalFibres },
    { name: "Great Sports Tech Limited", logo: greatSportsTech },
    { name: "Mechezo Sports Pvt Ltd", logo: mechezoSports },
    { name: "Sainik School Sambalpur", logo: sainikSchoolSambalpur },
    { name: "Sreenidhi Deccan Football Club Pvt Ltd Hyderabad", logo: sreenidhiDeccanFootball },
    { name: "Tata Jamshedpur", logo: tataJamshedpur },
    { name: "Woxsen University Hyderabad", logo: woxsenUniversity }
  ];

  // Duplicate the clients array for seamless infinite scroll
  const sliderClients = [...clients, ...clients];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-secondary mb-4">
            Our Clients
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-lg text-foreground max-w-3xl mx-auto">
            Trusted by leading sports institutions, academies, and organizations across the country
          </p>
        </div>
      </div>

      {/* Infinite horizontal slider - full width */}
      <div className="overflow-hidden relative w-full">
        {/* Left white shadow */}
        <div
          className="pointer-events-none absolute left-0 top-0 h-full w-16 z-10"
          style={{ background: "linear-gradient(to right, rgba(255,255,255,0.8), transparent)" }}
        />
        {/* Right white shadow */}
        <div
          className="pointer-events-none absolute right-0 top-0 h-full w-16 z-10"
          style={{ background: "linear-gradient(to left, rgba(255,255,255,0.8), transparent)" }}
        />
        <div
          className="flex gap-8 animate-clients-slider"
          style={{ width: `${sliderClients.length * 220}px` }} // 220px per item approx
        >
          {sliderClients.map((client, idx) => (
            <div
              key={idx}
              className="group bg-card rounded-lg p-6 border border-border hover:shadow-lg transition-all min-w-[200px] flex-shrink-0"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="w-full h-16 object-contain mb-3 opacity-70 group-hover:opacity-100 transition-opacity"
              />
              <p className="text-sm text-center text-foreground font-medium">{client.name}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Add slider animation styles */}
      <style>
        {`
          @keyframes clients-slider {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-clients-slider {
            animation: clients-slider 30s linear infinite;
          }
        `}
      </style>
    </section>
  );
};

export default ClientsSection;