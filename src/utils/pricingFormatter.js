/**
 * Centralized formatting helpers for Absolute Salon pricing catalogue.
 * Ensures clean labels, safe variant extraction, owner removal, and typography consistency.
 */

const PROVIDER_PATTERNS = [
  /\s*By Owners?\s*\([^)]*\)/gi,
  /\s*By Owners?/gi,
  /\s*\(By Owners?\)/gi,
  /\s*Haircuts? by Owner/gi,
  /\s*\(Owner\)/gi,
  /\s*Owner/gi,
  /\s*By Senior Artists?/gi,
  /\s*Senior Artists?/gi,
  /\s*By Artists?/gi,
];

/**
 * Removes salon owner/provider identity labels (Owner, Senior Artist, etc.) from user-facing text.
 * Preserves legitimate brand names like L'Oréal, Raaga, MAC, P.A.C, Huda Beauty, etc.
 */
export const sanitizePricingLabel = (text) => {
  if (!text || typeof text !== 'string') return text || '';
  let cleaned = text;

  PROVIDER_PATTERNS.forEach((pattern) => {
    cleaned = cleaned.replace(pattern, '');
  });

  return cleaned
    .replace(/\s*—\s*—\s*/g, ' — ')
    .replace(/^\s*[—:-]\s*/, '')
    .replace(/\s*[—:-]\s*$/, '')
    .replace(/\s+/g, ' ')
    .trim();
};

/**
 * Fixes duplicated labels like "Head Massage 10 min (Head Massage 10 min)".
 */
export const cleanDuplicateLabels = (text) => {
  if (!text || typeof text !== 'string') return text || '';

  let trimmed = text.trim();

  // 1. Remove duplicate parenthetical phrases: "Name (Name)"
  const dupMatch = trimmed.match(/^(.*?)\s*\(\1\)$/i);
  if (dupMatch) {
    trimmed = dupMatch[1].trim();
  }

  // 2. Remove duplicate brand trailing hyphens: "Title — Brand - Brand"
  trimmed = trimmed.replace(/\s*[-—]\s*([A-Za-z0-9'\s]+?)\s*[-—]\s*\1\s*$/i, ' — $1');

  return trimmed;
};

const KNOWN_VARIANTS = [
  'Short',
  'Medium',
  'Long',
  'Very Long',
  'XX Long',
  'X-Long',
  'Small',
  'Large',
  'Extra Long',
  'Full Hand',
  'Half Hand',
  'Full Leg',
  'Half Leg',
  'Full Front',
  'Half Front',
  'Full Back',
  'Half Back',
  'Full Body',
  'Underarms',
  'Face'
];

/**
 * Safely extracts known size/length variants from a service title.
 * Returns { cleanTitle, variant }
 */
export const extractRowVariant = (rawLabel, rawVariant) => {
  if (rawVariant && rawVariant.trim() !== '') {
    return {
      cleanTitle: sanitizePricingLabel(cleanDuplicateLabels(rawLabel)),
      variant: rawVariant.trim()
    };
  }

  let text = sanitizePricingLabel(cleanDuplicateLabels(rawLabel));
  if (!text) return { cleanTitle: '', variant: '' };

  // 1. Check parenthetical variants at end, e.g. "Hair Wash + Blast Dry (Raaga) (Medium)"
  const parenMatch = text.match(/\s*\((Short|Medium|Long|Very Long|XX Long|Small|Large|Extra Long)\)\s*$/i);
  if (parenMatch) {
    const extractedVar = parenMatch[1];
    const cleanTitle = text.substring(0, text.lastIndexOf(parenMatch[0])).trim();
    return { cleanTitle, variant: extractedVar };
  }

  // 2. Check trailing hyphen variants at end, e.g. "Split Ends Removal - Medium" or "Hair Spa — Loreal - Short"
  const hyphenMatch = text.match(/\s*[-—]\s*(Short|Medium|Long|Very Long|XX Long|Small|Large|Extra Long)\s*$/i);
  if (hyphenMatch) {
    const extractedVar = hyphenMatch[1];
    const cleanTitle = text.substring(0, text.lastIndexOf(hyphenMatch[0])).trim();
    return { cleanTitle, variant: extractedVar };
  }

  // 3. If the entire text itself is a variant name (e.g. "Short", "Medium", "Long")
  if (KNOWN_VARIANTS.some((v) => v.toLowerCase() === text.toLowerCase())) {
    return { cleanTitle: '', variant: text };
  }

  return { cleanTitle: text, variant: '' };
};
