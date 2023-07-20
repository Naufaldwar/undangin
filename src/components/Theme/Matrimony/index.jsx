import { Button, Divider, Flex, Text } from "@mantine/core";
import {
  IconCalendar,
  IconClock,
  IconHearts,
  IconMapPin,
} from "@tabler/icons-react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export const Matrimony = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
        transition={{ duration: 1 }}
      >
        <Flex className="bg-cyan-900/70 text-sm backdrop-opacity-100 Flex flex-col text-center justify-center items-center p-4 md:p-20">
          <Flex direction={"column"} justify={"center"} gap={"md"}>
            <Flex direction={"column"} justify={"center"} align={"center"}>
              <IconHearts size={60} color="white" />
              <Text className="font-merienda text-3xl text-white">
                Holy Matrimony
              </Text>
            </Flex>
            <Divider
              variant="dashed"
              my={"lg"}
              color="white"
              orientation="horizontal"
              size={"lg"}
            />
            <Flex align={"center"} className="text-left" gap={"md"}>
              <Flex>
                <IconCalendar color="white" />
              </Flex>
              <Text className="text-white font-merienda">
                Sunday, 31 December 2023
              </Text>
            </Flex>
            <Flex align={"center"} className="text-left" gap={"md"}>
              <Flex>
                <IconClock color="white" />
              </Flex>
              <Text className="text-white font-merienda">
                10.00 - 12.00 WIB
              </Text>
            </Flex>
            <Flex align={"center"} className="text-left" gap={"md"}>
              <Flex>
                <IconMapPin color="white" />
              </Flex>
              <Text className="text-white font-merienda">
                <b>Shangri-La Hotel Jakarta</b>
                <br />
                Jl. Jenderal Sudirman No.Kav. 1, Karet Tengsin, Kecamatan Tanah
                Abang, Kota Jakarta Pusat, DKI Jakarta 10220
              </Text>
            </Flex>
            <Button
              variant="filled"
              className="border-white"
              color="white"
              leftIcon={<IconMapPin />}
            >
              Open Map
            </Button>
            <Button
              variant="filled"
              className="border-white"
              leftIcon={<IconCalendar />}
            >
              Add to Calendar
            </Button>
          </Flex>
        </Flex>
      </motion.div>
    </>
  );
};
