import { Audio } from "@/components/Theme/Audio";
import { Hero } from "@/components/Theme/Hero";
import { Title } from "@/components/Theme/Title";

import { BackgroundImage, Flex, Text } from "@mantine/core";
import { BridgeGroom } from "../../components/Theme/BridgeGroom";
import { Wave } from "@/components/Theme/Wave";
import { Countdown } from "@/components/Theme/Countdown";
import { TimePlace } from "@/components/Theme/TimePlace";
export default function Example({ targetDate }) {
  return (
    <>
      <Hero />
      <Audio />
      <Flex className="w-full h-full" direction={"column"}>
        <Title />
        <Wave />
        <BridgeGroom />
      </Flex>
      <BackgroundImage className="bg-paper-texture bg-repeat bg-contain px-4">
        <Countdown targetDate={targetDate} suppressHydrationWarning />
        <TimePlace />
      </BackgroundImage>
    </>
  );
}

export async function getServerSideProps() {
  const targetDate = new Date("2023-08-18T00:00:00").toISOString();

  return {
    props: {
      targetDate,
    },
  };
}
