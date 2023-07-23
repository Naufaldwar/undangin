import { Button, Divider, Flex, Text } from "@mantine/core";
import {
  IconCalendar,
  IconClock,
  IconCoffee,
  IconHearts,
  IconMapPin,
} from "@tabler/icons-react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Link from "next/link";

export const Reception = ({ date, address, place, time, map, calendar }) => {
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
              <IconCoffee size={60} color="white" />
              <Text className="font-nunito text-3xl text-white">
                Wedding Reception
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
        </Flex>
      </motion.div>
    </>
  );
};
