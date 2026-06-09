import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { HelpCircle, ChevronDown, Sparkles } from 'lucide-react';

const faqs = [
  {
    question: 'Why should I choose a heritage haveli over a standard hotel in Jaipur?',
    answer: 'Choosing a heritage haveli like Raj Rajeshwari Haveli offers an authentic royal residency experience. Unlike standard modern hotels, our haveli is a living home owned by the Chouhan Rajput family, featuring historic architectural craftsmanship, detailed stone carvings, beautiful stained glass, personalized storytelling, traditional Mewari hospitality (Atithi Devo Bhava), and family recipes slow-cooked over wood charcoal in copper vessels.',
  },
  {
    question: 'Where is Raj Rajeshwari Haveli located and how far is it from the main transit hubs?',
    answer: 'We are situated at 24, Parivahan Nagar Road, Khatipura, Jaipur. The property enjoys excellent connectivity: Jaipur Junction Railway Station is just 4 km away, Khatipura Railway Station is close by, Sindhi Camp Central Bus Stand is 5 km, and Jaipur International Airport is 14 km. This makes it a perfect, tranquil oasis that is easily accessible from any arrival terminal.',
  },
  {
    question: 'What room types are available, and what are the key differences?',
    answer: 'We offer three distinct classes of accommodations decorated with royal relics: the King Room (40 sq m, Heritage Courtyard View, 1 Royal King Bed), the Queen Room (30 sq m, Scenic City View, 1 Large Queen Bed), and the Standard Double Room (23 sq m, Quiet Haveli Garden View, 1 Double Bed). All rooms feature air conditioning, free high-speed Wi-Fi, LED TVs, and premium traditional accents.',
  },
  {
    question: 'Do you offer authentic Rajasthani dining, and do we need to book in advance?',
    answer: 'Yes! Our dining room and central open-air courtyard serve authentic Rajasthani delicacies, including Mewari recipes, slow-cooked Laal Maas, and traditional Dal Baati Churma. While walk-in requests are welcomed for breakfast, we recommend notifying the front desk in advance for special courtyard dinners to allow our chefs to prepare fresh, slow-cooked meals.',
  },
  {
    question: 'Can you help with local sightseeing tours and chauffeur services in Jaipur?',
    answer: 'Absolutely! Our 24/7 Royal Support Desk is staffed by locals who can curate your Jaipur sightseeing itineraries. We provide premium chauffeur-driven car rentals and can arrange expert local guides for exploring Hawa Mahal, Amer Fort, City Palace, Jal Mahal, and the vibrant local bazaars.',
  },
  {
    question: 'Is parking available at the haveli, and is Wi-Fi complimentary?',
    answer: 'Yes, we provide complimentary high-speed Wi-Fi across the entire property, including all guest rooms and common courtyard spaces. Free, secure, on-site parking is also available inside our gated premises for all guests.',
  },
];

export function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-parchment relative overflow-hidden border-t border-gold/15">
      {/* Background Mandala patterns */}
      <div className="absolute top-0 right-0 w-80 h-80 mandala-pattern opacity-30 pointer-events-none translate-x-12 -translate-y-12" />
      <div className="absolute bottom-0 left-0 w-80 h-80 mandala-pattern opacity-30 pointer-events-none -translate-x-12 translate-y-12" />

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10"
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold font-lato text-xs sm:text-sm tracking-[0.3em] uppercase font-semibold flex items-center justify-center gap-2">
            <Sparkles className="w-3.5 h-3.5" /> FREQUENTLY ASKED QUESTIONS <Sparkles className="w-3.5 h-3.5" />
          </span>
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-charcoal mt-4 mb-4">
            Jaipur Stay & Booking Guide
          </h2>
          <div className="arch-divider mx-auto max-w-[200px] mb-6" />
          <p className="font-lato text-charcoal/70 text-base leading-relaxed">
            Find answers to common questions about our heritage hotel, royal accommodations, local tours, and traditional dining.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border border-gold/20 hover:border-gold/40 rounded-xl bg-white overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 transition-colors hover:bg-beige/10 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start gap-3.5">
                    <HelpCircle className="w-5.5 h-5.5 text-gold mt-0.5 flex-shrink-0" />
                    <span className="font-playfair text-base sm:text-lg font-bold text-charcoal pr-4">
                      {faq.question}
                    </span>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                    className="flex-shrink-0 text-maroon"
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-5 pb-5 sm:px-6 sm:pb-6 ml-9 border-t border-beige/40 pt-4">
                        <p className="font-lato text-sm sm:text-base text-charcoal/85 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
