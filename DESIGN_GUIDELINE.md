# Zexfro Design Guideline

## Overview
This document outlines the design system and guidelines for the Zexfro website to ensure consistency across all pages.

---

## 🎨 Color Palette

### Primary Colors
- **Primary Blue**: `#0a4a9e` (from-[#0a4a9e])
- **Mid Blue**: `#05306b` (via-[#05306b])
- **Dark Blue**: `#041f3f` (to-[#041f3f])
- **Hover Blue**: `#0d5bbf` (hover states)

### Accent Colors
- **Success Green**: `from-green-500 to-emerald-600`
- **White**: `#ffffff`
- **Gray Backgrounds**: `bg-gray-50`, `bg-white`
- **Text Gray**: `text-gray-600`, `text-gray-900`

---

## 📐 Layout Structure

### 1. **Navbar**
- **Height**: `h-60` (240px) - FIXED
- **Position**: Fixed at top (`fixed top-0`)
- **Background**: Gradient blue with backdrop blur
- **z-index**: `z-50`

### 2. **Page Structure**
Every page MUST follow this structure:

```tsx
<main className="min-h-screen pt-60">
  {/* Hero or Page Header */}
  {/* Main Sections */}
  {/* CTA Section */}
</main>
```

**CRITICAL**: All pages must have `pt-60` (padding-top: 240px) to account for the fixed navbar.

### 3. **Section Spacing**
- **Vertical Padding**: `py-16 md:py-24`
- **Container**: `container mx-auto max-w-7xl`
- **Horizontal Padding**: `px-4` (when needed)

---

## 🏗️ Component Patterns

### Section Headers
All sections should follow this header pattern:

```tsx
<div className="text-center mb-12 md:mb-16">
  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
    Section Title
  </h2>
  <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
    Section description
  </p>
</div>
```

### Page Headers (for non-home pages)
Full-width header with gradient background:

```tsx
<div className="bg-gradient-to-br from-[#0a4a9e] via-[#05306b] to-[#041f3f] text-white py-20 md:py-32">
  <div className="container mx-auto max-w-7xl px-4 text-center">
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
      Page Title
    </h1>
    <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
      Page description
    </p>
  </div>
</div>
```

---

## 🎯 Typography

### Headings
- **H1**: `text-4xl md:text-5xl lg:text-6xl font-bold`
- **H2**: `text-3xl md:text-4xl lg:text-5xl font-bold`
- **H3**: `text-2xl md:text-3xl font-bold`
- **H4**: `text-xl md:text-2xl font-semibold`

### Body Text
- **Large**: `text-lg md:text-xl`
- **Regular**: `text-base`
- **Small**: `text-sm`

### Font Family
- **Primary**: Outfit (from Google Fonts)

---

## 🔘 Buttons

### Primary Button (CTA)
```tsx
<Link
  href="/path"
  className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#0a4a9e] to-[#05306b] hover:from-[#0d5bbf] hover:to-[#0a4a9e] text-white font-bold text-lg px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
>
  Button Text
  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
</Link>
```

### Key Features:
- **Shape**: `rounded-full`
- **Gradient**: Primary blue gradient
- **Hover**: Scale transform (1.05) + arrow animation
- **Padding**: `px-10 py-4`
- **Shadow**: `shadow-lg hover:shadow-xl`

---

## 📦 Cards

### Feature Cards
```tsx
<div className="group p-6 bg-white rounded-none hover:shadow-xl transition-all duration-300 border border-gray-200">
  {/* Icon */}
  <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
    <Icon className="w-7 h-7 text-blue-600" />
  </div>
  
  {/* Content */}
  <h3 className="text-xl font-bold text-gray-900 mb-3">Card Title</h3>
  <p className="text-gray-600 text-sm leading-relaxed">Card description</p>
</div>
```

### Product Cards
```tsx
<div className="relative group overflow-hidden rounded-none aspect-[4/3]">
  {/* Background Image */}
  <Image src={image} alt={title} fill className="object-cover" />
  
  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
  
  {/* Content at Bottom */}
  <div className="relative h-full flex flex-col p-6">
    <div className="flex-1" />
    <div className="flex items-end justify-between gap-4">
      <div className="space-y-2">
        <h3 className="text-2xl font-bold text-white">Title</h3>
        <p className="text-sm text-gray-200">Subtitle</p>
      </div>
      <ArrowButton />
    </div>
  </div>
</div>
```

**Key Features:**
- **Corners**: `rounded-none` (sharp corners)
- **Aspect Ratio**: `aspect-[4/3]` for consistent sizing
- **Hover**: `hover:scale-[1.02]`

---

## 🌈 Background Patterns

### Alternating Sections
- **White**: `bg-white`
- **Gray**: `bg-gray-50`
- **Blue Gradient**: `bg-gradient-to-br from-[#0a4a9e] via-[#05306b] to-[#041f3f]`

### Decorative Grid Pattern
Used in Product Categories Section:

```tsx
<div className="absolute -left-32 top-0 bottom-0 w-96 pointer-events-none transform -skew-y-12">
  <svg width="100%" height="100%">
    {/* Grid pattern with fade gradient */}
  </svg>
</div>
```

---

## 📱 Responsive Design

### Breakpoints
- **Mobile**: Default (< 768px)
- **Tablet**: `md:` (≥ 768px)
- **Desktop**: `lg:` (≥ 1024px)
- **Large**: `xl:` (≥ 1280px)

### Grid Patterns
- **Features**: `grid-cols-1 md:grid-cols-2 lg:grid-cols-4`
- **Products**: `grid-cols-2 md:grid-cols-4`
- **Blog**: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`

---

## 🎬 Animations & Transitions

### Standard Transition
```css
transition-all duration-300
```

### Hover Effects
- **Scale**: `hover:scale-105` or `hover:scale-[1.02]`
- **Shadow**: `hover:shadow-xl`
- **Arrow**: `group-hover:translate-x-1`
- **Icon Rotation**: `group-hover:-rotate-45`

### Fade-in Animation (Tab Switching)
```tsx
<div 
  key={`${activeTab}-${item.id}`}
  className="animate-fade-in"
  style={{ 
    animationDelay: `${index * 50}ms`,
    animationFillMode: 'backwards'
  }}
>
```

---

## 🔍 Specific Component Guidelines

### 1. **Tab Toggles**
```tsx
<div className="inline-flex rounded-lg bg-white shadow-md p-1 border border-gray-200">
  <button className={`px-8 py-3 rounded-lg font-semibold transition-all ${
    active ? "bg-gradient-to-r from-[#0a4a9e] to-[#05306b] text-white shadow-lg" 
           : "text-gray-700 hover:bg-gray-100"
  }`}>
    Tab Label
  </button>
</div>
```

### 2. **Input Fields (Modals)**
```tsx
<Input
  className="bg-white border-gray-300 text-black placeholder:text-gray-600 focus:border-blue-500 focus:ring-blue-500"
  placeholder="Placeholder text"
/>
```

### 3. **Custom Scrollbars**
```css
[&::-webkit-scrollbar]:w-3
[&::-webkit-scrollbar-track]:bg-white/10
[&::-webkit-scrollbar-track]:rounded-full
[&::-webkit-scrollbar-thumb]:bg-gradient-to-b
[&::-webkit-scrollbar-thumb]:from-[#0a4a9e]
[&::-webkit-scrollbar-thumb]:to-[#05306b]
[&::-webkit-scrollbar-thumb]:rounded-full
```

---

## ✅ Checklist for New Pages

When creating a new page, ensure:

- [ ] Main wrapper has `min-h-screen pt-60`
- [ ] Page header follows the gradient pattern
- [ ] Sections alternate between `bg-white` and `bg-gray-50`
- [ ] Section headers are centered with proper typography
- [ ] Container uses `container mx-auto max-w-7xl`
- [ ] Spacing follows `py-16 md:py-24` pattern
- [ ] Buttons use `rounded-full` with gradient
- [ ] Cards use `rounded-none` (sharp corners)
- [ ] Hover effects include scale + shadow
- [ ] Responsive classes for mobile/tablet/desktop
- [ ] Arrow animations on buttons and links

---

## 🚫 Don'ts

1. **Never** use padding-top less than `pt-60` on main elements
2. **Never** use different button shapes (always `rounded-full` for CTAs)
3. **Never** use different card corner styles (always `rounded-none`)
4. **Never** use colors outside the defined palette
5. **Never** skip responsive classes
6. **Never** forget hover animations on interactive elements

---

## 📚 Example Page Structure

```tsx
export default function ExamplePage() {
  return (
    <main className="min-h-screen pt-60">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#0a4a9e] via-[#05306b] to-[#041f3f] text-white py-20 md:py-32">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Page Title
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Page description
          </p>
        </div>
      </section>

      {/* Content Section 1 - White */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto max-w-7xl px-4">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Section Title
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Section description
            </p>
          </div>
          
          {/* Content */}
          {/* ... */}
        </div>
      </section>

      {/* Content Section 2 - Gray */}
      <section className="py-16 md:py-24 bg-gray-50">
        {/* Similar structure */}
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0A4D96] text-white">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Call to action description
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 bg-white text-[#0A4D96] hover:bg-white/90 font-bold text-lg px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Contact Us Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </section>
    </main>
  );
}
```

---

## 🎯 Summary

**Core Principles:**
1. **Consistency**: Use the same colors, spacing, and patterns everywhere
2. **Responsiveness**: Always include mobile, tablet, and desktop classes
3. **Accessibility**: Account for navbar height on all pages
4. **Polish**: Include hover effects and smooth transitions
5. **Simplicity**: Sharp corners for cards, rounded for buttons

By following these guidelines, all pages will maintain a cohesive, professional appearance that matches the home page design.

