import { Flex, Text } from "@mantine/core";
import Image from "next/image";
import bunga from "../../../assets/images/bunga.png";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export const Countdown = ({ targetDate }) => {
  const isClient = typeof window !== "undefined"; // Memeriksa apakah kode berjalan di lingkungan klien
  const [client, setClient] = useState(false);

  const countDownDate = new Date(targetDate).getTime();
  const [countDown, setCountDown] = useState(
    isClient ? countDownDate - new Date().getTime() : 0
  ); // Pastikan inisialisasi awal hanya terjadi di lingkungan klien

  const [countRef, countInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const countAnimations = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    setClient(true);
  }, []);

  useEffect(() => {
    if (isClient) {
      const interval = setInterval(() => {
        setCountDown(countDownDate - new Date().getTime());
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [countDownDate, isClient]);

  if (!client) {
    return <p>loading...</p>;
  }

  // calculate time left
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  return (
    <motion.div
      ref={countRef}
      initial="hidden"
      animate={countInView ? "visible" : "hidden"}
      variants={countAnimations}
      transition={{ duration: 0.5 }}
    >
      <Flex
        direction={"column"}
        justify={"center"}
        align={"center"}
        gap={"lg"}
        className="font-nunito py-10 text-cyan-900"
      >
        <Image src={bunga} alt="bunga" />
        <Text className="text-center text-xl font-bold font-nunito  text-cyan-900">
          Countdown to
        </Text>
        <Text className="text-center text-4xl font-bold font-nunito text-cyan-900">
          Our Happy Day
        </Text>
        <Flex className="font-nunito my-10 flex gap-4 lg:gap-40">
          <Flex direction={"column"} justify={"center"} align={"center"}>
            <Text className="text-3xl lg:text-7xl font-semibold font-nunito text-cyan-900">
              {days}
            </Text>
            <Text className="font-nunito lg:text-xl text-cyan-900">Days</Text>
          </Flex>
          <Flex direction={"column"} justify={"center"} align={"center"}>
            <Text className="text-3xl lg:text-7xl font-semibold font-nunito text-cyan-900">
              {hours}
            </Text>
            <Text className="font-nunito lg:text-xl text-cyan-900">Hours</Text>
          </Flex>
          <Flex direction={"column"} justify={"center"} align={"center"}>
            <Text className="text-3xl lg:text-7xl font-semibold font-nunito text-cyan-900">
              {minutes}
            </Text>
            <Text className="font-nunito lg:text-xl text-cyan-900">
              Minutes
            </Text>
          </Flex>
          <Flex direction={"column"} justify={"center"} align={"center"}>
            <Text className="text-3xl lg:text-7xl font-semibold font-nunito text-cyan-900">
              {seconds}
            </Text>
            <Text className="font-nunito lg:text-xl text-cyan-900">
              Seconds
            </Text>
          </Flex>
        </Flex>
        <Flex direction={"column"}>
          <Text className="text-center font-nunito  text-cyan-900">
            The highest happiness on earth is the happiness of marriage.
          </Text>
          <Text className="text-center font-semibold font-nunito text-cyan-900">
            {`"William Lyon Phelps"`}
          </Text>
        </Flex>
      </Flex>
    </motion.div>
  );
};
