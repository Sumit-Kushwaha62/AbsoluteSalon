import React from 'react';
import { PageHero } from '../components/ui/PageHero';
import { LocationContact } from '../components/sections/LocationContact';
import { Reviews } from '../components/sections/Reviews';
import { BookingCTA } from '../components/sections/BookingCTA';

export const ContactPage = () => {
  return (
    <>
      <PageHero
        eyebrow="OUR LOCATIONS"
        title="Visit Absolute Salon"
        description="Serving you at 2 premium locations in Jabalpur: Vijay Nagar Branch & Shastri Nagar Branch. Reach out for appointments and consultations."
      />
      <LocationContact />
      <Reviews />
      <BookingCTA />
    </>
  );
};

export default ContactPage;
