import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { VolumeX, Music } from 'lucide-react';

export function FloatingAudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(true); // Default to true so visualizer animates
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio('/sumer-nagar.m4a');
    audio.loop = true;
    audio.volume = 0.5; // Good ambient volume level
    audio.muted = true; // Start muted to bypass browser autoplay blocks
    audioRef.current = audio;

    const startMutedPlay = () => {
      if (!audioRef.current) return;
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.log('Muted autoplay blocked:', err);
        });
    };

    const handleInteraction = () => {
      if (audioRef.current) {
        audioRef.current.muted = false; // Unmute on first interaction!
        audioRef.current.play()
          .then(() => {
            setIsPlaying(true);
            cleanupListeners();
          })
          .catch((err) => {
            console.log('Interaction unlock failed:', err);
          });
      }
    };

    const cleanupListeners = () => {
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('touchend', handleInteraction);
      document.removeEventListener('scroll', handleInteraction);
      document.removeEventListener('keydown', handleInteraction);
    };

    // Listen for any gesture to trigger unmuting
    document.addEventListener('click', handleInteraction, { capture: true });
    document.addEventListener('touchend', handleInteraction, { capture: true });
    document.addEventListener('scroll', handleInteraction, { passive: true });
    document.addEventListener('keydown', handleInteraction);

    // Play muted immediately on mount
    startMutedPlay();

    return () => {
      cleanupListeners();
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.muted = false; // Ensure it is unmuted when user clicks play
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
