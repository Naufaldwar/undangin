import { Container, Divider, Flex, Text } from "@mantine/core";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Image from "next/image";
import paper from "../../../assets/images/paper.png";
import {
  IconBrandFacebook,
  IconBrandFacebookFilled,
  IconBrandInstagram,
  IconBrandTwitter,
} from "@tabler/icons-react";
import { IconBrandTwitterFilled } from "@tabler/icons-react";
export const BridgeGroom = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <div
      style={{
        backgroundColor: "#088395",
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
            style={{ backgroundColor: "#088395" }}
            gap={"md"}
          >
            <Text className="font-wedding-1 text-cyan-100 text-lg">
              The Beloved
            </Text>
            <Text className="font-wedding-1 text-cyan-900 text-xl">
              Groom & Bride
            </Text>
            <Text className="text-center font-wedding-1 text-sm text-cyan-100 ">
              Once in awhile, right in the middle of an ordinary life, love
              gives us a fairy tale.
            </Text>
            <Text className="font-wedding-1 text-cyan-900">Unknown</Text>
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
                  <Text className="absolute pb-36 font-wedding-1 text-cyan-900">
                    Romeo
                  </Text>
                  <Image
                    className="rounded-full h-40 w-36 object-none"
                    src={paper}
                    alt="Groom"
                  />
                  <Text className="font-wedding-1 text-cyan-100 w-20">
                    Romeo Montague
                  </Text>
                  <Divider className="w-20 my-1" />
                  <Text className="text-xs font-wedding-1 text-cyan-100">
                    Son Of Lord Montague & Lady Montague
                  </Text>
                  <Flex wrap={"wrap"} className="gap-4" justify={"center"}>
                    <IconBrandFacebookFilled
                      size={28}
                      className="text-cyan-900"
                    />
                    <IconBrandTwitterFilled
                      size={28}
                      className="text-cyan-900"
                    />
                    <IconBrandInstagram size={28} className="stroke-cyan-900" />
                  </Flex>
                </Flex>
                <Text className="text-cyan-900 text-4xl mt-16 font-pengantin-1">
                  &
                </Text>
                <Flex
                  direction={"column"}
                  className=" w-36 text-center static"
                  justify={"center"}
                  align={"center"}
                  gap={"md"}
                >
                  <Text className="absolute pb-36 font-wedding-1 text-cyan-900">
                    Juliet
                  </Text>
                  <Image
                    className="rounded-full h-40 w-36 object-none"
                    src={paper}
                    alt="Groom"
                  />
                  <Text className="font-wedding-1 text-cyan-100 w-20">
                    Juliet Capulet
                  </Text>
                  <Divider className="w-20 my-1" />
                  <Text className="text-xs font-wedding-1 text-cyan-100">
                    Daughter Of Lord Capulet & Lady Capulet
                  </Text>
                  <Flex wrap={"wrap"} className="gap-4" justify={"center"}>
                    <IconBrandFacebookFilled
                      size={28}
                      className="text-cyan-900"
                    />
                    <IconBrandTwitterFilled
                      size={28}
                      className="text-cyan-900"
                    />
                    <IconBrandInstagram size={28} className="stroke-cyan-900" />
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
