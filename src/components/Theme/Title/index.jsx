import { BackgroundImage, Flex, Text } from "@mantine/core";

export const Title = () => {
  return (
    <Flex
      className="h-screen sticky top-0 -z-50"
      justify={"center"}
      align={"center"}
    >
      <BackgroundImage
        className="h-screen absolute top-0"
        src="https://images.unsplash.com/photo-1510624094547-8328a7f79579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
      >
        <Flex
          style={{ backgroundColor: "rgba(100,100,100,0.3)" }}
          justify={"center"}
          className="h-screen pt-28"
          align={"center"}
          direction={"column"}
          gap={"md"}
        >
          <Text className="font-nunito mb-2 text-white md:text-2xl ">
            The Wedding of
          </Text>
          <Text className="text-white text-2xl font-merienda md:text-6xl">
            Adam & Hawa
          </Text>
          <Text className="font-nunito text-white md:text-2xl md:mt-20">
            20.12.24
          </Text>
        </Flex>
      </BackgroundImage>
    </Flex>
  );
};
