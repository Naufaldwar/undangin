import { Button, Container, Flex, createStyles } from "@mantine/core";
import Image from "next/image";
import example from "../../assets/images/example.jpg";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const useStyles = createStyles((theme) => ({
  bg: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#F7F7F7",
    padding: "2rem",
  },
  image: {
    width: 500,
    height: "auto",
    [theme.fn.smallerThan("md")]: {
      width: 250,
      height: "auto",
    },
  },
}));
export const Variants = () => {
  const { classes } = useStyles();
  const [variantsRef, variantsInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const variantsAnimations = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <>
      <motion.div
        ref={variantsRef}
        initial="hidden"
        animate={variantsInView ? "visible" : "hidden"}
        variants={variantsAnimations}
        transition={{ duration: 0.5 }}
      >
        <Container className={classes.bg}>
          <Image alt="image" src={example} className={classes.image} />
          <div>
            <Link href="/theme">
              <Button variant="outline">Lihat Template</Button>
            </Link>
          </div>
        </Container>
      </motion.div>
    </>
  );
};
