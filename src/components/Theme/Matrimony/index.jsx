import { Button, Divider, Flex, Text } from "@mantine/core";
import {
  IconCalendar,
  IconClock,
  IconHearts,
  IconMapPin,
} from "@tabler/icons-react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Link from "next/link";

export const Matrimony = ({ date, time, place, address, map, calendar }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  return (
    <>
      <Flex className="bg-cyan-900/70 backdrop-opacity-100">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="w-full  Flex  text-sm flex-col text-center justify-start items-center p-4 md:p-16 h-full"
        >
          <Flex direction={"column"} justify={"center"} gap={"md"}>
            <Flex direction={"column"} justify={"center"} align={"center"}>
              <IconHearts size={60} color="white" />
              <Text className="font-nunito text-3xl text-white">
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
              <Text className="text-white font-nunito">{date}</Text>
            </Flex>
            <Flex align={"center"} className="text-left" gap={"md"}>
              <Flex>
                <IconClock color="white" />
              </Flex>
              <Text className="text-white font-nunito">{time} WIB</Text>
            </Flex>
            <Flex align={"center"} className="text-left" gap={"md"}>
              <Flex>
                <IconMapPin color="white" />
              </Flex>
              <Text className="text-white font-nunito">
                <b>{place}</b>
                <br />
                {address}
              </Text>
            </Flex>
            <Link href={map} target="_blank">
              <Button
                variant="filled"
                className="border-white"
                color="white"
                leftIcon={<IconMapPin />}
              >
                Open Map
              </Button>
            </Link>
            <Link href={calendar} target="_blank">
              <Button
                variant="filled"
                className="border-white"
                leftIcon={<IconCalendar />}
              >
                Add to Calendar
              </Button>
            </Link>
          </Flex>
        </motion.div>
      </Flex>
    </>
  );
};
