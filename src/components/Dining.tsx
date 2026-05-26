import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const tags = [
  'Buffet Breakfast',
  'A La Carte',
  'Continental',
  'Halal',
  'Vegan Friendly',
  'Courtyard Dining',
];

export function Dining() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="dining" className="py-20 bg-maroon relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A84C' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold font-lato text-sm tracking-[0.2em] uppercase font-semibold">
              DINING EXPERIENCE
            </span>
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-white mt-4 mb-6 leading-tight">
              A Royal Feast<br />
              <span className="text-gold">Every Morning</span>
            </h2>
            <p className="font-lato text-lg text-white/80 leading-relaxed mb-8">
              Our in-house restaurant serves authentic Rajasthani, Indian, and continental
              cuisine prepared by our royal chef. From hearty a la carte breakfasts to
              candlelit dinners in the courtyard, every meal at Raj Rajeshwari is an
              experience in itself. Halal, vegetarian, and vegan options available.
            </p>

            <div className="flex flex-wrap gap-3">
              {tags.map((tag, index) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.4 + index * 0.05 }}
                  className="px-4 py-2 border border-gold/50 text-gold text-sm font-lato rounded-full hover:bg-gold hover:text-charcoal transition-colors duration-300"
                >
                  {tag}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80"
                alt="Fine dining at Raj Rajeshwari Haveli"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                <p className="font-playfair text-2xl text-white font-semibold">
                  Breakfast · Lunch · Dinner
                </p>
                <p className="font-lato text-white/80 mt-1">
                  Open daily from 7:00 AM to 10:00 PM
                </p>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gold/20 rounded-full blur-2xl" />
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-gold/20 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
