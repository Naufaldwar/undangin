import { Carousel } from "@mantine/carousel";
import { Flex, Text } from "@mantine/core";
import Image from "next/image";
import paper from "../../../assets/images/paper.png";
import { IconTriangleInvertedFilled } from "@tabler/icons-react";
import { IconChevronRight } from "@tabler/icons-react";
import { IconChevronLeft } from "@tabler/icons-react";

export const LoveStory = () => {
  return (
    <Flex
      direction={"column"}
      justify={"center"}
      align={"center"}
      className="text-center py-10 bg-cyan-900"
    >
      <Text className="font-nunito text-white">The Journey</Text>
      <Text className="font-nunito text-white text-4xl">Our Love Story </Text>
      <Text className="font-nunito text-white text my-4">
        How its all started
      </Text>
      <Flex className="max-w-xs md:max-w-md lg:max-w-5xl">
        <Carousel
          className="overflow-hidden my-10"
          withIndicators
          height={300}
          slideSize="33.333333%"
          slideGap="sm"
          align="start"
          nextControlIcon={<IconChevronRight size={16} color="white" />}
          previousControlIcon={<IconChevronLeft size={16} color="white" />}
          breakpoints={[
            { maxWidth: "md", slideSize: "50%" },
            { maxWidth: "sm", slideSize: "100%", slideGap: 0 },
          ]}
        >
          <Carousel.Slide>
            <Flex className="flex gap-4 flex-col justify-center items-center">
              <Flex className="flex flex-col justify-center items-center">
                <Text className="font-nunito text-white w-72 py-4 bg-slate-400">
                  First Meet
                </Text>
                <IconTriangleInvertedFilled className="text-slate-400 -m-2" />
              </Flex>
              <Image
                src={paper}
                alt="lovestory"
                className="h-36 w-36 rounded-full"
              />
              <Text className="font-nunito text-white">2019</Text>
            </Flex>
          </Carousel.Slide>
          <Carousel.Slide>
            <Flex className="flex gap-4 flex-col justify-center items-center">
              <Flex className="flex flex-col justify-center items-center">
                <Text className="font-nunito text-white w-72 py-4 bg-slate-400">
                  Start Dating
                </Text>
                <IconTriangleInvertedFilled className="text-slate-400 -m-2" />
              </Flex>
              <Image
                src={paper}
                alt="lovestory"
                className="h-36 w-36 rounded-full"
              />
              <Text className="font-nunito text-white">2020</Text>
            </Flex>
          </Carousel.Slide>
          <Carousel.Slide>
            <Flex className="flex gap-4 flex-col justify-center items-center">
              <Flex className="flex flex-col justify-center items-center">
                <Text className="font-nunito text-white w-72 py-4 bg-slate-400">
                  Engagement
                </Text>
                <IconTriangleInvertedFilled className="text-slate-400 -m-2" />
              </Flex>
              <Image
                src={paper}
                alt="lovestory"
                className="h-36 w-36 rounded-full"
              />
              <Text className="font-nunito text-white">2021</Text>
            </Flex>
          </Carousel.Slide>
          <Carousel.Slide>
            <Flex className="flex gap-4 flex-col justify-center items-center">
              <Flex className="flex flex-col justify-center items-center">
                <Text className="font-nunito text-white w-72 py-4 bg-slate-400">
                  Wedding
                </Text>
                <IconTriangleInvertedFilled className="text-slate-400 -m-2" />
              </Flex>
              <Image
                src={paper}
                alt="lovestory"
                className="h-36 w-36 rounded-full"
              />
              <Text className="font-nunito text-white">2023</Text>
            </Flex>
          </Carousel.Slide>
        </Carousel>
      </Flex>
    </Flex>
  );
};
