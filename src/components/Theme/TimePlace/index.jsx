import { Button, Container, Divider, Flex, Text } from "@mantine/core";
import { IconVideo, IconWifi } from "@tabler/icons-react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Matrimony } from "../Matrimony";
import { Live } from "../Live";

export const TimePlace = () => {
  const [timeRef, timeInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const timeAnimations = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <Container
      size={"xl"}
      className="Flex Flex-col justify-center items-center"
    >
      <motion.div
        ref={timeRef}
        initial="hidden"
        animate={timeInView ? "visible" : "hidden"}
        variants={timeAnimations}
        transition={{ duration: 0.5 }}
      >
        <Flex direction={"column"} className="">
          <Flex className="h-[500px] rounded-t-full bg-example-couple bg-cover bg-center">
            <Flex
              direction={"column"}
              justify={"end"}
              style={{ backgroundColor: "rgba(125,125,125,0.4)" }}
              className="text-center px-4 w-full h-[500px] rounded-t-full pb-4"
              gap={"md"}
            >
              <Text className="text-xl font-lobster text-white">
                Where & When
              </Text>
              <Text className="text-3xl font-lobster font-bold text-white">
                Wedding Day
              </Text>
              <Flex direction={"column"}>
                <Text className="font-lugrasimo text-white">
                  Gravitation is not responsible for people falling in love.
                </Text>
                <Text className="font-lugrasimo font-semibold text-white">
                  {`"Albert Einstein"`}
                </Text>
              </Flex>
            </Flex>
          </Flex>
          <Flex className="flex flex-col">
            <Matrimony />
            <Matrimony />
          </Flex>
          <Live />
        </Flex>
      </motion.div>
    </Container>
  );
};
