import { Button, Divider, Flex, Text } from "@mantine/core";
import { IconVideo, IconWifi } from "@tabler/icons-react";

export const Live = () => {
  return (
    <Flex className="h-[500px] bg-cyan-900/70 backdrop-opacity-100 Flex flex-col text-center justify-start items-center p-4 rounded-b-full md:rounded-b-[300px]">
      <Flex direction={"column"} justify={"center"} gap={"md"}>
        <Flex direction={"column"} justify={"center"} align={"center"}>
          <IconWifi size={60} color="white" />
          <Text className="font-nunito text-3xl text-white">
            Live Streaming
          </Text>
        </Flex>
        <Divider
          variant="dashed"
          my={"lg"}
          color="white"
          orientation="horizontal"
          size={"lg"}
        />
        <Text className="text-white font-nunito">
          We will broadcast the wedding ceremony virtually
        </Text>
        <Button
          variant="filled"
          className="border-white"
          leftIcon={<IconVideo />}
        >
          Join
        </Button>
      </Flex>
    </Flex>
  );
};
