import React from 'react';
import { Building, MapPin } from 'lucide-react';

const StatsSection = () => {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
              <Building className="w-8 h-8 text-white" />
            </div>
            <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">4.6 Lakh</div>
            <p className="text-lg text-secondary font-medium">SFT. of sports infrastructure</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">Over 2500</div>
            <p className="text-lg text-secondary font-medium">Installations Across India</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;