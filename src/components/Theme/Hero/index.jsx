import { Button, Flex, Text } from "@mantine/core";
import { IconX } from "@tabler/icons-react";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import paper from "../../../assets/images/paper.png";

export const Hero = () => {
  const [isOpen, setIsOpen] = useState(true);

  const openModal = () => {
    setIsOpen(true);
  };

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
    exit: { opacity: 0, y: -500 }, // Animasi slide down saat modal tertutup
  };

  return (
    <div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="modal "
            initial="hidden"
            animate="visible"
            exit="exit" // Gunakan animasi exit untuk slide down saat modal tertutup
            variants={heroAnimations}
            transition={{ duration: 1 }}
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
                transition={{ duration: 1 }}
              >
                <Flex
                  justify={"center"}
                  align={"center"}
                  gap={"lg"}
                  direction={"column"}
                >
                  <IconX
                    className="absolute top-10 right-10 hover:cursor-pointer bg-cyan-700 hover:bg-cyan-600 rounded-md"
                    onClick={closeModal}
                    color="white"
                  />
                  <Flex h={200} w={200} className="rounded-full">
                    <Image
                      src={paper}
                      alt="pic"
                      className="rounded-full"
                    ></Image>
                  </Flex>
                  <Text className="font-wedding-1 text-cyan-100 text-2xl">
                    The Wedding Of
                  </Text>
                  <Text className="text-cyan-100 text-5xl font-pengantin-1">
                    Adam & Hawa
                  </Text>
                  <Text className="text-slate-100 text-xl font-wedding-1">
                    Dear Mr./ Mrs./ Ms.
                  </Text>
                  <Text className="text-slate-100 text-xl font-wedding-1">
                    Nama Tamu
                  </Text>
                  <Text className="font-wedding-1 text-cyan-100 text-xl">
                    You are cordially invited to our wedding.
                  </Text>
                  <Button
                    color="blue[6]"
                    variant="filled"
                    bg={"blue[6]"}
                    className="bg-cyan-700 hover:bg-cyan-600"
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
