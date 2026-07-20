# PRIME SDN — Animation System

## Table of Contents
- [Animation Philosophy](#animation-philosophy)
- [Reveal Animations](#reveal-animations)
- [Scroll Animations](#scroll-animations)
- [Parallax](#parallax)
- [Image Transitions](#image-transitions)
- [Page Transitions](#page-transitions)
- [Micro-interactions](#micro-interactions)
- [Hover Effects](#hover-effects)
- [Timing](#timing)
- [Duration](#duration)
- [Easing](#easing)
- [Animation Principles](#animation-principles)

---

## Animation Philosophy

**"Motion should enhance, never distract. Subtle is always better than flashy."**

PRIME SDN's animation system is designed to create a premium, editorial experience that feels smooth, refined, and purposeful. Every animation serves a specific function—guiding attention, providing feedback, or enhancing storytelling.

### Core Principles

1. **Purposeful** — Every animation has a clear reason
2. **Subtle** — Never overwhelming or distracting
3. **Smooth** — Fluid, never jerky or abrupt
4. **Fast** — Respect user's time
5. **Natural** — Follow physical expectations
6. **Consistent** — Predictable patterns throughout

### Anti-Principles

- No excessive or flashy animations
- No jarring or abrupt transitions
- No animation for animation's sake
- No performance-heavy effects
- No distracting motion
- No inconsistent patterns

---

## Reveal Animations

### Fade Up

**Purpose:** Reveal content with upward movement

**Use Cases:**
- Text elements (headings, descriptions)
- Cards and containers
- Section content

**Configuration:**
```javascript
const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { 
    duration: 0.6, 
    ease: "easeOut" 
  }
};
```

**Variants:**
- **Fast:** Duration 0.4s, y: 20px
- **Standard:** Duration 0.6s, y: 40px
- **Slow:** Duration 0.8s, y: 60px

### Fade In

**Purpose:** Reveal content without movement

**Use Cases:**
- Overlays and modals
- Background elements
- Subtle content reveals

**Configuration:**
```javascript
const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { 
    duration: 0.5, 
    ease: "easeOut" 
  }
};
```

### Scale In

**Purpose:** Reveal content with growth

**Use Cases:**
- Hero images
- Featured content
- Modal content

**Configuration:**
```javascript
const scaleIn = {
  initial: { opacity: 0, scale: 1.05 },
  animate: { opacity: 1, scale: 1 },
  transition: { 
    duration: 0.8, 
    ease: "easeOut" 
  }
};
```

### Slide In

**Purpose:** Reveal content from edges

**Use Cases:**
- Side panels
- Navigation menus
- Off-screen content

**Configuration:**
```javascript
const slideIn = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { 
    duration: 0.7, 
    ease: "easeOut" 
  }
};
```

**Variants:**
- **From Left:** x: -60 → 0
- **From Right:** x: 60 → 0
- **From Top:** y: -60 → 0
- **From Bottom:** y: 60 → 0

### Mask Reveal

**Purpose:** Reveal content through clipping mask

**Use Cases:**
- Hero images
- Editorial sections
- Image showcases

**Configuration:**
```javascript
const maskReveal = {
  initial: { clipPath: "inset(0 100% 0 0)" },
  animate: { clipPath: "inset(0 0% 0 0)" },
  transition: { 
    duration: 0.8, 
    ease: "easeOut" 
  }
};
```

---

## Scroll Animations

### Scroll Trigger

**Purpose:** Trigger animations when elements enter viewport

**Configuration:**
```javascript
const { ref, inView } = useInView({
  threshold: 0.1, // 10% of element visible
  triggerOnce: true // Animate only once
});
```

**Threshold Options:**
- **0.05:** 5% visible (early trigger)
- **0.1:** 10% visible (standard)
- **0.2:** 20% visible (late trigger)

### Staggered Reveal

**Purpose:** Animate multiple elements in sequence

**Configuration:**
```javascript
const staggerContainer = {
  animate: "visible",
  variants: {
    visible: {
      transition: {
        staggerChildren: 0.1 // 100ms between each
      }
    }
  }
};

const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};
```

**Stagger Delays:**
- **Fast:** 50ms between elements
- **Standard:** 100ms between elements
- **Slow:** 150ms between elements

### Scroll Progress

**Purpose:** Animate based on scroll position

**Configuration:**
```javascript
const { scrollYProgress } = useScroll();
const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
```

---

## Parallax

### Hero Parallax

**Purpose:** Subtle movement of hero image on scroll

**Configuration:**
```javascript
const { scrollYProgress } = useScroll({
  target: heroRef,
  offset: ["start start", "end start"]
});

const imageY = useTransform(scrollYProgress, [0, 1], [0, 30]);
```

**Movement Range:**
- **Subtle:** 10-20px
- **Standard:** 20-30px
- **Noticeable:** 30-40px

### Section Parallax

**Purpose:** Subtle movement of section elements

**Configuration:**
```javascript
const sectionY = useTransform(scrollYProgress, [0, 1], [0, 15]);
```

**Guidelines:**
- Images: 10-20px movement
- Background: 5-10px movement
- Text: Fixed (no parallax)

### Multi-layer Parallax

**Purpose:** Create depth with multiple layers

**Configuration:**
```javascript
const layer1Y = useTransform(scrollYProgress, [0, 1], [0, 20]); // Fast
const layer2Y = useTransform(scrollYProgress, [0, 1], [0, 10]); // Medium
const layer3Y = useTransform(scrollYProgress, [0, 1], [0, 5]);  // Slow
```

---

## Image Transitions

### Blur-Up

**Purpose:** Smooth image loading with blur effect

**Configuration:**
```javascript
const [isLoaded, setIsLoaded] = useState(false);

return (
  <div className="relative">
    <Image
      src={src}
      alt={alt}
      placeholder="blur"
      blurDataURL={blurDataUrl}
      onLoad={() => setIsLoaded(true)}
      className={`transition-all duration-500 ${
        isLoaded ? 'blur-0' : 'blur-20'
      }`}
    />
  </div>
);
```

### Crossfade

**Purpose:** Smooth transition between images

**Configuration:**
```javascript
const [currentImage, setCurrentImage] = useState(0);

return (
  <AnimatePresence mode="wait">
    <motion.img
      key={currentImage}
      src={images[currentImage]}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    />
  </AnimatePresence>
);
```

### Zoom Reveal

**Purpose:** Image zooms in while revealing

**Configuration:**
```javascript
<motion.div
  initial={{ scale: 1.05, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
>
  <Image src={src} alt={alt} />
</motion.div>
```

---

## Page Transitions

### Fade Transition

**Purpose:** Smooth fade between pages

**Configuration:**
```javascript
const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.3 }
};
```

### Slide Transition

**Purpose:** Slide effect between pages

**Configuration:**
```javascript
const pageVariants = {
  initial: { x: "100%" },
  animate: { x: 0 },
  exit: { x: "-100%" },
  transition: { duration: 0.4, ease: "easeInOut" }
};
```

### Shared Element Transition

**Purpose:** Animate shared elements between pages

**Configuration:**
```javascript
<motion.div
  layoutId="shared-element"
  transition={{ duration: 0.5 }}
>
  {/* Content */}
</motion.div>
```

---

## Micro-interactions

### Button Press

**Purpose:** Visual feedback on button press

**Configuration:**
```javascript
<motion.button
  whileTap={{ scale: 0.98 }}
  transition={{ duration: 0.1 }}
>
  {/* Button content */}
</motion.button>
```

### Link Hover

**Purpose:** Animated underline on link hover

**Configuration:**
```javascript
<motion.div
  className="relative inline-block"
  whileHover="hover"
>
  <span>Link text</span>
  <motion.span
    className="absolute bottom-0 left-0 h-0.5 bg-current"
    variants={{
      hover: { width: "100%" },
      initial: { width: "0%" }
    }}
    transition={{ duration: 0.3 }}
  />
</motion.div>
```

### Icon Animation

**Purpose:** Subtle icon animation on interaction

**Configuration:**
```javascript
<motion.div
  whileHover={{ rotate: 90 }}
  transition={{ duration: 0.3 }}
>
  <Icon />
</motion.div>
```

---

## Hover Effects

### Scale Hover

**Purpose:** Subtle scale on hover

**Configuration:**
```javascript
<motion.div
  whileHover={{ scale: 1.02 }}
  transition={{ duration: 0.3 }}
>
  {/* Content */}
</motion.div>
```

**Scale Values:**
- **Subtle:** 1.01-1.02
- **Standard:** 1.02-1.03
- **Noticeable:** 1.03-1.05

### Shadow Hover

**Purpose:** Shadow intensity increase on hover

**Configuration:**
```javascript
<motion.div
  whileHover={{ 
    boxShadow: "0 20px 25px rgba(0, 0, 0, 0.15)" 
  }}
  transition={{ duration: 0.3 }}
>
  {/* Content */}
</motion.div>
```

### Brightness Hover

**Purpose:** Slight brightness increase on hover

**Configuration:**
```javascript
<motion.div
  whileHover={{ filter: "brightness(1.05)" }}
  transition={{ duration: 0.3 }}
>
  {/* Content */}
</motion.div>
```

---

## Timing

### Animation Delays

**Purpose:** Control when animations start

**Configuration:**
```javascript
// Staggered delays
const delays = [0, 0.1, 0.2, 0.3]; // 0ms, 100ms, 200ms, 300ms

// Single delay
transition={{ delay: 0.2 }} // 200ms delay
```

**Delay Guidelines:**
- **Immediate:** 0ms (first element)
- **Fast Stagger:** 50-100ms
- **Standard Stagger:** 100-150ms
- **Slow Stagger:** 150-200ms

### Sequence Timing

**Purpose:** Control animation sequence

**Configuration:**
```javascript
const sequence = async () => {
  await animate(element1, { opacity: 1 }, { duration: 0.5 });
  await animate(element2, { opacity: 1 }, { duration: 0.5 });
  await animate(element3, { opacity: 1 }, { duration: 0.5 });
};
```

---

## Duration

### Duration Guidelines

**Fast (200-300ms)**
- Micro-interactions
- Button hovers
- Link underlines
- Focus states

**Standard (400-600ms)**
- Card reveals
- Section transitions
- Modal open/close
- Standard reveals

**Slow (600-800ms)**
- Hero reveals
- Major transitions
- Image load animations
- Featured content

**Never (> 1000ms)**
- Too slow for web
- Feels sluggish
- User frustration

### Duration by Context

```javascript
const durations = {
  micro: 0.2,      // 200ms
  fast: 0.3,       // 300ms
  standard: 0.5,   // 500ms
  slow: 0.7,       // 700ms
  hero: 1.2        // 1200ms
};
```

---

## Easing

### Easing Functions

**Ease Out (Most Common)**
- Starts fast, slows down
- Natural deceleration
- Best for reveals
- `easeOut`, `easeOutQuad`, `easeOutCubic`

**Ease In Out**
- Accelerates then decelerates
- Smooth both ends
- Best for transitions
- `easeInOut`, `easeInOutQuad`

**Ease In**
- Starts slow, speeds up
- Rarely used alone
- Best for specific effects
- `easeIn`, `easeInQuad`

**Linear**
- Constant speed
- No acceleration
- Rarely used
- `linear`

### Easing Recommendations

```javascript
const easings = {
  // Reveal animations
  reveal: "easeOut",
  
  // Transitions
  transition: "easeInOut",
  
  // Micro-interactions
  micro: "easeOut",
  
  // Hero animations
  hero: "easeOut"
};
```

---

## Animation Principles

### 1. Purpose Over Decoration

Every animation must serve a purpose:
- Guide attention
- Provide feedback
- Enhance storytelling
- Improve usability

### 2. Subtle Over Flashy

Prefer subtle animations:
- Small scale changes (1.02)
- Gentle movements (20-30px)
- Smooth transitions
- Natural easing

### 3. Performance First

Optimize for performance:
- GPU-accelerated properties (transform, opacity)
- Avoid layout thrashing
- Use will-change sparingly
- Test on low-end devices

### 4. Accessibility First

Consider accessibility:
- Respect prefers-reduced-motion
- Provide alternatives
- Don't rely on animation alone
- Test with screen readers

### 5. Consistent Patterns

Use consistent patterns:
- Same durations for similar actions
- Same easing for similar effects
- Predictable behavior
- Learnable interactions

### 6. Natural Motion

Follow physical expectations:
- Accelerate and decelerate naturally
- Respect mass and momentum
- Avoid unrealistic movements
- Feel grounded and real

---

## Implementation Notes

### Animation Library

Create reusable animation variants:

```javascript
// animations.js
export const animations = {
  fadeInUp: {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  },
  
  scaleIn: {
    initial: { opacity: 0, scale: 1.05 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.8, ease: "easeOut" }
  },
  
  slideIn: {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.7, ease: "easeOut" }
  }
};
```

### Animation Hooks

Create custom hooks for common patterns:

```javascript
// useScrollReveal.js
export function useScrollReveal(options = {}) {
  const { threshold = 0.1, triggerOnce = true } = options;
  const [ref, inView] = useInView({ threshold, triggerOnce });
  
  return { ref, inView };
}
```

### Performance Optimization

```javascript
// Use GPU-accelerated properties
transform: "translateY(0) scale(1)" // Good
top: 0, left: 0 // Bad

// Use will-change sparingly
willChange: "transform" // Good for complex animations
willChange: "all" // Bad

// Use requestAnimationFrame for complex sequences
requestAnimationFrame(() => {
  // Animation logic
});
```

---

## Best Practices

### DO

- Keep animations subtle and refined
- Use consistent durations and easing
- Optimize for performance
- Respect accessibility preferences
- Test on real devices
- Use GPU-accelerated properties
- Provide visual feedback

### DO NOT

- Use excessive or flashy animations
- Ignore performance
- Skip accessibility
- Use inconsistent patterns
- Over-animate
- Use layout-triggering properties
- Rely on animation for critical feedback

---

## Warnings

### Critical Considerations

1. **Never sacrifice performance** — Animation should not slow down the experience
2. **Always respect prefers-reduced-motion** — Some users need motion disabled
3. **Never use animation for critical feedback** — Provide alternatives
4. **Avoid layout thrashing** — Use transform and opacity
5. **Never exceed 1000ms duration** — Too slow feels broken

### Recommendations

- Regularly audit animation performance
- Gather user feedback on motion
- Test on low-end devices
- Stay aligned with design bible
- Maintain animation documentation

---

## Related Documentation

- [Design Bible](03_DESIGN_BIBLE.md)
- [UI/UX Guidelines](04_UI_UX_GUIDELINES.md)
- [Component Library](05_COMPONENT_LIBRARY.md)
