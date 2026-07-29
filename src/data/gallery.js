/**
 * Absolute Salon — Complete Portfolio & Instagram Gallery Dataset
 * Includes optimized real Instagram images, hair cut/treatment video reels, and before/after transformation reels.
 */

export const GALLERY_CATEGORIES = [
  'All',
  'Hair Cut & Treatments',
  'Before & After Reels',
  'Bridal & Makeup',
  'Salon Studio'
];

export const GALLERY_ITEMS = [
  // --- REAL INSTAGRAM HAIR CUT & TREATMENT VIDEO REELS ---
  {
    id: "ig-h1",
    type: "video",
    title: "Precision Layered Haircut & Blow Dry",
    category: "Hair Cut & Treatments",
    src: "/media/instagram/haircut/haircut1.mp4",
    poster: "/media/instagram/haircut/haircut1_poster.webp",
    aspect: "tall",
    caption: "Multi-layered precision haircut creating bouncy movement, soft framing, and effortless volume."
  },
  {
    id: "ig-h2",
    type: "video",
    title: "Silk Nanoplastia & Hair Botox Therapy",
    category: "Hair Cut & Treatments",
    src: "/media/instagram/haircut/haircut2.mp4",
    poster: "/media/instagram/haircut/haircut2_poster.webp",
    aspect: "tall",
    caption: "Deep protein reconstruction treatment leaving unruly hair silk-smooth, frizz-free, and shiny."
  },
  {
    id: "ig-h3",
    type: "video",
    title: "Dimensional Honey Balayage & Styling",
    category: "Hair Cut & Treatments",
    src: "/media/instagram/haircut/haircut3.mp4",
    poster: "/media/instagram/haircut/haircut3_poster.webp",
    aspect: "tall",
    caption: "Seamless hand-painted balayage highlights with warm golden reflections and soft waves."
  },
  {
    id: "ig-h4",
    type: "video",
    title: "Keratin Smooth Therapy & Gloss Finish",
    category: "Hair Cut & Treatments",
    src: "/media/instagram/haircut/haircut4.mp4",
    poster: "/media/instagram/haircut/haircut4_poster.webp",
    aspect: "tall",
    caption: "Mirror-shine keratin straightening session for smooth, touchable, ultra-glossy locks."
  },
  {
    id: "ig-h5",
    type: "video",
    title: "Texturized Modern Bob Haircut",
    category: "Hair Cut & Treatments",
    src: "/media/instagram/haircut/haircut5.mp4",
    poster: "/media/instagram/haircut/haircut5_poster.webp",
    aspect: "tall",
    caption: "Chic texturized short haircut styled with effortless beachy waves and dimensional cut."
  },
  {
    id: "ig-h6",
    type: "video",
    title: "Nourishing Hair Spa & Scalp Therapy",
    category: "Hair Cut & Treatments",
    src: "/media/instagram/haircut/haircut6.mp4",
    poster: "/media/instagram/haircut/haircut6_poster.webp",
    aspect: "tall",
    caption: "Relaxing deep head massage and essential oil hair spa ritual for root vitality."
  },

  // --- REAL INSTAGRAM BEFORE & AFTER TRANSFORMATION VIDEO REELS ---
  {
    id: "ig-ba1",
    type: "video",
    title: "Frizzy to Silk Nanoplastia Transformation",
    category: "Before & After Reels",
    src: "/media/instagram/beforeafter/beforeafterreel1.mp4",
    poster: "/media/instagram/beforeafter/beforeafterreel1_poster.webp",
    aspect: "tall",
    caption: "Before and after video showing instant frizz elimination and high-gloss hair transformation.",
    isTransformation: true
  },
  {
    id: "ig-ba2",
    type: "video",
    title: "Complete Royal Bridal Glam Makeover",
    category: "Before & After Reels",
    src: "/media/instagram/beforeafter/beforeafterreel2.mp4",
    poster: "/media/instagram/beforeafter/beforeafterreel2_poster.webp",
    aspect: "tall",
    caption: "Stunning step-by-step HD airbrush bridal transformation video reel.",
    isTransformation: true
  },
  {
    id: "ig-ba3",
    type: "video",
    title: "Damaged Hair to Glossy Balayage Repair",
    category: "Before & After Reels",
    src: "/media/instagram/beforeafter/beforeafterreel3.mp4",
    poster: "/media/instagram/beforeafter/beforeafterreel3_poster.webp",
    aspect: "tall",
    caption: "Dull hair revived with custom balayage coloring and structural bond repair.",
    isTransformation: true
  },
  {
    id: "ig-ba4",
    type: "video",
    title: "Dewy Engagement Makeover Reveal",
    category: "Before & After Reels",
    src: "/media/instagram/beforeafter/beforeafterreel4.mp4",
    poster: "/media/instagram/beforeafter/beforeafterreel4_poster.webp",
    aspect: "tall",
    caption: "Radiant engagement look before and after makeup reveal reel.",
    isTransformation: true
  },

  // --- REAL INSTAGRAM GALLERY IMAGES ---
  {
    id: "ig-g1",
    type: "image",
    title: "Royal Indian Bridal Artistry",
    category: "Bridal & Makeup",
    src: "/media/instagram/gallery/gallaryimage1.webp",
    aspect: "tall",
    caption: "High-definition royal heritage bridal makeup with intricate hair jewelry draping."
  },
  {
    id: "ig-g2",
    type: "image",
    title: "Porcelain Engagement Glow",
    category: "Bridal & Makeup",
    src: "/media/instagram/gallery/gallaryimage2.webp",
    aspect: "tall",
    caption: "Soft dewy engagement look with defined eyes and luminous skin finish."
  },
  {
    id: "ig-g3",
    type: "image",
    title: "Celebrity HD Party Glam",
    category: "Bridal & Makeup",
    src: "/media/instagram/gallery/gallaryimage3.webp",
    aspect: "tall",
    caption: "HD camera-ready evening portrait makeup for grand celebrations."
  },
  {
    id: "ig-g4",
    type: "image",
    title: "Signature Bridal Makeup & Draping",
    category: "Bridal & Makeup",
    src: "/media/instagram/gallery/gallaryimage4.webp",
    aspect: "tall",
    caption: "Precision bridal makeup and elegant traditional hairstyle crafting."
  },
  {
    id: "ig-g5",
    type: "image",
    title: "Aesthetic Salon Vanity Suite",
    category: "Salon Studio",
    src: "/media/instagram/gallery/gallaryimage5.webp",
    aspect: "tall",
    caption: "Our comfortable illuminated vanity transformation stations in Vijay Nagar, Jabalpur."
  },
  {
    id: "ig-g6",
    type: "image",
    title: "Sculpted Red Lip Glamour",
    category: "Bridal & Makeup",
    src: "/media/instagram/gallery/gallaryimage6.webp",
    aspect: "tall",
    caption: "Classic red lip artistry with seamless contouring and glowing highlights."
  }
];
