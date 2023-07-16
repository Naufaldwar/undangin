import { motion, AnimatePresence } from "framer-motion";
import ReactAudioPlayer from "react-audio-player";
import { useInView } from "react-intersection-observer";
import sanes from "@/assets/sanes.mp3";
import { useState } from "react";
import { IconMusic, IconMusicOff } from "@tabler/icons-react";
import { Box, Flex } from "@mantine/core";

export const Audio = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const [onPause, setOnPause] = useState(false);
  const handlePause = () => {
    setOnPause(!onPause);
  };
  return (
    <Flex className="sticky top-0">
      <AnimatePresence wait>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.5 }}
        >
          <Box
            onClick={() => handlePause()}
            className="bg-white hover:bg-slate-200 hover:cursor-pointer rounded-full absolute top-96 right-5 z-20 p-4"
          >
            {onPause ? (
              <IconMusicOff className="stroke-cyan-700" />
            ) : (
              <IconMusic className="stroke-cyan-700" />
            )}
          </Box>
          <ReactAudioPlayer autoPlay src={sanes} loop muted={onPause} />
        </motion.div>
      </AnimatePresence>
    </Flex>
  );
};
