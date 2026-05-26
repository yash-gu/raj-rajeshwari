import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, Calendar, Building2, Award } from 'lucide-react';

const stats = [
  { icon: Star, value: 8.5, suffix: '/10', label: 'Booking.com Rating', displayValue: '8.5' },
  { icon: Building2, value: 9, suffix: '+', label: 'Heritage Rooms', displayValue: '9+' },
  { icon: Calendar, value: 2019, suffix: '', label: 'Established', displayValue: '2019' },
  { icon: Award, value: 0, suffix: '', label: 'TripAdvisor Top Rated', displayValue: 'Top Rated' },
];

function AnimatedCounter({ value, suffix, displayValue }: { value: number; suffix: string; displayValue: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (isInView && value > 0) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(current);
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  if (displayValue === 'Top Rated') {
    return <span>{displayValue}</span>;
  }

  return (
    <span ref={ref}>
      {value === 8.5 || value === 2019 ? displayValue : Math.floor(count)}
      {suffix}
    </span>
  );
}

export function TrustBar() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="trust" className="bg-maroon py-8 relative z-10">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col md:flex-row items-center justify-center gap-3 md:border-r border-gold/30 last:border-r-0 px-4"
            >
              <stat.icon className="w-8 h-8 text-gold flex-shrink-0" />
              <div className="text-center md:text-left">
                <p className="font-playfair text-2xl md:text-3xl text-gold font-bold">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    displayValue={stat.displayValue}
                  />
                </p>
                <p className="font-lato text-xs md:text-sm text-white/80 mt-1 tracking-wide">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
