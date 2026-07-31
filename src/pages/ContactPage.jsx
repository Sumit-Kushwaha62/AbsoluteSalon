import React from 'react';
import { PageMeta } from '../components/ui/PageMeta';
import { PageHero } from '../components/ui/PageHero';
import { LocationContact } from '../components/sections/LocationContact';
import { Reviews } from '../components/sections/Reviews';
import { BookingCTA } from '../components/sections/BookingCTA';

export const ContactPage = () => {
  return (
    <>
      <PageMeta
        title="Branches & Contact | Absolute Salon Jabalpur (Vijay Nagar & Shastri Nagar)"
        description="Visit Absolute Salon at our 2 premium Jabalpur branches: Vijay Nagar (Ekta Chowk) and Shastri Nagar (New Branch). Contact: +91 70004 20649 or +91 91113 10012."
      />
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
