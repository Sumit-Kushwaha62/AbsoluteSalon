import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SERVICE_CATEGORIES } from '../../data/services';
import { BUSINESS_INFO } from '../../data/business';
import { LuxuryButton } from '../ui/LuxuryButton';
import { ServiceCategoryTabs } from '../services/ServiceCategoryTabs';
import { ServiceSearch } from '../services/ServiceSearch';
import { ServicePriceCatalogue } from '../services/ServicePriceCatalogue';

export const Services = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');

  // Read selected category from URL parameter ?category=... (default to first category 'skin' or 'bridal-makeup')
  const activeCategoryId = useMemo(() => {
    const paramCategory = searchParams.get('category');
    if (paramCategory && SERVICE_CATEGORIES.some((cat) => cat.id === paramCategory)) {
      return paramCategory;
    }
    return SERVICE_CATEGORIES[0].id;
  }, [searchParams]);

  // Read selected subcategory from URL parameter ?subcategory=...
  const activeSubcategoryId = useMemo(() => {
    return searchParams.get('subcategory') || 'all';
  }, [searchParams]);

  // Handler to update category in URL
  const handleSelectCategory = (catId) => {
    setSearchQuery('');
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      next.set('category', catId);
      next.delete('subcategory');
      return next;
    });
  };

  // Handler to update subcategory in URL
  const handleSelectSubcategory = (subId) => {
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      if (subId && subId !== 'all') {
        next.set('subcategory', subId);
      } else {
        next.delete('subcategory');
      }
      return next;
    });
  };

  const selectedCategory = useMemo(() => {
    return SERVICE_CATEGORIES.find((cat) => cat.id === activeCategoryId) || SERVICE_CATEGORIES[0];
  }, [activeCategoryId]);

  // Filter search results across all categories and service rows
  const searchResults = useMemo(() => {
    if (!searchQuery || searchQuery.trim() === '') return [];

    const query = searchQuery.toLowerCase().trim();
    const matches = [];

    SERVICE_CATEGORIES.forEach((cat) => {
      cat.items.forEach((item) => {
        const nameMatch = item.name.toLowerCase().includes(query);
        const descMatch = item.shortDescription && item.shortDescription.toLowerCase().includes(query);
        const catMatch = cat.name.toLowerCase().includes(query);

        let rowMatch = false;
        if (item.priceRows) {
          rowMatch = item.priceRows.some(
            (r) => r.label.toLowerCase().includes(query) || r.price.toLowerCase().includes(query)
          );
        } else if (item.priceGroups) {
          rowMatch = item.priceGroups.some((g) =>
            g.rows.some((r) => r.label.toLowerCase().includes(query) || r.price.toLowerCase().includes(query))
          );
        }

        if (nameMatch || descMatch || catMatch || rowMatch) {
          matches.push({ ...item, categoryName: cat.name, categoryId: cat.id });
        }
      });
    });

    return matches;
  }, [searchQuery]);

  // Structured Data JSON-LD for SEO
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    "name": "Absolute Salon Jabalpur — Signature Services & Prices",
    "url": "https://absolutesalon.in/services",
    "numberOfItems": SERVICE_CATEGORIES.reduce((acc, cat) => acc + cat.items.length, 0),
    "itemListElement": SERVICE_CATEGORIES.map((cat, cIdx) => ({
      "@type": "OfferCatalog",
      "name": cat.name,
      "position": cIdx + 1,
      "itemListElement": cat.items.map((item, iIdx) => ({
        "@type": "Offer",
        "name": item.name,
        "position": iIdx + 1,
        "description": item.shortDescription || cat.description,
        "priceSpecification": item.startingPrice ? {
          "@type": "UnitPriceSpecification",
          "price": item.startingPrice.replace(/[^0-9]/g, ''),
          "priceCurrency": "INR"
        } : undefined
      }))
    }))
  };

  return (
    <section id="services" className="py-12 sm:py-16 bg-[var(--color-bg-base)] relative min-h-screen transition-colors duration-300">
      {/* Structured Data Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
      />

      {/* Lightweight Service Search Bar */}
      <ServiceSearch
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onClearSearch={() => setSearchQuery('')}
      />

      {/* Category Navigation Tabs (Sticky) */}
      {!searchQuery && (
        <ServiceCategoryTabs
          categories={SERVICE_CATEGORIES}
          activeCategory={activeCategoryId}
          onSelectCategory={handleSelectCategory}
        />
      )}

      {/* Main Catalogue Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12">
        <ServicePriceCatalogue
          category={selectedCategory}
          activeSubcategory={activeSubcategoryId}
          onSelectSubcategory={handleSelectSubcategory}
          searchResults={searchResults}
          searchQuery={searchQuery}
        />

        {/* Bespoke Consultation Action Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between p-8 card-editorial bg-[var(--color-bg-card)] border border-[var(--color-border-medium)] rounded-[28px] gap-4 mt-12 shadow-[var(--shadow-editorial)]">
          <div>
            <h5 className="font-serif-display text-2xl text-[var(--color-text-primary)]">
              Bespoke Beauty Consultations
            </h5>
            <p className="text-xs text-[var(--color-text-muted)] mt-1">
              Book an exclusive appointment with our senior beauty artists in Vijay Nagar, Jabalpur.
            </p>
          </div>
          <LuxuryButton
            href={BUSINESS_INFO.whatsapp.getUrl("Hi Absolute Salon, I would like to book a consultation.")}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            className="whitespace-nowrap"
          >
            Book Service
          </LuxuryButton>
        </div>
      </div>
    </section>
  );
};
