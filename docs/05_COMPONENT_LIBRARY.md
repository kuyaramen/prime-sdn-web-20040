# PRIME SDN — Component Library

## Table of Contents
- [Button](#button)
- [Card](#card)
- [Navigation](#navigation)
- [Footer](#footer)
- [Hero](#hero)
- [Editorial Section](#editorial-section)
- [Carousel](#carousel)
- [Timeline](#timeline)
- [Gallery](#gallery)
- [Modal](#modal)
- [Tooltip](#tooltip)
- [Badge](#badge)
- [Divider](#divider)
- [Spinner](#spinner)
- [Skeleton](#skeleton)

---

## Button

### Purpose
Primary and secondary actions throughout the interface.

### Variants

#### Primary Button
- **Style:** Rounded pill, filled background
- **Background:** Brand blue (#3B82F6)
- **Text:** White
- **Shadow:** Subtle
- **Hover:** Scale 1.02, darker blue (#2563EB)
- **Active:** Scale 0.98

#### Secondary Button
- **Style:** Rounded pill, outlined
- **Background:** Transparent
- **Border:** 2px brand blue (#3B82F6)
- **Text:** Brand blue (#3B82F6)
- **Hover:** Fill brand blue, white text

#### Text Link CTA
- **Style:** Text only, no background
- **Color:** Brand blue (#3B82F6)
- **Arrow:** Animated on hover
- **Underline:** Expands on hover
- **Hover:** Arrow slides, underline expands

### Usage

```tsx
// Primary
<Button variant="primary" onClick={handleClick}>
  Explore Surigao
</Button>

// Secondary
<Button variant="secondary" onClick={handleClick}>
  Learn More
</Button>

// Text Link
<Link href="#section" className="group inline-flex items-center gap-2">
  Explore Surigao
  <span className="group-hover:translate-x-1 transition-transform">→</span>
</Link>
```

### States
- **Default:** Base style
- **Hover:** Scale 1.02, color shift
- **Active:** Scale 0.98
- **Focus:** Visible focus ring (2-3px offset)
- **Disabled:** Reduced opacity, no interaction

### Spacing
- **Height:** 44-48px
- **Padding:** 12-24px horizontal
- **Font size:** 16px
- **Border radius:** Full (pill)

### Accessibility
- Minimum 44x44px tap target
- Clear focus states
- Descriptive labels
- Keyboard accessible
- ARIA attributes for disabled state

### Responsive
- **Desktop:** Auto width
- **Mobile:** Full width for primary actions

### Animation
- **Duration:** 200-300ms
- **Easing:** Ease Out
- **GPU-accelerated:** Yes

---

## Card

### Purpose
Display grouped content (features, stories, opportunities) in a contained format.

### Variants

#### Default Card
- **Background:** White
- **Border radius:** 16-24px
- **Shadow:** Soft (0 10px 15px rgba(0, 0, 0, 0.1))
- **Padding:** 24-32px
- **Hover:** Scale 1.02, increased shadow

#### Minimal Card
- **Background:** White
- **Border radius:** 16px
- **Shadow:** Minimal (0 4px 6px rgba(0, 0, 0, 0.05))
- **Padding:** 20-24px
- **Hover:** Subtle shadow increase

#### Featured Card
- **Background:** White
- **Border radius:** 24px
- **Shadow:** Premium (0 20px 25px rgba(0, 0, 0, 0.15))
- **Padding:** 32-40px
- **Hover:** Scale 1.02, shadow increase

### Usage

```tsx
<Card variant="default">
  <CardImage src="/image.jpg" alt="Description" />
  <CardHeading>Heading</CardHeading>
  <CardDescription>Description text</CardDescription>
  <CardCTA>Learn More →</CardCTA>
</Card>
```

### Content Structure
1. **Image** (optional, top)
2. **Heading** (bold, large)
3. **Description** (minimal, impactful)
4. **CTA** (optional, text link)

### States
- **Default:** Base style
- **Hover:** Scale 1.02, increased shadow
- **Focus:** Visible focus ring
- **Loading:** Skeleton state

### Spacing
- **Card padding:** 24-32px
- **Card gap:** 24-32px (grid)
- **Element gap:** 16-20px (internal)

### Accessibility
- Semantic HTML (article/section)
- Alt text for images
- Keyboard navigable
- Focus visible

### Responsive
- **Desktop:** Grid layout (2-4 columns)
- **Tablet:** Grid layout (2 columns)
- **Mobile:** Stacked (1 column)

### Animation
- **Duration:** 300-400ms
- **Easing:** Ease Out
- **GPU-accelerated:** Yes

---

## Navigation

### Purpose
Site-wide navigation and wayfinding.

### Variants

#### Header Navigation
- **Style:** Minimal, transparent on hero
- **Background:** White on scroll
- **Logo:** Left aligned
- **Links:** Right aligned
- **Mobile:** Hamburger menu

#### Mobile Navigation
- **Style:** Full-screen overlay
- **Animation:** Slide-in from right
- **Links:** Large, stacked
- **Close:** Top right

### Usage

```tsx
<Navigation>
  <Logo />
  <NavLinks>
    <NavLink href="/about">About</NavLink>
    <NavLink href="/activities">Activities</NavLink>
    <NavLink href="/news">News</NavLink>
  </NavLinks>
  <MobileMenu />
</Navigation>
```

### States
- **Default:** Transparent (hero), white (scroll)
- **Scrolled:** White background, shadow
- **Mobile:** Overlay visible
- **Link Active:** Brand blue color
- **Link Hover:** Underline animation

### Spacing
- **Header height:** 64-80px
- **Link spacing:** 32-48px
- **Logo size:** 40-48px height

### Accessibility
- Semantic HTML (nav)
- ARIA labels for mobile menu
- Keyboard navigable
- Focus management
- Skip to content link

### Responsive
- **Desktop:** Horizontal links
- **Tablet:** Horizontal links
- **Mobile:** Hamburger menu

### Animation
- **Scroll transition:** 300ms
- **Mobile menu:** 400ms slide-in
- **Link hover:** 200ms underline

---

## Footer

### Purpose
Site-wide information, links, and legal content.

### Structure

```tsx
<Footer>
  <FooterSection>
    <Logo />
    <Tagline>Tagline text</Tagline>
  </FooterSection>
  <FooterSection>
    <FooterHeading>Navigation</FooterHeading>
    <FooterLinks>
      <FooterLink href="/about">About</FooterLink>
      <FooterLink href="/activities">Activities</FooterLink>
    </FooterLinks>
  </FooterSection>
  <FooterSection>
    <FooterHeading>Contact</FooterHeading>
    <ContactInfo />
  </FooterSection>
  <FooterSection>
    <FooterHeading>Social</FooterHeading>
    <SocialLinks />
  </FooterSection>
  <FooterBottom>
    <Copyright />
    <LegalLinks />
  </FooterBottom>
</Footer>
```

### Style
- **Background:** Dark navy (#0A1628)
- **Text:** White
- **Secondary text:** White with 0.7 opacity
- **Link hover:** Brand blue (#3B82F6)
- **Spacing:** Generous

### Spacing
- **Section padding:** 80-120px
- **Column gap:** 48-64px
- **Element gap:** 16-24px
- **Bottom padding:** 40-48px

### Accessibility
- Semantic HTML (footer)
- Proper heading hierarchy
- Keyboard navigable
- Focus visible

### Responsive
- **Desktop:** 4 columns
- **Tablet:** 2 columns
- **Mobile:** Stacked

---

## Hero

### Purpose
Full-screen cinematic introduction to pages.

### Variants

#### Editorial Hero
- **Structure:** Full-width background image
- **Height:** 90-100vh
- **Overlay:** Dark gradient (35-45% opacity)
- **Content:** Overlaid on image
- **Alignment:** Left, max 600px width

### Usage

```tsx
<Hero>
  <HeroBackground image="/hero.jpg" />
  <HeroOverlay />
  <HeroContent>
    <HeroLabel>ABOUT PRIME SDN</HeroLabel>
    <HeroHeading>Discover the Heart of Surigao del Norte</HeroHeading>
    <HeroDescription>Description text</HeroDescription>
    <HeroCTA>Explore Surigao →</HeroCTA>
  </HeroContent>
</Hero>
```

### Content
- **Label:** Small uppercase, brand blue
- **Heading:** Large (2.5-4rem), bold
- **Description:** 40-50 words, minimal
- **CTA:** Text link with arrow

### Animation
- **Image scale:** 1.08 → 1.00 (1.2s)
- **Text fade:** Staggered upward
- **Parallax:** 20-30px on scroll

### Responsive
- **Desktop:** Full-width, 95vh
- **Tablet:** Full-width, 90vh
- **Mobile:** Full-width, 85vh

### Accessibility
- Alt text for background
- Keyboard navigable CTA
- Focus visible
- ARIA landmarks

---

## Editorial Section

### Purpose
Tell stories with alternating image and text layouts.

### Structure

```tsx
<EditorialSection>
  <EditorialContent>
    <SectionLabel>SECTION LABEL</SectionLabel>
    <SectionHeading>Heading</SectionHeading>
    <SectionDescription>Description</SectionDescription>
    <SectionCTA>Learn More →</SectionCTA>
  </EditorialContent>
  <EditorialImage src="/image.jpg" alt="Description" />
</EditorialSection>
```

### Variants

#### Image Left
- **Layout:** Image left (60%), text right (40%)
- **Alignment:** Vertically centered
- **Gap:** 24-32px

#### Image Right
- **Layout:** Text left (40%), image right (60%)
- **Alignment:** Vertically centered
- **Gap:** 24-32px

### Spacing
- **Section padding:** 80-100px
- **Column gap:** 24-32px
- **Element gap:** 24-40px

### Responsive
- **Desktop:** Two-column alternating
- **Tablet:** Two-column, reduced gap
- **Mobile:** Stacked (text first)

### Animation
- **Reveal:** Fade and slide on scroll
- **Image hover:** Scale 1.02
- **Duration:** 600-800ms

---

## Carousel

### Purpose
Display multiple items in a horizontally scrollable format.

### Structure

```tsx
<Carousel>
  <CarouselContainer>
    <CarouselItem>Content 1</CarouselItem>
    <CarouselItem>Content 2</CarouselItem>
    <CarouselItem>Content 3</CarouselItem>
  </CarouselContainer>
  <CarouselNavigation>
    <CarouselDot active />
    <CarouselDot />
    <CarouselDot />
  </CarouselNavigation>
</Carousel>
```

### Features
- Horizontal scroll with snap
- Touch swipe support
- Navigation dots or arrows
- Smooth transitions
- Auto-scroll disabled (user-controlled)

### Spacing
- **Item gap:** 24-32px
- **Container padding:** 0
- **Navigation spacing:** 16px

### Accessibility
- Semantic HTML (list)
- ARIA labels
- Keyboard navigable
- Focus management

### Responsive
- **Desktop:** 3-4 items visible
- **Tablet:** 2 items visible
- **Mobile:** 1 item visible

---

## Timeline

### Purpose
Show chronological progression or milestones.

### Structure

```tsx
<Timeline>
  <TimelineItem>
    <TimelineDate>2024</TimelineDate>
    <TimelineContent>
      <TimelineHeading>Milestone</TimelineHeading>
      <TimelineDescription>Description</TimelineDescription>
    </TimelineContent>
  </TimelineItem>
</Timeline>
```

### Variants

#### Centered
- **Line:** Center of container
- **Content:** Alternating left/right
- **Nodes:** On the line

#### Left-Aligned
- **Line:** Left of content
- **Content:** All right of line
- **Nodes:** On the line

### Style
- **Line width:** 2-4px
- **Node size:** 8-12px
- **Node color:** Brand blue
- **Card shadow:** Soft

### Spacing
- **Item gap:** 48-64px
- **Content padding:** 24-32px
- **Line margin:** 32px

### Responsive
- **Desktop:** Alternating left/right
- **Tablet:** Left-aligned
- **Mobile:** Left-aligned, reduced spacing

### Animation
- **Staggered reveal:** On scroll
- **Line draw:** Progressive
- **Node fade:** Staggered

---

## Gallery

### Purpose
Display collection of images in an organized layout.

### Structure

```tsx
<Gallery>
  <GalleryItem>
    <GalleryImage src="/image1.jpg" alt="Description" />
  </GalleryItem>
  <GalleryItem>
    <GalleryImage src="/image2.jpg" alt="Description" />
  </GalleryItem>
</Gallery>
```

### Variants

#### Grid Gallery
- **Layout:** Consistent grid
- **Columns:** 3-4 (desktop)
- **Gap:** 16-24px
- **Aspect ratio:** Consistent

#### Masonry Gallery
- **Layout:** Varied heights
- **Columns:** 3-4 (desktop)
- **Gap:** 16-24px
- **Aspect ratio:** Varied

### Features
- Lightbox on click
- Hover effects (scale 1.02)
- Filter options (optional)
- Lazy loading

### Spacing
- **Grid gap:** 16-24px
- **Image radius:** 16-24px
- **Lightbox padding:** 32px

### Accessibility
- Alt text for all images
- Keyboard navigable
- Focus management
- ARIA labels

### Responsive
- **Desktop:** 3-4 columns
- **Tablet:** 2-3 columns
- **Mobile:** 1-2 columns

---

## Modal

### Purpose
Display content in an overlay without leaving the current context.

### Structure

```tsx
<Modal isOpen={isOpen} onClose={handleClose}>
  <ModalOverlay />
  <ModalContent>
    <ModalHeader>
      <ModalTitle>Title</ModalTitle>
      <ModalClose onClick={handleClose} />
    </ModalHeader>
    <ModalBody>Content</ModalBody>
    <ModalFooter>
      <Button onClick={handleClose}>Close</Button>
    </ModalFooter>
  </ModalContent>
</Modal>
```

### Features
- Overlay backdrop
- Escape key to close
- Click outside to close
- Focus trap
- Smooth animation

### Animation
- **Duration:** 300ms
- **Easing:** Ease Out
- **Overlay:** Fade in
- **Content:** Scale in

### Accessibility
- ARIA attributes
- Focus trap
- Keyboard navigation
- Screen reader support

---

## Tooltip

### Purpose
Display additional information on hover or focus.

### Structure

```tsx
<Tooltip content="Tooltip text">
  <Button>Hover me</Button>
</Tooltip>
```

### Features
- Position on hover/focus
- Delay before show (optional)
- Smart positioning
- Fade animation

### Animation
- **Duration:** 200ms
- **Easing:** Ease Out
- **Fade:** In and out

### Accessibility
- ARIA attributes
- Keyboard accessible
- Screen reader support

---

## Badge

### Purpose
Display status, category, or count information.

### Variants

#### Default Badge
- **Style:** Small, rounded
- **Background:** Brand blue
- **Text:** White
- **Size:** 12-14px

#### Outline Badge
- **Style:** Small, rounded
- **Background:** Transparent
- **Border:** Brand blue
- **Text:** Brand blue

### Usage

```tsx
<Badge variant="default">New</Badge>
<Badge variant="outline">Category</Badge>
```

### Spacing
- **Padding:** 4-8px
- **Border radius:** 4-8px
- **Font size:** 12-14px

---

## Divider

### Purpose
Visually separate content sections.

### Variants

#### Horizontal Divider
- **Style:** Thin line
- **Color:** Light gray (#E5E7EB)
- **Height:** 1px
- **Width:** 100%

#### Vertical Divider
- **Style:** Thin line
- **Color:** Light gray (#E5E7EB)
- **Width:** 1px
- **Height:** 100%

### Usage

```tsx
<Divider variant="horizontal" />
<Divider variant="vertical" />
```

### Spacing
- **Margin:** 32-48px (horizontal)
- **Margin:** 16-24px (vertical)

---

## Spinner

### Purpose
Indicate loading state.

### Structure

```tsx
<Spinner size="medium" />
```

### Variants

#### Small
- **Size:** 16px
- **Stroke:** 2px
- **Color:** Brand blue

#### Medium
- **Size:** 24px
- **Stroke:** 3px
- **Color:** Brand blue

#### Large
- **Size:** 32px
- **Stroke:** 4px
- **Color:** Brand blue

### Animation
- **Duration:** 1s
- **Type:** Rotate
- **Infinite:** Yes

### Accessibility
- ARIA role="status"
- ARIA label="Loading"
- Screen reader support

---

## Skeleton

### Purpose
Placeholder while content loads.

### Structure

```tsx
<Skeleton variant="card" />
<Skeleton variant="text" lines={3} />
<Skeleton variant="image" />
```

### Variants

#### Card Skeleton
- **Style:** Card shape
- **Animation:** Pulse
- **Color:** Light gray

#### Text Skeleton
- **Style:** Text lines
- **Animation:** Pulse
- **Lines:** Configurable

#### Image Skeleton
- **Style:** Rectangle
- **Animation:** Pulse
- **Aspect ratio:** Configurable

### Animation
- **Duration:** 1.5s
- **Type:** Pulse
- **Infinite:** Yes

### Accessibility
- ARIA role="status"
- ARIA label="Loading"
- Screen reader support

---

## Implementation Notes

### Component Architecture

```typescript
// Base component structure
interface ComponentProps {
  variant?: 'default' | 'minimal' | 'featured';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
  // ...specific props
}
```

### Styling Approach

- Use Tailwind CSS for utility classes
- Create component-specific variants
- Maintain consistent spacing scale
- Follow design tokens

### State Management

- Use React hooks for local state
- Context for global state
- Props for configuration
- Events for interactions

---

## Best Practices

### DO

- Maintain consistent component API
- Use semantic HTML
- Ensure accessibility
- Optimize for performance
- Document all props
- Follow naming conventions
- Test on all devices

### DO NOT

- Create one-off components
- Ignore accessibility
- Skip documentation
- Use inconsistent APIs
- Ignore performance
- Skip testing
- Deviate from design system

---

## Warnings

### Critical Considerations

1. **Never skip accessibility** — All components must be accessible
2. **Always maintain consistency** — Component API must be predictable
3. **Never ignore responsive design** — Components must work on all devices
4. **Avoid prop explosion** — Keep component APIs focused
5. **Never skip documentation** — All components must be documented

### Recommendations

- Create component stories (Storybook)
- Maintain component changelog
- Gather user feedback
- Regularly audit for consistency
- Keep components focused and reusable

---

## Related Documentation

- [UI/UX Guidelines](04_UI_UX_GUIDELINES.md)
- [Design Bible](03_DESIGN_BIBLE.md)
- [Development Rules](09_DEVELOPMENT_RULES.md)
