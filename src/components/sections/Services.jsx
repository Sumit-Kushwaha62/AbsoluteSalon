import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SERVICE_CATEGORIES } from '../../data/services';
import { BUSINESS_INFO } from '../../data/business';
import { LuxuryButton } from '../ui/LuxuryButton';
import { ServiceCategoryTabs } from '../services/ServiceCategoryTabs';
import { SubCategoryTabs } from '../services/SubCategoryTabs';
import { ServiceSearch } from '../services/ServiceSearch';
import { ServicePriceCatalogue } from '../services/ServicePriceCatalogue';
import { sanitizePricingLabel } from '../../utils/pricingFormatter';

export const Services = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSubCategory, setActiveSubCategory] = useState('all');

  // Read selected category from URL parameter ?category=... (default to 'skin' / Skin Care & Aesthetics)
  const activeCategoryId = useMemo(() => {
    const paramCategory = searchParams.get('category');
    if (paramCategory && SERVICE_CATEGORIES.some((cat) => cat.id === paramCategory)) {
      return paramCategory;
    }
    return 'skin';
  }, [searchParams]);

  // Handler to update category in URL & reset subcategory
  const handleSelectCategory = (catId) => {
    setSearchQuery('');
    setActiveSubCategory('all');
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      next.set('category', catId);
      next.delete('subcategory');
      return next;
    });
  };

  const selectedCategory = useMemo(() => {
    return SERVICE_CATEGORIES.find((cat) => cat.id === activeCategoryId) || SERVICE_CATEGORIES[0];
  }, [activeCategoryId]);

  // Flatten and search across all categories and service price rows
  const searchResults = useMemo(() => {
    if (!searchQuery || searchQuery.trim() === '') return [];

    const query = searchQuery.toLowerCase().trim();
    const rowsMatch = [];

    SERVICE_CATEGORIES.forEach((cat) => {
      cat.items.forEach((item) => {
        const catName = cat.name;
        const itemName = sanitizePricingLabel(item.name);
        const itemDesc = sanitizePricingLabel(item.shortDescription || '');

        const itemMatchesQuery =
          catName.toLowerCase().includes(query) ||
          itemName.toLowerCase().includes(query) ||
          itemDesc.toLowerCase().includes(query);

        if (item.priceRows) {
          item.priceRows.forEach((row) => {
            const rowLabel = sanitizePricingLabel(row.label || '');
            const rowPrice = row.price || '';
            const rowDesc = sanitizePricingLabel(row.description || '');
            const rowMatchesQuery =
              itemMatchesQuery ||
              rowLabel.toLowerCase().includes(query) ||
              rowPrice.toLowerCase().includes(query) ||
              rowDesc.toLowerCase().includes(query);

            if (rowMatchesQuery) {
              rowsMatch.push({
                label: rowLabel || itemName,
                price: rowPrice,
                variant: row.variant || '',
                description: rowDesc || (rowLabel !== itemName ? itemDesc : ''),
                context: `${catName} • ${itemName}`
              });
            }
          });
        } else if (item.priceGroups) {
          item.priceGroups.forEach((group) => {
            const groupTitle = sanitizePricingLabel(group.title || '');
            const groupDesc = sanitizePricingLabel(group.description || '');
            const groupMatchesQuery =
              itemMatchesQuery ||
              groupTitle.toLowerCase().includes(query) ||
              groupDesc.toLowerCase().includes(query);

            group.rows.forEach((row) => {
              const rowLabel = sanitizePricingLabel(row.label || '');
              const rowPrice = row.price || '';
              const rowDesc = sanitizePricingLabel(row.description || '');
              const rowMatchesQuery =
                groupMatchesQuery ||
                rowLabel.toLowerCase().includes(query) ||
                rowPrice.toLowerCase().includes(query) ||
                rowDesc.toLowerCase().includes(query);

              if (rowMatchesQuery) {
                rowsMatch.push({
                  label: rowLabel || groupTitle || itemName,
                  price: rowPrice,
                  variant: row.variant || '',
                  description: rowDesc,
                  context: `${catName} • ${groupTitle || itemName}`
                });
              }
            });
          });
        }
      });
    });

    return rowsMatch;
  }, [searchQuery]);

  return (
    <section id="services" className="py-8 sm:py-12 bg-[var(--color-bg-base)] relative min-h-screen transition-colors duration-300">
      {/* Lightweight Service Search Bar */}
      <ServiceSearch
        searchQuery={searchQuery}
        onSearchChange={(q) => {
          setSearchQuery(q);
          if (q) setActiveSubCategory('all');
        }}
        onClearSearch={() => setSearchQuery('')}
      />

      {/* Level-1 Category Navigation Tabs */}
      {!searchQuery && (
        <ServiceCategoryTabs
          categories={SERVICE_CATEGORIES}
          activeCategory={activeCategoryId}
          onSelectCategory={handleSelectCategory}
        />
      )}

      {/* Level-2 Sub-Category Filter Chips (Clean Text Pills Only) */}
      {!searchQuery && selectedCategory && selectedCategory.items && (
        <SubCategoryTabs
          items={selectedCategory.items}
          activeSubCategory={activeSubCategory}
          onSelectSubCategory={setActiveSubCategory}
        />
      )}

      {/* Main Catalogue Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <ServicePriceCatalogue
          category={selectedCategory}
          searchResults={searchResults}
          searchQuery={searchQuery}
          activeSubCategory={activeSubCategory}
        />

        {/* Bespoke Consultation Action Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between p-6 sm:p-8 bg-[var(--color-bg-card)] border border-[var(--color-border-medium)] rounded-2xl sm:rounded-3xl gap-4 mt-8 shadow-sm">
          <div>
            <h2 className="font-serif-display text-xl sm:text-2xl text-[var(--color-text-primary)]">
              Bespoke Beauty Consultations
            </h2>
            <p className="text-xs text-[var(--color-text-muted)] mt-1">
              Book an appointment with our senior beauty artists at Vijay Nagar or Shastri Nagar, Jabalpur.
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
