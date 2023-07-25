import { Container, Divider, Flex, Text } from "@mantine/core";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Image from "next/image";
import paper from "../../../assets/images/paper.png";
import {
  IconBrandFacebookFilled,
  IconBrandInstagram,
} from "@tabler/icons-react";
import { IconBrandTwitterFilled } from "@tabler/icons-react";
import Link from "next/link";
export const BridgeGroom = ({
  groomnickname,
  bridenickname,
  groomfullname,
  bridefullname,
  groomparents,
  brideparents,
  groomsocmed,
  bridesocmed,
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <div
      className="bg-cyan-900"
      style={{
        paddingBottom: 50,
        paddingTop: 10,
      }}
    >
      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 2, delay: 0.5 }}
        >
          <Flex
            direction={"column"}
            align={"center"}
            className="bg-cyan-900"
            gap={"md"}
          >
            <Text className="font-nunito text-white text-lg">The Beloved</Text>
            <Text className="font-nunito text-white text-xl">
              Groom & Bride
            </Text>
            <Text className="text-center font-nunito text-sm text-white ">
              {`"Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang"`}
            </Text>
            <Text className="font-nunito text-white">{`"Q.S Ar-Rum : 21"`}</Text>

            <motion.div
              ref={ref}
              className="w-full flex items-start justify-between gap-4"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -50 }}
              transition={{ duration: 2, delay: 0.5 }}
            >
              <Flex
                direction={"column"}
                className=" w-36 lg:w-64 text-center static"
                justify={"center"}
                align={"center"}
                gap={"md"}
              >
                <Text className="absolute pb-72 font-semibold font-nunito text-cyan-900">
                  {groomnickname}
                </Text>
                <Image
                  className="rounded-full lg:rounded-[100px] h-40 w-36 lg:h-80 lg:w-64 object-none"
                  src={paper}
                  alt="Groom"
                />
                <Text className="font-nunito text-white w-20">
                  {groomfullname}
                </Text>
                <Divider className="w-20 my-1" />
                <Flex
                  justify={"space-between"}
                  direction={"column"}
                  className="h-40"
                >
                  <Text className="text-xs font-nunito text-white">
                    Son Of Lord {groomparents[0]} & Lady {groomparents[1]}
                  </Text>
                  <Flex wrap={"wrap"} className="gap-4" justify={"center"}>
                    <Link href={groomsocmed[0]} target="_blank">
                      <IconBrandFacebookFilled
                        size={28}
                        className="text-white"
                      />
                    </Link>

                    <Link href={groomsocmed[2]} target="_blank">
                      <IconBrandTwitterFilled
                        size={28}
                        className="text-white"
                      />
                    </Link>
                    <Link href={groomsocmed[1]} target="_blank">
                      <IconBrandInstagram size={28} className="stroke-white" />
                    </Link>
                  </Flex>
                </Flex>
              </Flex>
              <Text className="text-white text-4xl lg:text-6xl mt-16 font-nunito">
                &
              </Text>
              <Flex
                direction={"column"}
                className=" w-36 lg:w-64 text-center static"
                justify={"center"}
                align={"center"}
                gap={"md"}
              >
                <Text className="absolute pb-72 font-semibold font-nunito text-cyan-900">
                  {bridenickname}
                </Text>
                <Image
                  className="rounded-full lg:rounded-[100px] h-40 w-36 lg:h-80 lg:w-64 object-none"
                  src={paper}
                  alt="Groom"
                />
                <Text className="font-nunito text-white w-20">
                  {bridefullname}
                </Text>
                <Divider className="w-20 my-1" />
                <Flex
                  justify={"space-between"}
                  direction={"column"}
                  className="h-40"
                >
                  <Text className="text-xs font-nunito text-white">
                    Daughter Of Lord {brideparents[0]} & Lady {brideparents[1]}
                  </Text>
                  <Flex wrap={"wrap"} className="gap-4" justify={"center"}>
                    <Link href={bridesocmed[0]} target="_blank">
                      <IconBrandFacebookFilled
                        size={28}
                        className="text-white"
                      />
                    </Link>
                    <Link href={bridesocmed[2]} target="_blank">
                      <IconBrandTwitterFilled
                        size={28}
                        className="text-white"
                      />
                    </Link>
                    <Link href={bridesocmed[1]} target="_blank">
                      <IconBrandInstagram size={28} className="stroke-white" />
                    </Link>
                  </Flex>
                </Flex>
              </Flex>
            </motion.div>
          </Flex>
        </motion.div>
      </Container>
    </div>
  );
};
