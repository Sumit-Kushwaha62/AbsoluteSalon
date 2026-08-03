export const BRANCHES = [
  {
    id: "vijay-nagar",
    name: "Vijay Nagar Branch",
    shortName: "Vijay Nagar",
    tagline: "Main Branch • Ekta Chowk",
    badge: "Main Branch",
    isPrimary: true,
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
      landmark: "Opp. Mahalaxmi Jewellers",
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
    googleMaps: {
      url: "https://share.google/ltbqdVZ5acpj1MG0q",
      embedUrl: "https://maps.google.com/maps?q=Ekta+Chowk,+Plot+No.+53,+Opp.+Mahalaxmi+Jewellers,+Vijay+Nagar,+Jabalpur,+Madhya+Pradesh+482002&z=15&output=embed"
    },
    hours: "10:00 AM - 8:30 PM",
    popularServices: [
      "Bridal Make-up", "Hair Styling", "Balayage", "Dermal Skin Care"
    ]
  },
  {
    id: "shastri-nagar",
    name: "Shastri Nagar Branch",
    shortName: "Shastri Nagar",
    tagline: "Behind Khushi Mobile",
    badge: "New Branch",
    isPrimary: false,
    rating: {
      score: 5.0,
      reviewsCount: 22,
      displayText: "5.0 ★ Google Rating (22 Reviews)"
    },
    address: {
      street: "Plot No. 32/2, Behind Khushi Mobile, New Shastri Nagar",
      area: "Shastri Nagar",
      city: "Jabalpur",
      state: "Madhya Pradesh",
      pincode: "482003",
      country: "India",
      landmark: "Behind Khushi Mobile",
      fullAddress: "Plot no 32/2, behind Khushi Mobile, New Shastri Nagar, Shastri Nagar, Jabalpur, Madhya Pradesh 482003"
    },
    phone: {
      raw: "+919111310012",
      display: "+91 91113 10012"
    },
    email: {
      address: "absolutesalonjabalpur@gmail.com",
      mailto: "mailto:absolutesalonjabalpur@gmail.com"
    },
    googleMaps: {
      url: "https://share.google/CIpXGbTpQK7aNg2fA",
      embedUrl: "https://maps.google.com/maps?q=Plot+no+32/2,+behind+Khushi+Mobile,+New+Shastri+Nagar,+Shastri+Nagar,+Jabalpur,+Madhya+Pradesh+482003&t=&z=15&ie=UTF8&iwloc=&output=embed"
    },
    hours: "Opens 9:30 AM",
    popularServices: [
      "Body Waxing", "Bridal Make-up", "Eyebrow Threading", "Hairstyling", 
      "Hair Treatments", "Skin Care", "Balayage", "Blow Dry", "Braids", 
      "Brazilian Waxing", "Facials", "Manicure & Pedicure"
    ]
  }
];

export const BUSINESS_INFO = {
  name: "Absolute Salon",
  tagline: "Where Beauty Becomes Art",
  experienceYears: "15+",
  positioning: "Professional Makeup Artist | Hair • Skin • Makeup",
  
  rating: {
    score: 4.9,
    reviewsCount: 532,
    displayText: "4.9 ★ Google Rating (532 Total Reviews)"
  },
  
  // Primary Address for backward compatibility
  address: BRANCHES[0].address,
  phone: BRANCHES[0].phone,
  email: BRANCHES[0].email,

  // All branches array
  branches: BRANCHES,

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
    googleMapsVijayNagar: {
      label: "Vijay Nagar Branch (Maps)",
      url: "https://share.google/ltbqdVZ5acpj1MG0q"
    },
    googleMapsShastriNagar: {
      label: "Shastri Nagar Branch (Maps)",
      url: "https://share.google/CIpXGbTpQK7aNg2fA"
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
