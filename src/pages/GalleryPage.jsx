import React from 'react';
import { PageMeta } from '../components/ui/PageMeta';
import { PageHero } from '../components/ui/PageHero';
import { Gallery } from '../components/sections/Gallery';
import { Transformations } from '../components/sections/Transformations';
import { SocialReels } from '../components/sections/SocialReels';
import { BookingCTA } from '../components/sections/BookingCTA';

export const GalleryPage = () => {
  return (
    <>
      <PageMeta
        title="Gallery & Transformations | Absolute Salon Jabalpur"
        description="View real client transformations, high-definition bridal finishes, balayage hair art, and aesthetic work at Absolute Salon Jabalpur."
      />
      <PageHero
        eyebrow="OUR WORK & PORTFOLIO"
        title="Visual Showcase & Transformations"
        description="Explore real client transformations, high-definition bridal finishes, balayage hair art, and aesthetic details."
      />
      <Gallery />
      <Transformations />
      <SocialReels />
      <BookingCTA />
    </>
  );
};

export default GalleryPage;
