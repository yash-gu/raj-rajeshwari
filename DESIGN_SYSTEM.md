# 🎨 Design System - Raj Rajeshwari Haveli

## Color Palette

### Primary Colors
```css
Maroon (Heritage Red)
- DEFAULT: #6B1A1A
- Light: #8B2A2A
- Dark: #4A1010
Usage: Primary brand color, headers, backgrounds

Gold (Royal Gold)
- DEFAULT: #C9A84C
- Light: #D9B85C
- Dark: #B9983C
Usage: Accent color, CTAs, highlights, borders

Cream (Parchment)
- DEFAULT: #FAF6EE
Usage: Main background, light sections

Charcoal (Deep Black)
- DEFAULT: #1C1C1E
Usage: Text, dark sections

Beige (Warm Neutral)
- DEFAULT: #F0E8D5
Usage: Card backgrounds, subtle sections
```

### Color Psychology
- **Maroon**: Heritage, royalty, tradition, warmth
- **Gold**: Luxury, excellence, premium quality
- **Cream**: Elegance, sophistication, cleanliness
- **Charcoal**: Authority, modernity, contrast

## Typography

### Font Families
```css
Primary (Headings): 'Playfair Display', serif
Secondary (Body): 'Lato', sans-serif
```

### Type Scale
```css
/* Headings */
h1: 4xl-7xl (36px-72px) - Hero titles
h2: 4xl-5xl (36px-48px) - Section titles
h3: 2xl-3xl (24px-30px) - Component titles
h4: lg-xl (18px-20px) - Card titles

/* Body */
Base: sm-base (14px-16px)
Small: xs-sm (12px-14px)
Large: lg-xl (18px-20px)
```

### Font Weights
- Regular: 400 (Body text)
- Semibold: 600 (Emphasis)
- Bold: 700 (Headings, CTAs)

## Spacing System

```css
/* Tailwind spacing scale (rem) */
0.5: 0.125rem (2px)
1: 0.25rem (4px)
2: 0.5rem (8px)
3: 0.75rem (12px)
4: 1rem (16px)
5: 1.25rem (20px)
6: 1.5rem (24px)
8: 2rem (32px)
10: 2.5rem (40px)
12: 3rem (48px)
16: 4rem (64px)
20: 5rem (80px)
24: 6rem (96px)

/* Component spacing */
Section padding: py-24 (96px)
Card padding: p-6 to p-8 (24px-32px)
Button padding: px-6 py-3 (24px horizontal, 12px vertical)
```

## Component Patterns

### Buttons

#### Primary CTA
```jsx
className="bg-gold text-charcoal hover:bg-gold-light px-6 py-3 rounded-lg 
font-lato font-bold text-sm tracking-wider uppercase transition-all 
shadow-md hover:shadow-lg hover:-translate-y-0.5"
```

#### Secondary Button
```jsx
className="border border-maroon text-maroon hover:bg-maroon hover:text-white 
px-6 py-3 rounded-lg font-lato font-semibold text-sm tracking-wider uppercase 
transition-colors"
```

#### WhatsApp Button
```jsx
className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg 
font-lato font-bold text-sm tracking-wider uppercase transition-all 
shadow-md flex items-center gap-2"
```

### Cards

#### Standard Card
```jsx
className="bg-white rounded-2xl p-8 border border-beige shadow-md 
hover:shadow-xl hover:border-gold/30 transition-all duration-300"
```

#### Heritage Card (with royal border)
```jsx
className="bg-white rounded-2xl p-8 border-royal shadow-2xl"
/* border-royal is custom: 3px double #C9A84C */
```

### Sections

#### Light Section
```jsx
className="py-24 bg-cream relative"
```

#### Dark Section
```jsx
className="py-24 bg-maroon relative overflow-hidden"
```

#### Gradient Section
```jsx
className="py-24 bg-gradient-to-b from-cream via-beige/30 to-cream relative"
```

## Icons

### Icon Sizing
- Small: w-4 h-4 (16px)
- Medium: w-5 h-5 (20px)
- Large: w-6 h-6 (24px)
- XL: w-8 h-8 (32px)

### Icon Colors
- Primary: text-gold
- Secondary: text-maroon
- Muted: text-charcoal/60

## Animations

### Duration Standards
```css
Fast: 300ms - Hovers, small state changes
Standard: 500ms - Entrances, transitions
Slow: 800ms - Hero sections, major reveals
```

### Easing
```css
ease-out: Default for entrances
ease-in-out: For smooth bidirectional animations
spring: For playful, natural feel (Framer Motion)
```

### Custom Animations

#### Float
```css
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}
Duration: 3s infinite ease-in-out
```

#### Shimmer
```css
@keyframes shimmer {
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
}
Duration: 3s infinite
```

#### Pulse Glow
```css
@keyframes pulse-glow {
  0%, 100% { box-shadow: 0 0 20px rgba(201, 168, 76, 0.4); }
  50% { box-shadow: 0 0 40px rgba(201, 168, 76, 0.8); }
}
Duration: 2s ease-in-out infinite
```

## Layout Grid

### Container Widths
```css
max-width: 7xl (1280px) - Default content container
padding: px-4 sm:px-6 lg:px-8 - Responsive padding
```

### Grid Patterns
```css
/* 2 columns (mobile) → 3 columns (desktop) */
grid-cols-1 sm:grid-cols-2 lg:grid-cols-3

/* 3 equal columns on desktop */
lg:grid-cols-3

/* 12-column layout for custom splits */
lg:grid-cols-12
lg:col-span-7 (content) + lg:col-span-5 (sidebar)
```

## Border Radius

```css
Small: rounded-lg (8px) - Buttons, inputs
Medium: rounded-xl (12px) - Cards
Large: rounded-2xl (16px) - Major components
Full: rounded-full - Circles, badges
```

## Shadows

```css
Small: shadow-sm - Subtle elevation
Medium: shadow-md - Cards
Large: shadow-lg - Prominent cards
XL: shadow-xl - Modals
2XL: shadow-2xl - Maximum depth
```

## Decorative Elements

### Arch Divider
```html
<div class="arch-divider mx-auto max-w-[200px]" />
```
Custom SVG arch pattern in CSS

### Mandala Pattern
```html
<div class="mandala-pattern opacity-40 pointer-events-none" />
```
Background decorative pattern

### Gold Glow
```html
<div class="absolute inset-0 bg-gold-glow pointer-events-none" />
```
Radial gradient overlay

### Parchment Background
```html
<section class="bg-parchment" />
```
Textured paper effect

## Responsive Breakpoints

```css
sm: 640px   - Small tablets
md: 768px   - Tablets
lg: 1024px  - Small desktops
xl: 1280px  - Large desktops
2xl: 1536px - Extra large screens
```

## Accessibility

### Focus States
```css
focus:border-gold focus:ring-4 focus:ring-gold/10 outline-none
```

### Contrast Ratios
- Text on cream: Charcoal (#1C1C1E) - AAA compliant
- Text on maroon: White/Gold - AA compliant minimum
- Gold accents: High contrast against dark backgrounds

### ARIA Labels
Always include on:
- Icon-only buttons
- Navigation elements
- Modal dialogs
- Form inputs

## Best Practices

### Do's ✅
- Use semantic HTML (section, article, nav, etc.)
- Add meaningful alt texts to all images
- Maintain consistent spacing throughout
- Use the color palette consistently
- Apply hover states to interactive elements
- Test on mobile devices
- Use loading states for async operations

### Don'ts ❌
- Don't mix font families outside the system
- Don't use arbitrary colors outside the palette
- Don't skip animation durations
- Don't forget hover states
- Don't use images without alt texts
- Don't create inconsistent spacing
- Don't ignore mobile responsiveness

## Component Checklist

When creating a new component:
- [ ] Uses design system colors
- [ ] Follows typography scale
- [ ] Includes hover/focus states
- [ ] Fully responsive (mobile-first)
- [ ] Has proper spacing
- [ ] Includes appropriate animations
- [ ] Accessible (ARIA labels, semantic HTML)
- [ ] Consistent with other components
- [ ] Optimized images with alt texts
- [ ] Tested on multiple screen sizes

---

**Design Philosophy**: Blend traditional Rajasthani heritage aesthetics with modern, clean UI/UX principles to create an elegant, trustworthy, and conversion-optimized experience.
