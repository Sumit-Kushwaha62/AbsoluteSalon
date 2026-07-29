export const BUSINESS_INFO = {
  name: "Absolute Salon",
  tagline: "Where Beauty Becomes Art",
  experienceYears: "15+",
  positioning: "Professional Makeup Artist | Hair • Skin • Makeup",
  
  rating: {
    score: 4.9,
    reviewsCount: 510,
    displayText: "4.9 ★ Google Rating (510+ Reviews)"
  },
  
  address: {
    street: "Ekta Chowk, Plot No. 53, Opp. Mahalaxmi Jewellers",
    area: "Vijay Nagar",
    city: "Jabalpur",
    state: "Madhya Pradesh",
    pincode: "482002",
    country: "India",
    fullAddress: "Ekta Chowk, Plot No. 53, Opp. Mahalaxmi Jewellers, Vijay Nagar, Jabalpur, Madhya Pradesh 482002, India"
  },
  
  phone: {
    raw: "+917000420649",
    display: "+91 70004 20649"
  },

  email: {
    address: "absolutesalonjabalpur@gmail.com",
    mailto: "mailto:absolutesalonjabalpur@gmail.com"
  },

  // Legacy social object for backward compatibility
  social: {
    instagram: {
      handle: "@absolutesalon_jabalpur",
      url: "https://www.instagram.com/absolutesalon_jabalpur/"
    },
    googleBusiness: {
      url: "https://share.google/ltbqdVZ5acpj1MG0q"
    }
  },

  // Centralized socials dictionary
  socials: {
    instagram: {
      label: "Instagram",
      handle: "@absolutesalon_jabalpur",
      url: "https://www.instagram.com/absolutesalon_jabalpur/"
    },
    whatsapp: {
      label: "WhatsApp",
      number: "917000420649",
      url: "https://wa.me/917000420649?text=Hi%20Absolute%20Salon%2C%20I%20would%20like%20to%20book%20an%20appointment."
    },
    googleMaps: {
      label: "Google Maps",
      url: "https://share.google/ltbqdVZ5acpj1MG0q"
    },
    facebook: {
      label: "Facebook",
      url: "https://www.facebook.com/profile.php?id=61571851076709"
    }
  },

  whatsapp: {
    number: "917000420649",
    defaultMessage: "Hi Absolute Salon, I would like to book an appointment.",
    getUrl: function(customMessage) {
      const msg = customMessage || this.defaultMessage;
      return `https://wa.me/${this.number}?text=${encodeURIComponent(msg)}`;
    }
  }
};
