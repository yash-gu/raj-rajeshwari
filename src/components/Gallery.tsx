import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Expand } from 'lucide-react';

const galleryImages = [
  { url: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600&q=80', alt: 'Haveli exterior' },
  { url: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600&q=80', alt: 'Pool area' },
  { url: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80', alt: 'Luxury suite' },
  { url: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=600&q=80', alt: 'Resort view' },
  { url: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80', alt: 'Beachfront' },
  { url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&q=80', alt: 'Hotel lobby' },
  { url: 'https://images.unsplash.com/photo-1618245318763-453825cd2309?w=600&q=80', alt: 'Spa area' },
  { url: 'https://images.unsplash.com/photo-1601918774946-25832a4be0d6?w=600&q=80', alt: 'Restaurant' },
  { url: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&q=80', alt: 'Garden' },
  { url: 'https://images.unsplash.com/photo-1595576508898-0ad5c879a061?w=600&q=80', alt: 'Night view' },
  { url: 'https://images.unsplash.com/photo-1547394765-185e1e68f34e?w=600&q=80', alt: 'Architecture' },
  { url: 'https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?w=600&q=80', alt: 'Interior design' },
];

export function Gallery() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const handlePrev = () => {
    setSelectedImage((prev) =>
      prev !== null ? (prev === 0 ? galleryImages.length - 1 : prev - 1) : null
    );
  };

  const handleNext = () => {
    setSelectedImage((prev) =>
      prev !== null ? (prev === galleryImages.length - 1 ? 0 : prev + 1) : null
    );
  };

  return (
    <section id="gallery" className="py-20 bg-beige">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-gold font-lato text-sm tracking-[0.2em] uppercase font-semibold"
          >
            PHOTO GALLERY
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-playfair text-4xl lg:text-5xl font-bold text-charcoal mt-4 mb-6"
          >
            A Glimpse Into The Haveli
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="font-lato text-lg text-charcoal/70 max-w-2xl mx-auto"
          >
            Explore the architectural beauty and royal ambiance of our heritage property
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + index * 0.05 }}
              className="break-inside-avoid group relative cursor-pointer overflow-hidden rounded-lg"
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <p className="font-lato text-sm text-white">{image.alt}</p>
                  <Expand className="w-5 h-5 text-gold" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors z-10"
              aria-label="Close gallery"
            >
              <X className="w-8 h-8" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-4 md:left-8 text-white/80 hover:text-white transition-colors z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-4 md:right-8 text-white/80 hover:text-white transition-colors z-10"
              aria-label="Next image"
            >
              <ChevronRight className="w-10 h-10" />
            </button>

            <motion.img
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              src={galleryImages[selectedImage].url}
              alt={galleryImages[selectedImage].alt}
              className="max-w-full max-h-[90vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 font-lato text-sm">
              {selectedImage + 1} / {galleryImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
