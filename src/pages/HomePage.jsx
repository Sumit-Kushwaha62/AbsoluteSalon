import React from 'react';
import { PageMeta } from '../components/ui/PageMeta';
import { Hero } from '../components/sections/Hero';
import { TrustStrip } from '../components/sections/TrustStrip';
import { ServicesTeaser } from '../components/sections/ServicesTeaser';
import { BridalExperience } from '../components/sections/BridalExperience';
import { Transformations } from '../components/sections/Transformations';
import { GalleryTeaser } from '../components/sections/GalleryTeaser';
import { About } from '../components/sections/About';
import { Reviews } from '../components/sections/Reviews';
import { SalonExperience } from '../components/sections/SalonExperience';
import { LocationContact } from '../components/sections/LocationContact';
import { BookingCTA } from '../components/sections/BookingCTA';

export const HomePage = () => {
  return (
    <>
      <PageMeta
        title="Absolute Salon | Luxury Hair & Beauty Salon Jabalpur"
        description="Absolute Salon is Jabalpur's premier luxury salon specializing in HD bridal makeup, precision haircuts, balayage, organic hair botox, and dermal skin care in Vijay Nagar."
      />
      <Hero />
      <TrustStrip />
      <About />
      <ServicesTeaser />
      <BridalExperience />
      <Transformations />
      <GalleryTeaser />
      <Reviews />
      <SalonExperience />
      <LocationContact />
      <BookingCTA />
    </>
  );
};

export default HomePage;
