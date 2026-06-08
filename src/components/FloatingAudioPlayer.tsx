import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { VolumeX, Music } from 'lucide-react';

export function FloatingAudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Initialize standard Audio API loading the m4a file from the public folder
    const audio = new Audio('/sumer-nagar.m4a');
    audio.loop = true;
    audio.volume = 0.35; // Gentle ambient volume
    audioRef.current = audio;

    const playAttempt = () => {
      if (!audioRef.current) return;
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
          setHasInteracted(true);
          cleanupListeners();
        })
        .catch(() => {
          // Autoplay blocked by browser policy
        });
    };

    const handleInteraction = () => {
      if (!hasInteracted) {
        playAttempt();
      }
    };

    const cleanupListeners = () => {
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('scroll', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
    };

    // Setup event listeners for first-interaction play
    window.addEventListener('click', handleInteraction);
    window.addEventListener('scroll', handleInteraction);
    window.addEventListener('touchstart', handleInteraction);

    return () => {
      cleanupListeners();
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, [hasInteracted]);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
          setHasInteracted(true);
        })
        .catch((err) => {
          console.error('Audio playback failed:', err);
        });
    }
  };

  return (
    <div className="fixed bottom-24 right-6 z-50">
      <motion.button
        onClick={togglePlay}
        className="w-12 h-12 rounded-full bg-cream/95 backdrop-blur-md border border-gold/40 text-maroon flex items-center justify-center shadow-xl hover:bg-white transition-colors duration-300 relative group"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        aria-label="Toggle ambient heritage music"
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
              {/* Beautiful custom animated sound bars */}
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

        {/* Premium Tooltip */}
        <div className="absolute right-14 bg-charcoal text-white text-[11px] font-lato px-3 py-1.5 rounded-lg shadow-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap border border-gold/15 flex items-center gap-1.5">
          <Music className="w-3 h-3 text-gold" />
          <span>{isPlaying ? 'Mute Background Music' : 'Play Sumer Nagar'}</span>
        </div>
      </motion.button>
    </div>
  );
}
