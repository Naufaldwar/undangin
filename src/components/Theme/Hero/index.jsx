import { Button, Flex, Text } from "@mantine/core";
import { IconX } from "@tabler/icons-react";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import paper from "../../../assets/images/paper.png";

export const Hero = ({ bridenickname, groomnickname, guest }) => {
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false);
  };

  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const heroAnimations = {
    hidden: { opacity: 0, y: -500 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -500 },
  };

  return (
    <div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={heroRef}
            className="modal "
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={heroAnimations}
            transition={{ duration: 2, delay: 0.5 }}
          >
            <Flex className="modal-overlay">
              <motion.div
                style={{
                  backgroundColor: "rgba(100,100,100,0.6)",
                  width: "100%",
                }}
                className="modal "
                initial="hidden"
                animate="visible"
                exit="exit" // Gunakan animasi exit untuk slide down saat modal tertutup
                variants={heroAnimations}
                transition={{ duration: 1.5 }}
              >
                <Flex
                  justify={"center"}
                  align={"center"}
                  gap={"lg"}
                  direction={"column"}
                  className="h-screen w-screen"
                >
                  <IconX
                    className="absolute top-10 right-10 hover:cursor-pointer bg-cyan-700 hover:bg-cyan-600 rounded-md"
                    onClick={closeModal}
                    color="white"
                  />
                  <Flex className="rounded-full h-40 w-40">
                    <Image src={paper} alt="pic" className="rounded-full" />
                  </Flex>
                  <Text className="font-nunito text-cyan-100 text-lg">
                    The Wedding Of
                  </Text>
                  <Text className="text-cyan-100 text-3xl font-nunito">
                    {groomnickname} & {bridenickname}
                  </Text>
                  <Text className="text-slate-100 font-nunito">
                    Dear Mr./ Mrs./ Ms.
                  </Text>
                  <Text className="text-slate-100 text-lg font-nunito">
                    {guest}
                  </Text>
                  <Text className="font-nunito text-center text-cyan-100">
                    You are cordially invited to our wedding.
                  </Text>
                  <Button
                    color="blue[6]"
                    variant="filled"
                    size="sm"
                    bg={"blue[6]"}
                    className="bg-cyan-900 hover:bg-cyan-800"
                    onClick={closeModal}
                  >
                    Buka Undangan
                  </Button>
                </Flex>
              </motion.div>
            </Flex>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
