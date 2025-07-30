import React from 'react';

const ClientsSection = () => {
  const clients = [
    { name: "Defense Academy Delhi", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop" },
    { name: "Central Sports Authority", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop" },
    { name: "National Sports University", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop" },
    { name: "State Olympic Committee", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop" },
    { name: "Premier Sports Club", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop" },
    { name: "Tech Sports Complex", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop" },
    { name: "Elite Training Center", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop" },
    { name: "International Sports Hub", logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop" }
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