import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Sparkles, Phone, MessageSquare, Mail, Clock, Compass, Coffee, ShieldCheck, MapPin } from 'lucide-react';
import helpDeskImage from '../assets/images/help-desk.jpeg';

export function HelpDesk() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const contactOptions = [
    {
      icon: Phone,
      title: 'Royal Support Call',
      value: '+91 9829077627',
      href: 'tel:+919829077627',
      actionText: 'Dial Instantly',
      color: 'hover:border-maroon hover:text-maroon hover:shadow-maroon/5',
    },
    {
      icon: MessageSquare,
      title: 'WhatsApp Concierge',
      value: '24/7 Chat Assistance',
      href: 'https://api.whatsapp.com/send?phone=919829077627&text=Hello!%20I%20am%20a%20guest%20at%20Raj%20Rajeshwari%20Haveli%20and%20need%20assistance.',
      actionText: 'Start Chat',
      color: 'hover:border-emerald-600 hover:text-emerald-600 hover:shadow-emerald-600/5',
    },
    {
      icon: Mail,
      title: 'Email Front Desk',
      value: 'info@rajrajeshwarihaveli.com',
      href: 'mailto:info@rajrajeshwarihaveli.com',
      actionText: 'Write to Us',
      color: 'hover:border-gold hover:text-gold-dark hover:shadow-gold/5',
    },
  ];

  const services = [
    {
      icon: Compass,
      title: 'Royal Concierge & Tour Desk',
      desc: 'Let us orchestrate your Jaipur adventure. Enjoy hand-picked heritage city guides, curated excursions to historical forts, and premium local chauffeur bookings.',
    },
    {
      icon: Coffee,
      title: 'Round-The-Clock In-Room Dining',
      desc: 'Savor traditional Rajasthani snacks, hand-brewed masala chai, or a refreshing beverage delivered directly to your heritage suite at any hour of the night.',
    },
    {
      icon: ShieldCheck,
      title: 'Seamless Care & Security',
      desc: 'Your safety is our absolute priority. Rest easy with 24/7 guarded security patrols, medical assistance on-call, and custom luggage assistance.',
    },
  ];

  return (
    <section id="help-desk" className="py-24 bg-cream relative overflow-hidden">
      {/* Decorative background mandalas */}
      <div className="absolute top-0 left-0 w-96 h-96 mandala-pattern opacity-30 pointer-events-none -translate-x-12 -translate-y-12" />
      <div className="absolute bottom-0 right-0 w-96 h-96 mandala-pattern opacity-30 pointer-events-none translate-x-12 translate-y-12" />

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
            <Sparkles className="w-3.5 h-3.5" /> ATITHI DEVO BHAVA <Sparkles className="w-3.5 h-3.5" />
          </span>
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-charcoal mt-4 mb-4">
            24/7 Royal Help Desk
          </h2>
          <div className="arch-divider mx-auto max-w-[200px] mb-6" />
          <p className="font-lato text-charcoal/70 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            True luxury lies in the details. From local recommendations to midnight refreshments, our dedicated concierge team is at your command day and night.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image and clock badge */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-royal bg-white p-2">
              <div className="relative rounded-xl overflow-hidden h-[350px] sm:h-[450px] lg:h-[500px]">
                <img
                  src={helpDeskImage}
                  alt="24/7 Royal Help Desk Service at Raj Rajeshwari Haveli"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-maroon/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Glowing 24/7 Badge */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: 0.4, type: 'spring' }}
              className="absolute -bottom-6 -left-4 sm:left-6 w-36 h-36 bg-maroon rounded-full flex flex-col items-center justify-center shadow-xl border-4 border-cream z-20 text-center p-3"
            >
              <Clock className="w-7 h-7 text-gold mb-1 animate-pulse" />
              <p className="font-playfair text-2xl font-bold text-white leading-none">
                24/7
              </p>
              <p className="font-lato text-[9px] uppercase font-bold text-gold tracking-widest mt-1">
                Royal Concierge
              </p>
            </motion.div>
          </div>

          {/* Right Column: Information & Actions */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            {/* Services List */}
            <div className="space-y-8 mb-10">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="flex gap-5 group"
                >
                  <div className="w-12 h-12 flex-shrink-0 bg-gold/10 rounded-xl flex items-center justify-center group-hover:bg-gold/20 transition-all duration-300">
                    <service.icon className="w-6 h-6 text-gold group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-lg sm:text-xl font-bold text-charcoal mb-1.5">
                      {service.title}
                    </h3>
                    <p className="font-lato text-sm sm:text-base text-charcoal/70 leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Custom Premium Brand Quote Banner */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
              className="mb-8 p-4 bg-beige/40 border-l-4 border-gold rounded-r-xl"
            >
              <p className="font-playfair text-sm italic text-maroon font-semibold">
                "Where hospitality is an ancient art, and our guests are crowned monarchs."
              </p>
            </motion.div>

            {/* Direct Contact Cards */}
            <div className="border-t border-gold/20 pt-8 space-y-4">
              <h4 className="font-playfair text-xl font-bold text-charcoal mb-4">
                Reach the Concierge Directly
              </h4>
              
              <div className="grid sm:grid-cols-3 gap-4">
                {contactOptions.map((option, index) => (
                  <motion.a
                    key={option.title}
                    href={option.href}
                    target={option.href.startsWith('http') ? '_blank' : undefined}
                    rel={option.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    className={`flex flex-col justify-between p-4 bg-white/95 backdrop-blur-sm border border-gold/15 rounded-xl transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1 ${option.color}`}
                  >
                    <div>
                      <option.icon className="w-5 h-5 mb-3 text-gold" />
                      <h5 className="font-playfair text-xs font-bold uppercase tracking-wider mb-1">
                        {option.title}
                      </h5>
                      <p className="font-lato text-[11px] opacity-75 truncate max-w-full">
                        {option.value}
                      </p>
                    </div>
                    <span className="font-lato text-xs font-bold underline mt-4 inline-block">
                      {option.actionText} &rarr;
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>

          </div>

        </div>
      </motion.div>
    </section>
  );
}
