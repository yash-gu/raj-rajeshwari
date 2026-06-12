import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Utensils, Clock, Award, Sparkles, Flame, Coffee, MessageCircle, ArrowRight } from 'lucide-react';
import diningImage from '../assets/images/gallery-4.jpg';

export function Dining() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const handleBookDining = () => {
    const event = new CustomEvent('select-thali');
    window.dispatchEvent(event);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const signatureItems = [
    {
      name: 'The Legendary Laal Maas',
      icon: Flame,
      desc: 'A fiery, slow-cooked mutton delicacy smoked to perfection using traditional charcoal techniques.',
      badge: 'Fiery Royal Classic',
    },
    {
      name: 'Traditional Dal Baati Churma',
      icon: Utensils,
      desc: 'The ultimate Rajasthani comfort food, rich in flavor and served with pure, aromatic hand-churned ghee.',
      badge: 'Pure Heritage',
    },
    {
      name: 'Royal Masala Chai',
      icon: Coffee,
      desc: 'Our custom, saffron-infused premium tea blend, brewed to perfection with secret spices.',
      badge: 'Saffron Brew',
    },
    {
      name: 'Makhaniya Lassi',
      icon: Sparkles,
      desc: 'A thick, cooling, and luscious yogurt drink topped with saffron, cardamom, and sliced nuts.',
      badge: 'Creamy Nectar',
    },
  ];

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
            The Royal Taste: A Culinary Legacy of Rajputana
          </h2>
          <div className="arch-divider mx-auto max-w-[200px] mb-6" />
          <p className="font-lato text-base sm:text-lg text-white/70 max-w-2xl mx-auto">
            Dine in our central courtyard or the historic dining room, tasting authentic family recipes passed down through generations.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Heritage Culinary Narrative (Left side) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-black/40 rounded-2xl p-6 sm:p-8 border border-gold/20 backdrop-blur-md shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

              <div className="space-y-5">
                <div className="flex items-center gap-2 text-gold">
                  <Utensils className="w-4.5 h-4.5" />
                  <span className="font-lato text-xs tracking-widest uppercase font-bold">Traditional Mewari Kitchen</span>
                </div>

                <p className="font-lato text-sm sm:text-base text-white/95 leading-relaxed first-letter:text-5xl first-letter:font-playfair first-letter:text-gold first-letter:mr-3 first-letter:float-left first-letter:font-bold first-letter:leading-none">
                  Welcome to Raj Rajeshwari Haveli, where dining is not merely a meal—it is a journey through Jaipur’s storied culinary heritage. Every dish is a testament to the kitchens of Rajasthan’s royalty, prepared using age-old family recipes handed down through generations.
                </p>

                <p className="font-lato text-sm sm:text-base text-white/80 leading-relaxed">
                  Known for providing the finest traditional Rajasthani food in Jaipur, our chefs slow-cook every preparation in hand-beaten copper vessels over wood charcoal. By blending freshly ground secret spices with pure, hand-churned ghee, we recreate the authentic richness of the desert kingdom.
                </p>

                {/* Philosophy card */}
                <div className="bg-white/5 border border-gold/20 p-5 rounded-xl backdrop-blur-sm relative overflow-hidden mt-6">
                  <div className="absolute top-0 right-0 p-1">
                    <Sparkles className="w-4 h-4 text-gold/20" />
                  </div>
                  <h4 className="font-playfair text-sm uppercase font-bold text-gold tracking-widest mb-1.5 flex items-center gap-1.5">
                    Our Philosophy: Atithi Devo Bhava
                  </h4>
                  <p className="font-playfair italic text-white/90 text-sm sm:text-base leading-relaxed">
                    "The guest is equivalent to God." Experience dining just as the kings once did, seated in the cool evening breeze of our historic courtyard.
                  </p>
                </div>
              </div>
            </div>

            {/* Meet the Chef & Dining Hours in a side-by-side grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Chef card */}
              <div className="bg-black/35 rounded-2xl p-6 border border-gold/20 backdrop-blur-sm shadow-xl flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-2.5 text-gold">
                    <Award className="w-5 h-5 shrink-0" />
                    <h4 className="font-playfair font-bold text-white text-base">Meet the Mastermind</h4>
                  </div>
                  <h5 className="font-lato text-xs text-gold/80 font-bold uppercase tracking-wider">
                    Authentic Mewari & Rajasthani
                  </h5>
                  <p className="font-lato text-xs sm:text-sm text-white/80 leading-relaxed">
                    Every single dish is crafted with love and absolute precision under the expert supervision of our Royal Chef. Under his guidance, the legacy of the royal kitchens lives on in every bite.
                  </p>
                </div>
              </div>

              {/* Hours card */}
              <div className="bg-black/35 rounded-2xl p-6 border border-gold/20 backdrop-blur-sm shadow-xl flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center gap-2.5 text-gold">
                    <Clock className="w-5 h-5 shrink-0" />
                    <h4 className="font-playfair font-bold text-white text-base">Dining Hours & Service</h4>
                  </div>
                  
                  <div className="border border-white/10 rounded-xl overflow-hidden text-left bg-black/20">
                    <div className="grid grid-cols-2 border-b border-white/10 bg-white/5 px-3 py-2 text-[10px] sm:text-xs font-lato text-gold font-bold uppercase tracking-wider">
                      <span>Service</span>
                      <span>Timings</span>
                    </div>
                    <div className="grid grid-cols-2 px-3 py-2 border-b border-white/5 text-xs font-lato text-white/90">
                      <span className="font-semibold">Breakfast</span>
                      <span className="text-white/70">7:30 AM – 10:30 AM</span>
                    </div>
                    <div className="grid grid-cols-2 px-3 py-2 text-xs font-lato text-white/90">
                      <span className="font-semibold">All-Day Dining</span>
                      <span className="text-white/70">12:00 PM – 10:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Signature Menu & Ambiance Image (Right side) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-black/35 rounded-2xl p-6 border border-gold/20 backdrop-blur-sm shadow-2xl">
              <h3 className="font-playfair text-xl font-bold text-white mb-4 flex items-center gap-2 border-b border-white/10 pb-3">
                <span>🍽️</span> Signature Royal Experiences
              </h3>
              
              <div className="space-y-4">
                {signatureItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.name}
                      className="group/item flex items-start gap-3.5 p-3 rounded-xl hover:bg-white/5 border border-transparent hover:border-gold/15 transition-all duration-300"
                    >
                      <div className="w-9 h-9 rounded-lg bg-gold/10 border border-gold/25 flex items-center justify-center shrink-0 text-gold group-hover/item:bg-gold group-hover/item:text-charcoal transition-all duration-300">
                        <Icon className="w-4.5 h-4.5" />
                      </div>
                      <div className="space-y-1 text-left">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h4 className="font-playfair text-sm font-bold text-white group-hover/item:text-gold transition-colors">
                            {item.name}
                          </h4>
                          <span className="text-[9px] font-lato bg-gold/10 text-gold border border-gold/25 px-1.5 py-0.5 rounded-full font-bold uppercase tracking-wider">
                            {item.badge}
                          </span>
                        </div>
                        <p className="font-lato text-xs text-white/75 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Action / Query Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-5 border-t border-white/10 mt-5">
                <a
                  href="https://wa.me/919829077627?text=Namaste%20Raj%20Rajeshwari%20Haveli!%20%F0%9F%8C%BA%0A%0AI%20would%20like%20to%20reserve%20a%20table%20/%20Traditional%20Thali%20for%20our%20upcoming%20visit.%20Please%20let%20me%20know%20availability.%20Thank%20you!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-xl font-lato font-bold text-xs tracking-wider uppercase transition-all shadow-md flex items-center justify-center gap-1.5"
                >
                  <MessageCircle className="w-4 h-4" /> Reserve (WhatsApp)
                </a>
                <button
                  onClick={handleBookDining}
                  className="flex-1 bg-gold hover:bg-gold-light text-charcoal py-3 px-4 rounded-xl font-lato font-bold text-xs tracking-wider uppercase transition-all shadow-md flex items-center justify-center gap-1.5 group"
                >
                  Book Traditional Thali <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Small Ambiance Photo Card */}
            <div className="rounded-2xl overflow-hidden shadow-xl border border-gold/20 bg-white p-1.5">
              <div className="relative rounded-xl overflow-hidden h-48">
                <img
                  src={diningImage}
                  alt="Fine dining at Raj Rajeshwari Haveli courtyard restaurant in Jaipur - authentic traditional Rajasthani food"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4 text-left">
                  <h4 className="font-playfair text-base font-bold text-white">Dine Under The Stars</h4>
                  <p className="font-lato text-[11px] text-white/80 mt-0.5">
                    Candlelit courtyard setup with lanterns and traditional flute melodies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
