import React from 'react';
import { Hero } from '../components/sections/Hero';
import { TrustStrip } from '../components/sections/TrustStrip';
import { ServicesTeaser } from '../components/sections/ServicesTeaser';
import { BridalExperience } from '../components/sections/BridalExperience';
import { Transformations } from '../components/sections/Transformations';
import { GalleryTeaser } from '../components/sections/GalleryTeaser';
import { About } from '../components/sections/About';
import { SocialReels } from '../components/sections/SocialReels';
import { Reviews } from '../components/sections/Reviews';
import { SalonExperience } from '../components/sections/SalonExperience';
import { LocationContact } from '../components/sections/LocationContact';
import { BookingCTA } from '../components/sections/BookingCTA';

export const HomePage = () => {
  return (
    <>
      <Hero />
      <TrustStrip />
      <About />
      <ServicesTeaser />
      <BridalExperience />
      <Transformations />
      <GalleryTeaser />
      <SocialReels />
      <Reviews />
      <SalonExperience />
      <LocationContact />
      <BookingCTA />
    </>
  );
};

export default HomePage;
