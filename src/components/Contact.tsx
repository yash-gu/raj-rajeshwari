import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import {
  Phone,
  Mail,
  Clock,
  MessageCircle,
  CalendarDays,
  Users,
  Send,
  Sparkles,
  CheckCircle,
  Gift,
} from 'lucide-react';

const otaBadges = [
  { name: 'Booking.com', rating: '5.0/5.0' },
  { name: 'Expedia', rating: '4.8/5.0' },
  { name: 'MakeMyTrip', rating: '4.9/5.0' },
  { name: 'Agoda', rating: '4.9/5.0' },
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
    addGuidedWalk: false,
    addTraditionalThali: false,
    addYogaSession: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Listen for the custom quick-book event and select-thali event
  useEffect(() => {
    const handleQuickBookEvent = (event: Event) => {
      const customEvent = event as CustomEvent;
      if (customEvent.detail) {
        setFormData((prev) => ({
          ...prev,
          checkIn: customEvent.detail.checkIn || prev.checkIn,
          checkOut: customEvent.detail.checkOut || prev.checkOut,
          guests: customEvent.detail.guests || prev.guests,
          roomType: customEvent.detail.roomType || prev.roomType,
        }));
      }
    };

    const handleSelectThaliEvent = () => {
      setFormData((prev) => ({
        ...prev,
        addTraditionalThali: true,
      }));
    };

    window.addEventListener('quick-book', handleQuickBookEvent);
    window.addEventListener('select-thali', handleSelectThaliEvent);
    return () => {
      window.removeEventListener('quick-book', handleQuickBookEvent);
      window.removeEventListener('select-thali', handleSelectThaliEvent);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      checkIn: '',
      checkOut: '',
      roomType: 'King Room',
      guests: '2',
      message: '',
      addGuidedWalk: false,
      addTraditionalThali: false,
      addYogaSession: false,
    });
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="py-24 bg-maroon relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-repeat bg-contain" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A84C' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold font-lato text-xs sm:text-sm tracking-[0.3em] uppercase font-semibold flex items-center justify-center gap-2">
            <Sparkles className="w-3.5 h-3.5" /> RESERVATIONS <Sparkles className="w-3.5 h-3.5" />
          </span>
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-white mt-4 mb-4">
            Bespoke Stay Planner
          </h2>
          <div className="arch-divider mx-auto max-w-[200px] mb-6" />
          <p className="font-lato text-base sm:text-lg text-white/70 max-w-2xl mx-auto">
            Book directly with us to guarantee the best room rates, flexible check-in policies, and exclusive cultural experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Info Side (Left) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-8"
          >
            <h3 className="font-playfair text-3xl font-bold text-white leading-tight">
              Contact & Resident Services
            </h3>

            <div className="space-y-6">
              
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-gold/10 rounded-lg flex items-center justify-center shrink-0 border border-gold/20">
                  <Phone className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="font-lato text-white/50 text-xs uppercase font-bold tracking-wider mb-1">Call / Message</p>
                  <p className="font-lato text-white text-lg font-semibold">+91 9829077627</p>
                  <div className="flex gap-2.5 mt-2.5">
                    <a
                      href="tel:+919829077627"
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 hover:bg-white/20 text-gold rounded-lg transition-colors text-xs font-semibold uppercase tracking-wider"
                    >
                      <Phone className="w-3.5 h-3.5" /> Call Host
                    </a>
                    <a
                      href="https://wa.me/919829077627"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors text-xs font-semibold uppercase tracking-wider shadow-sm"
                    >
                      <MessageCircle className="w-3.5 h-3.5" /> WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-gold/10 rounded-lg flex items-center justify-center shrink-0 border border-gold/20">
                  <Mail className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="font-lato text-white/50 text-xs uppercase font-bold tracking-wider mb-1">Email Enquiries</p>
                  <a
                    href="mailto:info@rajrajeshwarihaveli.com"
                    className="font-lato text-white text-base font-semibold hover:text-gold transition-colors break-all"
                  >
                    info@rajrajeshwarihaveli.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-gold/10 rounded-lg flex items-center justify-center shrink-0 border border-gold/20">
                  <Clock className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="font-lato text-white/50 text-xs uppercase font-bold tracking-wider mb-1">Standard Policies</p>
                  <p className="font-lato text-white text-sm">
                    Check-in: 12:00 PM | Check-out: 12:00 PM<br />
                    Early arrival check-in subject to room vacancy.
                  </p>
                </div>
              </div>

            </div>

            {/* Badges / Trusted list */}
            <div className="border-t border-white/15 pt-8">
              <p className="font-lato text-white/60 text-xs uppercase font-bold tracking-wider mb-4">Also Certified On</p>
              <div className="grid grid-cols-2 gap-3">
                {otaBadges.map((badge) => (
                  <div
                    key={badge.name}
                    className="flex flex-col bg-white/5 border border-white/10 rounded-xl p-3"
                  >
                    <span className="font-lato text-white font-semibold text-sm">{badge.name}</span>
                    <span className="font-lato text-gold font-bold text-xs mt-0.5">{badge.rating} ⭐</span>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>

          {/* Form Side (Right) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl relative border-royal">
              
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.div
                    key="booking-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <h3 className="font-playfair text-2xl font-bold text-charcoal mb-6 flex items-center gap-2">
                      Request a Heritage Booking
                    </h3>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      
                      {/* Name & Email Row */}
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <label className="block font-lato text-xs font-bold text-charcoal/80 uppercase tracking-wider">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-4 py-3 border border-beige rounded-xl font-lato text-sm text-charcoal focus:border-gold focus:ring-4 focus:ring-gold/10 outline-none transition-all"
                            placeholder="John Doe"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="block font-lato text-xs font-bold text-charcoal/80 uppercase tracking-wider">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-4 py-3 border border-beige rounded-xl font-lato text-sm text-charcoal focus:border-gold focus:ring-4 focus:ring-gold/10 outline-none transition-all"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>

                      {/* Phone Number */}
                      <div className="space-y-2">
                        <label className="block font-lato text-xs font-bold text-charcoal/80 uppercase tracking-wider">
                          Phone / WhatsApp Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 border border-beige rounded-xl font-lato text-sm text-charcoal focus:border-gold focus:ring-4 focus:ring-gold/10 outline-none transition-all"
                          placeholder="+91 98765 43210"
                        />
                      </div>

                      {/* Check-in / Check-out Dates */}
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <label className="block font-lato text-xs font-bold text-charcoal/80 uppercase tracking-wider flex items-center gap-1">
                            <CalendarDays className="w-3.5 h-3.5 text-gold" /> Check-in Date *
                          </label>
                          <input
                            type="date"
                            required
                            value={formData.checkIn}
                            onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                            className="w-full px-4 py-3 border border-beige rounded-xl font-lato text-sm text-charcoal focus:border-gold outline-none transition-all"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="block font-lato text-xs font-bold text-charcoal/80 uppercase tracking-wider flex items-center gap-1">
                            <CalendarDays className="w-3.5 h-3.5 text-gold" /> Check-out Date *
                          </label>
                          <input
                            type="date"
                            required
                            value={formData.checkOut}
                            onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                            className="w-full px-4 py-3 border border-beige rounded-xl font-lato text-sm text-charcoal focus:border-gold outline-none transition-all"
                          />
                        </div>
                      </div>

                      {/* Room selection & Guests */}
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <label className="block font-lato text-xs font-bold text-charcoal/80 uppercase tracking-wider">
                            Select Suite *
                          </label>
                          <select
                            required
                            value={formData.roomType}
                            onChange={(e) => setFormData({ ...formData, roomType: e.target.value })}
                            className="w-full px-4 py-3 border border-beige rounded-xl font-lato text-sm text-charcoal focus:border-gold outline-none transition-all bg-white"
                          >
                            <option value="King Room">King Room (From INR 4,500)</option>
                            <option value="Queen Room">Queen Room (From INR 3,500)</option>
                            <option value="Standard Double Room">Standard Double Room (From INR 2,500)</option>
                          </select>
                        </div>
                        <div className="space-y-2">
                          <label className="block font-lato text-xs font-bold text-charcoal/80 uppercase tracking-wider flex items-center gap-1">
                            <Users className="w-3.5 h-3.5 text-gold" /> Guests Count *
                          </label>
                          <select
                            required
                            value={formData.guests}
                            onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                            className="w-full px-4 py-3 border border-beige rounded-xl font-lato text-sm text-charcoal focus:border-gold outline-none transition-all bg-white"
                          >
                            <option value="1">1 Resident</option>
                            <option value="2">2 Residents</option>
                            <option value="3">3 Residents</option>
                            <option value="4">4 Residents</option>
                          </select>
                        </div>
                      </div>

                      {/* Experience Packages checkboxes */}
                      <div className="space-y-3 border-t border-beige pt-5">
                        <label className="block font-lato text-xs font-bold text-charcoal/80 uppercase tracking-wider flex items-center gap-1.5">
                          <Gift className="w-4 h-4 text-gold animate-bounce" /> Heritage Experience Add-Ons
                        </label>
                        
                        <div className="space-y-2.5">
                          
                          <label className="flex items-start gap-3 p-3 bg-beige/10 hover:bg-beige/25 rounded-xl border border-beige/40 cursor-pointer transition-colors">
                            <input
                              type="checkbox"
                              checked={formData.addGuidedWalk}
                              onChange={(e) => setFormData({ ...formData, addGuidedWalk: e.target.checked })}
                              className="mt-1 accent-maroon w-4.5 h-4.5 rounded"
                            />
                            <div className="text-left">
                              <p className="font-lato text-sm font-bold text-charcoal">Guided Bazaars Heritage Walk (+INR 1,200/guest)</p>
                              <p className="font-lato text-xs text-charcoal/65">Exploration of Khatipura & neighborhood bazaars with historical storytelling guides.</p>
                            </div>
                          </label>

                          <label className="flex items-start gap-3 p-3 bg-beige/10 hover:bg-beige/25 rounded-xl border border-beige/40 cursor-pointer transition-colors">
                            <input
                              type="checkbox"
                              checked={formData.addTraditionalThali}
                              onChange={(e) => setFormData({ ...formData, addTraditionalThali: e.target.checked })}
                              className="mt-1 accent-maroon w-4.5 h-4.5 rounded"
                            />
                            <div className="text-left">
                              <p className="font-lato text-sm font-bold text-charcoal">Courtyard Candlelit Thali Dinner (+INR 850/guest)</p>
                              <p className="font-lato text-xs text-charcoal/65">Authentic Rajput home-cooked recipes served inside the illuminated central courtyard.</p>
                            </div>
                          </label>

                          <label className="flex items-start gap-3 p-3 bg-beige/10 hover:bg-beige/25 rounded-xl border border-beige/40 cursor-pointer transition-colors">
                            <input
                              type="checkbox"
                              checked={formData.addYogaSession}
                              onChange={(e) => setFormData({ ...formData, addYogaSession: e.target.checked })}
                              className="mt-1 accent-maroon w-4.5 h-4.5 rounded"
                            />
                            <div className="text-left">
                              <p className="font-lato text-sm font-bold text-charcoal">Private Sunrise Yoga Class (+INR 500/guest)</p>
                              <p className="font-lato text-xs text-charcoal/65">1-hour private morning yoga and breathing session in the courtyard with a certified trainer.</p>
                            </div>
                          </label>

                        </div>
                      </div>

                      {/* Special Requests textarea */}
                      <div className="space-y-2">
                        <label className="block font-lato text-xs font-bold text-charcoal/80 uppercase tracking-wider">
                          Special Requests & Notes
                        </label>
                        <textarea
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          rows={4}
                          className="w-full px-4 py-3 border border-beige rounded-xl font-lato text-sm text-charcoal focus:border-gold outline-none transition-all resize-none"
                          placeholder="Dietary details, airport transfer timings, or special requests..."
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-gold hover:bg-gold-light text-charcoal py-4 rounded-xl font-lato font-bold text-sm tracking-widest uppercase transition-all shadow-md flex items-center justify-center gap-2"
                      >
                        <Send className="w-4 h-4" /> Send Booking Enquiry
                      </button>

                    </form>
                  </motion.div>
                ) : (
                  // Submitted Success Confirmation screen
                  <motion.div
                    key="booking-success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-10 space-y-6"
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto text-green-600 shadow-sm border border-green-200">
                      <CheckCircle className="w-10 h-10" />
                    </div>

                    <div className="space-y-2.5">
                      <h3 className="font-playfair text-3xl font-bold text-charcoal">
                        Enquiry Dispatched!
                      </h3>
                      <p className="font-lato text-sm text-charcoal/65 max-w-md mx-auto">
                        Namaste, <span className="font-bold text-charcoal">{formData.name}</span>. Thank you for choosing Raj Rajeshwari Haveli. We have logged your request.
                      </p>
                    </div>

                    <div className="bg-beige/20 p-5 rounded-2xl border border-beige text-left text-xs sm:text-sm font-lato text-charcoal/85 max-w-md mx-auto space-y-2.5 shadow-inner">
                      <div><span className="font-bold text-charcoal">Chamber:</span> {formData.roomType}</div>
                      <div><span className="font-bold text-charcoal">Residents:</span> {formData.guests} Guest(s)</div>
                      <div><span className="font-bold text-charcoal">Check-in:</span> {formData.checkIn}</div>
                      <div><span className="font-bold text-charcoal">Check-out:</span> {formData.checkOut}</div>
                      
                      {(formData.addGuidedWalk || formData.addTraditionalThali || formData.addYogaSession) && (
                        <div className="pt-2 border-t border-beige">
                          <span className="font-bold text-charcoal block mb-1">Add-ons Selected:</span>
                          <ul className="list-disc pl-4 space-y-1 text-xs text-charcoal/70">
                            {formData.addGuidedWalk && <li>Heritage Bazaars Walk</li>}
                            {formData.addTraditionalThali && <li>Courtyard Thali Dinner</li>}
                            {formData.addYogaSession && <li>Morning Yoga Class</li>}
                          </ul>
                        </div>
                      )}
                    </div>

                    <p className="font-lato text-xs text-charcoal/50 max-w-sm mx-auto">
                      A resident host will verify availability and contact you via email (<span className="text-maroon font-semibold">{formData.email}</span>) or WhatsApp within the hour.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-4">
                      <a
                        href={`https://wa.me/919829077627?text=Hello%2C%20I%20have%20sent%20a%20booking%20enquiry%20for%20a%20${formData.roomType}%20from%20${formData.checkIn}%20to%20${formData.checkOut}.%20Please%20confirm.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-green-600 hover:bg-green-700 text-white font-lato font-bold py-3 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 text-xs uppercase tracking-wider"
                      >
                        <MessageCircle className="w-4.5 h-4.5" /> Instant WhatsApp
                      </a>
                      <button
                        onClick={handleReset}
                        className="flex-1 border border-charcoal/20 text-charcoal/70 hover:bg-beige/25 font-lato font-bold py-3 rounded-xl transition-colors text-xs uppercase tracking-wider"
                      >
                        New Enquiry
                      </button>
                    </div>

                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
