import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Sparkles, CalendarDays, Users, Bed } from 'lucide-react';
import hero0 from '../assets/images/hero-0.png';
import hero1 from '../assets/images/hero-1.jpeg';
import hero2 from '../assets/images/hero-2.jpg';
import hero3 from '../assets/images/hero-3.jpeg';
import hero4 from '../assets/images/hero-4.jpeg';
import hero5 from '../assets/images/hero-5.jpeg';
import hero6 from '../assets/images/hero-6.jpeg';
import hero7 from '../assets/images/hero-7.jpg';

const heroImages = [
  hero0,
  hero1,
  hero2,
  hero3,
  hero4,
  hero5,
  hero6,
  hero7,

];

export function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  const [bookingData, setBookingData] = useState({
    checkIn: '',
    checkOut: '',
    guests: '2',
    roomType: 'King Room',
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleQuickBook = (e: React.FormEvent) => {
    e.preventDefault();
    
    const formatDate = (dateStr: string) => {
      if (!dateStr) return 'Not specified';
      const parts = dateStr.split('-');
      if (parts.length === 3) {
        return `${parts[2]}/${parts[1]}/${parts[0]}`; // DD/MM/YYYY
      }
      return dateStr;
    };

    const checkInDate = formatDate(bookingData.checkIn);
    const checkOutDate = formatDate(bookingData.checkOut);

    const message = `Hello Raj Rajeshwari Haveli! 🌺\n\nI would like to check availability and rates for my upcoming stay:\n\n📅 *Check-In:* ${checkInDate}\n📅 *Check-Out:* ${checkOutDate}\n👥 *Guests:* ${bookingData.guests} guest(s)\n🏨 *Room Type:* ${bookingData.roomType}\n\nPlease let me know the rates and booking details. Thank you!`;

    const whatsappUrl = `https://api.whatsapp.com/send?phone=919829077627&text=${encodeURIComponent(message)}`;
    window.location.href = whatsappUrl;
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImage}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
        >
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${heroImages[currentImage]})`,
              y: scrollY * 0.35,
            }}
            initial={{ scale: heroImages[currentImage] === hero5 ? 0.9 : (heroImages[currentImage] === hero0 ? 1.03 : 1.15) }}
            animate={{ scale: heroImages[currentImage] === hero5 ? 0.9 : (heroImages[currentImage] === hero0 ? 1.03 : 1.03) }}
            transition={{ duration: 4.5, ease: 'easeOut' }}
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/45 to-black/85" />

      <div className="absolute inset-0 flex items-end justify-center pb-24 px-4">
        <div className="text-center w-full max-w-5xl">


          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4"
          >
            <a
              href="#about"
              className="font-lato font-semibold text-gold tracking-wide hover:text-gold-light transition-all flex items-center gap-2 group text-sm"
            >
              Explore the Haveli <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
            </a>
          </motion.div>

          {/* Quick Booking Glassmorphism Bar */}
          <motion.form
            onSubmit={handleQuickBook}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="w-full mt-8 bg-black/40 backdrop-blur-md border border-white/10 p-5 rounded-2xl shadow-2xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-end text-left"
          >
            <div className="space-y-2">
              <label className="text-white/70 font-lato text-xs tracking-wider uppercase font-semibold flex items-center gap-1.5">
                <CalendarDays className="w-3.5 h-3.5 text-gold" /> Check-In
              </label>
              <input
                type="date"
                required
                value={bookingData.checkIn}
                onChange={(e) => setBookingData({ ...bookingData, checkIn: e.target.value })}
                className="w-full bg-white/5 border border-white/10 hover:border-gold/50 text-white rounded-lg px-3 py-2.5 font-lato text-sm focus:border-gold outline-none transition-colors [color-scheme:dark]"
              />
            </div>

            <div className="space-y-2">
              <label className="text-white/70 font-lato text-xs tracking-wider uppercase font-semibold flex items-center gap-1.5">
                <CalendarDays className="w-3.5 h-3.5 text-gold" /> Check-Out
              </label>
              <input
                type="date"
                required
                value={bookingData.checkOut}
                onChange={(e) => setBookingData({ ...bookingData, checkOut: e.target.value })}
                className="w-full bg-white/5 border border-white/10 hover:border-gold/50 text-white rounded-lg px-3 py-2.5 font-lato text-sm focus:border-gold outline-none transition-colors [color-scheme:dark]"
              />
            </div>

            <div className="space-y-2">
              <label className="text-white/70 font-lato text-xs tracking-wider uppercase font-semibold flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-gold" /> Guests
              </label>
              <select
                value={bookingData.guests}
                onChange={(e) => setBookingData({ ...bookingData, guests: e.target.value })}
                className="w-full bg-charcoal/90 border border-white/10 hover:border-gold/50 text-white rounded-lg px-3 py-2.5 font-lato text-sm focus:border-gold outline-none transition-colors"
              >
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3">3 Guests</option>
                <option value="4">4 Guests</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-white/70 font-lato text-xs tracking-wider uppercase font-semibold flex items-center gap-1.5">
                <Bed className="w-3.5 h-3.5 text-gold" /> Room Type
              </label>
              <select
                value={bookingData.roomType}
                onChange={(e) => setBookingData({ ...bookingData, roomType: e.target.value })}
                className="w-full bg-charcoal/90 border border-white/10 hover:border-gold/50 text-white rounded-lg px-3 py-2.5 font-lato text-sm focus:border-gold outline-none transition-colors"
              >
                <option value="King Room">King Room</option>
                <option value="Queen Room">Queen Room</option>
                <option value="Standard Double Room">Standard Double Room</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-gold text-charcoal hover:bg-gold-light py-2.5 sm:py-3 rounded-lg font-lato font-bold text-sm tracking-wider uppercase transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5"
            >
              Check Rates
            </button>
          </motion.form>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <motion.a
          href="#trust"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col items-center text-white/50 hover:text-gold transition-colors"
          aria-label="Scroll down"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="w-8 h-8" />
          </motion.div>
        </motion.a>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream to-transparent pointer-events-none" />
    </section>
  );
}
