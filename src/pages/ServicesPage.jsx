import React from 'react';
import { PageHero } from '../components/ui/PageHero';
import { Services } from '../components/sections/Services';
import { BridalExperience } from '../components/sections/BridalExperience';
import { BookingCTA } from '../components/sections/BookingCTA';

export const ServicesPage = () => {
  return (
    <>
      <PageHero
        eyebrow="OUR SERVICE MENU"
        title="Signature Salon Services"
        description="Transparent pricing and tailored luxury care across Hair Artistry, Dermal Skincare, Nail Spa, and Bridal HD Makeup."
      />
      <Services />
      <BridalExperience />
      <BookingCTA />
    </>
  );
};

export default ServicesPage;
