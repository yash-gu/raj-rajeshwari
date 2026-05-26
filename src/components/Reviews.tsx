import { useRef, useEffect, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const reviews = [
  {
    id: 1,
    text: "This Hotel has the most helpful and polite staff who treat the clients as royalty. The management is by the owners who are heritage Rajputs. Eating hours become royal banquets at this Haveli.",
    author: 'James H.',
    country: 'United Kingdom',
    flag: '',
    source: 'TripAdvisor',
    rating: 5,
  },
  {
    id: 2,
    text: "The stay was superb. Food home-made type and all staff were excellent. I will recommend to everyone. I had tears in my eyes leaving the property.",
    author: 'Priya M.',
    country: 'India',
    flag: '',
    source: 'Booking.com',
    rating: 5,
  },
  {
    id: 3,
    text: "The building is historical and looks just amazing. The exterior and interior are nice with the vibe of Rajasthan. The owner and staff are very friendly.",
    author: 'Anna K.',
    country: 'Germany',
    flag: '',
    source: 'Booking.com',
    rating: 5,
  },
  {
    id: 4,
    text: "I had a wonderful stay at the Haveli with the lovely and accommodating Chouhan family. They welcomed me into their home and made every effort to make my stay memorable.",
    author: 'Sarah L.',
    country: 'Australia',
    flag: '',
    source: 'Booking.com',
    rating: 5,
  },
  {
    id: 5,
    text: "Other Jaipur hotels can never equal the restful peaceful experience at Raj Rajeshwari Haveli. I will no longer consider any other place to stay in Jaipur.",
    author: 'David R.',
    country: 'New Zealand',
    flag: '',
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
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="reviews" className="py-20 bg-cream">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-gold font-lato text-sm tracking-[0.2em] uppercase font-semibold"
          >
            TESTIMONIALS
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-playfair text-4xl lg:text-5xl font-bold text-charcoal mt-4 mb-6"
          >
            What Our Guests Say
          </motion.h2>
        </div>

        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center"
              >
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-6 h-6 ${
                        i < reviews[currentIndex].rating
                          ? 'text-gold fill-gold'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>

                <p className="font-lato text-xl md:text-2xl text-charcoal/80 leading-relaxed mb-8 italic">
                  "{reviews[currentIndex].text}"
                </p>

                <div className="flex items-center justify-center gap-4">
                  <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center">
                    <span className="font-playfair text-gold font-bold text-lg">
                      {reviews[currentIndex].author.charAt(0)}
                    </span>
                  </div>
                  <div className="text-left">
                    <p className="font-playfair font-semibold text-charcoal">
                      {reviews[currentIndex].author}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-lg">{reviews[currentIndex].flag}</span>
                      <span className="font-lato text-sm text-charcoal/60">
                        {reviews[currentIndex].country}
                      </span>
                      <span className="text-charcoal/30">|</span>
                      <span className="font-lato text-sm text-gold font-medium">
                        {reviews[currentIndex].source}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-charcoal hover:text-gold hover:shadow-xl transition-all duration-300"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-charcoal hover:text-gold hover:shadow-xl transition-all duration-300"
            aria-label="Next review"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="flex justify-center gap-2 mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-gold w-8' : 'bg-gold/30'
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
