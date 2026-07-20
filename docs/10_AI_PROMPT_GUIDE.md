# PRIME SDN — AI Prompt Guide

## Table of Contents
- [How to Use This Guide](#how-to-use-this-guide)
- [Understanding the Project](#understanding-the-project)
- [Reading Documentation First](#reading-documentation-first)
- [Redesigning Only Requested Sections](#redesigning-only-requested-sections)
- [Preserving Consistency](#preserving-consistency)
- [Avoiding Design System Breaks](#avoiding-design-system-breaks)
- [Following Editorial Experience](#following-editorial-experience)
- [Maintaining PRIME SDN Identity](#maintaining-prime-sdn-identity)
- [Common Pitfalls](#common-pitfalls)
- [Checklist Before Making Changes](#checklist-before-making-changes)

---

## How to Use This Guide

**This guide is mandatory reading for any AI assistant working on PRIME SDN.**

Before making any changes to the codebase, you must:

1. **Read this entire guide** — Understand the project philosophy
2. **Review the documentation** — Read all relevant docs
3. **Understand the request** — Clarify what needs to be done
4. **Follow the principles** — Adhere to all guidelines
5. **Verify consistency** — Ensure changes align with the system

**Never skip this process.** The documentation exists to maintain consistency and quality across all work.

---

## Understanding the Project

### What PRIME SDN Is

PRIME SDN is the official promotional and digital platform of Surigao del Norte. It is NOT:

- A startup landing page
- A government website
- A SaaS product
- A marketing site

It IS:

- A world-class destination platform
- An editorial storytelling experience
- A premium digital gateway
- A celebration of Surigao del Norte

### Core Philosophy

**"Photography tells the story. Design supports the narrative. Every element serves the experience."**

The project is built on editorial storytelling inspired by premium destination websites like Visit Singapore. The experience should feel like opening a luxury travel magazine.

### Key Differentiators

1. **Editorial Storytelling** — Not marketing
2. **Photography-First** — Images dominate
3. **Premium Quality** — World-class standards
4. **Authentic Representation** — Real Surigao del Norte
5. **Generous Spacing** — White space is design
6. **Subtle Motion** — Refined animations

---

## Reading Documentation First

### Mandatory Documentation Order

Before any work, read these documents in order:

1. **01_PROJECT_OVERVIEW.md** — Understand what PRIME SDN is
2. **02_BRAND_IDENTITY.md** — Understand the brand
3. **03_DESIGN_BIBLE.md** — Understand the design philosophy
4. **04_UI_UX_GUIDELINES.md** — Understand UI patterns
5. **05_COMPONENT_LIBRARY.md** — Understand components
6. **06_PAGE_BLUEPRINTS.md** — Understand page structures
7. **07_ANIMATION_SYSTEM.md** — Understand animations
8. **08_CONTENT_GUIDELINES.md** — Understand content rules
9. **09_DEVELOPMENT_RULES.md** — Understand technical standards

### Context-Specific Reading

Depending on the task, also read:

- **Redesigning a page:** Read the relevant Page Blueprint
- **Creating a component:** Read Component Library
- **Writing content:** Read Content Guidelines
- **Adding animations:** Read Animation System
- **Technical changes:** Read Development Rules

### Documentation Principles

- **Never skip documentation** — It exists for consistency
- **Read completely** — Don't skim
- **Reference frequently** — Keep docs open while working
- **Ask for clarification** — If something is unclear
- **Follow strictly** — Guidelines are not suggestions

---

## Redesigning Only Requested Sections

### Scope Discipline

**Only modify what is explicitly requested.**

If asked to redesign the Hero section:
- ✅ Modify the Hero section
- ❌ Do NOT modify other sections
- ❌ Do NOT change navigation
- ❌ Do NOT alter footer
- ❌ Do NOT touch unrelated components

### Section Isolation

When working on a section:

1. **Identify boundaries** — Know where the section starts and ends
2. **Check dependencies** — Understand what the section depends on
3. **Test in isolation** — Ensure the section works independently
4. **Verify integration** — Confirm it works with the whole page

### Example Scenarios

**Scenario: Redesign Hero Section**
- Read: Project Overview, Brand Identity, Design Bible, UI/UX Guidelines
- Focus: Hero section only
- Avoid: Navigation, other sections, footer

**Scenario: Add New Component**
- Read: Component Library, Development Rules
- Focus: Component creation only
- Avoid: Unrelated components, page structure

**Scenario: Update Content**
- Read: Content Guidelines, Brand Identity
- Focus: Content updates only
- Avoid: Design changes, component structure

---

## Preserving Consistency

### Design Consistency

**Maintain visual consistency across all pages:**

- **Spacing:** Follow the spacing system strictly
- **Typography:** Use defined font sizes and weights
- **Colors:** Use the brand color palette only
- **Components:** Use existing components when possible
- **Layouts:** Follow established patterns

### Code Consistency

**Maintain code consistency:**

- **Naming:** Follow naming conventions
- **Structure:** Follow folder structure
- **Patterns:** Use established patterns
- **Standards:** Follow coding standards
- **TypeScript:** Always use TypeScript

### Content Consistency

**Maintain content consistency:**

- **Tone:** Follow brand voice
- **Style:** Follow editorial style
- **Length:** Follow word count rules
- **Quality:** Maintain premium standards

### Consistency Checklist

Before finalizing changes:

- [ ] Spacing follows the system
- [ ] Typography is consistent
- [ ] Colors are from the palette
- [ ] Components are reused
- [ ] Code follows conventions
- [ ] Content matches guidelines

---

## Avoiding Design System Breaks

### What Breaks the Design System

**These actions break the design system:**

1. **Arbitrary values** — Using random numbers instead of design tokens
2. **New patterns** — Creating novel layouts without justification
3. **Inconsistent spacing** — Not following the spacing scale
4. **Custom colors** — Adding colors not in the palette
5. **One-off components** — Creating unique components for single use
6. **Skipping documentation** — Not following documented patterns

### How to Avoid Breaks

**Follow these rules:**

1. **Use design tokens** — Never hardcode values
2. **Reuse components** — Don't recreate existing patterns
3. **Follow spacing scale** — Use defined spacing values
4. **Stay in palette** — Only use brand colors
5. **Document exceptions** — If you must deviate, explain why
6. **Test thoroughly** — Ensure changes don't break elsewhere

### Example: Good vs Bad

**Good (Follows System):**
```typescript
// Using design tokens
className="px-6 md:px-16 lg:px-20"
className="text-[clamp(1rem,2vw,1.5rem)]"
className="bg-[#3B82F6]"
```

**Bad (Breaks System):**
```typescript
// Arbitrary values
className="px-[23px]"
className="text-[37px]"
className="bg-[#4A90E2]"
```

---

## Following Editorial Experience

### Editorial Storytelling Principles

**Always follow these principles:**

1. **Photography-First** — Images dominate the experience
2. **Minimal Text** — Few words, maximum impact
3. **Generous Spacing** — White space is a design element
4. **Cinematic Quality** — Premium, magazine-like
5. **Authentic Content** — Real stories and images
6. **Emotional Connection** — Evoke feeling, not just inform

### What Editorial Experience Is NOT

**Editorial experience is NOT:**

- Marketing-style hero sections
- Startup-style compositions
- Government website aesthetics
- Dashboard-like interfaces
- Cluttered layouts
- Excessive animations
- Sales-driven design

### Editorial Checklist

Before finalizing design changes:

- [ ] Photography dominates the section
- [ ] Text is minimal and impactful
- [ ] Spacing is generous
- [ ] Layout feels editorial, not marketing
- [ ] Animations are subtle and refined
- [ ] Images are high-quality and authentic
- [ ] Content tells a story

---

## Maintaining PRIME SDN Identity

### Brand Identity Elements

**PRIME SDN's identity is defined by:**

- **Premium Quality** — World-class standards
- **Editorial Storytelling** — Magazine-like experience
- **Authentic Representation** — Real Surigao del Norte
- **Inspiring Content** — Emotional connection
- **Sophisticated Design** — Refined aesthetics
- **Welcoming Tone** — Accessible and inclusive

### Identity Preservation

**To maintain brand identity:**

1. **Use brand colors** — #3B82F6, #0A1628, #60A5FA, #64748B
2. **Use brand fonts** — Montserrat (primary), Inter (secondary)
3. **Follow brand voice** — Sophisticated, warm, inspiring
4. **Maintain quality** — Never compromise on quality
5. **Stay authentic** — Real Surigao del Norte content
6. **Be consistent** — Same experience across all pages

### Identity Violations

**These violate brand identity:**

- Using non-brand colors
- Using non-brand fonts
- Marketing-style language
- Generic or stock content
- Low-quality imagery
- Inconsistent experiences
- Startup-style design

---

## Common Pitfalls

### Pitfall 1: Skipping Documentation

**Problem:** AI skips reading documentation and makes assumptions.

**Solution:** Always read relevant documentation before starting work.

### Pitfall 2: Over-Engineering

**Problem:** AI creates complex solutions for simple problems.

**Solution:** Use the simplest solution that meets requirements. Reuse existing patterns.

### Pitfall 3: Marketing-Style Design

**Problem:** AI creates marketing-style hero sections or CTAs.

**Solution:** Follow editorial storytelling principles. Photography-first, minimal text.

### Pitfall 4: Arbitrary Values

**Problem:** AI uses arbitrary spacing, colors, or sizes.

**Solution:** Use design tokens and follow the spacing system strictly.

### Pitfall 5: Scope Creep

**Problem:** AI modifies more than what was requested.

**Solution:** Only modify the explicitly requested section or component.

### Pitfall 6: Ignoring Mobile

**Problem:** AI designs only for desktop.

**Solution:** Always design mobile-first and ensure responsive behavior.

### Pitfall 7: Breaking Consistency

**Problem:** AI creates patterns that don't match the rest of the site.

**Solution:** Follow established patterns and reuse existing components.

### Pitfall 8: Low-Quality Content

**Problem:** AI writes generic or low-quality content.

**Solution:** Follow content guidelines. Write editorial, sophisticated copy.

---

## Checklist Before Making Changes

### Pre-Work Checklist

Before starting any work:

- [ ] Read and understand the request
- [ ] Read relevant documentation
- [ ] Identify the scope of work
- [ ] Check for existing patterns to reuse
- [ ] Plan the approach
- [ ] Verify understanding with user if unclear

### During Work Checklist

While working:

- [ ] Following design tokens and spacing system
- [ ] Reusing existing components
- [ ] Maintaining brand colors and fonts
- [ ] Writing editorial-style content
- [ ] Ensuring responsive design
- [ ] Following coding standards
- [ ] Optimizing for performance
- [ ] Ensuring accessibility

### Post-Work Checklist

Before finalizing:

- [ ] Changes match the request exactly
- [ ] No unintended modifications
- [ ] Design follows the design bible
- [ ] Code follows development rules
- [ ] Content follows content guidelines
- [ ] Animations follow animation system
- [ ] Tested on multiple breakpoints
- [ ] Accessibility verified
- [ ] Performance acceptable
- [ ] Documentation updated if needed

---

## Decision Framework

### When to Create New Components

**Create a new component when:**

- The component will be reused in multiple places
- The component has complex state or logic
- The component represents a distinct UI pattern
- The component is documented in Component Library

**Do NOT create when:**

- It's a one-off use case
- Existing components can be adapted
- It's a simple variation of an existing component

### When to Deviate from Guidelines

**Deviate only when:**

- Explicitly requested by the user
- The guideline doesn't apply to the specific case
- There's a compelling reason documented
- The deviation improves the experience

**Always:**

- Document the deviation
- Explain the reasoning
- Get approval if possible
- Ensure consistency with the deviation

### When to Ask for Clarification

**Ask when:**

- The request is ambiguous
- Multiple approaches are possible
- The scope is unclear
- Technical constraints exist
- The request conflicts with guidelines

**Never assume** — Always clarify when uncertain.

---

## Communication Principles

### How to Communicate

**When communicating with the user:**

- **Be concise** — Direct and to the point
- **Be specific** — Reference exact files and lines
- **Be transparent** — Explain decisions and trade-offs
- **Be proactive** — Identify potential issues
- **Be respectful** — Acknowledge user preferences

### What to Communicate

**Always communicate:**

- What you're doing and why
- Any deviations from guidelines
- Potential issues or concerns
- Recommendations for improvement
- Completion status

**Never communicate:**

- Acknowledgment phrases ("You're right", "Great idea")
- Unnecessary commentary
- Repetitive information
- Vague statements

---

## Final Principles

### The Golden Rule

**"When in doubt, refer to the documentation. The documentation is the source of truth."**

If you're unsure about anything:

1. Check the relevant documentation
2. Follow the documented pattern
3. If still unclear, ask for clarification

### Quality Over Speed

**Never sacrifice quality for speed.**

- Take the time to do it right
- Follow all guidelines
- Test thoroughly
- Ensure consistency

### Consistency Over Creativity

**Never be creative at the expense of consistency.**

- Follow established patterns
- Reuse existing components
- Maintain design system
- Preserve brand identity

### User Intent First

**Always prioritize the user's intent.**

- Understand what they want
- Deliver exactly that
- Don't add extras unless requested
- Ask for clarification if needed

---

## Emergency Procedures

### If You Break Something

1. **Stop immediately** — Don't continue with broken code
2. **Assess the damage** — What was affected?
3. **Revert changes** — Go back to working state
4. **Understand the error** — Why did it break?
5. **Fix properly** — Follow guidelines this time
6. **Test thoroughly** — Ensure it works
7. **Communicate** — Explain what happened

### If Guidelines Conflict

1. **Identify the conflict** — Which guidelines conflict?
2. **Assess priority** — Which takes precedence?
3. **Document the decision** — Explain the choice
4. **Communicate** — Inform the user
5. **Update documentation** — If the decision sets a precedent

### If You're Stuck

1. **Re-read documentation** — You may have missed something
2. **Check existing patterns** — How was this done before?
3. **Ask for clarification** — Don't guess
4. **Propose options** — Give the user choices
5. **Wait for guidance** — Don't proceed uncertainly

---

## Summary

**This guide is your roadmap for working on PRIME SDN.**

Follow it strictly, and you will maintain consistency, quality, and brand identity across all work.

**Remember:**

- Documentation is mandatory reading
- Only modify what's requested
- Preserve consistency at all costs
- Follow editorial storytelling principles
- Maintain PRIME SDN's identity
- Ask when uncertain
- Quality over speed

**The success of PRIME SDN depends on consistent adherence to these principles.**

---

## Related Documentation

- [Project Overview](01_PROJECT_OVERVIEW.md)
- [Brand Identity](02_BRAND_IDENTITY.md)
- [Design Bible](03_DESIGN_BIBLE.md)
- [UI/UX Guidelines](04_UI_UX_GUIDELINES.md)
- [Component Library](05_COMPONENT_LIBRARY.md)
- [Page Blueprints](06_PAGE_BLUEPRINTS.md)
- [Animation System](07_ANIMATION_SYSTEM.md)
- [Content Guidelines](08_CONTENT_GUIDELINES.md)
- [Development Rules](09_DEVELOPMENT_RULES.md)
