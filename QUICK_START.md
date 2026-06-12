# 🚀 Quick Start Guide

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173`

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Preview Production Build**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
project/
├── src/
│   ├── components/          # React components
│   │   ├── About.tsx       # About section with tabs
│   │   ├── Amenities.tsx   # Services & amenities
│   │   ├── Contact.tsx     # Booking form with add-ons
│   │   ├── Dining.tsx      # Dining experiences
│   │   ├── FaqSection.tsx  # FAQ accordion
│   │   ├── FloatingAudioPlayer.tsx  # Background music
│   │   ├── FloatingElements.tsx     # WhatsApp/QR buttons
│   │   ├── Footer.tsx      # Footer with links
│   │   ├── Gallery.tsx     # Image gallery with filters
│   │   ├── HelpDesk.tsx    # Support widget
│   │   ├── Hero.tsx        # Hero slider with booking bar
│   │   ├── Location.tsx    # Map and location info
│   │   ├── Navbar.tsx      # Navigation header
│   │   ├── Reviews.tsx     # Guest testimonials carousel
│   │   ├── Rooms.tsx       # Room cards with modal
│   │   ├── ScrollProgress.tsx  # Progress bar
│   │   ├── SpecialOffers.tsx   # ⭐ NEW: Package deals
│   │   ├── TrustBar.tsx    # Trust indicators
│   │   └── VirtualTour.tsx # ⭐ NEW: Video tour preview
│   ├── assets/
│   │   └── images/         # Image assets
│   ├── hooks/
│   │   └── useScrollPosition.ts  # Scroll tracking hook
│   ├── App.tsx             # Main app component
│   ├── main.tsx            # Entry point
│   └── index.css           # Global styles + animations
├── public/                 # Static assets
├── ENHANCEMENTS.md         # Feature documentation
├── DESIGN_SYSTEM.md        # Design guidelines
└── package.json            # Dependencies
```

## 🎨 New Features Overview

### 1. Special Offers Section
**Location**: After Amenities, before Gallery  
**Component**: `SpecialOffers.tsx`

Three package options with pricing:
- Honeymoon Romance Package (20% OFF)
- Extended Stay Escape (UP TO 25% OFF)
- Early Bird Special (UP TO 30% OFF)

Each card includes:
- Icon and color theme
- Feature list
- Validity period
- WhatsApp booking CTA

### 2. Virtual Tour Section
**Location**: After Gallery, before Reviews  
**Component**: `VirtualTour.tsx`

Features:
- Video preview placeholder (replace with real video)
- Tour highlights (4 cards)
- Stats bar at bottom
- Dark gradient theme

### 3. Enhanced Hero
- Added title: "Experience Royal Heritage"
- Descriptive tagline about Rajasthani hospitality
- Maintained booking functionality

### 4. Enhanced TrustBar
- 6 animated trust indicators (up from 4)
- Bottom trust badges row
- Shimmer background effect
- Hover animations

### 5. Enhanced Contact Form
- Heritage Experience Add-ons (3 checkboxes):
  - Guided Heritage Walk
  - Candlelit Thali Dinner
  - Sunrise Yoga Class
- Success confirmation screen
- Direct WhatsApp integration

## 🛠️ Customization Guide

### Change Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  maroon: { DEFAULT: '#6B1A1A', ... },
  gold: { DEFAULT: '#C9A84C', ... },
  // Add your colors here
}
```

### Add New Section
1. Create component in `src/components/YourComponent.tsx`
2. Import in `src/App.tsx`
3. Add to the render tree in desired order

### Modify Content
All text content is in the component files:
- Section titles: Look for `<h2>` tags
- Descriptions: Look for `<p>` tags
- Lists: Look for arrays (e.g., `rooms`, `offers`, `stats`)

### Update Images
1. Add images to `src/assets/images/`
2. Import in component: `import myImage from '../assets/images/myImage.jpg'`
3. Use in JSX: `<img src={myImage} alt="description" />`

### Change Animations
Edit `src/index.css` to modify:
- Animation durations
- Easing functions
- Keyframe definitions

## 📱 Responsive Breakpoints

```css
sm: 640px   /* Tablets */
md: 768px   /* Large tablets */
lg: 1024px  /* Laptops */
xl: 1280px  /* Desktops */
```

## 🎯 SEO Optimization

### Update Meta Tags
Edit `index.html`:
```html
<title>Your Hotel Name - Heritage Stay in Jaipur</title>
<meta name="description" content="Your description" />
```

### Image Alt Texts
All images have descriptive alt texts. Update them in component files for your specific content.

## 🔧 Common Tasks

### Adding a New Package to Special Offers

Edit `src/components/SpecialOffers.tsx`:
```typescript
const offers = [
  // Add your new offer here
  {
    icon: YourIcon,
    title: 'Your Package Name',
    tagline: 'Short description',
    features: [
      'Feature 1',
      'Feature 2',
      // ...
    ],
    discount: 'XX% OFF',
    validity: 'Booking period',
    color: 'from-blue-500/20 to-cyan-500/20',
    borderColor: 'border-blue-500/30',
    iconBg: 'bg-blue-500/10',
    iconColor: 'text-blue-600',
  },
];
```

### Updating Room Prices

Edit `src/components/Rooms.tsx`:
```typescript
const rooms = [
  {
    name: 'King Room',
    price: 'INR 4,500', // Update here
    // ...
  },
];
```

### Changing Contact Information

Edit `src/components/Contact.tsx` and `src/components/Footer.tsx`:
```typescript
// Phone number
const phone = '+91 9829077627';

// Email
const email = 'info@rajrajeshwarihaveli.com';

// Address
const address = '24, Parivahan Nagar Road, Khatipura, Jaipur 302012';
```

## 🚀 Performance Tips

1. **Optimize Images**: Use WebP format, compress images
2. **Lazy Loading**: Images load on scroll (already implemented)
3. **Code Splitting**: Vite handles this automatically
4. **Minimize Bundle**: Remove unused dependencies

## 🐛 Troubleshooting

### Development server won't start
```bash
# Clear cache and reinstall
rm -rf node_modules
rm package-lock.json
npm install
npm run dev
```

### Build fails
```bash
# Check for TypeScript errors
npm run typecheck

# Check for linting errors
npm run lint
```

### Animations not working
- Check if Framer Motion is installed: `npm install framer-motion`
- Verify `index.css` is imported in `main.tsx`

## 📊 Analytics Integration

To add Google Analytics:

1. Install package:
   ```bash
   npm install react-ga4
   ```

2. Initialize in `main.tsx`:
   ```typescript
   import ReactGA from 'react-ga4';
   ReactGA.initialize('YOUR-GA4-ID');
   ```

## 🔐 Environment Variables

Create `.env` file:
```env
VITE_PHONE_NUMBER=+919829077627
VITE_EMAIL=info@rajrajeshwarihaveli.com
VITE_GOOGLE_MAPS_KEY=your_key_here
```

Access in code:
```typescript
const phone = import.meta.env.VITE_PHONE_NUMBER;
```

## 📚 Additional Resources

- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev)
- [Vite Guide](https://vitejs.dev/guide/)

## 💡 Tips for Further Enhancement

1. **Add Real Video**: Replace virtual tour placeholder
2. **Implement Booking API**: Connect to a booking system
3. **Add Multi-language**: Use i18n for Hindi/English
4. **Set up CMS**: Use Strapi or Contentful for content management
5. **Add Blog**: Create `/blog` route with articles
6. **Enable PWA**: Add service worker for offline access
7. **Set up CI/CD**: Deploy automatically with GitHub Actions

## 📞 Support

For questions or issues:
- Review the code comments in component files
- Check ENHANCEMENTS.md for feature details
- Check DESIGN_SYSTEM.md for styling guidelines

---

**Happy Coding!** 🎉 Your heritage hotel website is now enhanced with modern UI/UX features!
