import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Expand, Sparkles } from 'lucide-react';
import gallery1 from '../assets/images/gallery-1.jpg';
import gallery2 from '../assets/images/gallery-2.jpg';
import gallery3 from '../assets/images/gallery-3.jpg';
import gallery4 from '../assets/images/gallery-4.jpg';
import gallery5 from '../assets/images/hero-1.jpeg';
import gallery6 from '../assets/images/hero-2.jpg';
import gallery7 from '../assets/images/hero-3.jpeg';
import gallery8 from '../assets/images/hero-4.jpeg';
import gallery9 from '../assets/images/hero-5.jpeg';
import gallery10 from '../assets/images/hero-6.jpeg';


const categories = [
  { id: 'all', label: 'All Photos' },
  { id: 'suites', label: 'Heritage Suites' },
  { id: 'dining', label: 'Royal Dining' },
  { id: 'courtyard', label: 'Courtyard & Exterior' },
  { id: 'architecture', label: 'Architectural Details' },
];

const galleryImages = [
  { url: gallery1, alt: 'Entry courtyard of the Haveli', category: 'courtyard' },
  { url: gallery2, alt: 'Heritage suite premium double chamber', category: 'suites' },
  { url: gallery3, alt: 'Royal interior lounge details', category: 'architecture' },
  { url: gallery4, alt: 'Courtyard dining banquet hall', category: 'dining' },
  { url: gallery5, alt: 'Intricate bedroom drapery and bolster details', category: 'suites' },
  { url: gallery6, alt: 'Royal lounge seating lounge area', category: 'suites' },
  { url: gallery7, alt: 'Stained glass dome architectural detail', category: 'architecture' },
  { url: gallery8, alt: 'Royal lounge seating and heritage corridors', category: 'suites' },
  { url: gallery9, alt: 'Stained glass window architectural patterns', category: 'architecture' },
  { url: gallery10, alt: 'Haveli balcony overlooking the courtyard arches', category: 'courtyard' },
];

export function Gallery() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages = activeCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

  const handlePrev = () => {
    setSelectedImage((prev) =>
      prev !== null ? (prev === 0 ? filteredImages.length - 1 : prev - 1) : null
    );
  };

  const handleNext = () => {
    setSelectedImage((prev) =>
      prev !== null ? (prev === filteredImages.length - 1 ? 0 : prev + 1) : null
    );
  };

  return (
    <section id="gallery" className="py-24 bg-beige relative">
      <div className="absolute inset-0 bg-gold-glow pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold font-lato text-xs sm:text-sm tracking-[0.3em] uppercase font-semibold flex items-center justify-center gap-2">
            <Sparkles className="w-3.5 h-3.5" /> PHOTO GALLERY <Sparkles className="w-3.5 h-3.5" />
          </span>
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-charcoal mt-4 mb-4">
            A Glimpse Into Royalty
          </h2>
          <div className="arch-divider mx-auto max-w-[200px] mb-6" />
          <p className="font-lato text-base sm:text-lg text-charcoal/70 max-w-2xl mx-auto">
            Experience the architectural beauty, hand-crafted suites, and sensory banquet setups of the property.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 max-w-3xl mx-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setSelectedImage(null);
              }}
              className={`px-5 py-2 rounded-full font-lato text-xs sm:text-sm font-semibold tracking-wide border transition-all duration-300 ${activeCategory === cat.id
                ? 'bg-maroon border-maroon text-gold shadow-md'
                : 'bg-white border-beige text-charcoal hover:bg-beige/40'
                }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Masonry-like filtered grid */}
        <motion.div
          layout
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, index) => {
              // Find the index of this image in the full list for key continuity
              const globalIndex = galleryImages.findIndex((img) => img.url === image.url);

              return (
                <motion.div
                  layout
                  key={globalIndex}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="break-inside-avoid group relative cursor-pointer overflow-hidden rounded-xl border border-beige/40 bg-white p-1 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                  onClick={() => setSelectedImage(index)}
                >
                  <div className="relative rounded-lg overflow-hidden h-auto">
                    <img
                      src={image.url}
                      alt={image.alt}
                      className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                        <p className="font-lato text-xs text-white/95 pr-4 leading-normal">{image.alt}</p>
                        <div className="bg-gold p-1.5 rounded-full shrink-0">
                          <Expand className="w-4 h-4 text-charcoal" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex flex-col items-center justify-center p-4 backdrop-blur-md"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-colors z-10 backdrop-blur-sm"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Previous Arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-4 md:left-8 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors z-10 backdrop-blur-sm"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            {/* Next Arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-4 md:right-8 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors z-10 backdrop-blur-sm"
              aria-label="Next image"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Large Image Frame */}
            <div className="relative max-w-full max-h-[75vh] flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
              <AnimatePresence mode="wait">
                <motion.img
                  key={selectedImage}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  src={filteredImages[selectedImage].url}
                  alt={filteredImages[selectedImage].alt}
                  className="max-w-full max-h-[75vh] object-contain rounded-lg border border-white/10"
                />
              </AnimatePresence>
            </div>

            {/* Lightbox Caption */}
            <div className="mt-6 text-center max-w-xl px-4" onClick={(e) => e.stopPropagation()}>
              <p className="font-playfair text-lg sm:text-xl text-gold font-semibold">
                {filteredImages[selectedImage].alt}
              </p>
              <p className="font-lato text-xs sm:text-sm text-white/60 mt-1">
                {selectedImage + 1} of {filteredImages.length} ({categories.find((c) => c.id === activeCategory)?.label})
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
