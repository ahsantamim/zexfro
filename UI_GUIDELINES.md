# Zexfro UI Design Guidelines

**Version:** 1.0  
**Last Updated:** January 1, 2026  
**Project:** Zexfro - Global Trade Platform

---

## Table of Contents

1. [Brand Identity](#brand-identity)
2. [Color Palette](#color-palette)
3. [Typography](#typography)
4. [Layout & Spacing](#layout--spacing)
5. [Components](#components)
6. [Animations & Interactions](#animations--interactions)
7. [Page Structure Patterns](#page-structure-patterns)
8. [Responsive Design](#responsive-design)
9. [Icon Usage](#icon-usage)
10. [Best Practices](#best-practices)

---

## Brand Identity

### Mission Statement
"Secure. Compliant. Global Trade Made Simple."

### Brand Values
- **Excellence**: Quality that exceeds expectations
- **Integrity**: Honesty, transparency, and ethical practices
- **Innovation**: Continuous improvement and growth
- **Customer Success**: Client-focused approach

### Visual Identity
- **Style**: Modern, professional, corporate
- **Design Language**: Clean, structured with geometric patterns
- **Aesthetic**: Business-focused with touches of innovation
- **Approach**: Trust-building through visual clarity

---

## Color Palette

### Primary Colors

```css
/* Primary Blue (Brand Color) */
--primary-blue: #0A4D96
--primary-blue-dark: #05306b
--primary-blue-darker: #041f3f
--primary-blue-light: #0d5bbf

/* Navy Blue (Navigation) */
--navy-blue: #1800ad

/* Accent Green (CTA) */
--green-primary: #0AFF72
--green-light: #7BE0A5
--green-hover: #15E67C
--green-dark: #0a8a4a (from green-900)
```

### Neutral Colors

```css
/* Grayscale */
--gray-900: #111827
--gray-600: #4b5563
--gray-400: #9ca3af
--gray-300: #d1d5db
--gray-200: #e5e7eb
--gray-50: #f9fafb

/* White & Black */
--white: #ffffff
--black: #000000
```

### Semantic Colors

```css
/* Status Colors */
--success: #10b981
--error: #ef4444
--warning: #f59e0b
--info: #3b82f6

/* Background Variations */
--bg-blue-50: #eff6ff
--bg-green-50: #f0fdf4
--bg-yellow-50: #fefce8
--bg-red-50: #fef2f2
```

### Color Usage Rules

1. **Primary Blue**: Main brand color, use for headers, primary CTAs, and key UI elements
2. **Navy Blue**: Reserved for navigation bar only
3. **Green**: Use for primary action buttons (Register, Submit, Sign Up)
4. **White/Gray**: Background sections alternate between white and light blue backgrounds
5. **Gray 600-900**: Body text and descriptions
6. **Light Pastels**: Card backgrounds with hover states

---

## Typography

### Font Stack

```css
/* Primary Font */
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 
             'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 
             'Helvetica Neue', sans-serif;

/* Special Use: Stats & Numbers */
font-family: 'Monospace' (font-mono)

/* Special Use: Hero CTA Button */
font-family: 'Poppins'
```

### Heading Scales

```css
/* H1 - Page Titles & Hero Headlines */
.heading-1 {
  font-size: 72px;      /* Desktop (lg) */
  font-size: 48px;      /* Tablet (md) */
  font-size: 40px;      /* Small Tablet (sm) */
  font-size: 36px;      /* Mobile */
  font-weight: 700;     /* Bold */
  line-height: 1.2;
}

/* H2 - Section Titles */
.heading-2 {
  font-size: 48-60px;   /* Desktop (lg) */
  font-size: 40-48px;   /* Tablet (md) */
  font-size: 32px;      /* Mobile */
  font-weight: 700;     /* Bold */
  line-height: 1.2;
}

/* H3 - Card Titles & Subsection Headers */
.heading-3 {
  font-size: 20-24px;
  font-weight: 700;     /* Bold */
  line-height: 1.3;
}

/* H4 - Component Headers */
.heading-4 {
  font-size: 18px;
  font-weight: 600;     /* Semibold */
  line-height: 1.4;
}
```

### Body Text

```css
/* Large Body (Hero Descriptions, Section Intros) */
.text-large {
  font-size: 18-20px;   /* Desktop */
  font-size: 16px;      /* Mobile */
  font-weight: 400;     /* Normal */
  line-height: 1.4-1.5;
  color: #4b5563;       /* gray-600 */
}

/* Regular Body (Card Descriptions) */
.text-regular {
  font-size: 14-16px;
  font-weight: 400;     /* Normal */
  line-height: 1.5-1.6;
  color: #4b5563;       /* gray-600 */
}

/* Small Text (Labels, Badges) */
.text-small {
  font-size: 12-13px;
  font-weight: 500;     /* Medium */
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
```

### Font Weights

- **700 (Bold)**: Headings, buttons, emphasis
- **600 (Semibold)**: Sub-headings, labels, navigation
- **500 (Medium)**: Badges, small labels
- **400 (Normal)**: Body text, descriptions

---

## Layout & Spacing

### Container System

```css
/* Maximum Width Container */
.container {
  max-width: 1280px;     /* 7xl - Standard */
  max-width: 1536px;     /* 9xl - Navigation only */
  margin: 0 auto;
  padding: 0 1rem;       /* Mobile (16px) */
  padding: 0 1.5rem;     /* Tablet (24px) */
  padding: 0 2rem;       /* Desktop (32px) */
}
```

### Section Spacing

```css
/* Vertical Padding for Sections */
.section-padding {
  padding-top: 3rem;     /* Mobile (48px) */
  padding-bottom: 3rem;
  
  padding-top: 4rem;     /* Tablet (64px) */
  padding-bottom: 4rem;
  
  padding-top: 5rem;     /* Desktop (80px) */
  padding-bottom: 5rem;
  
  padding-top: 6rem;     /* Large Desktop (96px) */
  padding-bottom: 6rem;
}
```

### Grid Systems

```css
/* Feature/Service Cards Grid */
.grid-layout {
  display: grid;
  grid-template-columns: 1fr;              /* Mobile */
  grid-template-columns: repeat(2, 1fr);   /* Tablet (md) */
  grid-template-columns: repeat(3, 1fr);   /* Desktop (lg) */
  grid-template-columns: repeat(4, 1fr);   /* Large Desktop for features */
  gap: 1.5rem;           /* 24px mobile */
  gap: 2rem;             /* 32px desktop */
}
```

### Spacing Scale

```css
/* Consistent Spacing Scale (Tailwind) */
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-6: 24px;
--space-8: 32px;
--space-12: 48px;
--space-16: 64px;
--space-20: 80px;
--space-24: 96px;
```

---

## Components

### 1. Navigation Bar

**Structure:**
- Fixed position, top of viewport, z-index: 50
- Height: `h-20` mobile, `h-60` desktop (240px)
- Background: Navy Blue `#1800ad` with backdrop blur
- World map pattern overlay at 20% opacity

**Desktop Layout:**
- Large animated logo (GIF → PNG transition after 3 seconds)
- Logo dimensions: 300px → 240px
- Right-aligned navigation links
- Large text: `text-3xl` (30px), font-bold

**Mobile Layout:**
- Small logo: 80px
- Hamburger menu icon
- Dropdown menu below navbar

**Navigation Items:**
```jsx
Home, About, Services, Products, Blog, Contact
```

**Styling:**
```css
/* Navigation Link */
.nav-link {
  padding: 2rem 1rem;
  font-size: 1.875rem;      /* 30px desktop */
  font-weight: 700;
  color: white;
  border-radius: 0.375rem;
  transition: background-color 200ms;
}

.nav-link:hover {
  background: rgba(255, 255, 255, 0.2);
}

/* Contact link special styling */
.nav-link-contact {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(4px);
}
```

---

### 2. Page Header Component

**Usage:** Top section of internal pages (About, Services, etc.)

**Structure:**
```jsx
<section className="bg-gradient-to-br from-[#0a4a9e] via-[#05306b] to-[#041f3f]">
  <h1>Page Title</h1>
  <p>Page Description</p>
</section>
```

**Styling:**
- Gradient background (blue shades)
- Decorative geometric shapes (circles, squares) at 10% opacity
- White text, centered
- Padding: `py-20 md:py-32`
- Fade-in animation on load

**Example:**
```jsx
<PageHeader 
  title="About Zexfro"
  description="Revolutionizing global trade through innovation..."
/>
```

---

### 3. Section Headers

**Consistent Pattern Across All Pages:**

```jsx
<div className="text-center mb-12 md:mb-16">
  {/* Optional Badge */}
  <span className="text-[#0a4a9e] font-semibold text-sm uppercase tracking-wider bg-blue-50 px-4 py-2 rounded-full inline-block">
    Badge Text
  </span>
  
  {/* Main Title */}
  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-6 mb-4">
    Section Title
  </h2>
  
  {/* Description */}
  <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
    Section description text
  </p>
</div>
```

**Badge Variations:**
- "What We Offer"
- "Our Process"
- "Core Values"
- "Our Mission"
- "Our Vision"

---

### 4. Feature/Service Cards

**Standard Card Structure:**

```jsx
<div className="group p-6 bg-white rounded-none hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-[#0a4a9e]">
  {/* Icon Container */}
  <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#0a4a9e] transition-colors duration-300">
    <Icon className="w-7 h-7 text-[#0a4a9e] group-hover:text-white" strokeWidth={2} />
  </div>
  
  {/* Title */}
  <h3 className="text-xl font-bold text-gray-900 mb-3">
    Card Title
  </h3>
  
  {/* Description */}
  <p className="text-gray-600 text-sm leading-relaxed">
    Card description text
  </p>
</div>
```

**Card Variations:**

1. **Feature Cards** (4 columns on large screens)
   - Colored backgrounds based on category (blue-50, green-50, yellow-50, red-50)
   - Colored borders matching background
   - Highlighted text with `bg-cyan-100` background

2. **Service Cards** (3 columns on large screens)
   - White background with gray border
   - Standard hover state (blue border + shadow)

3. **Value Cards** (4 columns)
   - White background with gray border
   - Icon changes from blue to white on hover
   - Icon container changes from blue-50 to primary blue

**Common Properties:**
- Border radius: `rounded-none` (sharp corners)
- Padding: `p-6`
- Hover effects: Scale, shadow, border color change
- Transition: `transition-all duration-300`

---

### 5. Buttons

**Primary CTA Button (Hero/Large):**

```jsx
<button className="
  bg-green-900
  hover:from-[#0AFF72] hover:via-[#15E67C] hover:to-[#7BE0A5]
  text-white font-bold text-[36px]
  px-12 py-6 rounded-full
  shadow-lg hover:shadow-xl
  transition-all duration-300
  flex items-center gap-4
">
  Button Text
  <ArrowRight className="w-7 h-7" />
</button>
```

**Secondary Button (Standard):**

```jsx
<button className="
  bg-gradient-to-r from-[#0a4a9e] to-[#05306b]
  hover:from-[#0d5bbf] hover:to-[#0a4a9e]
  text-white font-bold text-lg
  px-10 py-4 rounded-full
  shadow-lg hover:shadow-xl
  transition-all duration-300 transform hover:scale-105
  flex items-center gap-3
">
  Button Text
  <ArrowRight className="w-5 h-5" />
</button>
```

**Tertiary Button (Light):**

```jsx
<button className="
  bg-white
  hover:bg-[#083a73]
  text-[#0A4D96]
  hover:text-white
  font-bold text-[18px] sm:text-[22px]
  px-8 py-3.5 rounded-full
  border border-[#0A4D96]
  transition-all duration-300
  flex items-center gap-2
">
  Button Text
  <ArrowRight className="w-5 h-5 group-hover:-rotate-45" />
</button>
```

**Button States:**
- Default: Full color/gradient
- Hover: Lighter gradient, scale up slightly, arrow moves/rotates
- Active: Pressed appearance
- Disabled: Reduced opacity (50%), no hover effects

**Icon Animations:**
- Standard: Arrow translates right 4px on hover
- Special: Arrow rotates -45deg and translates on hover

---

### 6. Stats Section

**Structure:**
```jsx
<section className="py-12 sm:py-16 md:py-20 bg-[#0A4D96]">
  <div className="flex flex-col sm:flex-row items-center justify-center divide-y sm:divide-y-0 sm:divide-x divide-white/20">
    {/* Stat Items */}
  </div>
</section>
```

**Stat Item:**
```jsx
<div className="flex flex-col items-center py-2 sm:py-3">
  <p className="font-mono text-3xl sm:text-4xl md:text-5xl font-bold text-white">
    <CountUpAnimation>92</CountUpAnimation>%
  </p>
  <p className="text-xs font-medium uppercase tracking-wider text-white/80">
    Client satisfaction rate
  </p>
</div>
```

**Key Features:**
- Background: Primary blue with decorative geometric shapes
- Number font: Monospace for readability
- Count-up animation on scroll into view (2.5s duration)
- White dividers between stats (vertical on desktop, horizontal on mobile)

---

### 7. Call-to-Action Sections

**Full-Width CTA Block:**

```jsx
<section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#0A4D96] text-white relative overflow-hidden">
  {/* Background decorations (circles, squares) at 5% opacity */}
  
  <div className="container mx-auto max-w-7xl px-4 text-center relative z-10">
    <h2 className="text-4xl md:text-5xl font-bold mb-4">
      Ready to Get Started?
    </h2>
    <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
      Join thousands of satisfied customers...
    </p>
    <button className="bg-white text-[#0A4D96] hover:bg-white/90 font-bold text-lg px-10 py-4 rounded-full">
      Contact Us Now
    </button>
  </div>
</section>
```

**Styling Rules:**
- Always uses primary blue background
- White text with 90% opacity for descriptions
- Centered content
- White button with blue text (inverted from usual)
- Decorative SVG shapes in background

---

### 8. How It Works / Process Section

**Structure:**
```jsx
<section className="py-16 md:py-24 bg-white">
  {/* Section Header */}
  
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
    {/* Connection line (desktop only) */}
    <div className="hidden lg:block absolute top-24 h-0.5 bg-gradient-to-r from-[#0a4a9e] via-[#05306b] to-[#041f3f]" />
    
    {/* Step Cards */}
    {steps.map((step) => (
      <div>
        {/* Number Badge */}
        <div className="w-16 h-16 bg-gradient-to-br from-[#0a4a9e] to-[#041f3f] rounded-full text-white text-xl">
          {step.number}
        </div>
        
        {/* Card with icon, title, description */}
      </div>
    ))}
  </div>
</section>
```

**Key Features:**
- 4 steps in a row on desktop
- Number badges connected by gradient line
- Cards with icon, title, description
- Radial dot pattern background at 5% opacity

---

### 9. Hero Section

**Structure:**
- Full viewport height: `min-height: 100vh`
- Background image with parallax effect
- Dark gradient overlay
- Centered content with typewriter animation

**Key Elements:**
```jsx
<section className="relative flex flex-col justify-center text-white pt-20 md:pt-60" style={{ minHeight: "100vh" }}>
  {/* Parallax Background Image */}
  <div ref={bgRef} style={{ backgroundImage: "url('/home/hero.avif')" }} />
  
  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-black/20" />
  
  {/* Content */}
  <div className="container relative z-10">
    <h1>Main Headline</h1>
    <p>Subtitle</p>
    
    {/* Moving Border Button */}
    <MovingBorderButton>Register for Free</MovingBorderButton>
    
    {/* Typewriter Text */}
    <p>Register as an <TypewriterText /></p>
    
    {/* Product Buttons */}
    <button>Import Products</button>
    <button>Export Products</button>
    
    {/* Trust Badge */}
    <div>Trusted by 100+ importers and exporters</div>
  </div>
</section>
```

**Special Effects:**
- Background image parallax scrolling (0.4x speed)
- Typewriter animation alternating between "Importer" and "Exporter"
- Moving border animation on primary CTA
- Glossy 3D text effect with shadows on main CTA text

---

### 10. Footer

**Structure:**
```jsx
<footer className="bg-gray-900 text-gray-300 relative overflow-hidden">
  {/* World Map Background */}
  <div className="absolute inset-0 opacity-10" style={{ 
    backgroundImage: "url('/footer/world-map.webp')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    filter: "brightness(0.8) contrast(1.2)",
    mixBlendMode: "overlay"
  }} />
  
  {/* Subtle Shadow Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-transparent to-gray-900/80" />
  
  <div className="container py-12 sm:py-14 md:py-16 lg:py-20 relative z-10">
    {/* 4-column grid: Brand, Company, Resources, Services */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
      {/* Brand Section with contact info */}
      {/* Link Columns */}
    </div>
    
    {/* Bottom Copyright Bar */}
    <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm">
      © {year} Zexfro. All rights reserved.
    </div>
  </div>
</footer>
```

**Column Structure:**

1. **Brand Column** - Company info and contact details
   - Company name and tagline
   - Address (with MapPin icon)
   - Phone (with Phone icon)
   - Email (with Mail icon)

2. **Company Column**
   - Payment Method
   - Case Studies / Portfolio
   - Careers
   - Partner With Us
   - Request a Quote
   - Mission
   - Vision & Values
   - Social Media Links

3. **Resources Column**
   - Blog / News
   - FAQ
   - Contact Us
   - Logistics & Supply Chain
   - Privacy Policy
   - Terms & Conditions

4. **Services Column**
   - Competitive Advantages
   - Logistics Support
   - Quality Assurance
   - Compliance & Standards
   - Documentation & Compliance

**Styling:**
- Background: Dark gray (gray-900) with world map overlay
- World Map Pattern: 10% opacity with overlay blend mode
- Gradient Shadow: Top to bottom (gray-900/50 → transparent → gray-900/80)
- Text: Light gray (gray-300)
- Headings: White, semibold
- Links: Hover to white
- Icons: Lucide React (MapPin, Phone, Mail)
- Column headers: Bold, white
- Link spacing: space-y-2 (8px between links)

**Background Effects:**
- World map image at `/footer/world-map.webp`
- Opacity: 10% for subtle appearance
- Filter: `brightness(0.8) contrast(1.2)` for better definition
- Mix blend mode: overlay for integration with dark background
- Gradient overlay for depth and shadow effect

---

## Animations & Interactions

### 1. Fade-In Animation

**Usage:** Page headers, hero content

```css
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.8s ease-out forwards;
}
```

### 2. Hover Effects

**Standard Card Hover:**
```css
.card {
  transition: all 0.3s ease;
}

.card:hover {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 
              0 10px 10px -5px rgba(0, 0, 0, 0.04);
  border-color: #0a4a9e;
}
```

**Icon Hover (Group-based):**
```css
.group:hover .icon-container {
  background-color: #0a4a9e;
}

.group:hover .icon {
  color: white;
}
```

**Button Hover:**
```css
.button {
  transition: all 0.3s ease;
  transform: scale(1);
}

.button:hover {
  transform: scale(1.05);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}
```

### 3. Arrow Icon Animations

**Standard (Translate):**
```css
.arrow {
  transition: transform 0.3s ease;
}

.button:hover .arrow {
  transform: translateX(0.25rem); /* 4px */
}
```

**Special (Rotate + Translate):**
```css
.button:hover .arrow {
  transform: rotate(-45deg) translateX(0.5rem); /* 8px */
}
```

### 4. Count-Up Animation

**Usage:** Stats section

```jsx
// Framer Motion animate function
animate(0, finalNumber, {
  duration: 2.5,
  onUpdate(value) {
    element.textContent = value.toFixed(decimals);
  },
});
```

**Trigger:** When element comes into view (IntersectionObserver)

### 5. Typewriter Effect

**Hero Section Special:**
- Typing speed: 100ms per character
- Deleting speed: 60ms per character
- Pause between words: 900ms
- Alternates between preset words

### 6. Parallax Scrolling

**Hero Background:**
```js
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  background.style.transform = `translate3d(0, ${scrolled * 0.4}px, 0)`;
});
```

**Performance:** Uses `requestAnimationFrame` and `will-change-transform`

### 7. Logo Animation

**Navigation:**
- Shows GIF animation for 3 seconds on page load
- Smooth fade transition to static PNG logo
- Crossfade with scale animation

---

## Page Structure Patterns

### 1. Landing Page (Home)

```jsx
<main>
  <HeroSection />              // Full viewport, parallax background
  <FeaturesSection />          // White background, 4-column grid
  <ProductCategoriesSection /> // Custom layout
  <TestimonialsSection />      // Light background
  <StatsSection />             // Blue background
  <BlogSection />              // White background
  <CTASection />               // Blue background
</main>
```

**Pattern:** Alternating white and colored backgrounds

### 2. About Page

```jsx
<main className="pt-60">      // Account for fixed navbar
  <PageHeader />              // Blue gradient header
  <MissionSection />          // White, 2-column grid for mission/vision
  <AboutStatsSection />       // Similar to home stats
  <TimelineSection />         // Company history
  <TeamSection />             // Team member cards
</main>
```

**Pattern:** Header + alternating sections

### 3. Services Page

```jsx
<main className="pt-60">
  <PageHeader />              // Blue gradient header
  <ServicesGrid />            // 3-column grid of service cards
  <HowItWorks />              // 4-step process with connection line
  <ServicesBenefits />        // Benefits list
  <ServicesCTA />             // Blue CTA section
</main>
```

**Pattern:** Header + grid + process + CTA

### Common Elements Across All Pages:

1. **Navbar**: Fixed at top
2. **Page Content**: Starts with padding-top to avoid navbar overlap
3. **Sections**: Consistent padding (py-16 to py-24)
4. **Footer**: Always at bottom

---

## Responsive Design

### Breakpoints

```css
/* Tailwind Default Breakpoints */
sm: 640px   // Small devices
md: 768px   // Medium devices (tablets)
lg: 1024px  // Large devices (laptops)
xl: 1280px  // Extra large devices (desktops)
2xl: 1536px // 2X large devices
```

### Mobile-First Approach

**Always start with mobile layout, then add larger breakpoints:**

```jsx
// Mobile-first example
<div className="
  text-2xl           // Mobile: 24px
  md:text-3xl        // Tablet: 30px
  lg:text-4xl        // Desktop: 36px
">
```

### Responsive Grid Patterns

```jsx
// 1 → 2 → 3 columns
grid-cols-1 md:grid-cols-2 lg:grid-cols-3

// 1 → 2 → 4 columns
grid-cols-1 md:grid-cols-2 lg:grid-cols-4

// 1 → 2 columns (Mission/Vision)
grid-cols-1 lg:grid-cols-2
```

### Responsive Typography

```jsx
// Heading responsive pattern
text-3xl md:text-4xl lg:text-5xl

// Body text responsive pattern
text-base md:text-lg lg:text-xl

// Button text responsive pattern
text-[18px] sm:text-[22px]
```

### Responsive Spacing

```jsx
// Padding responsive pattern
py-12 sm:py-16 md:py-20 lg:py-24

// Gap responsive pattern
gap-6 md:gap-8 lg:gap-10
```

### Navigation Responsive Behavior

**Desktop (md and up):**
- Large logo with animation
- Horizontal navigation links
- Large text size (3xl)

**Mobile (below md):**
- Small logo
- Hamburger menu
- Dropdown overlay menu
- Full-width mobile menu items

### Container Responsive Padding

```jsx
// Consistent container padding pattern
px-4 sm:px-6 lg:px-8
```

**Results in:**
- Mobile: 16px horizontal padding
- Tablet: 24px horizontal padding
- Desktop: 32px horizontal padding

---

## Icon Usage

### Icon Library
**Primary:** Lucide React

```jsx
import { Icon } from "lucide-react";
```

### Common Icons by Category

**Navigation & Actions:**
- `ArrowRight`: CTAs, navigation links
- `Menu`: Mobile menu toggle
- `X`: Close modal/menu
- `ChevronDown`: Dropdowns

**Features:**
- `Shield`: Security features
- `Clock`: Time/tracking features
- `Globe`: Global/international features
- `CheckCircle`: Quality/verification features

**Services:**
- `Ship`: Shipping services
- `Package`: Packaging/delivery
- `FileCheck`: Documentation
- `ShieldCheck`: Compliance
- `Warehouse`: Storage
- `Truck`: Transportation
- `DollarSign`: Finance
- `TrendingUp`: Growth/optimization
- `Users`: Team/supplier verification
- `BarChart3`: Analytics

**About/Values:**
- `Target`: Excellence
- `Heart`: Integrity
- `Eye`: Innovation
- `Award`: Customer success

**Contact:**
- `Mail`: Email
- `Phone`: Phone number
- `MapPin`: Address

### Icon Sizing

```jsx
// Small icons (cards, features)
<Icon className="w-6 h-6" />      // 24px

// Medium icons (default)
<Icon className="w-7 h-7" />      // 28px

// Button icons
<Icon className="w-5 h-5" />      // 20px

// Large icons (hero)
<Icon className="w-8 h-8" />      // 32px
```

### Icon Container Pattern

```jsx
<div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center group-hover:bg-[#0a4a9e] transition-colors duration-300">
  <Icon className="w-7 h-7 text-[#0a4a9e] group-hover:text-white transition-colors" strokeWidth={2} />
</div>
```

**Standard Pattern:**
- Container: 56px (w-14 h-14)
- Icon: 28px (w-7 h-7)
- Border radius: 8px (rounded-lg)
- Background: blue-50 → primary blue on hover
- Icon color: primary blue → white on hover
- Stroke width: 2 for consistency

---

## Best Practices

### 1. Consistency Rules

**DO:**
- ✅ Always use the same color for similar actions (green for primary CTAs)
- ✅ Maintain consistent spacing between sections (py-16 to py-24)
- ✅ Use the same hover effects for similar components
- ✅ Keep icon sizes consistent within the same context
- ✅ Use the rounded-none pattern for cards (sharp corners)
- ✅ Apply group hover patterns for icon transitions

**DON'T:**
- ❌ Mix border radius styles (don't use rounded-lg and rounded-none randomly)
- ❌ Use different shades of blue outside the defined palette
- ❌ Skip responsive breakpoints (always think mobile-first)
- ❌ Forget hover states on interactive elements
- ❌ Use arbitrary font sizes (stick to the scale)

### 2. Accessibility

**Color Contrast:**
- Ensure text meets WCAG AA standards (4.5:1 for normal text)
- White text on primary blue (#0A4D96) ✅ Passes
- Gray-600 text on white ✅ Passes

**Interactive Elements:**
- Minimum tap target: 44x44px (especially mobile)
- Always provide focus states
- Include aria-labels for icon-only buttons
- Maintain keyboard navigation support

**Semantic HTML:**
```jsx
// Use proper heading hierarchy
<h1>Page Title</h1>
  <h2>Section Title</h2>
    <h3>Card Title</h3>

// Use semantic elements
<nav>, <main>, <section>, <article>, <footer>
```

### 3. Performance Optimization

**Images:**
- Use Next.js Image component with priority for above-fold images
- Specify width and height to prevent layout shift
- Use modern formats (AVIF, WebP) with fallbacks
- Lazy load below-fold images

**Animations:**
- Use CSS transforms and opacity for GPU acceleration
- Avoid animating width, height, top, left
- Use `will-change-transform` sparingly for parallax
- Implement `requestAnimationFrame` for scroll effects

**CSS:**
- Use Tailwind's purge in production
- Minimize custom CSS
- Use CSS variables for theme colors
- Leverage Tailwind's JIT mode

### 4. Code Organization

**Component Structure:**
```jsx
// 1. Imports
import { Icon } from "lucide-react";

// 2. Type definitions (if TypeScript)
interface Props { }

// 3. Data/constants
const items = [ ];

// 4. Component
export function Component() {
  // 5. State/hooks
  
  // 6. Functions
  
  // 7. Render
  return ( );
}
```

**File Naming:**
- Components: PascalCase (`HeroSection.tsx`)
- Utilities: camelCase (`formatDate.ts`)
- Styles: kebab-case (`globals.css`)

**Folder Structure:**
```
src/
├── app/
│   ├── (main)/          // Public pages
│   │   ├── page.tsx     // Landing page
│   │   ├── about/
│   │   ├── services/
│   │   └── layout.tsx
│   └── admin/           // Admin pages
├── components/
│   ├── home/            // Home-specific
│   ├── about/           // About-specific
│   ├── services/        // Services-specific
│   ├── layout/          // Navbar, Footer
│   └── ui/              // Reusable UI components
└── styles/
    └── globals.css      // Global styles
```

### 5. Reusability

**Create reusable components for:**
- Page headers
- Section headers with badges
- Card layouts (feature cards, service cards)
- Buttons (primary, secondary, tertiary)
- CTA sections
- Stats components

**Example Reusable Component:**
```jsx
// components/ui/SectionHeader.tsx
export function SectionHeader({ 
  badge, 
  title, 
  description 
}: Props) {
  return (
    <div className="text-center mb-12 md:mb-16">
      {badge && (
        <span className="text-[#0a4a9e] font-semibold text-sm uppercase tracking-wider bg-blue-50 px-4 py-2 rounded-full inline-block">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-6 mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}
```

### 6. Testing Checklist

**Before deploying any new page/component:**

- [ ] Test on mobile (< 640px)
- [ ] Test on tablet (768px - 1024px)
- [ ] Test on desktop (> 1024px)
- [ ] Verify hover states work
- [ ] Check animations are smooth (60fps)
- [ ] Ensure proper color contrast
- [ ] Validate with lighthouse (performance, accessibility, SEO)
- [ ] Test keyboard navigation
- [ ] Check in multiple browsers (Chrome, Firefox, Safari)
- [ ] Verify images load with proper dimensions
- [ ] Test loading states
- [ ] Check for console errors

---

## Design Tokens (Quick Reference)

```css
/* Colors */
--primary: #0A4D96
--navy: #1800ad
--green: #0AFF72
--gray: #4b5563
--white: #ffffff

/* Spacing */
--section-padding: 5rem (80px desktop)
--card-padding: 1.5rem (24px)
--container-padding: 2rem (32px desktop)

/* Typography */
--font-size-h1: 3-4.5rem (48-72px)
--font-size-h2: 2-3rem (32-48px)
--font-size-h3: 1.25rem (20px)
--font-size-body: 1rem (16px)

/* Shadows */
--shadow-card: 0 20px 25px -5px rgba(0, 0, 0, 0.1)
--shadow-button: 0 10px 15px -3px rgba(0, 0, 0, 0.1)

/* Border Radius */
--radius-none: 0px (cards)
--radius-lg: 8px (icon containers)
--radius-full: 9999px (buttons, badges)

/* Transitions */
--duration-normal: 300ms
--duration-slow: 500ms
--easing: ease-in-out
```

---

## Version History

**Version 1.0** - January 1, 2026
- Initial UI guidelines documentation
- Analyzed landing page, about page, and services page
- Documented all major components and patterns
- Established color palette and typography standards
- Created responsive design guidelines
- Defined animation and interaction patterns

---

## Maintenance

**This document should be updated when:**
- New UI components are created
- Color palette changes
- Typography scale is modified
- New page patterns emerge
- Design system evolves

**Review frequency:** Quarterly or when major design changes occur

---

## Contact

For questions or suggestions regarding these UI guidelines, please contact the development team or design lead.

**Project Repository:** Zexfro  
**Framework:** Next.js 16 with React 19  
**Styling:** Tailwind CSS 4  
**UI Components:** Radix UI + Custom Components

---

**Last Updated:** January 1, 2026  
**Next Review Date:** April 1, 2026

