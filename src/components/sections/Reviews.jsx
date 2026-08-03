import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { BUSINESS_INFO } from '../../data/business';

export const Reviews = () => {
  const reviewsList = [
    {
      id: "r1",
      author: "Pooja Sharma",
      service: "Bridal Makeup & Styling",
      rating: 5,
      comment: "Absolute Salon in Vijay Nagar did my bridal makeup and it was absolutely stunning! High definition airbrush makeup that lasted all night. Highly recommend their bridal packages."
    },
    {
      id: "r2",
      author: "Ananya Patel",
      service: "Balayage & Hair Care",
      rating: 5,
      comment: "The best hair salon experience in Jabalpur! Got a balayage transformation done here with total care for hair texture. Super professional artists."
    },
    {
      id: "r3",
      author: "Ritu Verma",
      service: "Party Makeup & Facial",
      rating: 5,
      comment: "15+ years experience really shows in their precision. Hygiene, ambiance, and warmth are unbeatable. 5 stars all the way!"
    }
  ];

  return (
    <section id="reviews" className="py-28 md:py-36 bg-[var(--color-bg-base)] relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-[11px] uppercase tracking-[0.25em] text-[var(--color-gold-accent)] font-semibold mb-3">
            CLIENT ENDORSEMENTS
          </span>
          <h2 className="font-serif-display text-4xl sm:text-6xl text-[var(--color-text-primary)] font-normal">
            Google Reviews & Trust
          </h2>

          <div className="mt-4 flex items-center gap-2 text-xs text-[var(--color-text-secondary)]">
            <div className="flex items-center gap-1 text-[var(--color-gold-accent)]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[var(--color-gold-accent)] text-[var(--color-gold-accent)]" />
              ))}
            </div>
            <span className="font-semibold">{BUSINESS_INFO.rating.score} / 5.0</span>
            <span className="text-[var(--color-text-muted)]">({BUSINESS_INFO.rating.reviewsCount}+ Verified Client Reviews)</span>
          </div>

          <div className="w-12 h-[1px] bg-[var(--color-gold-accent)]/40 mt-6" />
        </div>

        {/* Editorial Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {reviewsList.map((rev, idx) => (
            <motion.div
              key={rev.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="p-8 card-editorial bg-[var(--color-bg-card)] border border-[var(--color-border-medium)] rounded-[28px] flex flex-col justify-between relative group"
            >
              <Quote className="w-10 h-10 text-[var(--color-gold-accent)]/15 absolute top-6 right-6" />
              <div>
                <div className="flex items-center gap-1 text-[var(--color-gold-accent)] mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[var(--color-gold-accent)] text-[var(--color-gold-accent)]" />
                  ))}
                </div>
                <p className="font-serif-display text-lg text-[var(--color-text-primary)] leading-relaxed italic mb-8 font-light">
                  "{rev.comment}"
                </p>
              </div>

              <div className="border-t border-[var(--color-border-subtle)] pt-4 flex justify-between items-center">
                <div>
                  <h3 className="font-serif-display text-xl text-[var(--color-text-primary)]">
                    {rev.author}
                  </h3>
                  <span className="text-[10px] text-[var(--color-gold-accent)] uppercase tracking-wider">
                    {rev.service}
                  </span>
                </div>
                <span className="text-[10px] text-[var(--color-text-muted)] uppercase tracking-widest">
                  Google Review
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href={BUSINESS_INFO.socials.googleMaps.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[var(--color-gold-accent)] hover:underline font-semibold"
          >
            Read All Reviews On Google Business →
          </a>
        </div>
      </div>
    </section>
  );
};
