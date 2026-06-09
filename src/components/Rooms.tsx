import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  BedDouble,
  Users,
  Maximize2,
  Wifi,
  Tv,
  Wind,
  Coffee,
  Bath,
  Laptop,
  Castle,
  Home,
  X,
  ChevronLeft,
  ChevronRight,
  Info,
  Sparkles,
} from 'lucide-react';
import room1 from '../assets/images/gallery-1.jpg';
import room2 from '../assets/images/gallery-2.jpg';
import room3 from '../assets/images/gallery-3.jpg';
import standardRoom from '../assets/images/standard-room.jpeg';
import queenRoom from '../assets/images/queen-room.jpeg';

const rooms = [
  {
    name: 'King Room',
    image: room1,
    images: [room1, room2, room3],
    size: '40 sq m',
    view: 'Heritage Courtyard View',
    beds: '1 Royal King Bed',
    sleeps: 2,
    price: 'INR 4,500',
    shortDesc: 'A majestic heritage hotel room blending traditional Rajput architecture with modern premium luxury in Jaipur.',
    longDesc: 'The King Room is the crown jewel of our accommodations. It features tall arched ceilings, stained glass accents, and classic Rajasthani murals, combined with a separate seating lounge and study desk. Experience premium ventilation, authentic boutique hotel vibes, and grand windows overlooking the central haveli courtyard.',
    features: ['AC', 'LED TV', 'Balcony', 'Bathrobe', 'Free WiFi', 'PC Workspace', 'Coffee Maker', 'Premium Toiletries', 'Heritage Furnishings'],
  },
  {
    name: 'Queen Room',
    image: queenRoom,
    images: [queenRoom, room1, room3],
    size: '30 sq m',
    view: 'Scenic Jaipur City View',
    beds: '1 Large Queen Bed',
    sleeps: 2,
    price: 'INR 3,500',
    shortDesc: 'A beautiful haveli hotel room featuring hand-selected Rajasthani antique furnishings and a peaceful Jaipur stay experience.',
    longDesc: 'Designed for comfort and character, the Queen Room is decorated with local block prints and detailed wood carvings. Enjoy standard modern amenities along with an exquisite seating nook perfect for reading, overlooking the historic streets of Jaipur. A perfect choices for travelers wanting to stay in a traditional haveli.',
    features: ['AC', 'LED TV', 'Balcony', 'Bathrobe', 'Free WiFi', 'Dressing Area', 'Standard Toiletries', 'Traditional Bolsters'],
  },
  {
    name: 'Standard Double Room',
    image: standardRoom,
    images: [standardRoom, room2, room1],
    size: '23 sq m',
    view: 'Quiet Haveli Garden View',
    beds: '1 Double Bed',
    sleeps: 2,
    price: 'INR 2,500',
    shortDesc: 'A cozy heritage hotel double room offering absolute peace, ideal for travelers looking for authentic budget stays in Jaipur.',
    longDesc: 'Our Standard Double Room combines essential comforts with elegant traditional touches. Impeccably clean and quiet, it features custom local drapery, garden perspectives, and simple handcrafted wood details that guarantee a restful heritage haveli stay at a very budget-friendly price.',
    features: ['AC', 'LED TV', 'Private Bathroom', 'Free WiFi', 'Daily Housekeeping', 'Hot Water Kettle', 'Handmade Soaps'],
  },
];

const featureIcons: Record<string, React.ElementType> = {
  AC: Wind,
  'LED TV': Tv,
  Balcony: Home,
  Bathrobe: Bath,
  'Free WiFi': Wifi,
  'PC Workspace': Laptop,
  'Coffee Maker': Coffee,
  'Dressing Area': Castle,
  'Private Bathroom': Bath,
  'Daily Housekeeping': BedDouble,
  'Premium Toiletries': Bath,
  'Traditional Bolsters': BedDouble,
  'Heritage Furnishings': Castle,
  'Standard Toiletries': Bath,
  'Hot Water Kettle': Coffee,
  'Handmade Soaps': Bath,
};

export function Rooms() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  
  const [selectedRoom, setSelectedRoom] = useState<typeof rooms[0] | null>(null);
  const [modalImageIdx, setModalImageIdx] = useState(0);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const openDetails = (room: typeof rooms[0]) => {
    setSelectedRoom(room);
    setModalImageIdx(0);
  };

  useEffect(() => {
    if (selectedRoom && dialogRef.current) {
      dialogRef.current.showModal();
    }
  }, [selectedRoom]);

  const closeDetails = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
    }
    setSelectedRoom(null);
  };

  // Light-dismiss click outside fallback for non-supported browsers
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleBackdropClick = (event: MouseEvent) => {
      if (!('closedBy' in HTMLDialogElement.prototype)) {
        if (event.target === dialog) {
          const rect = dialog.getBoundingClientRect();
          const isDialogContent = (
            rect.top <= event.clientY &&
            event.clientY <= rect.top + rect.height &&
            rect.left <= event.clientX &&
            event.clientX <= rect.left + rect.width
          );
          if (!isDialogContent) {
            closeDetails();
          }
        }
      }
    };

    // Close on dialog escape or cancel events natively
    const handleCloseEvent = () => {
      setSelectedRoom(null);
    };

    dialog.addEventListener('click', handleBackdropClick);
    dialog.addEventListener('close', handleCloseEvent);
    
    return () => {
      dialog.removeEventListener('click', handleBackdropClick);
      dialog.removeEventListener('close', handleCloseEvent);
    };
  }, [selectedRoom]);

  const selectAndBook = (roomName: string) => {
    // Notify the quick book bar state
    const event = new CustomEvent('quick-book', {
      detail: {
        roomType: roomName,
        checkIn: '',
        checkOut: '',
        guests: '2',
      }
    });
    window.dispatchEvent(event);
    closeDetails();
    
    // Smooth scroll to the contact form
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="rooms" className="py-24 bg-cream relative">
      <div className="absolute inset-0 bg-gold-glow pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold font-lato text-xs sm:text-sm tracking-[0.3em] uppercase font-semibold flex items-center justify-center gap-2">
            <Sparkles className="w-3.5 h-3.5" /> ACCOMMODATIONS <Sparkles className="w-3.5 h-3.5" />
          </span>
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-charcoal mt-4 mb-4">
            Royal Suites & Chambers
          </h2>
          <div className="arch-divider mx-auto max-w-[200px] mb-6" />
          <p className="font-lato text-base sm:text-lg text-charcoal/70 max-w-2xl mx-auto">
            Each space is individually configured and decorated with Rajput relics, offering a true historic residency.
          </p>
        </div>

        {/* Rooms Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <motion.div
              key={room.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.15, duration: 0.6 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-beige hover:border-gold relative flex flex-col justify-between"
            >
              <div>
                <div className="relative overflow-hidden h-60">
                  <img
                    src={room.image}
                    alt={`${room.name} - Heritage Luxury Stay at Raj Rajeshwari Haveli Jaipur`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-maroon text-gold border border-gold/40 px-3.5 py-1.5 rounded-full text-xs font-lato font-bold tracking-wide shadow-md">
                    {room.price}/night
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <button
                      onClick={() => openDetails(room)}
                      className="bg-gold text-charcoal text-xs font-lato font-bold px-4 py-2 rounded flex items-center gap-1.5 hover:bg-gold-light transition-all"
                    >
                      <Info className="w-4 h-4" /> Room Details
                    </button>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-playfair text-2xl font-bold text-charcoal mb-2 group-hover:text-maroon transition-colors">
                    {room.name}
                  </h3>
                  <p className="font-lato text-sm text-charcoal/70 mb-4 leading-relaxed">
                    {room.shortDesc}
                  </p>

                  <div className="flex items-center gap-4 text-charcoal/60 mb-5 border-t border-beige pt-4">
                    <div className="flex items-center gap-1">
                      <Maximize2 className="w-4 h-4 text-gold" />
                      <span className="font-lato text-xs">{room.size}</span>
                    </div>
                    <span className="text-charcoal/20">|</span>
                    <span className="font-lato text-xs">{room.view}</span>
                  </div>

                  <div className="space-y-2.5">
                    <div className="flex items-center gap-2 text-charcoal/70">
                      <BedDouble className="w-4 h-4 text-gold" />
                      <span className="font-lato text-xs font-medium">{room.beds}</span>
                    </div>
                    <div className="flex items-center gap-2 text-charcoal/70">
                      <Users className="w-4 h-4 text-gold" />
                      <span className="font-lato text-xs font-medium">Sleeps {room.sleeps} Guests</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 flex gap-3">
                <button
                  onClick={() => openDetails(room)}
                  className="flex-1 border border-maroon text-maroon hover:bg-maroon hover:text-white text-center py-2.5 rounded-lg font-lato font-semibold text-xs tracking-wider uppercase transition-colors"
                >
                  Explore Tour
                </button>
                <button
                  onClick={() => selectAndBook(room.name)}
                  className="flex-1 bg-gold hover:bg-gold-light text-charcoal text-center py-2.5 rounded-lg font-lato font-bold text-xs tracking-wider uppercase transition-all shadow-sm hover:shadow-md"
                >
                  Reserve Suite
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Heritage Light-Dismiss Dialog Modal */}
      <dialog
        ref={dialogRef}
        closedby="any"
        aria-labelledby="modalRoomName"
        className="w-[92%] max-w-4xl rounded-2xl border-royal p-0 bg-cream shadow-2xl focus:outline-none overflow-hidden"
      >
        {selectedRoom && (
          <div className="flex flex-col lg:flex-row h-full max-h-[85vh] lg:max-h-[90vh]">
            
            {/* Gallery Side */}
            <div className="lg:w-1/2 relative bg-charcoal h-64 lg:h-auto">
              <img
                src={selectedRoom.images[modalImageIdx]}
                alt={`${selectedRoom.name} interior detail - Raj Rajeshwari Haveli heritage hotel Jaipur room image ${modalImageIdx + 1}`}
                className="w-full h-full object-cover transition-all duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

              {/* Slider Arrows */}
              <button
                onClick={() => setModalImageIdx((prev) => (prev === 0 ? selectedRoom.images.length - 1 : prev - 1))}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white w-8 h-8 rounded-full flex items-center justify-center transition-colors backdrop-blur-sm"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => setModalImageIdx((prev) => (prev === selectedRoom.images.length - 1 ? 0 : prev + 1))}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white w-8 h-8 rounded-full flex items-center justify-center transition-colors backdrop-blur-sm"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Image Counter indicator */}
              <div className="absolute bottom-4 left-4 text-xs font-lato text-white/80 bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm">
                Image {modalImageIdx + 1} of {selectedRoom.images.length}
              </div>
            </div>

            {/* Description & Specs Side */}
            <div className="lg:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
              
              {/* Close Button */}
              <button
                onClick={closeDetails}
                className="absolute top-4 right-4 text-charcoal/50 hover:text-charcoal bg-beige/30 hover:bg-beige/60 p-2 rounded-full transition-colors z-10"
                aria-label="Close details dialog"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-5">
                <div>
                  <span className="text-gold font-lato text-[11px] tracking-[0.2em] uppercase font-semibold">
                    EXCLUSIVE ACCOMMODATION
                  </span>
                  <h3 id="modalRoomName" className="font-playfair text-3xl font-bold text-charcoal mt-1">
                    {selectedRoom.name}
                  </h3>
                  <div className="font-lato text-sm text-maroon font-bold mt-1">
                    Rates From {selectedRoom.price} / Night
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 bg-beige/25 p-3 rounded-lg border border-beige/40">
                  <div className="text-xs font-lato text-charcoal/70">
                    <span className="font-bold text-charcoal">Area:</span> {selectedRoom.size}
                  </div>
                  <div className="text-xs font-lato text-charcoal/70">
                    <span className="font-bold text-charcoal">View:</span> {selectedRoom.view}
                  </div>
                  <div className="text-xs font-lato text-charcoal/70">
                    <span className="font-bold text-charcoal">Bedding:</span> {selectedRoom.beds}
                  </div>
                  <div className="text-xs font-lato text-charcoal/70">
                    <span className="font-bold text-charcoal">Capacity:</span> Up to {selectedRoom.sleeps} guests
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-playfair text-lg font-bold text-charcoal border-b border-beige pb-1">
                    Room Overview
                  </h4>
                  <p className="font-lato text-xs sm:text-sm text-charcoal/80 leading-relaxed">
                    {selectedRoom.longDesc}
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-playfair text-lg font-bold text-charcoal border-b border-beige pb-1">
                    Amenities & Comforts
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {selectedRoom.features.map((feature) => {
                      const Icon = featureIcons[feature] || Wifi;
                      return (
                        <div
                          key={feature}
                          className="flex items-center gap-2 text-xs font-lato text-charcoal/80"
                        >
                          <Icon className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-beige flex gap-3">
                <button
                  onClick={closeDetails}
                  className="flex-1 border border-charcoal/30 text-charcoal/70 hover:bg-beige/40 py-3 rounded-lg font-lato font-semibold text-xs tracking-wider uppercase transition-colors"
                >
                  Close Brochure
                </button>
                <button
                  onClick={() => selectAndBook(selectedRoom.name)}
                  className="flex-1 bg-gold text-charcoal hover:bg-gold-light py-3 rounded-lg font-lato font-bold text-xs tracking-wider uppercase transition-all shadow-md"
                >
                  Book This Suite
                </button>
              </div>

            </div>
          </div>
        )}
      </dialog>

    </section>
  );
}
