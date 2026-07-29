import { useEffect } from 'react';

/**
 * PageMeta Component
 * Practical client-side SEO manager updating `document.title` and meta description.
 */
export const PageMeta = ({ title, description }) => {
  useEffect(() => {
    if (title) {
      document.title = title;
    }

    if (description) {
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.name = 'description';
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute('content', description);
    }
  }, [title, description]);

  return null;
};
