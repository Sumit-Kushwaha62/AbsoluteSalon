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
        title="Contact & Book Appointment | Absolute Salon Jabalpur"
        description="Book your salon appointment or consultation with Absolute Salon in Vijay Nagar, Jabalpur. Phone: +91 70004 20649."
      />
      <PageHero
        eyebrow="GET IN TOUCH"
        title="Visit Absolute Salon"
        description="Located opposite Mahalaxmi Jewellers in Vijay Nagar, Jabalpur. Reach out for consultations, inquiries, and appointments."
      />
      <LocationContact />
      <Reviews />
      <BookingCTA />
    </>
  );
};

export default ContactPage;
