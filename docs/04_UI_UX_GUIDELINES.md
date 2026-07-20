# PRIME SDN — UI/UX Guidelines

## Table of Contents
- [Hero](#hero)
- [Editorial Cover](#editorial-cover)
- [Editorial Sections](#editorial-sections)
- [Cards](#cards)
- [Buttons](#buttons)
- [Navigation](#navigation)
- [Footer](#footer)
- [Carousels](#carousels)
- [Timeline](#timeline)
- [Gallery](#gallery)
- [Image Layouts](#image-layouts)
- [Content Blocks](#content-blocks)
- [Section Headers](#section-headers)
- [Statistics](#statistics)
- [Search](#search)
- [Forms](#forms)
- [Page Transitions](#page-transitions)
- [Hover Interactions](#hover-interactions)
- [Loading States](#loading-states)
- [Empty States](#empty-states)
- [Spacing System](#spacing-system)
- [Grid System](#grid-system)

---

## Hero

### Editorial Hero (Primary)

**Purpose:** Establish emotional connection and introduce the destination

**Structure:**
- Full-width cinematic background image (90-100vh)
- Subtle dark gradient overlay (35-45% opacity)
- Content overlaid directly on image
- Left-aligned, max 600px width
- Vertically centered

**Content:**
- Small uppercase label (eyebrow)
- Large editorial heading (2-3 lines max)
- Short description (40-50 words)
- Single elegant CTA (text link with arrow)

**Animation:**
- Image scales from 1.08 to 1.00 on load (1.2s)
- Text fades upward with staggered delays
- Subtle parallax on scroll (20-30px)

**Responsive:**
- Desktop: Full-width hero
- Tablet: Same layout, reduced spacing
- Mobile: Full-width, stacked content

**Avoid:**
- Two-column split layout
- Boxed images
- Oversized buttons
- Glowing backgrounds
- Marketing-style composition

---

## Editorial Cover

**Purpose:** Full-screen visual introduction for major sections

**Structure:**
- Full-width image covering entire viewport
- Minimal text overlay
- Subtle gradient for readability
- No borders or cards

**Content:**
- Section label (optional)
- Large heading
- Brief description (optional)

**Animation:**
- Slow zoom effect (1.05 to 1.00)
- Fade-in text with delay
- Subtle parallax

**Use Cases:**
- Page openings
- Major section dividers
- Feature introductions

---

## Editorial Sections

**Purpose:** Tell stories with alternating image and text layouts

**Structure:**
- Two-column layout (40/60 or 60/40 ratio)
- Alternating image position (left/right)
- Generous spacing between columns
- Vertical centering

**Content:**
- Section label (small, uppercase)
- Heading (large, bold)
- Description (minimal, impactful)
- Optional CTA

**Image:**
- Large, cinematic
- 28px border radius
- Soft premium shadow
- Hover: scale 1.02

**Spacing:**
- Section padding: 80-100px (desktop)
- Column gap: 24-32px
- Element spacing: 24-40px

**Responsive:**
- Desktop: Two-column alternating
- Tablet: Two-column, reduced gap
- Mobile: Stacked (text first, image second)

---

## Cards

**Purpose:** Display grouped content (features, stories, opportunities)

**Structure:**
- Minimal card design
- Soft shadow
- 16-24px border radius
- Generous internal padding

**Content:**
- Image (optional, top)
- Heading (bold)
- Description (minimal)
- CTA (optional, text link)

**States:**
- Default: Soft shadow, neutral
- Hover: Scale 1.02, increased shadow
- Focus: Visible focus ring

**Spacing:**
- Card padding: 24-32px
- Card gap: 24-32px
- Element gap: 16-20px

**Avoid:**
- Heavy borders
- Excessive shadows
- Cluttered content
- Marketing-style cards

---

## Buttons

**Purpose:** Primary and secondary actions

**Primary Button**

**Style:**
- Rounded (pill shape)
- Brand blue background (#3B82F6)
- White text
- Subtle shadow
- Hover: Scale 1.02, darker blue

**Size:**
- Height: 44-48px
- Padding: 12-24px horizontal
- Font size: 16px

**Secondary Button**

**Style:**
- Rounded (pill shape)
- Transparent background
- Brand blue border (2px)
- Brand blue text
- Hover: Fill with brand blue, white text

**Text Link CTA**

**Style:**
- Text only (no background)
- Brand blue color
- Arrow indicator
- Hover: Arrow slides, underline expands

**States:**
- Default: Base style
- Hover: Scale 1.02, color shift
- Active: Scale 0.98
- Focus: Visible focus ring

**Accessibility:**
- Minimum 44x44px tap target
- Clear focus states
- Descriptive labels
- Keyboard accessible

---

## Navigation

**Purpose:** Site-wide navigation and wayfinding

**Header Navigation**

**Style:**
- Minimal, transparent on hero
- White background on scroll
- Logo left, navigation right
- Clean, uncluttered

**Links:**
- Text-based (no buttons)
- Hover: Underline animation
- Active: Brand blue color
- Spacing: 32-48px between links

**Mobile:**
- Hamburger menu
- Full-screen overlay
- Smooth slide-in animation
- Large tap targets

**Breadcrumbs**

**Style:**
- Minimal text
- Separator: "/" or "→"
- Small font size (14px)
- Gray color (#64748B)

---

## Footer

**Purpose:** Site-wide information and links

**Structure:**
- Dark background (#0A1628)
- Multi-column layout
- Generous spacing
- Clear hierarchy

**Content:**
- Logo and tagline
- Navigation links (grouped)
- Contact information
- Social links
- Legal links

**Spacing:**
- Section padding: 80-120px
- Column gap: 48-64px
- Element gap: 16-24px

**Style:**
- White text
- Subtle opacity for secondary text
- Hover: Brand blue accent
- Clean, organized

---

## Carousels

**Purpose:** Display multiple items in a scrollable format

**Structure:**
- Horizontal scroll container
- Snap scrolling
- Navigation dots or arrows
- Touch swipe support

**Items:**
- Cards or images
- Generous spacing (24-32px)
- Consistent sizing
- Smooth transitions

**Navigation:**
- Dots: Minimal, centered
- Arrows: Subtle, on hover
- Touch: Swipe gesture

**Animation:**
- Smooth scroll (snap)
- Fade in on load
- Subtle scale on hover

**Avoid:**
- Auto-scroll (user-controlled only)
- Excessive items
- Cluttered navigation
- Janky scrolling

---

## Timeline

**Purpose:** Show chronological progression or milestones

**Structure:**
- Vertical line (center or left)
- Nodes on line
- Content cards on sides
- Alternating layout (desktop)

**Content:**
- Date/label
- Heading
- Description
- Optional image

**Style:**
- Minimal line (2-4px)
- Circular nodes (8-12px)
- Brand blue accent
- Soft shadows on cards

**Responsive:**
- Desktop: Alternating left/right
- Tablet: Left-aligned
- Mobile: Left-aligned, reduced spacing

**Animation:**
- Staggered reveal on scroll
- Line draws progressively
- Nodes fade in

---

## Gallery

**Purpose:** Display collection of images

**Structure:**
- Masonry or grid layout
- Generous spacing
- Lightbox on click
- Filter options (optional)

**Images:**
- High quality
- Consistent aspect ratio (grid) or varied (masonry)
- 28px border radius
- Soft shadow

**Hover:**
- Scale 1.02-1.03
- Shadow increase
- Subtle brightness

**Lightbox:**
- Full-screen overlay
- Large image display
- Navigation arrows
- Close button
- Smooth transitions

**Loading:**
- Blur-up placeholders
- Progressive loading
- Skeleton screens

---

## Image Layouts

### Full-Width Image

**Use:** Hero sections, editorial covers
- Span entire container width
- No border radius
- No shadow
- Subtle gradient overlay if text

### Editorial Image (Card)

**Use:** Editorial sections, features
- Large, prominent
- 28px border radius
- Soft shadow
- Hover: scale 1.02

### Circular Image

**Use:** Profiles, avatars
- Perfect circle
- Subtle shadow
- Consistent sizing
- Professional quality

### Grid Image

**Use:** Galleries, collections
- Consistent sizing
- 16-24px border radius
- Minimal shadow
- Hover effects

---

## Content Blocks

**Purpose:** Organize text content hierarchically

**Structure:**
- Clear heading hierarchy
- Generous line height (1.6-1.8)
- Optimal line length (60-75 characters)
- Paragraph spacing (24-32px)

**Headings:**
- H1: 2.5-4rem (clamp for responsive)
- H2: 2-3rem
- H3: 1.5-2rem
- H4: 1.25-1.5rem

**Body Text:**
- Base: 16px
- Large: 18px
- Small: 14px
- Line height: 1.6-1.8

**Lists:**
- Bullet points with spacing
- Numbered lists for sequences
- Checkmarks for features
- Consistent indentation

**Quotes:**
- Italic styling
- Left border accent
- Larger font size
- Attribution line

---

## Section Headers

**Purpose:** Introduce sections with clear hierarchy

**Structure:**
- Small label (eyebrow) - optional
- Large heading
- Optional description
- Optional CTA

**Label:**
- Uppercase
- Small font (12-14px)
- Wide letter spacing (0.2-0.25em)
- Brand blue color
- 8-12px below heading

**Heading:**
- Large, bold
- 2-3 lines max
- Dark navy color (#0A1628)
- 16-24px below description

**Description:**
- Minimal, impactful
- 18px font size
- Gray color (#64748B)
- 32-40px below CTA

**Alignment:**
- Left-aligned (default)
- Center-aligned (rare, specific cases)
- Never right-aligned

---

## Statistics

**Purpose:** Display key metrics and achievements

**Structure:**
- Grid layout (2-4 columns)
- Large numbers
- Labels below
- Minimal design

**Numbers:**
- Very large font (3-4rem)
- Bold weight
- Brand blue or dark navy
- Counter animation on scroll

**Labels:**
- Smaller font (14-16px)
- Uppercase
- Wide letter spacing
- Gray color (#64748B)

**Spacing:**
- Number to label: 8-12px
- Column gap: 32-48px
- Section padding: 80-120px

**Animation:**
- Count up from 0
- Staggered reveal
- Smooth easing

---

## Search

**Purpose:** Enable content discovery

**Structure:**
- Minimal input field
- Search icon
- Clear button
- Autocomplete (optional)

**Input:**
- Large, prominent
- 48-56px height
- Subtle border
- Focus: Brand blue border
- Placeholder text

**Results:**
- Grid or list layout
- Highlighted matches
- Clear hierarchy
- Pagination or load more

**States:**
- Default: Subtle border
- Focus: Brand blue border
- Loading: Spinner or skeleton
- Empty: Helpful message

---

## Forms

**Purpose:** Collect user input

**Structure:**
- Clear labels
- Generous spacing
- Validation feedback
- Submit button

**Inputs:**
- Height: 44-48px
- Subtle border
- Focus: Brand blue border
- Error: Red border, error message
- Success: Green border

**Labels:**
- Above input
- Bold weight
- 8-12px spacing
- Required indicator

**Buttons:**
- Primary: Brand blue, filled
- Secondary: Brand blue, outlined
- Full width on mobile
- Auto width on desktop

**Validation:**
- Real-time feedback
- Clear error messages
- Success confirmation
- Accessible error states

---

## Page Transitions

**Purpose:** Smooth navigation between pages

**Structure:**
- Fade out current page
- Fade in new page
- Optional slide effect
- Loading state

**Animation:**
- Duration: 300-400ms
- Easing: Ease In Out
- GPU-accelerated
- Interruptible

**Loading:**
- Minimal loader
- Brand color
- Centered
- Subtle animation

**Avoid:**
- Long transitions (> 500ms)
- Complex animations
- Janky performance
- Disorienting effects

---

## Hover Interactions

**Purpose:** Provide feedback and affordance

**Buttons:**
- Scale: 1.02
- Color shift
- Shadow increase
- Duration: 200-300ms

**Links:**
- Underline expand
- Color shift
- Arrow slide
- Duration: 200-300ms

**Images:**
- Scale: 1.02-1.03
- Shadow increase
- Brightness shift
- Duration: 300-400ms

**Cards:**
- Scale: 1.02
- Shadow increase
- Border color shift
- Duration: 300-400ms

**Principles:**
- Subtle, never exaggerated
- Fast, never sluggish
- Consistent, never random
- Purposeful, never decorative

---

## Loading States

**Purpose:** Indicate content is loading

**Skeleton Screens**
- Gray placeholders
- Pulse animation
- Match content structure
- Smooth fade-in when loaded

**Spinners**
- Minimal design
- Brand color
- Centered
- Subtle rotation

**Progressive Loading**
- Blur-up for images
- Staggered content reveal
- Smooth transitions
- No layout shifts

**Best Practices:**
- Always show loading state
- Keep animations subtle
- Match brand aesthetic
- Provide feedback duration

---

## Empty States

**Purpose:** Guide users when no content exists

**Structure:**
- Illustration or icon
- Clear message
- Explanation
- Action button

**Message:**
- Friendly, helpful
- Clear and concise
- Explain why empty
- Suggest next steps

**Action:**
- Primary button
- Clear label
- Relevant to context
- Helpful, not generic

**Style:**
- Minimal design
- Generous spacing
- Centered alignment
- Brand colors

---

## Spacing System

### Scale

Use consistent spacing scale:

- **4px** - xs (micro adjustments)
- **8px** - sm (element spacing)
- **12px** - md (tight spacing)
- **16px** - lg (standard spacing)
- **20px** - xl (comfortable spacing)
- **24px** - 2xl (generous spacing)
- **32px** - 3xl (section spacing)
- **40px** - 4xl (large spacing)
- **48px** - 5xl (extra large)
- **64px** - 6xl (hero spacing)
- **80px** - 7xl (section padding)
- **120px** - 8xl (featured sections)
- **160px** - 9xl (maximum spacing)

### Usage

- **Element spacing:** 16-24px
- **Section spacing:** 32-48px
- **Section padding:** 80-120px
- **Hero spacing:** 120-160px

---

## Grid System

### Desktop (1440px max)

- **Columns:** 12
- **Gutter:** 24px
- **Margins:** 80px
- **Content width:** 1280px

### Tablet (768px - 1024px)

- **Columns:** 8
- **Gutter:** 20px
- **Margins:** 60px
- **Content width:** 908px

### Mobile (< 768px)

- **Columns:** 4
- **Gutter:** 16px
- **Margins:** 24px
- **Content width:** 100% - 48px

### Common Patterns

**Two-column (40/60):**
- Desktop: 5 columns / 7 columns
- Tablet: 3 columns / 5 columns
- Mobile: Stacked

**Three-column (equal):**
- Desktop: 4 columns each
- Tablet: 2 columns + stacked
- Mobile: Stacked

**Four-column (equal):**
- Desktop: 3 columns each
- Tablet: 2 columns each
- Mobile: Stacked

---

## Implementation Notes

### Component Variants

Create reusable component variants:

```javascript
const buttonVariants = {
  primary: "bg-[#3B82F6] text-white rounded-full",
  secondary: "border-2 border-[#3B82F6] text-[#3B82F6] rounded-full",
  text: "text-[#3B82F6] hover:underline"
};

const cardVariants = {
  default: "bg-white rounded-2xl shadow-lg",
  minimal: "bg-white rounded-xl shadow-md",
  featured: "bg-white rounded-2xl shadow-xl"
};
```

### Responsive Utilities

Use consistent responsive breakpoints:

```css
@media (max-width: 768px) { /* Mobile */ }
@media (min-width: 768px) and (max-width: 1024px) { /* Tablet */ }
@media (min-width: 1024px) { /* Desktop */ }
```

---

## Best Practices

### DO

- Maintain consistent spacing throughout
- Use generous white space
- Ensure mobile-first responsive design
- Provide clear focus states
- Optimize for performance
- Test on real devices
- Follow accessibility guidelines

### DO NOT

- Use inconsistent spacing patterns
- Crowd content together
- Ignore mobile experience
- Remove focus states
- Sacrifice performance for aesthetics
- Skip accessibility testing
- Deviate from established patterns

---

## Warnings

### Critical Considerations

1. **Never sacrifice accessibility** — All users must be able to use the interface
2. **Always maintain consistency** — Patterns must be predictable
3. **Never ignore mobile** — Most users access via mobile devices
4. **Avoid excessive animations** — Motion should be subtle and purposeful
5. **Never use inconsistent spacing** — Follow the spacing system strictly

### Recommendations

- Document any deviations from guidelines
- Gather user feedback on UI patterns
- Regularly audit for consistency
- Stay aligned with design bible
- Maintain a component library

---

## Related Documentation

- [Design Bible](03_DESIGN_BIBLE.md)
- [Component Library](05_COMPONENT_LIBRARY.md)
- [Animation System](07_ANIMATION_SYSTEM.md)
