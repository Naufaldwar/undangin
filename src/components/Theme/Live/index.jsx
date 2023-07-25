import { Button, Divider, Flex, Text } from "@mantine/core";
import { IconVideo, IconWifi } from "@tabler/icons-react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export const Live = () => {
  const [liveRef, liveInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const liveAnimations = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Flex className="h-[500px] bg-cyan-900/70 backdrop-opacity-100 rounded-b-full md:rounded-b-[300px]">
      <motion.div
        className="Flex flex-col text-center justify-start items-center p-4 "
        ref={liveRef}
        initial="hidden"
        animate={liveInView ? "visible" : "hidden"}
        variants={liveAnimations}
        transition={{ duration: 0.5 }}
      >
        <Flex direction={"column"} justify={"center"} gap={"md"}>
          <Flex direction={"column"} justify={"center"} align={"center"}>
            <IconWifi size={60} color="white" />
            <Text className="font-nunito text-3xl text-white">
              Live Streaming
            </Text>
          </Flex>
          <Divider
            variant="dashed"
            my={"lg"}
            color="white"
            orientation="horizontal"
            size={"lg"}
          />
          <Text className="text-white font-nunito">
            We will broadcast the wedding ceremony virtually
          </Text>
          <Button
            variant="filled"
            className="border-white"
            leftIcon={<IconVideo />}
          >
            Join
          </Button>
        </Flex>
      </motion.div>
    </Flex>
  );
};
