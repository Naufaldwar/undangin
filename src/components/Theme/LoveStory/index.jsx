import { Carousel } from "@mantine/carousel";
import { Flex, Text } from "@mantine/core";
import Image from "next/image";
import paper from "../../../assets/images/paper.png";

export const LoveStory = () => {
  return (
    <Flex
      direction={"column"}
      justify={"center"}
      align={"center"}
      className="text-center py-10 bg-cyan-900"
    >
      <Text className="font-merienda text-white">The Journey</Text>
      <Text className="font-merienda text-white text-2xl">Our Love Story </Text>
      <Text className="font-merienda text-white text my-4">
        How its all started
      </Text>
      <Carousel
        maw={320}
        mx="auto"
        className="w-full"
        withIndicators
        height={200}
        dragFree
        slideGap="sm"
        align="center"
      >
        <Carousel.Slide className="flex w-full gap-4 flex-col justify-center items-center">
          <Text className="font-merienda text-white">First Meet</Text>
          <Image
            src={paper}
            alt="lovestory"
            className="h-28 w-28 rounded-full"
          />
          <Text className="font-merienda text-white">2019</Text>
        </Carousel.Slide>
      </Carousel>
    </Flex>
  );
};
