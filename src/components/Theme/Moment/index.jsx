import { Flex, Grid, Text } from "@mantine/core";
import Image from "next/image";
import couple from "../../../assets/images/couple.jpg";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export const Moment = () => {
  const [momentsRef, momentsInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const momentsAnimations = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <motion.div
      className="Flex flex-col text-center justify-start items-center p-4 "
      ref={momentsRef}
      initial="hidden"
      animate={momentsInView ? "visible" : "hidden"}
      variants={momentsAnimations}
      transition={{ duration: 1 }}
    >
      <Flex
        direction={"column"}
        justify={"center"}
        className="w-full text-center font-nunito py-10 "
        align={"center"}
        gap={"md"}
      >
        <Text className="text-xl font-nunito text-cyan-900">A Glimpse Of</Text>
        <Text className="text-3xl font-bold font-nunito text-cyan-900">
          Our Moments
        </Text>
        <Text className="font-nunito text-cyan-900">
          I would rather share one lifetime with you than face all the ages of
          this world alone.
          <br />
          <span className="font-semibold font-nunito text-cyan-900">
            J.R.R. Tolkien
          </span>
        </Text>

        <iframe
          className="w-full lg:h-[500px]"
          src="https://www.youtube.com/embed/8rbQago5twI"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <Flex className="">
          <Grid grow justify="center" gutter={"xs"}>
            <Grid.Col span={6}>
              <Image src={couple} alt="couple" />
            </Grid.Col>
            <Grid.Col span={6}>
              <Image src={couple} alt="couple" />
            </Grid.Col>
            <Grid.Col span={12}>
              <Image src={couple} alt="couple" />
            </Grid.Col>
            <Grid.Col span={6}>
              <Image src={couple} alt="couple" />
            </Grid.Col>
            <Grid.Col span={6}>
              <Image src={couple} alt="couple" />
            </Grid.Col>
          </Grid>
        </Flex>
      </Flex>
    </motion.div>
  );
};
