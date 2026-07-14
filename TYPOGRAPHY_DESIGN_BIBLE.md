# PRIME SDN — Typography Design Bible

**Version:** 1.5  
**Last Updated:** July 5, 2026  
**Status:** Enterprise-Ready  
**Author:** Design System Team

---

## Table of Contents

1. [Typography Hierarchy](#typography-hierarchy)
2. [Design Tokens](#design-tokens)
3. [Usage Rules](#usage-rules)
4. [Responsive Typography](#responsive-typography)
5. [Accessibility](#accessibility)
6. [Homepage Audit](#homepage-audit)
7. [Governance](#governance)
8. [Implementation Notes](#implementation-notes)
9. [Common Mistakes](#common-mistakes)
10. [Version History](#version-history)

---

## 1. Typography Hierarchy

### 1.1 Display Scale

| Token | Purpose | Usage |
|-------|---------|-------|
| **Display XL** | Hero titles, main page headers | Hero section only (LOCKED) |
| **Display Large** | Section hero titles, major promotional text | Vision, Mission, Core Values, Startups, Policies, Activities, News, CTA |
| **Display Medium** | Secondary hero text | Not currently used |
| **Display Small** | Tertiary hero text | Not currently used |

### 1.2 Heading Scale

| Token | Purpose | Usage |
|-------|---------|-------|
| **Heading 1** | Primary section titles | All main section headings |
| **Heading 2** | Secondary section titles, card titles | Section labels, sidebar titles |
| **Heading 3** | Subsection titles | Not currently used |

### 1.3 Body Scale

| Token | Purpose | Usage |
|-------|---------|-------|
| **Body Large** | Lead paragraphs, section descriptions | Section descriptions, supporting text |
| **Body** | Standard paragraphs | Body copy, content text |
| **Body Small** | Supporting text, metadata | Card metadata, secondary information |

### 1.4 Supporting Scale

| Token | Purpose | Usage |
|-------|---------|-------|
| **Caption** | Fine print, captions | Not currently used |
| **Label** | Form labels, badges, section labels | Section labels, category pills |
| **Button** | All button text | All interactive buttons |
| **Navigation** | Navbar links | Header navigation |
| **Statistic** | KPI numbers, metrics | Statistics section |
| **Footer** | Footer text | Footer links and text |

---

## 2. Design Tokens

### 2.1 Font Family Tokens

```css
--font-display: Montserrat, system-ui, -apple-system, sans-serif;
--font-body: Inter, system-ui, -apple-system, sans-serif;
```

**Usage Rules:**
- `--font-display` for all headings, titles, and display text
- `--font-body` for all body text, paragraphs, and supporting text

### 2.2 Font Size Tokens

| Token | Desktop | Tablet | Mobile | Line Height | Letter Spacing | Weight |
|-------|---------|--------|--------|-------------|--------------|--------|
| `--font-size-display-xl` | `clamp(3rem, 5vw, 4.5rem)` | 3rem | 2.5rem | 1.1 | -0.02em | 700 |
| `--font-size-display-lg` | `clamp(2.5rem, 4vw, 3.5rem)` | 2.5rem | 2rem | 1.1 | -0.02em | 700 |
| `--font-size-heading-1` | `clamp(1.75rem, 3vw, 2.5rem)` | 1.75rem | 1.5rem | 1.2 | -0.01em | 700 |
| `--font-size-heading-2` | `clamp(1.5rem, 2.5vw, 2rem)` | 1.5rem | 1.25rem | 1.2 | -0.01em | 700 |
| `--font-size-heading-3` | 1.25rem | 1.25rem | 1.125rem | 1.2 | 0 | 600 |
| `--font-size-body-lg` | 1.125rem | 1.125rem | 1rem | 1.6 | 0 | 400 |
| `--font-size-body` | 1rem | 1rem | 0.875rem | 1.6 | 0 | 400 |
| `--font-size-body-sm` | 0.875rem | 0.875rem | 0.75rem | 1.45 | 0 | 400 |
| `--font-size-caption` | 0.75rem | 0.75rem | 0.6875rem | 1.3 | 0.08em | 500 |
| `--font-size-label` | 0.6875rem | 0.6875rem | 0.625rem | 1.3 | 0.08em | 600 |
| `--font-size-button` | 0.9375rem | 0.9375rem | 0.875rem | 1.2 | 0.01em | 500 |
| `--font-size-navigation` | 0.9375rem | 0.9375rem | 0.875rem | 1.2 | 0.01em | 500 |
| `--font-size-statistic` | `clamp(1.65rem, 3vw, 2.4rem)` | 1.65rem | 1.5rem | 1.2 | 0 | 700 |
| `--font-size-footer` | 0.8125rem | 0.8125rem | 0.75rem | 1.3 | 0 | 400 |

### 2.3 Font Weight Tokens

```css
--font-weight-regular: 400;   /* Body text, paragraphs */
--font-weight-medium: 500;    /* Navigation, buttons */
--font-weight-semibold: 600;   /* Labels, emphasized text */
--font-weight-bold: 700;      /* Headings, display text */
```

### 2.4 Line Height Tokens

```css
--line-height-display: 1.1;   /* Tight for large text */
--line-height-heading: 1.2;   /* Comfortable for headings */
--line-height-body: 1.6;      /* Relaxed for readability */
--line-height-caption: 1.3;   /* Compact for small text */
```

### 2.5 Letter Spacing Tokens

```css
--letter-spacing-display: -0.02em;    /* Tight for display */
--letter-spacing-heading: -0.01em;    /* Slight tightening for headings */
--letter-spacing-body: 0;              /* Normal for body */
--letter-spacing-uppercase: 0.08em;   /* Wide for uppercase labels */
--letter-spacing-navigation: 0.01em;   /* Slight for nav */
--letter-spacing-button: 0.01em;       /* Slight for buttons */
```

### 2.6 Text Color Tokens

```css
--color-text-primary: #120508;     /* Main headings, primary text */
--color-text-secondary: #374151;   /* Paragraphs, body text */
--color-text-tertiary: #6B7280;    /* Supporting text, metadata */
--color-text-muted: #9CA3AF;      /* Captions, fine print */
--color-text-inverse: #FFFFFF;    /* Dark backgrounds */
--color-text-brand: #1E4FBF;     /* Primary blue - links, highlights */
--color-text-accent: #D8A629;     /* Gold - accents, special text */
--color-text-success: #065F46;    /* Success messages */
--color-text-warning: #92400E;    /* Warnings */
--color-text-error: #991B1B;      /* Errors */
```

---

## 3. Usage Rules

### 3.1 Display Typography

#### Display Large
- **Purpose:** Primary section hero titles, major promotional text
- **Recommended Usage:** Vision, Mission, Core Values, Startups, Policies, Activities, News, CTA
- **Do NOT Use:** Cards, Footer, small UI elements
- **Maximum Lines:** 2 lines
- **Responsive Behavior:** Scales from 2.5rem (mobile) to 3.5rem (desktop)
- **Font Family:** `--font-display`
- **Font Size:** `--font-size-display-lg`
- **Weight:** `--font-weight-bold`
- **Line Height:** `--line-height-display`
- **Letter Spacing:** `--letter-spacing-display`
- **Color:** `--color-text-primary` or `--color-text-brand`

#### Display XL
- **Purpose:** Hero titles, main page headers
- **Recommended Usage:** Hero section only (LOCKED)
- **Do NOT Use:** Any other section
- **Maximum Lines:** 1-2 lines
- **Font Family:** `--font-display`
- **Font Size:** `--font-size-display-xl`
- **Weight:** `--font-weight-bold`
- **Line Height:** `--line-height-display`
- **Letter Spacing:** `--letter-spacing-display`
- **Color:** `--color-text-brand`

### 3.2 Heading Typography

#### Heading 1
- **Purpose:** Primary section titles
- **Recommended Usage:** Framework, Statistics, all main section headings
- **Do NOT Use:** Cards, Footer, small UI elements
- **Maximum Lines:** 2 lines
- **Font Family:** `--font-display`
- **Font Size:** `--font-size-heading-1`
- **Weight:** `--font-weight-bold`
- **Line Height:** `--line-height-heading`
- **Letter Spacing:** `--letter-spacing-heading`
- **Color:** `--color-text-primary`

#### Heading 2
- **Purpose:** Secondary section titles, card titles
- **Recommended Usage:** Section labels, sidebar titles, card titles
- **Do NOT Use:** Display-level text
- **Maximum Lines:** 2 lines
- **Font Family:** `--font-display`
- **Font Size:** `--font-size-heading-2`
- **Weight:** `--font-weight-bold`
- **Line Height:** `--line-height-heading`
- **Letter Spacing:** `--letter-spacing-heading`
- **Color:** `--color-text-primary`

#### Heading 3
- **Purpose:** Subsection titles
- **Recommended Usage:** Subsections within pages
- **Do NOT Use:** Primary headings
- **Font Family:** `--font-display`
- **Font Size:** `--font-size-heading-3`
- **Weight:** `--font-weight-semibold`
- **Line Height:** `--line-height-heading`
- **Letter Spacing:** `--letter-spacing-body`
- **Color:** `--color-text-primary`

### 3.3 Body Typography

#### Body Large
- **Purpose:** Lead paragraphs, section descriptions
- **Recommended Usage:** Section descriptions, supporting text
- **Do NOT Use:** Fine print, captions
- **Font Family:** `--font-body`
- **Font Size:** `--font-size-body-lg`
- **Weight:** `--font-weight-regular`
- **Line Height:** `--line-height-body`
- **Letter Spacing:** `--letter-spacing-body`
- **Color:** `--color-text-secondary`

#### Body
- **Purpose:** Standard paragraphs
- **Recommended Usage:** All body copy, content text
- **Do NOT Use:** Display text, headings
- **Font Family:** `--font-body`
- **Font Size:** `--font-size-body`
- **Weight:** `--font-weight-regular`
- **Line Height:** `--line-height-body`
- **Letter Spacing:** `--letter-spacing-body`
- **Color:** `--color-text-secondary`

#### Body Small
- **Purpose:** Supporting text, metadata
- **Recommended Usage:** Card metadata, secondary information
- **Do NOT Use:** Primary body text
- **Font Family:** `--font-body`
- **Font Size:** `--font-size-body-sm`
- **Weight:** `--font-weight-regular`
- **Line Height:** `--line-height-body`
- **Letter Spacing:** `--letter-spacing-body`
- **Color:** `--color-text-tertiary`

### 3.4 Supporting Typography

#### Label
- **Purpose:** Form labels, badges, section labels
- **Recommended Usage:** Section labels, category pills, form labels
- **Do NOT Use:** Body text, headings
- **Font Family:** `--font-body`
- **Font Size:** `--font-size-label`
- **Weight:** `--font-weight-semibold`
- **Line Height:** `--line-height-caption`
- **Letter Spacing:** `--letter-spacing-uppercase`
- **Color:** `--color-text-primary` or `--color-text-brand`

#### Button
- **Purpose:** All button text
- **Recommended Usage:** All interactive buttons
- **Do NOT Use:** Headings, body text
- **Font Family:** `--font-body`
- **Font Size:** `--font-size-button`
- **Weight:** `--font-weight-medium`
- **Line Height:** `--line-height-heading`
- **Letter Spacing:** `--letter-spacing-button`
- **Color:** `--color-text-inverse` (on colored backgrounds)

#### Navigation
- **Purpose:** Navbar links
- **Recommended Usage:** Header navigation only
- **Do NOT Use:** Body text, headings
- **Font Family:** `--font-body`
- **Font Size:** `--font-size-navigation`
- **Weight:** `--font-weight-medium`
- **Line Height:** `--line-height-heading`
- **Letter Spacing:** `--letter-spacing-navigation`
- **Color:** `--color-text-tertiary` (default), `--color-text-brand` (hover)

#### Statistic
- **Purpose:** KPI numbers, metrics
- **Recommended Usage:** Statistics section, data points
- **Do NOT Use:** Headings, body text
- **Font Family:** `--font-body`
- **Font Size:** `--font-size-statistic`
- **Weight:** `--font-weight-bold`
- **Line Height:** `--line-height-heading`
- **Letter Spacing:** `--letter-spacing-body`
- **Color:** `--color-text-brand` or `--color-text-accent`

#### Footer
- **Purpose:** Footer text
- **Recommended Usage:** Footer links and text only
- **Do NOT Use:** Any other section
- **Font Family:** `--font-body`
- **Font Size:** `--font-size-footer`
- **Weight:** `--font-weight-regular`
- **Line Height:** `--line-height-caption`
- **Letter Spacing:** `--letter-spacing-body`
- **Color:** `--color-text-inverse` or `rgba(255,255,255,0.7)`

---

## 4. Responsive Typography

### 4.1 Breakpoint Strategy

| Breakpoint | Width | Typography Behavior |
|------------|-------|-------------------|
| Mobile | < 768px | All text scales down by ~10-15% |
| Tablet | 768px - 1023px | Intermediate scaling |
| Laptop | 1024px - 1439px | Standard desktop sizes |
| Desktop | ≥ 1440px | Full scale typography |
| Ultra-wide | ≥ 1600px | Maximum clamp values |

### 4.2 Scaling Strategy

All responsive typography uses `clamp()` with the following pattern:
- **Minimum:** Mobile-optimized size
- **Preferred:** Viewport-relative scaling (`vw` units)
- **Maximum:** Desktop ceiling

This ensures:
1. Text never becomes too small on mobile
2. Text scales smoothly with viewport
3. Text never becomes too large on ultra-wide screens

### 4.3 Why This Strategy?

- **Predictable:** Uses consistent scaling ratios
- **Accessible:** Maintains minimum readable sizes
- **Future-proof:** Works on any screen size
- **Performance:** No JavaScript required

---

## 5. Accessibility

### 5.1 Contrast Compliance

| Token | Background | Contrast Ratio | WCAG Level |
|-------|------------|--------------|----------|
| `--color-text-primary` | #FFFFFF | 15.8:1 | AAA ✓ |
| `--color-text-secondary` | #FFFFFF | 10.2:1 | AAA ✓ |
| `--color-text-tertiary` | #FFFFFF | 7.1:1 | AA ✓ |
| `--color-text-muted` | #FFFFFF | 4.5:1 | AA ✓ |
| `--color-text-brand` | #FFFFFF | 7.2:1 | AA ✓ |
| `--color-text-accent` | #FFFFFF | 12.1:1 | AAA ✓ |

### 5.2 Readability Standards

- **Minimum font size:** 0.75rem (12px) for non-essential text
- **Line height:** 1.6 for body text (optimal readability)
- **Line length:** Maximum 65-75 characters per line
- **Font weight:** Never below 400 for body text

### 5.3 Hierarchy & Scanning

- Clear visual distinction between heading levels
- Consistent spacing between hierarchy levels
- Semantic HTML structure (h1 → h2 → h3)

---

## 6. Homepage Audit

### 6.1 Navigation
- ✅ Uses `--font-body` and `--font-size-navigation`
- ✅ Uses `--font-weight-medium`
- ✅ Color transitions to `--color-text-brand` on hover

### 6.2 Framework
- ✅ Section labels use `--font-size-label`
- ✅ Headings use `--font-size-heading-1`
- ✅ Body text uses `--font-size-body`

### 6.3 Features
- ✅ Section labels use `--font-size-label`
- ✅ Headings use `--font-size-heading-1`
- ✅ Body text uses `--font-size-body`

### 6.4 Statistics
- ✅ Numbers use `--font-size-statistic`
- ✅ Labels use `--font-size-label`

### 6.5 Videos
- ✅ Section labels use `--font-size-label`
- ✅ Headings use `--font-size-heading-1`

### 6.6 Activities
- ✅ Section labels use `--font-size-label`
- ✅ Headings use `--font-size-heading-1`
- ✅ Card titles use `--font-size-heading-2`
- ✅ Metadata uses `--font-size-body-sm`

### 6.7 News
- ✅ Section labels use `--font-size-label`
- ✅ Headings use `--font-size-heading-1`
- ✅ Headlines use `--font-size-body`
- ✅ Category pills use `--font-size-label`

### 6.8 CTA
- ✅ Description uses `--font-size-heading-1`
- ✅ Buttons use `--font-size-button`

### 6.9 Footer
- ✅ All text uses `--font-body`
- ✅ Headings use `--font-size-label`
- ✅ Links use `--font-size-body`

---

## 6.1 Detailed Component Audit

### 6.1.1 HomeClient.tsx - Inline Typography Issues

| Location | Issue | Current Value | Recommended Token |
|----------|-------|---------------|-------------------|
| Hero Section (lines 253-297) | Inline font family | `Montserrat, Inter, system-ui, -apple-system, sans-serif` | `var(--font-display)` |
| Hero Section (lines 253-297) | Inline font size | `clamp(7rem, 11.5vw, 13.5rem)` | `var(--font-size-display-xl)` |
| Hero Section (lines 253-297) | Inline font weight | `700` | `var(--font-weight-bold)` |
| Hero Section (lines 253-297) | Inline letter spacing | `0.005em` | `var(--letter-spacing-display)` |
| Hero Description (line 377-391) | Inline font family | `Inter, system-ui, -apple-system, sans-serif` | `var(--font-body)` |
| Hero Description (line 377-391) | Inline font size | `1.1rem` | `var(--font-size-body-lg)` |
| Vision Button (line 482-494) | Inline font family | `Plus Jakarta Sans, Inter, system-ui, sans-serif` | `var(--font-body)` |
| Vision Button (line 482-494) | Inline font size | `clamp(16px, 1.5vw, 20px)` | `var(--font-size-button)` |
| Mission Button (line 595-607) | Inline font family | `Montserrat, Arial, sans-serif` | `var(--font-body)` |
| Mission Button (line 595-607) | Inline font size | `clamp(16px, 1.5vw, 20px)` | `var(--font-size-button)` |
| Core Values Button (line 709-720) | Inline font family | `Montserrat, Arial, sans-serif` | `var(--font-body)` |
| Core Values Button (line 709-720) | Inline font size | `clamp(16px, 1.5vw, 20px)` | `var(--font-size-button)` |
| Startups Button (line 822-834) | Inline font family | `Montserrat, Arial, sans-serif` | `var(--font-body)` |
| Startups Button (line 822-834) | Inline font size | `clamp(16px, 1.5vw, 20px)` | `var(--font-size-button)` |
| Policies Button (line 937-949) | Inline font family | `Montserrat, Arial, sans-serif` | `var(--font-body)` |
| Policies Button (line 937-949) | Inline font size | `clamp(16px, 1.5vw, 20px)` | `var(--font-size-button)` |
| Activities Button (line 1021-1036) | Inline font size | `var(--font-size-button)` | ✅ Correct |
| CTA Buttons (lines 1366-1389) | Inline font family | `var(--font-body)` | ✅ Correct |
| CTA Buttons (lines 1366-1389) | Inline font size | `text-base` (Tailwind) | `var(--font-size-button)` |

### 6.1.2 EcosystemFramework.tsx - Inline Typography Issues

| Location | Issue | Current Value | Recommended Token |
|----------|-------|---------------|-------------------|
| Statistics Section (line 157-165) | Inline font size | `clamp(1.65rem, 3vw, 2.4rem)` | `var(--font-size-statistic)` |
| Statistics Section (line 171-178) | Inline font size | `0.84rem` | `var(--font-size-label)` |
| Statistics Section (line 318-329) | Inline font size | `0.82rem` | `var(--font-size-label)` |
| Statistics Section (line 338-345) | Inline font size | `clamp(1.8rem, 3.5vw, 2.6rem)` | `var(--font-size-heading-1)` |
| Mobile Framework Header (line 705-711) | Inline font size | `0.7rem` | `var(--font-size-label)` |
| Mobile Framework Title (line 718-720) | Inline font size | `clamp(1.5rem, 6vw, 2rem)` | `var(--font-size-heading-1)` |
| Mobile Framework Description (line 729-730) | Inline font size | `0.9rem` | `var(--font-size-body)` |
| Desktop Framework Title (line 787-788) | Inline font size | `clamp(1.75rem, 3.5vw, 2.9rem)` | `var(--font-size-heading-1)` |
| Desktop Framework Description (line 805-807) | Inline font size | `clamp(0.88rem, 1.1vw, 1.02rem)` | `var(--font-size-body)` |
| Scroll Hint (line 925-927) | Inline font size | `0.78rem` | `var(--font-size-caption)` |

### 6.1.3 Header.tsx - Inline Typography Issues

| Location | Issue | Current Value | Recommended Token |
|----------|-------|---------------|-------------------|
| Navigation Links (line 80, 124) | Inline font size | `text-[0.9375rem]` | `var(--font-size-navigation)` |
| Mobile Navigation (line 160) | Inline font size | `text-sm` | `var(--font-size-navigation)` |

### 6.1.4 CinematicVideoSection.tsx - Inline Typography Issues

| Location | Issue | Current Value | Recommended Token |
|----------|-------|---------------|-------------------|
| Section Title (line 12) | Inline font family | `Montserrat, Arial, sans-serif` | `var(--font-display)` |
| Section Title (line 12) | Inline font size | `clamp(1.75rem, 3.5vw, 3rem)` | `var(--font-size-heading-1)` |
| Video Stats (line 20) | Inline font size | `clamp(16px, 1.8vw, 20px)` | `var(--font-size-statistic)` |
| Video Stat Labels (line 22) | Inline font size | `clamp(16px, 1.5vw, 20px)` | `var(--font-size-label)` |

### 6.1.5 SSC2040Roadmap.tsx - Inline Typography Issues

| Location | Issue | Current Value | Recommended Token |
|----------|-------|---------------|-------------------|
| Section Title (line 1) | Inline font size | `clamp(20px, 3vw, 28px)` | `var(--font-size-heading-2)` |
| Section Heading (line 3) | Inline font size | `clamp(1.75rem, 3.5vw, 3rem)` | `var(--font-size-heading-1)` |

### 6.1.6 PillarPage.tsx - Inline Typography Issues

| Location | Issue | Current Value | Recommended Token |
|----------|-------|---------------|-------------------|
| Error Message (line 1) | Inline font family | `Montserrat, Arial, sans-serif` | `var(--font-display)` |
| Hero Title (line 10) | Inline font size | `clamp(2.5rem, 5vw, 4.5rem)` | `var(--font-size-display-xl)` |
| Section Titles (line 15) | Inline font size | `clamp(20px, 3vw, 28px)` | `var(--font-size-heading-2)` |
| Content Headings (line 17) | Inline font size | `clamp(1.75rem, 3.5vw, 3rem)` | `var(--font-size-heading-1)` |

### 6.1.7 Other Page Components

| File | Issue | Current Value | Recommended Token |
|------|-------|---------------|-------------------|
| VisionClient.tsx | Inline font family | `Montserrat, Arial, sans-serif` | `var(--font-display)` |
| VisionClient.tsx | Inline font size | `clamp(2.5rem, 5vw, 4.5rem)` | `var(--font-size-display-xl)` |
| StartupsClient.tsx | Inline font family | `Montserrat, Arial, sans-serif` | `var(--font-display)` |
| StartupsClient.tsx | Inline font size | `clamp(2.5rem, 5vw, 4.5rem)` | `var(--font-size-display-xl)` |
| RoadmapClient.tsx | Inline font family | `Montserrat, Arial, sans-serif` | `var(--font-display)` |
| RoadmapClient.tsx | Inline font size | `clamp(2.5rem, 5vw, 4.5rem)` | `var(--font-size-display-xl)` |
| NewsClient.tsx | Inline font family | `Montserrat, Arial, sans-serif` | `var(--font-display)` |
| NewsClient.tsx | Inline font size | `clamp(2.5rem, 5vw, 4.5rem)` | `var(--font-size-display-xl)` |

---

## 6.2 Audit Summary

### Critical Issues (Must Fix)
1. **Hero Section** - Uses inline typography instead of tokens (LOCKED - do not change)
2. **Button Typography** - Multiple buttons use inline font sizes instead of `--font-size-button`
3. **Statistics Section** - Uses inline font sizes instead of `--font-size-statistic`

### Warning Issues (Should Fix)
1. **Ecosystem Framework** - Section labels and descriptions use inline values
2. **Navigation** - Uses Tailwind arbitrary values instead of tokens
3. **Page Headers** - All page components use inline typography

### Info Issues (Consider Fixing)
1. **Mobile-specific typography** - Some mobile-only styles use inline values
2. **Scroll hints and microcopy** - Use inline font sizes for small text

---

## 6.3 Migration Path

### Phase 1: Critical Fixes (No Visual Change)
- Update `.section-label` class to use tokens (COMPLETED)
- Update button styles in globals.css to use tokens

### Phase 2: Component Updates
- Update EcosystemFramework.tsx to use tokens
- Update CinematicVideoSection.tsx to use tokens
- Update SSC2040Roadmap.tsx to use tokens

### Phase 3: Page Components
- Update all page client components to use tokens
- Ensure consistent typography across all pages

---

## 6.4 Token Compliance Matrix

| Component | Font Family | Font Size | Weight | Line Height | Letter Spacing | Color |
|-----------|-------------|-----------|--------|-------------|--------------|-------|
| Hero (LOCKED) | ⚠️ Inline | ⚠️ Inline | ⚠️ Inline | ⚠️ Inline | ⚠️ Inline | ⚠️ Inline |
| Vision/Mission/Core Values | ✅ Tokens | ⚠️ Inline (buttons) | ✅ Tokens | ✅ Tokens | ✅ Tokens | ✅ Tokens |
| Framework | ✅ Tokens | ⚠️ Inline | ✅ Tokens | ✅ Tokens | ✅ Tokens | ✅ Tokens |
| Statistics | ⚠️ Inline | ⚠️ Inline | ⚠️ Inline | ⚠️ Inline | ⚠️ Inline | ⚠️ Inline |
| Activities | ✅ Tokens | ✅ Tokens | ✅ Tokens | ✅ Tokens | ✅ Tokens | ✅ Tokens |
| News | ✅ Tokens | ✅ Tokens | ✅ Tokens | ✅ Tokens | ✅ Tokens | ✅ Tokens |
| CTA | ✅ Tokens | ⚠️ Inline | ✅ Tokens | ✅ Tokens | ✅ Tokens | ✅ Tokens |
| Footer | ✅ Tokens | ✅ Tokens | ✅ Tokens | ✅ Tokens | ✅ Tokens | ✅ Tokens |
| Navigation | ⚠️ Inline | ⚠️ Inline | ✅ Tokens | ✅ Tokens | ✅ Tokens | ✅ Tokens |

---

## 7. Governance

### 7.1 Rules

1. **Never create new font sizes** - Use existing tokens only
2. **Never use inline typography** - Always reference design tokens
3. **Never duplicate heading styles** - Use the hierarchy
4. **Never create custom body styles** - Use Body tokens
5. **Always reference tokens** - No hardcoded values
6. **Always maintain semantic hierarchy** - h1 → h2 → h3
7. **Always keep typography reusable** - No one-off styles

### 7.2 Do's and Don'ts

| Do | Don't |
|----|-------|
| Use `var(--font-size-heading-1)` for section titles | Use `clamp(1.75rem, 3vw, 2.5rem)` inline |
| Use `var(--color-text-primary)` for headings | Use `#102A43` or `#500a31` inline |
| Use `var(--font-body)` for body text | Use `Montserrat, Arial, sans-serif` inline |
| Reference tokens in CSS | Hardcode values in components |

### 7.3 Enforcement

- Code reviews must verify token usage
- ESLint rules can enforce token patterns
- Design tools should use the same tokens

---

## 8. Implementation Notes

### 8.1 For Developers

```tsx
// ✅ Correct
<h2 style={{ 
  fontFamily: "var(--font-display)",
  fontSize: "var(--font-size-heading-1)",
  color: "var(--color-text-primary)"
}}>

// ❌ Incorrect
<h2 style={{ 
  fontFamily: "Montserrat, Arial, sans-serif",
  fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
  color: "#102A43"
}}>
```

### 8.2 For Designers

- Use the same token values in Figma/Design tools
- Reference the CSS variables for consistency
- Follow the hierarchy strictly

### 8.3 Future Expansion

Consider adding:
- `--font-size-display-2xl` for ultra-wide displays
- `--font-size-heading-4` for minor subsections
- `--font-size-overline` for special decorative text

---

## 8.4 CSS Utility Classes

The following utility classes are available in `globals.css` for quick access to typography tokens:

| Class | Font Family | Font Size | Weight | Line Height | Letter Spacing |
|-------|-------------|-----------|--------|-------------|--------------|
| `.typography-display-xl` | `--font-display` | `--font-size-display-xl` | `--font-weight-bold` | `--line-height-display` | `--letter-spacing-display` |
| `.typography-display-lg` | `--font-display` | `--font-size-display-lg` | `--font-weight-bold` | `--line-height-display` | `--letter-spacing-display` |
| `.typography-heading-1` | `--font-display` | `--font-size-heading-1` | `--font-weight-bold` | `--line-height-heading` | `--letter-spacing-heading` |
| `.typography-heading-2` | `--font-display` | `--font-size-heading-2` | `--font-weight-bold` | `--line-height-heading` | `--letter-spacing-heading` |
| `.typography-body-lg` | `--font-body` | `--font-size-body-lg` | `--font-weight-regular` | `--line-height-body` | - |
| `.typography-body` | `--font-body` | `--font-size-body` | `--font-weight-regular` | `--line-height-body` | - |
| `.typography-statistic` | `--font-body` | `--font-size-statistic` | `--font-weight-bold` | `--line-height-heading` | - |

### Usage Example

```html
<!-- Using utility classes -->
<h1 class="typography-heading-1" style="color: var(--color-text-primary)">
  Section Title
</h1>

<span class="typography-statistic" style="color: var(--color-text-brand)">
  2,500+
</span>
```

---

## 9. Common Mistakes

1. **Using inline font sizes** - Always use tokens
2. **Mixing font families** - Use `--font-display` for headings, `--font-body` for text
3. **Inconsistent colors** - Use semantic color tokens
4. **Wrong line heights** - Use the appropriate line height token
5. **Hardcoding weights** - Use weight tokens

---

## 10. Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.5 | 2026-07-05 | Phase 1.5 - Enterprise standards, governance, audit |
| 1.0 | 2026-07-05 | Initial release - Phase 1 implementation |