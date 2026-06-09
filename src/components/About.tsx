import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Castle, Heart, UtensilsCrossed, Sparkles } from 'lucide-react';
import aboutImage from '../assets/images/about-1.jpg';
import gallery3 from '../assets/images/gallery-3.jpg';
import gallery4 from '../assets/images/gallery-4.jpg';

const storyTabs = [
  {
    id: 'legacy',
    label: 'Our Rajput Legacy',
    title: 'A Chouhan Rajput Lineage',
    content: 'Owned by Thakur Dilip Singh of the illustrious Chouhan Rajput family, Raj Rajeshwari Haveli is a living repository of regional history. Opened to the world in 2019, the family invites travelers into their private sanctuary to experience Jaipur not as a tourist, but as a guest of honor in a traditional royal home. Discover the true essence of Jaipur hotel heritage and Rajput grandeur.',
    image: aboutImage,
    alt: 'Thakur Dilip Singh Chouhan Rajput legacy and heritage hotel stay in Jaipur - Raj Rajeshwari Haveli',
    badgeText: 'Est. 2019',
    badgeDesc: 'Opened to Guests',
  },
  {
    id: 'architecture',
    label: 'Heritage Architecture',
    title: 'Crafted in Stained Glass & Stone',
    content: 'Step into a visual masterclass of traditional Rajput design. The property is adorned with glistening marble pathways, intricate hand-carved archways, colorful stained glass windows that paint the walls with light, and high ceilings that keep the suites cool in the Rajasthani sun. It stands as one of the finest architectural havelis in Jaipur.',
    image: gallery3,
    alt: 'Traditional Rajasthani architecture, marble archways, and stained glass windows at Raj Rajeshwari Haveli hotel Jaipur',
    badgeText: 'Classic',
    badgeDesc: 'Rajput Craftsmanship',
  },
  {
    id: 'hospitality',
    label: 'Royal Hospitality',
    title: 'Atithi Devo Bhava',
    content: 'Experience hospitality in its purest form. From the traditional marigold garland and red vermillion tikka welcome, to the personalized storytelling sessions in the evening, our guests are treated with the care historically reserved for kings. We stand proudly at a 5.0/5 rating on TripAdvisor as a top-ranked heritage stay in Jaipur.',
    image: gallery4,
    alt: 'Marigold garland and traditional royal welcome at Raj Rajeshwari Haveli, top TripAdvisor rated Jaipur heritage stay',
    badgeText: '5.0 / 5',
    badgeDesc: 'TripAdvisor Rating',
  },
];

const usps = [
  { icon: Castle, title: 'Authentic Design', desc: 'Intricate archways & marble craftsmanship' },
  { icon: Heart, title: 'Warm Welcome', desc: 'Traditional royal greetings & personal care' },
  { icon: UtensilsCrossed, title: 'Royal Feast', desc: 'Home-cooked Rajasthani family recipes' },
];

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeTab, setActiveTab] = useState('legacy');

  const currentTab = storyTabs.find((t) => t.id === activeTab) || storyTabs[0];

  return (
    <section id="about" className="py-24 bg-parchment relative overflow-hidden">
      {/* Decorative background mandala */}
      <div className="absolute top-0 right-0 w-96 h-96 mandala-pattern opacity-40 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 mandala-pattern opacity-40 pointer-events-none" />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold font-lato text-xs sm:text-sm tracking-[0.3em] uppercase font-semibold flex items-center justify-center gap-2">
            <Sparkles className="w-3.5 h-3.5" /> OUR HERITAGE <Sparkles className="w-3.5 h-3.5" />
          </span>
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-charcoal mt-4 mb-4">
            A Legacy of Royal Grandeur
          </h2>
          <div className="arch-divider mx-auto max-w-[200px] mb-6" />
        </div>

        {/* Story Tab controls */}
        <div className="flex justify-center border-b border-gold/20 mb-12 max-w-2xl mx-auto">
          {storyTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 text-center py-4 font-playfair text-base sm:text-lg font-semibold tracking-wide transition-all relative ${
                activeTab === tab.id
                  ? 'text-maroon'
                  : 'text-charcoal/50 hover:text-maroon/70'
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeAboutTabLine"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-maroon"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Tab Content Display */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Side */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-royal bg-white p-2">
              <div className="relative rounded-xl overflow-hidden h-[350px] sm:h-[450px] lg:h-[500px]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentTab.id}
                    src={currentTab.image}
                    alt={currentTab.alt}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-maroon/30 to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Dynamic Floating Badge */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTab.id}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -20 }}
                transition={{ duration: 0.4 }}
                className="absolute -bottom-6 -right-4 sm:right-6 w-36 h-36 bg-gold rounded-full flex flex-col items-center justify-center shadow-xl border-4 border-cream z-20 text-center p-3"
              >
                <p className="font-playfair text-xl sm:text-2xl font-bold text-charcoal leading-none">
                  {currentTab.badgeText}
                </p>
                <p className="font-lato text-[10px] uppercase font-bold text-charcoal/70 mt-1 tracking-wider leading-tight">
                  {currentTab.badgeDesc}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Description Side */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTab.id}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
              >
                <span className="text-gold font-lato text-xs sm:text-sm tracking-[0.2em] uppercase font-semibold">
                  {currentTab.label}
                </span>
                <h3 className="font-playfair text-3xl sm:text-4xl font-bold text-charcoal mt-3 mb-6 leading-tight">
                  {currentTab.title}
                </h3>
                <p className="font-lato text-base sm:text-lg text-charcoal/80 leading-relaxed mb-8">
                  {currentTab.content}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="border-t border-gold/20 pt-8 grid grid-cols-3 gap-4">
              {usps.map((usp) => (
                <div key={usp.title} className="text-center group">
                  <div className="w-12 h-12 mx-auto bg-gold/10 rounded-full flex items-center justify-center mb-3 group-hover:bg-gold/20 transition-all duration-300">
                    <usp.icon className="w-6 h-6 text-gold group-hover:scale-110 transition-transform" />
                  </div>
                  <h4 className="font-playfair text-sm font-bold text-charcoal">
                    {usp.title}
                  </h4>
                  <p className="font-lato text-[11px] text-charcoal/60 mt-1 leading-snug">
                    {usp.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
