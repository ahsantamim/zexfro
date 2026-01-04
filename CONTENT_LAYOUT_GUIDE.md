# Content Layout Guide

## Overview

The `ContentLayout` component system provides a unique, modern page layout design for non-service pages. This layout is distinct from the `DocLayout` (scrollspy design) used for service pages.

## When to Use Each Layout

### DocLayout (Scrollspy Design)
**Use for:** Service pages with technical, detailed content that benefits from sidebar navigation

**Pages using DocLayout:**
- Competitive Advantages (`/advantages`)
- Logistics Support (`/logistics-support`) - **Note: This will be migrated to ContentLayout**
- Quality Assurance (`/quality-assurance`)
- Compliance & Standards (`/compliance-standards`)
- Documentation & Compliance (`/documentation-compliance`)

### ContentLayout (Hero + Sections Design)
**Use for:** Policy pages, informational pages, and content-focused pages

**Pages using ContentLayout:**
- Logistics & Supply Chain (`/logistics-support`) - **Updated with new design**
- Privacy Policy (`/privacy-policy`) - **New page**
- Terms & Conditions (`/terms-conditions`) - **New page**

## ContentLayout Components

### 1. ContentLayout (Main Wrapper)

The main layout wrapper with a hero header and content sections.

```tsx
import { ContentLayout } from "@/components/ui/ContentLayout";

<ContentLayout
  pageTitle="Your Page Title"
  pageDescription="A brief description of the page content"
  heroImage="https://images.unsplash.com/photo-xxx?w=1600&q=80" // Optional
>
  {/* Your content sections here */}
</ContentLayout>
```

**Props:**
- `pageTitle` (string, required): The main page heading
- `pageDescription` (string, required): Subtitle/description text
- `heroImage` (string, optional): Hero background image URL (defaults to a world map image)
- `children` (ReactNode, required): Page content sections

**Features:**
- Full-width hero section with gradient overlay
- Decorative geometric shapes (circles, squares, hexagons)
- Responsive height (400px mobile, 500px desktop)
- Animated fade-in effect

---

### 2. ContentSection

A container for page content sections with consistent spacing and background options.

```tsx
import { ContentSection } from "@/components/ui/ContentLayout";

<ContentSection bgColor="white"> {/* or "gray" or "blue" */}
  {/* Your section content */}
</ContentSection>
```

**Props:**
- `bgColor` (string, optional): Background color - "white", "gray", or "blue" (default: "white")
- `noPadding` (boolean, optional): Remove default padding (default: false)
- `children` (ReactNode, required): Section content

**Features:**
- Consistent container width (max-w-6xl)
- Responsive padding (py-12 to py-20)
- Alternating background colors for visual hierarchy

---

### 3. SectionHeader

A standardized header for content sections with optional icon.

```tsx
import { SectionHeader } from "@/components/ui/ContentLayout";
import { Shield } from "lucide-react";

<SectionHeader
  title="Section Title"
  subtitle="Optional subtitle text"
  icon={<Shield className="w-7 h-7 text-white" />}
  centered={true}
/>
```

**Props:**
- `title` (string, required): Section heading
- `subtitle` (string, optional): Section description
- `icon` (ReactNode, optional): Icon element (typically Lucide React icon)
- `centered` (boolean, optional): Center-align the header (default: false)

**Features:**
- Large, bold title (text-3xl to text-4xl)
- Optional icon in blue container
- Consistent spacing and typography

---

### 4. FeatureCard

A card component for displaying features or services in a grid.

```tsx
import { FeatureCard } from "@/components/ui/ContentLayout";
import { Package } from "lucide-react";

<FeatureCard
  icon={<Package className="w-6 h-6" />}
  title="Feature Title"
  description="Feature description text"
  color="blue" // or "green", "purple", "orange"
/>
```

**Props:**
- `icon` (ReactNode, required): Icon element
- `title` (string, required): Card title
- `description` (string, required): Card description
- `color` (string, optional): Color theme - "blue", "green", "purple", or "orange" (default: "blue")

**Features:**
- Colored backgrounds and borders
- Icon container with matching color
- Hover shadow effect
- Responsive padding

---

### 5. CTABox

A call-to-action box with gradient background and button.

```tsx
import { CTABox } from "@/components/ui/ContentLayout";

<CTABox
  title="Ready to Get Started?"
  description="Join thousands of businesses worldwide"
  buttonText="Contact Us Today"
  buttonLink="/contact"
/>
```

**Props:**
- `title` (string, required): CTA heading
- `description` (string, required): CTA description
- `buttonText` (string, required): Button label
- `buttonLink` (string, required): Button destination URL

**Features:**
- Blue gradient background
- White text with semi-transparent description
- Prominent white button with hover effects
- Centered layout

---

## Complete Page Example

```tsx
import { 
  ContentLayout, 
  ContentSection, 
  SectionHeader, 
  FeatureCard,
  CTABox 
} from "@/components/ui/ContentLayout";
import { Shield, Lock, Eye } from "lucide-react";

export default function ExamplePage() {
  return (
    <ContentLayout
      pageTitle="Example Page"
      pageDescription="This is an example of the ContentLayout system"
      heroImage="https://images.unsplash.com/photo-xxx"
    >
      {/* Introduction Section */}
      <ContentSection bgColor="white">
        <div className="prose prose-lg max-w-none">
          <p>Your introduction text here...</p>
        </div>
      </ContentSection>

      {/* Features Section */}
      <ContentSection bgColor="gray">
        <SectionHeader
          title="Key Features"
          subtitle="What makes us different"
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <FeatureCard
            icon={<Shield className="w-6 h-6" />}
            title="Security"
            description="Enterprise-grade security"
            color="blue"
          />
          <FeatureCard
            icon={<Lock className="w-6 h-6" />}
            title="Privacy"
            description="Your data is protected"
            color="green"
          />
          <FeatureCard
            icon={<Eye className="w-6 h-6" />}
            title="Transparency"
            description="Complete visibility"
            color="purple"
          />
        </div>
      </ContentSection>

      {/* CTA Section */}
      <ContentSection bgColor="white">
        <CTABox
          title="Ready to Start?"
          description="Get in touch with our team today"
          buttonText="Contact Us"
          buttonLink="/contact"
        />
      </ContentSection>
    </ContentLayout>
  );
}
```

---

## Design Principles

### 1. Visual Hierarchy
- Hero section draws immediate attention
- Alternating background colors (white → gray → white)
- Clear section separation with consistent spacing

### 2. Consistency
- All sections use the same container width (max-w-6xl)
- Consistent padding and spacing throughout
- Standardized typography and colors

### 3. Responsiveness
- Mobile-first approach
- Hero height adjusts (400px → 500px)
- Grid layouts collapse on mobile
- Padding scales with screen size

### 4. Accessibility
- Semantic HTML structure
- Proper heading hierarchy
- Sufficient color contrast
- Focus states on interactive elements

---

## Color Palette

### Background Colors
- **White** (`bg-white`): Primary content background
- **Gray** (`bg-gray-50`): Alternating section background
- **Blue** (`bg-blue-50`): Accent section background

### Feature Card Colors
- **Blue**: Primary features (`blue-50`, `blue-100`, `blue-600`)
- **Green**: Success/positive features (`green-50`, `green-100`, `green-600`)
- **Purple**: Premium/special features (`purple-50`, `purple-100`, `purple-600`)
- **Orange**: Action/urgent features (`orange-50`, `orange-100`, `orange-600`)

### Brand Colors
- **Primary Blue**: `#0a4a9e` - Main brand color
- **Dark Blue**: `#05306b` - Gradient accent
- **Darker Blue**: `#041f3f` - Deep gradient

---

## Typography

### Headings
- **Page Title (Hero)**: `text-4xl md:text-5xl lg:text-6xl font-bold`
- **Section Title**: `text-3xl md:text-4xl font-bold`
- **Card Title**: `text-xl font-bold`

### Body Text
- **Large**: `text-lg md:text-xl` (hero description, section subtitles)
- **Regular**: `text-base` (standard content)
- **Small**: `text-sm` (card descriptions, labels)

### Colors
- **Headings**: `text-gray-900`
- **Body**: `text-gray-700`
- **Muted**: `text-gray-600`
- **White Text**: `text-white` (hero, CTA sections)

---

## Best Practices

### DO:
✅ Use alternating background colors for visual rhythm
✅ Include a SectionHeader for each major section
✅ Use FeatureCards in grids of 2-4 items
✅ End pages with a CTABox
✅ Maintain consistent spacing between sections
✅ Use semantic HTML (section, article, etc.)

### DON'T:
❌ Mix ContentLayout and DocLayout on the same page
❌ Use more than 3 background colors on one page
❌ Skip the hero section (it's part of ContentLayout)
❌ Create custom section containers (use ContentSection)
❌ Forget responsive grid layouts
❌ Use arbitrary spacing (stick to the system)

---

## Migration from DocLayout

If you need to migrate a page from DocLayout to ContentLayout:

1. **Replace the layout wrapper:**
   ```tsx
   // Before (DocLayout)
   <DocLayout sections={sections} pageTitle="..." pageDescription="...">
   
   // After (ContentLayout)
   <ContentLayout pageTitle="..." pageDescription="..." heroImage="...">
   ```

2. **Replace DocSection with ContentSection:**
   ```tsx
   // Before
   <DocSection id="overview" title="Overview">
   
   // After
   <ContentSection bgColor="white">
     <SectionHeader title="Overview" subtitle="..." />
   ```

3. **Remove scrollspy navigation** (sidebar is not part of ContentLayout)

4. **Update section structure** to use the new component system

---

## File Locations

- **Layout Components**: `src/components/ui/ContentLayout.tsx`
- **Example Pages**:
  - `src/app/[locale]/(main)/logistics-support/page.tsx`
  - `src/app/[locale]/(main)/privacy-policy/page.tsx`
  - `src/app/[locale]/(main)/terms-conditions/page.tsx`

---

## Support

For questions or issues with the ContentLayout system, refer to:
- UI Guidelines: `UI_GUIDELINES.md`
- Visual Guide: `VISUAL_GUIDE.md`
- Component source: `src/components/ui/ContentLayout.tsx`

---

**Last Updated:** January 4, 2026
**Version:** 1.0

