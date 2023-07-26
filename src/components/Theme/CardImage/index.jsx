import couple from "../../../assets/images/couple.jpg";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Image from "next/image";
export const CardImage = () => {
  const [oneRef, oneInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const oneAnimations = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <motion.div
      ref={oneRef}
      initial="hidden"
      animate={oneInView ? "visible" : "hidden"}
      variants={oneAnimations}
      transition={{ duration: 1 }}
    >
      <Image src={couple} alt="couple" />
    </motion.div>
  );
};
