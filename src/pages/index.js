import { Fiture } from "@/components/Fiture";
import Hero from "@/components/Hero";
import { Order } from "@/components/Order";
import { Testimoni } from "@/components/Testimoni";
import { Variants } from "@/components/Variants";
import { Navbar } from "@/components/Navbar";
import { Carousel, Embla } from "@mantine/carousel";
import styles from "../styles/Home.module.css";
import {
  Container,
  Divider,
  Text,
  createStyles,
  Progress,
  rem,
  BackgroundImage,
  Flex,
} from "@mantine/core";
import { datafitur } from "@/assets/data";
import { datatesti } from "@/assets/data";
import { useCallback, useEffect, useState } from "react";

const useStyles = createStyles((theme) => ({
  variant: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#F7F7F7",
    alignItems: "center",
    flexWrap: "wrap",
    gap: theme.spacing.md,
  },
  font: {
    color: theme.colors.blue[6],
  },
}));

const Home = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [embla, setEmbla] = useState(null);
  const handleScroll = useCallback(() => {
    if (!embla) return;
    const progress = Math.max(0, Math.min(1, embla.scrollProgress()));
    setScrollProgress(progress * 100);
  }, [embla, setScrollProgress]);

  useEffect(() => {
    if (embla) {
      embla.on("scroll", handleScroll);
      handleScroll();
    }
  }, []);
  const { classes } = useStyles();

  return (
    <>
      <Navbar />

      <section
        id="sectionhero"
        style={{ backgroundColor: "rgba(255,255,255,0.8)" }}
      >
        <Hero />
      </section>

      <div style={{ backgroundColor: "#088395" }}>
        <Container style={{ backgroundColor: "#088395" }} py={"lg"}>
          <Text
            style={{ backgroundColor: "#088395" }}
            align={"center"}
            py={"lg"}
            fz={"lg"}
            fw={"bolder"}
          >
            Fitur Kami
          </Text>
          <Flex wrap={"wrap"} gap={"sm"} justify={"center"}>
            {datafitur.map((item) => (
              <Fiture
                key={item.title}
                title={item.title}
                descript={item.descript}
                icon={item.icon}
              />
            ))}
          </Flex>
        </Container>
      </div>

      <Flex bg={"#F7F7F7"}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#088395"
            d="M0,96L240,32L480,96L720,160L960,128L1200,192L1440,32L1440,0L1200,0L960,0L720,0L480,0L240,0L0,0Z"
          ></path>
        </svg>
      </Flex>
      <div className={classes.variant}>
        <Divider my={"lg"} />
        <Text
          align={"center"}
          fz={"lg"}
          fw={"bolder"}
          pb={"lg"}
          className={classes.font}
        >
          Pilihan Varian Desain
        </Text>
        <Variants />
      </div>
      <BackgroundImage src="http://www.transparenttextures.com/patterns/paper.png">
        <div
          className={styles.gradient}
          style={{ backgroundColor: "rgba(247,247,247,0.6)" }}
        >
          <Container py={"lg"}>
            <Text
              className={classes.font}
              align={"center"}
              fz={"lg"}
              fw={"bolder"}
              my={"lg"}
            >
              Testimoni
            </Text>

            <Carousel
              dragFree
              slideSize="50%"
              slideGap="md"
              height={200}
              getEmblaApi={setEmbla}
              initialSlide={2}
            >
              {datatesti.map((item) => (
                <Carousel.Slide key={item.name}>
                  <Testimoni name={item.name} testimoni={item.testimoni} />
                </Carousel.Slide>
              ))}
            </Carousel>
            <Progress
              value={scrollProgress}
              styles={{
                bar: { transitionDuration: "0ms" },
                root: { maxWidth: rem(320) },
              }}
              size="sm"
              mt="xl"
              mx="auto"
            />
          </Container>
        </div>
      </BackgroundImage>
      <Text
        className="text-red-500"
        align={"center"}
        fz={"lg"}
        fw={"bolder"}
        my={"lg"}
      >
        Pesan Sekarang
      </Text>
      <Order />
    </>
  );
};

export default Home;
