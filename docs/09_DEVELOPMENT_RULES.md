# PRIME SDN — Development Rules

## Table of Contents
- [Folder Structure](#folder-structure)
- [Naming Conventions](#naming-conventions)
- [Coding Standards](#coding-standards)
- [Component Architecture](#component-architecture)
- [Accessibility Requirements](#accessibility-requirements)
- [Performance Goals](#performance-goals)
- [Responsive Requirements](#responsive-requirements)
- [Image Optimization](#image-optimization)
- [Animation Performance](#animation-performance)
- [Maintainability](#maintainability)
- [Best Practices](#best-practices)

---

## Folder Structure

### Root Structure

```
prime-sdn/
├── docs/                    # Documentation
├── public/                  # Static assets
│   └── images/             # Optimized images
├── src/
│   ├── app/                # Next.js app directory
│   │   ├── about/          # About page
│   │   ├── activities/     # Activities page
│   │   ├── news/           # News page
│   │   ├── framework/      # Framework page
│   │   ├── startups/       # Startups page
│   │   ├── policies/       # Policies page
│   │   ├── contact/        # Contact page
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # Homepage
│   ├── components/         # Reusable components
│   │   ├── ui/            # UI components
│   │   └── layout/        # Layout components
│   ├── lib/               # Utilities and data
│   │   ├── about-data.ts
│   │   ├── activities-data.ts
│   │   └── ...
│   └── styles/            # Global styles
├── package.json
├── tsconfig.json
└── next.config.js
```

### Page Structure

Each page follows this pattern:

```
src/app/[page-name]/
├── page.tsx              # Server component
├── layout.tsx            # Page layout (optional)
└── [page-name]Client.tsx # Client component (if needed)
```

### Component Structure

```
src/components/
├── ui/
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Modal.tsx
│   └── ...
└── layout/
    ├── Navigation.tsx
    ├── Footer.tsx
    └── ...
```

---

## Naming Conventions

### File Naming

**Components:**
- PascalCase: `Button.tsx`, `Card.tsx`, `HeroSection.tsx`
- Descriptive: `EditorialSection.tsx` not `Section.tsx`
- Client components: `[Name]Client.tsx`

**Utilities:**
- camelCase: `formatDate.ts`, `animateScroll.ts`
- Descriptive: `calculateParallax.ts` not `utils.ts`

**Data Files:**
- kebab-case: `about-data.ts`, `activities-data.ts`
- Clear association: `page-data.ts`

**Styles:**
- kebab-case: `globals.css`, `animations.css`

### Variable Naming

**Components:**
- PascalCase: `const HeroSection = () => {}`

**Functions:**
- camelCase: `function handleScroll() {}`

**Constants:**
- UPPER_SNAKE_CASE: `const MAX_WIDTH = 1440`
- camelCase for objects: `const animationConfig = {}`

**Hooks:**
- camelCase with 'use' prefix: `useScrollReveal`, `useParallax`

### CSS Classes

**Tailwind:**
- Use utility classes directly
- Custom classes for complex components
- BEM naming for custom CSS: `.block__element--modifier`

---

## Coding Standards

### TypeScript

**Type Safety:**
- Always use TypeScript
- Define interfaces for props
- Avoid `any` type
- Use strict mode

**Example:**
```typescript
interface ButtonProps {
  variant: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant,
  size = 'medium',
  disabled = false,
  onClick,
  children
}) => {
  // Implementation
};
```

### React

**Functional Components:**
- Use functional components exclusively
- Use hooks for state and side effects
- Keep components focused and small

**Example:**
```typescript
export const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="hero">
      {/* Content */}
    </section>
  );
};
```

### Code Organization

**Import Order:**
1. React and Next.js imports
2. Third-party libraries
3. Internal components
4. Utilities and hooks
5. Types and interfaces
6. Styles

**Example:**
```typescript
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { Button } from '@/components/ui/Button';
import { useScrollReveal } from '@/hooks/useScrollReveal';

import { HeroData } from '@/types';

import './HeroSection.css';
```

---

## Component Architecture

### Component Principles

1. **Single Responsibility** — One purpose per component
2. **Reusability** — Design for reuse
3. **Composition** — Compose small components
4. **Props Interface** — Clear prop contracts
5. **Default Props** — Sensible defaults

### Component Types

**Presentational Components:**
- No state
- Receive data via props
- Focus on UI
- Reusable

**Container Components:**
- Manage state
- Fetch data
- Pass data to presentational
- Page-specific

**Layout Components:**
- Structure pages
- Handle navigation
- Manage layout state
- Reusable across pages

### Example Architecture

```typescript
// Presentational
interface CardProps {
  title: string;
  description: string;
  image: string;
}

export const Card: React.FC<CardProps> = ({ title, description, image }) => {
  return (
    <div className="card">
      <Image src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

// Container
export const FeaturedSection: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  
  useEffect(() => {
    fetchItems().then(setItems);
  }, []);

  return (
    <section>
      {items.map(item => (
        <Card key={item.id} {...item} />
      ))}
    </section>
  );
};
```

---

## Accessibility Requirements

### WCAG Compliance

**Level AA Compliance Required:**
- Color contrast ratio 4.5:1 for text
- Color contrast ratio 3:1 for large text
- Keyboard navigable
- Focus indicators visible
- Alt text for all images
- ARIA labels where needed

### Keyboard Navigation

**Tab Order:**
- Logical tab order
- Skip to content link
- Focus traps in modals
- Escape to close modals

**Focus States:**
- Visible focus indicators
- 2-3px offset
- Brand color or high contrast
- Never remove focus styles

### Screen Readers

**Semantic HTML:**
- Use proper HTML elements
- Heading hierarchy (h1-h6)
- ARIA landmarks
- Descriptive labels

**Example:**
```typescript
// Good
<nav aria-label="Main navigation">
  <ul>
    <li><a href="/about">About</a></li>
  </ul>
</nav>

// Bad
<div class="nav">
  <div class="link" onclick="navigate('/about')">About</div>
</div>
```

### Alt Text

**Images:**
- Descriptive alt text
- Empty alt for decorative images
- Context-specific descriptions

**Example:**
```typescript
// Descriptive
<Image 
  src="/siargao.jpg" 
  alt="Surfer riding a wave at Cloud 9, Siargao" 
/>

// Decorative
<Image 
  src="/pattern.png" 
  alt="" 
  role="presentation"
/>
```

---

## Performance Goals

### Load Time Targets

**Performance Budgets:**
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Time to Interactive: < 3.5s
- Cumulative Layout Shift: < 0.1
- First Input Delay: < 100ms

### Code Splitting

**Route-Based Splitting:**
- Automatic with Next.js
- Lazy load heavy components
- Dynamic imports for non-critical

**Example:**
```typescript
const HeavyComponent = dynamic(
  () => import('@/components/HeavyComponent'),
  { loading: () => <Spinner /> }
);
```

### Bundle Size

**Targets:**
- Initial JS: < 200KB
- Total JS: < 500KB
- CSS: < 50KB
- Images: Optimized per page

### Caching Strategy

**Static Assets:**
- Long cache headers
- CDN distribution
- Versioned filenames

**API Responses:**
- Appropriate cache headers
- Revalidation strategy
- Stale-while-revalidate

---

## Responsive Requirements

### Breakpoints

**Mobile-First Approach:**
- Base styles: Mobile (< 768px)
- Tablet: 768px - 1024px
- Desktop: > 1024px
- Large Desktop: > 1440px

### Responsive Design

**Typography:**
- Use clamp() for smooth scaling
- Minimum readable size: 16px
- Line height: 1.6-1.8

**Images:**
- Responsive images with srcset
- Lazy loading below fold
- Appropriate sizes per breakpoint

**Layout:**
- Flexbox and Grid
- Mobile: Single column
- Tablet: 2 columns where appropriate
- Desktop: Full layouts

**Example:**
```typescript
// Responsive typography
className="text-[clamp(1rem,2vw,1.5rem)]"

// Responsive grid
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"

// Responsive spacing
className="px-6 md:px-16 lg:px-20"
```

### Touch Targets

**Minimum Sizes:**
- Buttons: 44x44px minimum
- Links: 44x44px minimum
- Inputs: 44px height minimum
- Tap spacing: 8px minimum

---

## Image Optimization

### Image Formats

**Preferred Formats:**
- WebP for modern browsers
- AVIF for best compression
- JPEG fallback for compatibility
- PNG for transparency

### Image Sizing

**Responsive Images:**
- Provide multiple sizes
- Use srcset attribute
- Lazy loading below fold
- Blur-up placeholders

**Example:**
```typescript
<Image
  src="/hero.jpg"
  alt="Hero description"
  width={1920}
  height={1080}
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..."
/>
```

### Compression

**Quality Settings:**
- JPEG: Quality 80-85
- WebP: Quality 80
- AVIF: Quality 75
- PNG: Optimized with tools

### Loading Strategy

**Above Fold:**
- Priority loading
- Preload critical images
- No lazy loading

**Below Fold:**
- Lazy loading
- Intersection Observer
- Blur-up placeholders

---

## Animation Performance

### GPU Acceleration

**Use GPU Properties:**
- transform: translate, scale, rotate
- opacity
- filter (with caution)

**Avoid CPU Properties:**
- top, left, right, bottom
- width, height
- margin, padding

**Example:**
```typescript
// Good (GPU)
<motion.div
  style={{ transform: 'translateY(0)' }}
/>

// Bad (CPU)
<motion.div
  style={{ top: 0 }}
/>
```

### Animation Performance

**60 FPS Target:**
- Keep animations under 16ms per frame
- Use requestAnimationFrame
- Avoid layout thrashing
- Test on low-end devices

**Optimization:**
- Use will-change sparingly
- Composite layers
- Reduce repaints
- Batch DOM updates

### Reduced Motion

**Respect Preferences:**
```typescript
const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');

if (prefersReducedMotion) {
  // Disable or simplify animations
}
```

---

## Maintainability

### Code Quality

**Linting:**
- ESLint for code quality
- Prettier for formatting
- TypeScript for type safety
- Husky for pre-commit hooks

**Code Review:**
- Peer review required
- Automated checks
- Documentation updates
- Testing requirements

### Documentation

**Code Comments:**
- Comment complex logic
- Document component props
- Explain non-obvious decisions
- Keep comments current

**README Files:**
- Component documentation
- Usage examples
- Prop descriptions
- Storybook stories

### Testing

**Unit Tests:**
- Critical business logic
- Utility functions
- Component behavior

**Integration Tests:**
- Page flows
- User interactions
- API integrations

**E2E Tests:**
- Critical user paths
- Cross-browser testing
- Mobile testing

### Version Control

**Git Workflow:**
- Feature branches
- Descriptive commits
- Pull requests required
- Code review mandatory

**Commit Messages:**
- Conventional commits
- Clear and descriptive
- Reference issues
- Explain why, not what

---

## Best Practices

### DO

- Follow the folder structure strictly
- Use TypeScript for all code
- Write reusable components
- Optimize for performance
- Ensure accessibility
- Test on real devices
- Document your code
- Follow naming conventions
- Use responsive design
- Optimize images

### DO NOT

- Create one-off components
- Skip TypeScript
- Ignore performance
- Sacrifice accessibility
- Use arbitrary values
- Skip documentation
- Ignore naming conventions
- Hardcode values
- Skip testing
- Use deprecated APIs

---

## Warnings

### Critical Considerations

1. **Never skip TypeScript** — Type safety is mandatory
2. **Always ensure accessibility** — WCAG AA compliance required
3. **Never ignore performance** — Performance budgets must be met
4. **Avoid arbitrary values** — Use design tokens
5. **Never skip documentation** — Code must be documented

### Recommendations

- Regularly audit code quality
- Gather performance metrics
- Stay updated with best practices
- Maintain consistent patterns
- Invest in testing infrastructure

---

## Related Documentation

- [Design Bible](03_DESIGN_BIBLE.md)
- [Component Library](05_COMPONENT_LIBRARY.md)
- [Animation System](07_ANIMATION_SYSTEM.md)
