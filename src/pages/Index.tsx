import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutPreview from '@/components/AboutPreview';
import MajorInstallations from '@/components/MajorInstallations';
import StatsSection from '@/components/StatsSection';
import MiddleBanner from '@/components/MiddleBanner';
import FeaturedCategories from '@/components/FeaturedCategories';
import GalleryPreview from '@/components/GalleryPreview';
import ClientsSection from '@/components/ClientsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutPreview />
      <MajorInstallations />
      <StatsSection />
      <MiddleBanner />
      <FeaturedCategories />
      <GalleryPreview />
      <ClientsSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
