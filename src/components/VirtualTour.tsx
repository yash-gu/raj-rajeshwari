import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Play, 
  Sparkles, 
  Video, 
  Camera,
  MapPin,
  Clock,
  Users,
  Building2
} from 'lucide-react';

const tourHighlights = [
  {
    icon: Building2,
    title: 'Architectural Marvel',
    desc: 'Explore intricate Rajput craftsmanship',
  },
  {
    icon: MapPin,
    title: 'Prime Location',
    desc: 'Walking distance to major attractions',
  },
  {
    icon: Users,
    title: 'Personal Touch',
    desc: 'Meet the Chouhan family hosts',
  },
  {
    icon: Clock,
    title: 'Timeless Experience',
    desc: 'Step back into royal heritage',
  },
];

export function VirtualTour() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-24 bg-gradient-to-b from-charcoal via-maroon-dark to-charcoal relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
      
      <div className="absolute top-20 left-10 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold font-lato text-xs sm:text-sm tracking-[0.3em] uppercase font-semibold flex items-center justify-center gap-2">
            <Video className="w-4 h-4" /> IMMERSIVE EXPERIENCE <Video className="w-4 h-4" />
          </span>
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-white mt-4 mb-4">
            Virtual Heritage Tour
          </h2>
          <div className="arch-divider mx-auto max-w-[200px] mb-6 opacity-70" />
          <p className="font-lato text-base sm:text-lg text-white/70 max-w-2xl mx-auto">
            Take a guided visual journey through our haveli before you arrive
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Video Preview - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="relative group cursor-pointer rounded-2xl overflow-hidden border-2 border-gold/30 shadow-2xl">
              {/* Placeholder thumbnail - replace with actual video thumbnail */}
              <div className="relative aspect-video bg-gradient-to-br from-maroon/80 to-charcoal/90 flex items-center justify-center">
                <div className="absolute inset-0 opacity-20" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0C35 15 45 25 60 30C45 35 35 45 30 60C25 45 15 35 0 30C15 25 25 15 30 0' fill='none' stroke='%23C9A84C' stroke-width='0.5' opacity='0.1'/%3E%3C/svg%3E")`
                }} />
                
                {/* Center Play Button */}
                <div className="relative z-10 w-20 h-20 bg-gold rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl animate-pulse-glow">
                  <Play className="w-9 h-9 text-charcoal ml-1" fill="currentColor" />
                </div>

                {/* Overlay text */}
                <div className="absolute top-6 left-6">
                  <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full">
                    <Camera className="w-4 h-4 text-gold" />
                    <span className="font-lato text-xs text-white font-semibold uppercase tracking-wider">
                      3 Min Tour
                    </span>
                  </div>
                </div>

                {/* Coming Soon Badge */}
                <div className="absolute bottom-6 right-6">
                  <div className="bg-maroon/90 backdrop-blur-sm border border-gold/40 px-4 py-2 rounded-lg">
                    <span className="font-playfair text-sm text-gold font-bold">
                      Experience Preview
                    </span>
                  </div>
                </div>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Video description */}
            <div className="mt-6 text-center lg:text-left">
              <p className="font-lato text-sm text-white/60 leading-relaxed">
                Watch our guided tour featuring the <span className="text-gold font-semibold">courtyard architecture</span>, 
                <span className="text-gold font-semibold"> heritage suites</span>, and 
                <span className="text-gold font-semibold"> dining spaces</span>. Hear directly from the Chouhan family about the property's rich history.
              </p>
            </div>
          </motion.div>

          {/* Tour Highlights - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 space-y-6"
          >
            <div>
              <h3 className="font-playfair text-2xl font-bold text-white mb-3">
                What You'll Discover
              </h3>
              <p className="font-lato text-sm text-white/60 leading-relaxed">
                Get an exclusive preview of the spaces, stories, and experiences that await you.
              </p>
            </div>

            <div className="space-y-4">
              {tourHighlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  className="flex items-start gap-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 hover:border-gold/30 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                    <highlight.icon className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-playfair text-base font-bold text-white mb-1">
                      {highlight.title}
                    </h4>
                    <p className="font-lato text-xs text-white/60">
                      {highlight.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-gold text-charcoal hover:bg-gold-light px-8 py-4 rounded-xl font-lato font-bold text-sm tracking-wider uppercase transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 w-full sm:w-auto justify-center"
              >
                <Sparkles className="w-4 h-4" />
                Book Your Stay
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: '2019', label: 'Established' },
            { value: '5.0/5', label: 'Guest Rating' },
            { value: '14+', label: 'Heritage Rooms' },
            { value: '100%', label: 'Authentic Experience' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-colors"
            >
              <p className="font-playfair text-3xl font-bold text-gold mb-2">
                {stat.value}
              </p>
              <p className="font-lato text-xs text-white/60 uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
