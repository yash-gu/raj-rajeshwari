import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Utensils, Clock, Award, Sparkles } from 'lucide-react';
import diningImage from '../assets/images/gallery-4.jpg';

export function Dining() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="dining" className="py-24 bg-maroon relative overflow-hidden">
      {/* Decorative Traditional Arch Pattern Overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-repeat bg-contain" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A84C' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

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
            <Sparkles className="w-3.5 h-3.5" /> ROYAL DINING <Sparkles className="w-3.5 h-3.5" />
          </span>
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-white mt-4 mb-4">
            A Feast of Royal Flavors
          </h2>
          <div className="arch-divider mx-auto max-w-[200px] mb-6" />
          <p className="font-lato text-base sm:text-lg text-white/70 max-w-2xl mx-auto">
            Dine in our central courtyard or the historic dining room, tasting authentic family recipes passed down through generations.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Heritage Culinary Narrative (Left side) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-black/35 rounded-2xl p-8 sm:p-10 border border-gold/20 backdrop-blur-sm shadow-2xl relative overflow-hidden">
              {/* Subtle background glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
              
              <div className="space-y-6">
                <div className="flex items-center gap-2 text-gold">
                  <Sparkles className="w-4 h-4" />
                  <span className="font-lato text-xs tracking-widest uppercase font-bold">The Royal Taste</span>
                </div>
                
                <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-white leading-tight">
                  A Culinary Legacy of Rajputana
                </h3>
                
                <div className="w-20 h-0.5 bg-gold/50" />
                
                <p className="font-lato text-sm sm:text-base text-white/80 leading-relaxed first-letter:text-4xl first-letter:font-playfair first-letter:text-gold first-letter:mr-2 first-letter:float-left first-letter:font-bold">
                  At Raj Rajeshwari Haveli, dining is not merely a meal; it is a journey through Jaipur’s storied culinary heritage. Every dish is a testament to the kitchens of Rajasthan’s royalty, prepared using age-old family recipes handed down through generations. Our chefs slow-cook every preparation in hand-beaten copper vessels over wood charcoal, blending freshly ground secret spices with hand-churned ghee to recreate the authentic richness of the desert kingdom.
                </p>

                <div className="bg-gold/5 border-l-2 border-gold/40 p-4 rounded-r-lg italic my-6">
                  <p className="font-playfair text-sm sm:text-base text-gold/90 leading-relaxed">
                    "From the legendary fiery Laal Maas smoked to perfection, to the traditional comfort of Dal Baati Churma, every flavor is crafted to offer a taste of true royal hospitality."
                  </p>
                </div>

                <p className="font-lato text-sm sm:text-base text-white/80 leading-relaxed">
                  Sip on our custom saffron-infused Royal Masala Chai or enjoy a cooling Makhaniya Lassi while seated in the cool evening breeze of our historic courtyard, experiencing dining just as the kings once did. Here, we embrace the timeless philosophy of <span className="text-gold font-semibold">Atithi Devo Bhava</span> (the guest is equivalent to God).
                </p>

                {/* Info highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-white/10 mt-8">
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                    <div>
                      <h5 className="font-playfair font-bold text-white text-sm">Serving Daily</h5>
                      <p className="font-lato text-xs text-white/60 mt-1 font-semibold">Breakfast: 7:30 AM - 10:30 AM<br />All-Day Dining: 12:00 PM - 10:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                    <div>
                      <h5 className="font-playfair font-bold text-white text-sm">Royal Hospitality</h5>
                      <p className="font-lato text-xs text-white/60 mt-1 font-semibold">Authentic Mewari & Rajasthani preparations, crafted with love under Royal Chef Dilip Singh's supervision.</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Dining Ambiance Banner (Right side) */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-gold/20 relative bg-white p-2">
              <div className="relative rounded-xl overflow-hidden h-[300px] sm:h-[400px] lg:h-[520px]">
                <img
                  src={diningImage}
                  alt="Fine dining at Raj Rajeshwari Haveli courtyard"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-6 sm:p-8" >
                  <div className="flex items-center gap-2 text-gold mb-2">
                    <Utensils className="w-5 h-5" />
                    <span className="font-lato text-xs tracking-widest uppercase font-bold">Courtyard Dining</span>
                  </div>
                  <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-white mb-2 leading-tight">
                    Dine Under The Stars
                  </h3>
                  <p className="font-lato text-xs sm:text-sm text-white/80 leading-relaxed">
                    Enjoy candlelit dinners in our open-air courtyard, surrounded by glowing lanterns, soft traditional flute melodies, and Jaipur's cool evening breeze.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gold/20 rounded-full blur-2xl" />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gold/20 rounded-full blur-3xl" />
          </div>

        </div>
      </motion.div>
    </section>
  );
}
