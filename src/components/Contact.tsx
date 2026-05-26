import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  CalendarDays,
  Users,
  Send,
  ExternalLink,
} from 'lucide-react';

const otaBadges = [
  { name: 'Booking.com', color: 'bg-blue-600' },
  { name: 'Expedia', color: 'bg-yellow-600' },
  { name: 'MakeMyTrip', color: 'bg-red-600' },
  { name: 'Agoda', color: 'bg-indigo-600' },
];

export function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    roomType: 'King Room',
    guests: '2',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your enquiry! We will contact you shortly.');
  };

  return (
    <section id="contact" className="py-20 bg-maroon relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A84C' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-gold font-lato text-sm tracking-[0.2em] uppercase font-semibold"
          >
            BOOK NOW
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-playfair text-4xl lg:text-5xl font-bold text-white mt-4 mb-6"
          >
            Reserve Your Royal Stay
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="font-lato text-lg text-white/70 max-w-2xl mx-auto"
          >
            Book directly for the best rates and exclusive heritage experiences
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-playfair text-2xl font-bold text-white mb-8">
              Contact Information
            </h3>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <p className="font-lato text-white/60 text-sm mb-1">Phone / WhatsApp</p>
                  <p className="font-lato text-white text-lg">+91 9829012345</p>
                  <div className="flex gap-3 mt-2">
                    <a
                      href="tel:+919829012345"
                      className="flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-lg text-gold hover:bg-white/20 transition-colors text-sm"
                    >
                      <Phone className="w-4 h-4" />
                      Call
                    </a>
                    <a
                      href="https://wa.me/919829012345"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-1.5 bg-green-600 rounded-lg text-white hover:bg-green-700 transition-colors text-sm"
                    >
                      <MessageCircle className="w-4 h-4" />
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <p className="font-lato text-white/60 text-sm mb-1">Email</p>
                  <a
                    href="mailto:info@rajrajeshwarihaveli.com"
                    className="font-lato text-white text-lg hover:text-gold transition-colors"
                  >
                    info@rajrajeshwarihaveli.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <p className="font-lato text-white/60 text-sm mb-1">Address</p>
                  <p className="font-lato text-white">
                    24, Parivahan Nagar Road,<br />
                    Chinkara Colony, Khatipura,<br />
                    Jaipur 302012
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <p className="font-lato text-white/60 text-sm mb-1">Check-in / Check-out</p>
                  <p className="font-lato text-white">
                    Check-in: 12:00 PM | Check-out: 12:00 PM
                  </p>
                </div>
              </div>
            </div>

            <div>
              <p className="font-lato text-white/60 text-sm mb-4">Also Book On</p>
              <div className="grid grid-cols-2 gap-3">
                {otaBadges.map((badge) => (
                  <div
                    key={badge.name}
                    className="flex items-center gap-2 px-4 py-3 bg-white/10 rounded-lg"
                  >
                    <ExternalLink className="w-4 h-4 text-white/60" />
                    <span className="font-lato text-white text-sm">{badge.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl">
              <h3 className="font-playfair text-2xl font-bold text-charcoal mb-6">
                Booking Enquiry
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-lato text-sm font-medium text-charcoal mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-beige rounded-lg font-lato text-charcoal focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block font-lato text-sm font-medium text-charcoal mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-beige rounded-lg font-lato text-charcoal focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-lato text-sm font-medium text-charcoal mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-beige rounded-lg font-lato text-charcoal focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-lato text-sm font-medium text-charcoal mb-2">
                      <CalendarDays className="w-4 h-4 inline mr-1" />
                      Check-in Date *
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.checkIn}
                      onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                      className="w-full px-4 py-3 border border-beige rounded-lg font-lato text-charcoal focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block font-lato text-sm font-medium text-charcoal mb-2">
                      <CalendarDays className="w-4 h-4 inline mr-1" />
                      Check-out Date *
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.checkOut}
                      onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                      className="w-full px-4 py-3 border border-beige rounded-lg font-lato text-charcoal focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-lato text-sm font-medium text-charcoal mb-2">
                      Room Type *
                    </label>
                    <select
                      required
                      value={formData.roomType}
                      onChange={(e) => setFormData({ ...formData, roomType: e.target.value })}
                      className="w-full px-4 py-3 border border-beige rounded-lg font-lato text-charcoal focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all bg-white"
                    >
                      <option value="King Room">King Room</option>
                      <option value="Queen Room">Queen Room</option>
                      <option value="Standard Double Room">Standard Double Room</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-lato text-sm font-medium text-charcoal mb-2">
                      <Users className="w-4 h-4 inline mr-1" />
                      Number of Guests *
                    </label>
                    <select
                      required
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full px-4 py-3 border border-beige rounded-lg font-lato text-charcoal focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all bg-white"
                    >
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4 Guests</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-lato text-sm font-medium text-charcoal mb-2">
                    Special Requests
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 border border-beige rounded-lg font-lato text-charcoal focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all resize-none"
                    placeholder="Any special requirements or occasions..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gold text-charcoal py-4 rounded-lg font-lato font-semibold tracking-wide hover:bg-gold-light transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Enquiry
                </button>

                <p className="text-center font-lato text-sm text-charcoal/60">
                  Or WhatsApp us directly for instant confirmation
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
