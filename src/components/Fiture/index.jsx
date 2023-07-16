import { Container, Flex, Paper, Text, createStyles } from "@mantine/core";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { IconBrush } from "@tabler/icons-react";
const useStyles = createStyles((theme) => ({
  paper: {
    display: "flex",
    alignItems: "start",
    gap: "1rem",
    width: 300,
    // backgroundColor: "#F0F8FF",
  },
}));

export const Fiture = ({ title, descript, icon }) => {
  const { classes } = useStyles();
  const [fitureRefs, fitureInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const fitureAnimations = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <>
      <motion.div
        initial="hidden"
        ref={fitureRefs}
        animate={fitureInView ? "visible" : "hidden"}
        variants={fitureAnimations}
        transition={{ duration: 0.5 }}
      >
        <Paper shadow="xs" p="md" radius={"lg"} className={classes.paper}>
          <div style={{ height: 120 }}>
            <Flex
              style={{
                borderRadius: "100%",
                backgroundColor: "#C4DFDF",
                border: "2px solid #088395",
              }}
              w={50}
              h={50}
              justify={"center"}
              align={"center"}
            >
              {icon}
            </Flex>
          </div>
          <Flex direction={"column"} align={"start"}>
            <Text fz={"lg"} fw={"bolder"}>
              {title}
            </Text>
            <Text fz={"sm"} fw={"lighter"}>
              {descript}
            </Text>
          </Flex>
        </Paper>
      </motion.div>
    </>
  );
};
