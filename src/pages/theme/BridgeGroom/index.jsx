import { Container, Flex, Text } from "@mantine/core";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export const BridgeGroom = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <div
      style={{
        backgroundColor: "#088395",
        paddingBottom: 100,
        paddingTop: 50,
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
            gap={"xl"}
          >
            <Text className="font-wedding-1 text-cyan-100 text-2xl">
              The Beloved
            </Text>
            <Text className="font-wedding-1 text-cyan-900 text-4xl">
              Groom & Bride
            </Text>
            <Text className="text-center font-wedding-1 text-cyan-100 ">
              Once in awhile, right in the middle of an ordinary life, love
              gives us a fairy tale.
            </Text>
            <Text className="font-wedding-1 text-cyan-900">"Unknown"</Text>
            <Flex
              justify={"space-between"}
              align={"center"}
              gap={"lg"}
              className=" w-full"
            >
              <Flex direction={"column"} className="h-48 w-36">
                <img
                  className="rounded-full h-48 w-36 object-none"
                  src="https://plus.unsplash.com/premium_photo-1675107358627-8487478e476c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                  alt="Groom"
                />
              </Flex>
              <Text className="text-cyan-900 text-4xl font-pengantin-1">&</Text>
              <Flex direction={"column"} className="h-48 w-36">
                <img
                  className="rounded-full h-48 w-36 object-none"
                  src="https://images.unsplash.com/photo-1606216769898-c88daccaa479?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                  alt="Groom"
                />
              </Flex>
            </Flex>
          </Flex>
        </motion.div>
      </Container>
    </div>
  );
};
