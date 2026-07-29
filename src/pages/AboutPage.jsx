import React from 'react';
import { PageMeta } from '../components/ui/PageMeta';
import { PageHero } from '../components/ui/PageHero';
import { About } from '../components/sections/About';
import { Stats } from '../components/sections/Stats';
import { SalonExperience } from '../components/sections/SalonExperience';
import { BookingCTA } from '../components/sections/BookingCTA';

export const AboutPage = () => {
  return (
    <>
      <PageMeta
        title="About Us | Absolute Salon Jabalpur"
        description="Learn about Absolute Salon's 15+ years of beauty artistry, brand philosophy, and bespoke salon experience in Vijay Nagar, Jabalpur."
      />
      <PageHero
        eyebrow="ABOUT ABSOLUTE SALON"
        title="15+ Years of Beauty Artistry"
        description="Discover the story, craftsmanship, and bespoke luxury experience behind Jabalpur's premier salon."
      />
      <About />
      <Stats />
      <SalonExperience />
      <BookingCTA />
    </>
  );
};

export default AboutPage;
