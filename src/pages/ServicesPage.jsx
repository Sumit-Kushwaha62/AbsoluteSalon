import React from 'react';
import { PageMeta } from '../components/ui/PageMeta';
import { PageHero } from '../components/ui/PageHero';
import { Services } from '../components/sections/Services';
import { BridalExperience } from '../components/sections/BridalExperience';
import { BookingCTA } from '../components/sections/BookingCTA';

export const ServicesPage = () => {
  return (
    <>
      <PageMeta
        title="Salon Services & Menu | Absolute Salon Jabalpur"
        description="Explore Absolute Salon's complete service catalogue and transparent pricing for Hair Artistry, Dermal Skincare, Nail Spa, and HD Bridal Makeup."
      />
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
