import {
  createStyles,
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
  ThemeIcon,
  rem,
  Flex,
  BackgroundImage,
} from "@mantine/core";
import { motion } from "framer-motion";
import { IconCheck } from "@tabler/icons-react";
import Image from "next/image";
import hero from "../../assets/images/hero.jpg";
import { useCallback, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
const useStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 4)`,
  },

  content: {
    maxWidth: rem(480),
    marginRight: `calc(${theme.spacing.xl} * 3)`,

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      marginRight: 0,
    },
  },

  title: {
    color: theme.colors.blue[6],
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(44),
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan("xs")]: {
      fontSize: rem(28),
    },
  },

  control: {
    [theme.fn.smallerThan("xs")]: {
      flex: 1,
    },
  },

  image: {
    flex: 1,
    height: "auto",
    width: 250,
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  highlight: {
    position: "relative",
    backgroundColor: theme.fn.variant({
      variant: "light",
      color: theme.primaryColor,
    }).background,
    borderRadius: theme.radius.sm,
    padding: `${rem(4)} ${rem(12)}`,
  },
}));

export default function Hero() {
  const { classes } = useStyles();
  const [heroRef, heroInView] = useInView({ triggerOnce: true });

  return (
    <motion.div
      ref={heroRef}
      initial={{ opacity: 0, y: 20 }}
      animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      <BackgroundImage src="https://images.unsplash.com/photo-1510624094547-8328a7f79579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80">
        <Container>
          <div className={classes.inner}>
            <div className={classes.content}>
              <Title className={classes.title}>
                Bagikan Momen Bahagiamu Dengan Undangan Spesial
              </Title>
              <Text color="gray" mt="md">
                Undangan pernikahan berbasis web dengan berbagai pilihan desain
                yang menarik dan elegan serta responsif di semua perangkat
              </Text>

              <List
                mt={30}
                spacing="sm"
                size="sm"
                icon={
                  <ThemeIcon size={20} radius="xl">
                    <IconCheck size={rem(12)} stroke={1.5} />
                  </ThemeIcon>
                }
              >
                <List.Item>
                  <b>Banyak Pilihan Tema</b>
                </List.Item>
                <List.Item>
                  <b>Pilihan Fitur Menarik</b>
                </List.Item>
                <List.Item>
                  <b>Prioritas Kualitas dan Keindahan</b>
                </List.Item>
              </List>

              <Group mt={30}>
                <Button radius="xl" size="md" className={classes.control}>
                  Jelajahi Sekarang
                </Button>
              </Group>
            </div>
            {/* <div className={classes.image}> */}
            <div>
              <Image alt="image" src={hero} className={classes.image} />
            </div>
          </div>
        </Container>
      </BackgroundImage>
    </motion.div>
  );
}
