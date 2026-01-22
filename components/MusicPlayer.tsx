"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [volume, setVolume] = useState(0.2); 
  const [isMobile, setIsMobile] = useState(false); 
  
  const songSrc = "/White lies in winter.mp3";
  const songTitle = songSrc.replace(/^\//, "").replace(/.mp3$/, "");

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          setIsPlaying(true);
        }).catch((error) => {
          
          console.log("Autoplay prevented:", error);
          setIsPlaying(false);
        });
      }
    }
  }, []); 

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.8 }}
      className="fixed bottom-8 right-8 z-50 flex flex-row-reverse items-center"
    >
      <motion.div
        initial={false}
        animate={{ 
          width: (isPlaying && !isMobile) ? "auto" : 48,
          paddingRight: (isPlaying && !isMobile) ? 16 : 0,
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="flex items-center overflow-hidden h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg"
      >
        <button
          onClick={togglePlay}
          className="flex h-12 w-12 items-center justify-center shrink-0 text-white transition-colors hover:text-white/80"
        >
          {isPlaying ? (
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <rect x="6" y="4" width="4" height="16" />
              <rect x="14" y="4" width="4" height="16" />
            </svg>
          ) : (
            <svg className="w-5 h-5 fill-current ml-0.5" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>

        <AnimatePresence>
          {isPlaying && !isMobile && (
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "auto" }}
              exit={{ opacity: 0, width: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="flex items-center gap-3 pr-2 whitespace-nowrap overflow-hidden"
            >
              <div className="flex items-center gap-1 h-4">
                 {[1, 2, 3, 4].map((bar) => (
                    <motion.div
                      key={bar}
                      animate={{
                        height: [4, 12, 4],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 0.6,
                        ease: "easeInOut",
                        delay: bar * 0.1,
                      }}
                      className="w-0.5 bg-green-400 rounded-full"
                    />
                  ))}
              </div>
              
              <span className="text-sm font-medium text-white/90">
                {songTitle}
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <audio
        ref={audioRef}
        loop
        src={songSrc}
      />
    </motion.div>
  );
};

export default MusicPlayer;
