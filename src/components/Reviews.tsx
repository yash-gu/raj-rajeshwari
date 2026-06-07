import { useRef, useEffect, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Sparkles, Quote } from 'lucide-react';

const reviews = [
  {
    id: 1,
    text: "This Haveli has the most helpful and polite staff who treat guests like royalty. The management is directly by the owners, who are proud heritage Rajputs. Our meals in the quiet courtyard felt like grand royal banquets. Truly unforgettable hospitality.",
    author: 'James H.',
    country: 'United Kingdom',
    flag: '🇬🇧',
    source: 'TripAdvisor',
    rating: 5,
  },
  {
    id: 2,
    text: "Our stay was absolutely superb. The home-cooked Rajasthani food was spectacular and the entire family was incredibly welcoming. I had tears in my eyes when leaving the property. Highly recommend to anyone seeking a genuine local residency.",
    author: 'Priya M.',
    country: 'India',
    flag: '🇮🇳',
    source: 'Booking.com',
    rating: 5,
  },
  {
    id: 3,
    text: "The building is historical and looks absolutely amazing. Both the exterior carvings and interior furnishings carry the authentic vibe of Rajasthan. The Chouhan family and their staff are exceptionally friendly and helpful.",
    author: 'Anna K.',
    country: 'Germany',
    flag: '🇩🇪',
    source: 'Booking.com',
    rating: 5,
  },
  {
    id: 4,
    text: "I had a wonderful stay at the Haveli with the lovely and accommodating Chouhan family. They welcomed me into their home and made every possible effort to make my time in Jaipur memorable. Clean rooms, safe, and beautiful.",
    author: 'Sarah L.',
    country: 'Australia',
    flag: '🇦🇺',
    source: 'Booking.com',
    rating: 5,
  },
  {
    id: 5,
    text: "Other high-end Jaipur hotels can never equal the peaceful and restful experience at Raj Rajeshwari Haveli. It is a quiet oasis in the middle of a busy city. I will no longer consider staying anywhere else in Jaipur.",
    author: 'David R.',
    country: 'New Zealand',
    flag: '🇳🇿',
    source: 'TripAdvisor',
    rating: 5,
  },
];

export function Reviews() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="reviews" className="py-24 bg-cream relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-gold-glow pointer-events-none" />

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
            <Sparkles className="w-3.5 h-3.5" /> GUEST REVIEWS <Sparkles className="w-3.5 h-3.5" />
          </span>
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-charcoal mt-4 mb-4">
            Voices of Our Guests
          </h2>
          <div className="arch-divider mx-auto max-w-[200px] mb-6" />
        </div>

        {/* Carousel Container */}
        <div
          className="relative max-w-3xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Guestbook card frame styling */}
          <div className="overflow-hidden p-2 rounded-3xl bg-maroon/5 border-royal shadow-2xl">
            <div className="bg-parchment p-8 sm:p-12 md:p-14 text-center rounded-2xl border border-gold/20 relative">
              
              {/* Quote marks */}
              <Quote className="w-12 h-12 text-gold/20 absolute top-4 left-6" />
              <Quote className="w-12 h-12 text-gold/20 absolute bottom-4 right-6 rotate-180" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 0.98, x: 20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.98, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  {/* Rating Stars */}
                  <div className="flex justify-center gap-1.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < reviews[currentIndex].rating
                            ? 'text-gold fill-gold'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="font-playfair text-lg sm:text-xl md:text-2xl text-charcoal/90 leading-relaxed font-semibold italic max-w-2xl mx-auto">
                    "{reviews[currentIndex].text}"
                  </p>

                  {/* Reviewer Details */}
                  <div className="flex items-center justify-center gap-4 pt-4 border-t border-gold/15 max-w-xs mx-auto">
                    <div className="w-12 h-12 bg-maroon text-gold border border-gold/30 rounded-full flex items-center justify-center shadow-md">
                      <span className="font-playfair font-bold text-lg">
                        {reviews[currentIndex].author.charAt(0)}
                      </span>
                    </div>
                    <div className="text-left">
                      <p className="font-playfair font-bold text-charcoal">
                        {reviews[currentIndex].author}
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-sm" role="img" aria-label={reviews[currentIndex].country}>
                          {reviews[currentIndex].flag}
                        </span>
                        <span className="font-lato text-xs text-charcoal/60 font-semibold tracking-wide uppercase">
                          {reviews[currentIndex].country}
                        </span>
                        <span className="text-charcoal/20">|</span>
                        <span className="font-lato text-xs text-gold font-bold uppercase tracking-wider">
                          {reviews[currentIndex].source}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-14 w-11 h-11 bg-white hover:bg-gold border border-gold/35 rounded-full shadow-lg flex items-center justify-center text-charcoal hover:text-charcoal transition-all duration-300 z-10"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-14 w-11 h-11 bg-white hover:bg-gold border border-gold/35 rounded-full shadow-lg flex items-center justify-center text-charcoal hover:text-charcoal transition-all duration-300 z-10"
            aria-label="Next review"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-gold w-8' : 'bg-gold/20 w-2'
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
