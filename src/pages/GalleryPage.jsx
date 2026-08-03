import React from 'react';
import { PageHero } from '../components/ui/PageHero';
import { Gallery } from '../components/sections/Gallery';
import { Transformations } from '../components/sections/Transformations';
import { SocialReels } from '../components/sections/SocialReels';
import { BookingCTA } from '../components/sections/BookingCTA';

export const GalleryPage = () => {
  return (
    <>
      <PageHero
        eyebrow="OUR WORK & PORTFOLIO"
        title="Visual Showcase & Transformations"
        description="Explore real client transformations, high-definition bridal finishes, balayage hair art, and aesthetic details."
      />
      <Transformations />
      <Gallery />
      <SocialReels />
      <BookingCTA />
    </>
  );
};

export default GalleryPage;
