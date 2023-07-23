import { motion, AnimatePresence } from "framer-motion";
import ReactAudioPlayer from "react-audio-player";
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

  useEffect(() => {
    if (inView) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [inView]);

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
            autoPlay
            src="https://apiyoutube.cc/m4a/IGhgrKEe6Pj::fbc9ea9732a6b55f48be54eba8f4fb71::1690096592::no::di"
          />
          {/* <audio src={sanes} autoPlay={true} controls /> */}
        </motion.div>
      </AnimatePresence>
    </Flex>
  );
};
