import React from 'react';
import { PageHero } from '../components/ui/PageHero';
import { About } from '../components/sections/About';
import { Stats } from '../components/sections/Stats';
import { SalonExperience } from '../components/sections/SalonExperience';
import { BookingCTA } from '../components/sections/BookingCTA';

export const AboutPage = () => {
  return (
    <>
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
