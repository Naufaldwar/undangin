import { Flex, Text } from "@mantine/core";

export const Moment = () => {
  return (
    <Flex
      direction={"column"}
      justify={"center"}
      className="w-full text-center font-nunito py-10"
      align={"center"}
      gap={"md"}
    >
      <Text className="text-xl font-nunito">A Glimpse Of</Text>
      <Text className="text-3xl font-bold font-nunito">Our Moments</Text>
      <Text className="font-nunito">
        I would rather share one lifetime with you than face all the ages of
        this world alone.
        <br />
        <span className="font-semibold font-nunito">J.R.R. Tolkien</span>
      </Text>
      {/* <div>
        <iframe
          src="https://www.youtube.com/embed/jn47m24nvYU"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div> */}
      <div className="container">
        <iframe
          src="https://www.youtube-nocookie.com/embed/lJG6D4wZnuM"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </Flex>
  );
};
