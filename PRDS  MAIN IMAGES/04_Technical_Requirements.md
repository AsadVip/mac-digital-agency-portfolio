# Mac Digital Agency — Technical Requirements

## 1. Stack
Frontend: React + TypeScript + Vite  
Backend: None initially  
Database: None initially

## 2. Architecture
Recommended:
```text
src/
├── assets/
│   ├── images/
│   ├── icons/
│   └── fonts/
├── components/
│   ├── layout/
│   ├── sections/
│   └── ui/
├── data/
│   ├── navigation.ts
│   ├── skills.ts
│   ├── projects.ts
│   ├── services.ts
│   ├── testimonials.ts
│   └── social.ts
├── hooks/
├── lib/
├── styles/
│   ├── tokens.css
│   └── globals.css
├── types/
├── App.tsx
└── main.tsx
```

## 3. Content Architecture
Keep navigation, skills, projects, services, testimonials, statistics and social links in typed data files. Do not scatter repeated content through JSX.

## 4. TypeScript
Strict mode. Avoid unnecessary `any`. Type props, data objects and utilities.

## 5. Components
Recommended:
- Navbar
- MobileMenu
- Hero
- CredibilityStrip
- AboutSection
- ExperienceSection
- SkillsList
- ProjectsSection
- ProjectFeature
- ProjectItem
- ServicesSection
- WhyWorkWithMe
- TestimonialsSection
- CTASection
- ContactSection
- Footer

Components must support varied compositions rather than forcing every section into cards.

## 6. Styling
Centralize tokens, typography, layout, responsive rules, transitions and focus states. Avoid arbitrary inline styling.

## 7. Hero Code Restrictions
The hero must contain **no floating AI widgets**.

Do not create or use visual components functioning as:
- AI assistant
- AI popup
- Chat bubble
- Smart widget
- Analytics overlay
- Skill bubble
- Notification card
- Floating status card

The profile image is a normal image component inside a clean visual frame.

## 8. Image
Use a replaceable local asset such as `/images/profile.jpg`. Owner will supply the real image later. Use stable dimensions and appropriate object-fit. Do not blindly lazy-load the hero image if it harms LCP.

## 9. Projects
Use typed project data:
```ts
interface Project {
  title: string;
  description: string;
  category: string;
  technologies: string[];
  image: string;
  liveUrl?: string;
  sourceUrl?: string;
}
```

## 10. Contact
Centralize email, phone, WhatsApp, address and social URLs. Use `mailto:`, `tel:` and appropriate WhatsApp linking. No secrets.

## 11. Contact Form
If included, use client validation and no fake backend success. Keep submission logic isolated for future backend integration.

## 12. SEO
Implement title, description, canonical placeholder, Open Graph, semantic headings and Person/WebSite schema where appropriate. Never create fake Review/AggregateRating schema.

## 13. Accessibility
Semantic landmarks, keyboard support, focus-visible, alt text, labels, accessible menu, reduced motion and good contrast.

## 14. Responsive
Mobile-first. Test 320px, 360px, 390px, 430px, 768px, 1024px, 1280px+ and wide desktop. No horizontal scroll, clipped headings or overlapping content.

## 15. Mobile Zoom
Implement the requested no-zoom behavior carefully after verifying readability and touch usability.

## 16. Performance
Optimize images, minimize JS, avoid unnecessary libraries, lazy-load below-fold images, prevent layout shift and avoid continuously animated backgrounds.

## 17. Testing
Run production build, TypeScript checks, responsive testing, keyboard testing, link testing, accessibility audit, performance audit and reduced-motion testing.

## 18. Deployment
Compatible with Vercel, Netlify, Cloudflare Pages, GitHub Pages or another static CDN.

---

# Claude Sonnet 5 Master Prompt

You are a senior product designer, UX architect, frontend architect and production React engineer.

Build **Mac Digital Agency**, a premium single-page freelancer portfolio for **Asad Chaudhary**, an experienced website developer with 3+ years of experience since 2023.

Technology:
- React
- TypeScript
- Vite

No backend or database is required initially.

## NON-NEGOTIABLE VISUAL DIRECTION

The previous UI looked obviously AI-generated. Redesign the experience so it looks **human-designed, art-directed and professionally crafted**.

Do NOT produce a generic AI portfolio.

Never use:
- Floating AI cards
- AI assistant popups
- Chat bubbles
- Fake dashboards
- Fake analytics widgets
- “AI powered” badges
- Fake skill percentages
- Random notification cards
- Glassmorphism everywhere
- Neon gradients
- Giant gradient blobs
- Particle backgrounds
- Excessive pills
- Excessive rounded cards
- Over-animation
- Decorative UI widgets around the profile photo

Think **premium editorial developer portfolio**, not SaaS landing page.

## HERO — MOST IMPORTANT

The profile image is the focal point.

Desktop:
- Left: eyebrow, name, role/value statement, paragraph, CTAs
- Right: large professional portrait

Allowed:
- Thin line
- Subtle yellow accent
- Simple geometric frame
- Controlled editorial crop

Forbidden:
- AI popup
- Chat widget
- Browser mockup
- Analytics card
- Skill card
- Notification
- Status badge
- Floating UI
- AI label
- Any UI covering the face/photo

The photo must remain clean, large and visually confident.

## DESIGN

Use:
- Warm white/off-white canvas
- Charcoal typography
- Restrained professional yellow
- Editorial grid
- Strong typography
- Large intentional whitespace
- Asymmetric layouts where useful
- Fine dividers
- Minimal borders
- Sophisticated hierarchy

Yellow is an accent, not the entire interface.

Avoid repetitive “heading + paragraph + three cards” sections.

## PAGE

One index page:
1. Navigation
2. Hero
3. Credibility strip
4. About
5. Experience/skills
6. Selected work
7. Services
8. Why work with me
9. Testimonials
10. Contact CTA
11. Contact
12. Footer

## DEVELOPER DATA

Name: Asad Chaudhary  
Role: Experienced Website Developer  
Experience: 3+ years  
Started: 2023

Skills:
- React + TypeScript — 2 years
- PHP + Database — 3 years
- HTML + CSS + JavaScript — 3 years
- Python — 1 year
- Supabase — 2 years
- Firebase — 3 years

Do not invent employers, awards, certifications or employment history.

## PROJECTS

Make selected work the visual proof of ability.

Use one large feature project plus supporting projects with varied layouts.

Each project:
- Image
- Title
- Description
- Category
- Technologies
- Live link
- Source link when available

Demo content must be easy to replace.

## SERVICES

Include:
- Website Development
- React Development
- Frontend Development
- PHP & Database Development
- Firebase/Supabase Integration
- Responsive Web Design

Prefer numbered editorial rows or sophisticated mixed layouts over six identical cards.

## TESTIMONIALS

Use elegant quote-led presentation. Demo testimonials are placeholders and must be replaced with verified content. Never use fake reviews in structured data.

## CONTACT

Email: macdigitalagency1@gmail.com  
Phone: 03356294133  
WhatsApp: 03337629724  
Address: AL Quresh Phase 2

No Google Map.

Social:
- https://www.linkedin.com/in/mac-digital-6172663b6/
- https://www.facebook.com/profile.php?id=61583029653718
- https://www.instagram.com/mac_digitalagency/
- http://tiktok.com/@macdigitalagency0
- https://www.youtube.com/@MacDigitaAgencyYoutube

Logo and profile image will be added later.

## MOTION

Motion must feel subtle and premium.

Allowed:
- Text reveal
- Gentle image entrance
- Section reveal
- Counter easing
- Link underline
- Button hover
- Image hover
- Mobile menu transition

Avoid:
- Constant floating
- Parallax overload
- Particles
- Spinning
- Bounce everywhere
- Cursor-following decorations

Support `prefers-reduced-motion`.

## RESPONSIVE

Design mobile intentionally, not as a collapsed desktop.

Recompose:
- Hero
- Projects
- Skills
- Services
- Testimonials
- Contact

No horizontal overflow.

The owner requests mobile pinch zoom disabled. Implement carefully while keeping content readable and controls usable.

## TECHNICAL

Use:
- React
- TypeScript strict mode
- Vite
- Reusable components
- Typed content data
- CSS design tokens
- Mobile-first responsive CSS

No Redux is required for static portfolio content.

## ASSETS

Use replaceable local assets:
- `/images/logo.*`
- `/images/profile.*`
- `/images/projects/*`

Keep the profile image unobstructed.

## SEO & ACCESSIBILITY

Implement title, meta description, canonical placeholder, Open Graph, semantic headings and appropriate Person/WebSite schema.

Implement semantic landmarks, keyboard support, visible focus, alt text, labels, contrast and reduced motion.

Never publish fake review/rating schema.

## PERFORMANCE

Optimize profile/project images, keep JS lightweight, lazy-load below-fold images, prevent layout shift and avoid unnecessary dependencies.

## FINAL VISUAL QA

Before completion, run this test:

**AI-template test:** Does this immediately look AI-generated? If yes, redesign.

**Hero test:** Is the profile photo clean and unobstructed? If no, remove every popup/card/widget.

**Restraint test:** Too many cards, gradients, badges or animations? Simplify.

**Typography test:** Does typography create hierarchy without decorative UI? Improve if not.

**Portfolio test:** Is the work itself the focus? Redesign if not.

**Mobile test:** Does mobile look intentionally designed? Recompose if not.

The final result must feel like a **real senior designer-built freelancer portfolio**, not an AI-generated landing page.
