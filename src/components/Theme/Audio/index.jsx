import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef, useState } from "react";
import { IconMusic, IconMusicOff } from "@tabler/icons-react";
import { Box, Flex } from "@mantine/core";

export const Audio = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const [onPause, setOnPause] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setOnPause(true);
    } else {
      audioRef.current.play();
      setOnPause(false);
    }
    setIsPlaying(!isPlaying);
  };

  const handleUserInteraction = () => {
    if (!hasInteracted) {
      setHasInteracted(true);
      // Mulai pemutaran audio setelah interaksi pengguna
      audioRef.current.play().catch((error) => {
        console.log("autoplay error:", error);
        // Manajemen kesalahan jika autoplay gagal
      });
    }
  };

  useEffect(() => {
    if (inView && hasInteracted) {
      audioRef.current.play().catch((error) => {
        console.log("autoplay error:", error);
        // Manajemen kesalahan jika autoplay gagal
      });
    } else {
      audioRef.current.pause();
    }

    // Add an event listener for user interaction
    document.addEventListener("click", handleUserInteraction);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleUserInteraction);
    };
  }, [inView, hasInteracted]);

  return (
    <Flex className="sticky top-0 z-50">
      <AnimatePresence wait>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.5 }}
        >
          <Box
            onClick={() => handlePlayPause()}
            className="bg-white hover:bg-slate-200 hover:cursor-pointer rounded-full absolute top-96 right-5 z-20 p-4"
          >
            {onPause ? (
              <IconMusicOff className="stroke-cyan-700" />
            ) : (
              <IconMusic className="stroke-cyan-700" />
            )}
          </Box>
          <audio
            ref={audioRef}
            loop
            autoPlay={false} // Jangan autoplay secara otomatis
            src="https://apiyoutube.cc/m4a/IGhgrKEe6Pj::8fbd7eb143657d853372c2d04ba11e9b::1690272477::no::di"
          />
        </motion.div>
      </AnimatePresence>
    </Flex>
  );
};
