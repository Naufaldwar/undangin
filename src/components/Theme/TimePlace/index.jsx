import { Button, Container, Divider, Flex, Text } from "@mantine/core";
import { IconVideo, IconWifi } from "@tabler/icons-react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Matrimony } from "../Matrimony";
import { Live } from "../Live";
import { Reception } from "../Reception";
import "add-to-calendar-button";

export const TimePlace = ({ date, time, place, address, map, calendar }) => {
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
      className=" Flex Flex-col justify-center items-center"
    >
      <Flex direction={"column"} className="">
        <motion.div
          className="h-[500px] rounded-t-full md:rounded-t-[300px] bg-example-couple bg-cover bg-center flex"
          ref={timeRef}
          initial="hidden"
          animate={timeInView ? "visible" : "hidden"}
          variants={timeAnimations}
          transition={{ duration: 2 }}
        >
          <Flex
            direction={"column"}
            justify={"end"}
            style={{ backgroundColor: "rgba(125,125,125,0.4)" }}
            className="text-center px-4 w-full rounded-t-full md:rounded-t-[300px] pb-4"
            gap={"md"}
          >
            <motion.div
              className="flex flex-col justify-end gap-4"
              ref={timeRef}
              initial="hidden"
              animate={timeInView ? "visible" : "hidden"}
              variants={timeAnimations}
              transition={{ duration: 2 }}
            >
              <Text className="text-xl font-nunito text-white">
                Where & When
              </Text>
              <Text className="text-3xl font-nunito font-bold text-white">
                Wedding Day
              </Text>
              <Flex direction={"column"}>
                <Text className="font-nunito text-white">
                  Gravitation is not responsible for people falling in love.
                </Text>
                <Text className="font-nunito font-semibold text-white">
                  {`"Albert Einstein"`}
                </Text>
              </Flex>
            </motion.div>
          </Flex>
        </motion.div>
        <Flex className="w-full justify-between flex flex-col lg:flex-row ">
          <Matrimony
            address={address[0]}
            date={date[0]}
            place={place[0]}
            time={time[0]}
            map={map[0]}
            calendar={calendar[0]}
          />
          <Reception
            address={address[1]}
            date={date[1]}
            place={place[1]}
            time={time[1]}
            map={map[1]}
            calendar={calendar[1]}
          />
        </Flex>
        <Flex>
          <add-to-calendar-button
            name="Title"
            options="'Apple','Google'"
            location="reception"
            startDate="2023-10-13"
            endDate="2023-10-13"
            startTime="10:15"
            endTime="23:30"
            timeZone="America/Los_Angeles"
          ></add-to-calendar-button>
        </Flex>
        <Live />
      </Flex>
    </Container>
  );
};
