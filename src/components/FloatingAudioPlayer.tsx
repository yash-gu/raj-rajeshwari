import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { VolumeX, Music, Sparkles } from 'lucide-react';

export function FloatingAudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Initialize Audio API with sumer-nagar.m4a
    const audio = new Audio('/sumer-nagar.m4a');
    audio.loop = true;
    audio.volume = 0.45; // Pleasant ambient volume
    audioRef.current = audio;

    // Check if the user has already visited in this session to avoid showing welcome screen repeatedly
    const hasVisited = sessionStorage.getItem('haveli-visited');
    if (hasVisited === 'true') {
      setShowWelcome(false);
      
      // Auto-unlock sound on interaction if welcome screen was bypassed
      const unlockAudio = () => {
        if (audioRef.current) {
          audioRef.current.play()
            .then(() => {
              setIsPlaying(true);
              cleanupListeners();
            })
            .catch(() => {
              // Blocked, wait for next gesture
            });
        }
      };
      
      const cleanupListeners = () => {
        document.removeEventListener('click', unlockAudio);
        document.removeEventListener('touchend', unlockAudio);
        document.removeEventListener('scroll', unlockAudio);
      };

      document.addEventListener('click', unlockAudio, { capture: true });
      document.addEventListener('touchend', unlockAudio, { capture: true });
      document.addEventListener('scroll', unlockAudio, { passive: true });
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const handleEnter = () => {
    if (audioRef.current) {
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
          setShowWelcome(false);
          sessionStorage.setItem('haveli-visited', 'true');
        })
        .catch((err) => {
          console.error('Playback failed on enter:', err);
          // Fallback if browser blocks even after click
          setShowWelcome(false);
          sessionStorage.setItem('haveli-visited', 'true');
        });
    }
  };

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.error('Audio playback failed:', err);
        });
    }
  };

  return (
    <>
      <AnimatePresence>
        {showWelcome && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-cream p-4"
          >
            {/* Background Mandalas */}
            <div className="absolute top-0 left-0 w-96 h-96 mandala-pattern opacity-25 pointer-events-none -translate-x-12 -translate-y-12" />
            <div className="absolute bottom-0 right-0 w-96 h-96 mandala-pattern opacity-25 pointer-events-none translate-x-12 translate-y-12" />

            <motion.div
              initial={{ scale: 0.93, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="w-full max-w-lg bg-white border-royal p-8 sm:p-12 rounded-3xl shadow-2xl text-center relative z-10"
            >
              <span className="text-gold font-lato text-xs sm:text-sm tracking-[0.3em] uppercase font-semibold flex items-center justify-center gap-2 mb-4">
                <Sparkles className="w-4 h-4 text-gold animate-pulse" /> PADHARO MAHARE DESH <Sparkles className="w-4 h-4 text-gold animate-pulse" />
              </span>
              
              <h1 className="font-playfair text-4xl sm:text-5xl font-bold text-maroon mb-1">
                Raj Rajeshwari
              </h1>
              <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-maroon mb-4">
                Haveli
              </h2>
              <p className="text-gold font-lato text-sm tracking-[0.25em] font-semibold mb-6">
                JAIPUR
              </p>

              <div className="h-px w-24 bg-gold/30 mx-auto mb-6" />

              <p className="font-lato text-sm sm:text-base text-charcoal/70 mb-8 leading-relaxed">
                Step into a living legacy of Rajput heritage and royal luxury. Welcome to our private sanctuary, accompanied by traditional folk melodies.
              </p>

              <button
                onClick={handleEnter}
                className="bg-gold text-charcoal px-8 py-3.5 rounded-lg font-lato font-bold text-sm tracking-wider uppercase hover:bg-gold-light hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 shadow-md flex items-center justify-center gap-2 mx-auto"
              >
                Enter Haveli
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Control Button (Visible when welcome screen is gone) */}
      <AnimatePresence>
        {!showWelcome && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className="fixed bottom-24 right-6 z-50"
          >
            <motion.button
              onClick={togglePlay}
              className="w-12 h-12 rounded-full bg-cream/95 backdrop-blur-md border border-gold/40 text-maroon flex items-center justify-center shadow-xl hover:bg-white transition-colors duration-300 relative group"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              aria-label="Toggle ambient music"
            >
              <AnimatePresence mode="wait">
                {isPlaying ? (
                  <motion.div
                    key="playing"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    className="flex items-end justify-center gap-[3px] h-4 w-4 mb-[2px]"
                  >
                    <span className="w-[2.5px] bg-maroon rounded-full h-4 animate-[pulse_0.7s_infinite_alternate]" />
                    <span className="w-[2.5px] bg-maroon rounded-full h-2.5 animate-[pulse_0.6s_infinite_alternate_150ms]" />
                    <span className="w-[2.5px] bg-maroon rounded-full h-4.5 animate-[pulse_0.8s_infinite_alternate_300ms]" />
                    <span className="w-[2.5px] bg-maroon rounded-full h-2.5 animate-[pulse_0.5s_infinite_alternate_100ms]" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="paused"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    className="flex items-center justify-center"
                  >
                    <VolumeX className="w-5 h-5 text-charcoal/50" />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Tooltip */}
              <div className="absolute right-14 bg-charcoal text-white text-[11px] font-lato px-3 py-1.5 rounded-lg shadow-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap border border-gold/15 flex items-center gap-1.5">
                <Music className="w-3 h-3 text-gold" />
                <span>{isPlaying ? 'Mute Background Music' : 'Play Sumer Nagar'}</span>
              </div>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
