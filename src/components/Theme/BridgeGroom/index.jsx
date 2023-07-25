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
          transition={{ duration: 1 }}
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
              Once in awhile, right in the middle of an ordinary life, love
              gives us a fairy tale.
            </Text>
            <Text className="font-nunito text-white">Unknown</Text>
            <motion.div
              ref={ref}
              className="w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
              transition={{ duration: 1 }}
            >
              <Flex
                justify={"space-between"}
                align={"flex-start"}
                gap={"lg"}
                className=" w-full"
              >
                <Flex
                  direction={"column"}
                  className=" w-36 text-center static"
                  justify={"center"}
                  align={"center"}
                  gap={"md"}
                >
                  <Text className="absolute pb-72 font-semibold font-nunito text-cyan-900">
                    {groomnickname}
                  </Text>
                  <Image
                    className="rounded-full h-40 w-36 object-none"
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
                        <IconBrandInstagram
                          size={28}
                          className="stroke-white"
                        />
                      </Link>
                    </Flex>
                  </Flex>
                </Flex>
                <Text className="text-white text-4xl mt-16 font-nunito">&</Text>
                <Flex
                  direction={"column"}
                  className=" w-36 text-center static"
                  justify={"center"}
                  align={"center"}
                  gap={"md"}
                >
                  <Text className="absolute pb-72 font-semibold font-nunito text-cyan-900">
                    {bridenickname}
                  </Text>
                  <Image
                    className="rounded-full h-40 w-36 object-none"
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
                      Daughter Of Lord {brideparents[0]} & Lady{" "}
                      {brideparents[1]}
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
                        <IconBrandInstagram
                          size={28}
                          className="stroke-white"
                        />
                      </Link>
                    </Flex>
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
