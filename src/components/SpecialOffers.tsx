import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Gift, Sparkles, Heart, Calendar, Star, ArrowRight } from 'lucide-react';

const offers = [
  {
    icon: Heart,
    title: 'Honeymoon Romance Package',
    tagline: 'Celebrate love in royal splendor',
    features: [
      'Complimentary room upgrade (subject to availability)',
      'Private candlelit dinner in the courtyard',
      'Traditional flower decoration & rose petals',
      'Welcome champagne & exotic fruit basket',
      'Couple spa session with Ayurvedic oils',
    ],
    discount: '20% OFF',
    validity: 'Valid year-round',
    color: 'from-rose-500/20 to-pink-500/20',
    borderColor: 'border-rose-500/30',
    iconBg: 'bg-rose-500/10',
    iconColor: 'text-rose-600',
  },
  {
    icon: Calendar,
    title: 'Extended Stay Escape',
    tagline: 'The longer you stay, the more you save',
    features: [
      '15% off for 3-5 nights booking',
      '25% off for 6+ nights booking',
      'Complimentary daily breakfast included',
      'Free airport pickup & drop service',
      'Priority booking for heritage tours',
    ],
    discount: 'UP TO 25%',
    validity: 'Book 7 days in advance',
    color: 'from-amber-500/20 to-orange-500/20',
    borderColor: 'border-amber-500/30',
    iconBg: 'bg-amber-500/10',
    iconColor: 'text-amber-600',
  },
  {
    icon: Star,
    title: 'Early Bird Special',
    tagline: 'Plan ahead & unlock exclusive rates',
    features: [
      '30% off for bookings 30+ days advance',
      '20% off for bookings 15-29 days advance',
      'Flexible cancellation up to 7 days',
      'One complimentary heritage walk tour',
      'Traditional welcome ceremony',
    ],
    discount: 'UP TO 30%',
    validity: 'Limited period offer',
    color: 'from-emerald-500/20 to-teal-500/20',
    borderColor: 'border-emerald-500/30',
    iconBg: 'bg-emerald-500/10',
    iconColor: 'text-emerald-600',
  },
];

export function SpecialOffers() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const handleBookOffer = (offerTitle: string) => {
    const message = `Hello! I'm interested in the *${offerTitle}* at Raj Rajeshwari Haveli. Could you please share more details and help me with booking?`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=919829077627&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-24 bg-gradient-to-b from-cream via-beige/30 to-cream relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-maroon/5 rounded-full blur-3xl" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold font-lato text-xs sm:text-sm tracking-[0.3em] uppercase font-semibold flex items-center justify-center gap-2">
            <Gift className="w-4 h-4" /> EXCLUSIVE DEALS <Gift className="w-4 h-4" />
          </span>
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-charcoal mt-4 mb-4">
            Special Packages & Offers
          </h2>
          <div className="arch-divider mx-auto max-w-[200px] mb-6" />
          <p className="font-lato text-base sm:text-lg text-charcoal/70 max-w-2xl mx-auto">
            Discover our curated packages designed to make your heritage stay even more memorable
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <motion.div
              key={offer.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.15, duration: 0.6 }}
              className="group relative"
            >
              {/* Discount Badge */}
              <div className="absolute -top-4 -right-4 z-20">
                <div className="relative">
                  <div className={`w-20 h-20 rounded-full ${offer.iconBg} flex items-center justify-center shadow-lg animate-pulse-glow border-4 border-cream`}>
                    <div className="text-center">
                      <p className="font-playfair text-xs font-bold text-charcoal leading-none">
                        {offer.discount}
                      </p>
                    </div>
                  </div>
                  <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-gold animate-pulse" />
                </div>
              </div>

              <div className={`relative bg-gradient-to-br ${offer.color} backdrop-blur-sm rounded-2xl border-2 ${offer.borderColor} p-8 h-full flex flex-col shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 overflow-hidden`}>
                
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5 mandala-pattern" />

                {/* Content */}
                <div className="relative z-10 flex-1 flex flex-col">
                  <div className="mb-6">
                    <div className={`w-14 h-14 ${offer.iconBg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <offer.icon className={`w-7 h-7 ${offer.iconColor}`} />
                    </div>
                    <h3 className="font-playfair text-2xl font-bold text-charcoal mb-2">
                      {offer.title}
                    </h3>
                    <p className="font-lato text-sm text-charcoal/70 italic">
                      {offer.tagline}
                    </p>
                  </div>

                  <div className="flex-1 mb-6">
                    <ul className="space-y-3">
                      {offer.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm font-lato text-charcoal/80">
                          <span className="text-gold mt-1 shrink-0">✦</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-charcoal/10 pt-4 mb-4">
                    <p className="text-xs font-lato text-charcoal/60 flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5" />
                      {offer.validity}
                    </p>
                  </div>

                  <button
                    onClick={() => handleBookOffer(offer.title)}
                    className="w-full bg-charcoal text-white hover:bg-maroon py-3 rounded-lg font-lato font-bold text-sm tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 group-hover:gap-3 shadow-md hover:shadow-xl"
                  >
                    Claim Offer
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-16 p-8 bg-white/50 backdrop-blur-sm rounded-2xl border border-gold/20"
        >
          <p className="font-lato text-base text-charcoal/80 mb-4">
            Can't find what you're looking for? We create <span className="font-bold text-maroon">custom packages</span> tailored to your needs.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gold text-charcoal hover:bg-gold-light px-8 py-3 rounded-lg font-lato font-bold text-sm tracking-wider uppercase transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            <Gift className="w-4 h-4" />
            Request Custom Package
          </a>
        </motion.div>
      </div>
    </section>
  );
}
