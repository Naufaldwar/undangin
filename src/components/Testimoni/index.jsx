import { Container, Flex, Paper, Text, createStyles } from "@mantine/core";
import { IconStarFilled } from "@tabler/icons-react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const useStyles = createStyles((theme) => ({
  paper: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    gap: "10px",
    height: 250,
    [theme.fn.smallerThan("md")]: {
      width: 300,
    },
  },
}));
export const Testimoni = ({ name, testimoni }) => {
  const { classes } = useStyles();
  const [testimoniRef, testimoniInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const testimoniAnimations = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <motion.div
      ref={testimoniRef}
      initial="hidden"
      animate={testimoniInView ? "visible" : "hidden"}
      variants={testimoniAnimations}
      transition={{ duration: 0.5 }}
    >
      <Container>
        <Paper shadow="xs" p="md" my={"md"} className={classes.paper}>
          <Text fw={"bolder"}>{name}</Text>
          <Text align="center">{testimoni}</Text>
          <Flex justify={"center"} align={"center"}>
            <IconStarFilled style={{ color: "#088395" }} />
            <IconStarFilled style={{ color: "#088395" }} />
            <IconStarFilled style={{ color: "#088395" }} />
            <IconStarFilled style={{ color: "#088395" }} />
            <IconStarFilled style={{ color: "#088395" }} />
          </Flex>
        </Paper>
      </Container>
    </motion.div>
  );
};
