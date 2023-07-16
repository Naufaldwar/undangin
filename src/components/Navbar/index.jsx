import { Container, Flex, Header, Menu, Text } from "@mantine/core";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { createStyles } from "@mantine/core";
import { IconMenu2 } from "@tabler/icons-react";
import { useRef } from "react";
import Image from "next/image";
import paper from "../../assets/images/paper.png";

const useStyles = createStyles((theme) => ({
  itemNav: {
    display: "flex",
    gap: "1rem",
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },
  menu: {
    display: "none",
    ":hover": {
      cursor: "pointer",
    },

    [theme.fn.smallerThan("md")]: {
      display: "block",
    },
  },
  item: {
    ":hover": {
      cursor: "pointer",
      color: theme.colors.blue[6],
    },
  },
}));
export const Navbar = () => {
  const { classes } = useStyles();
  const fitureRef = useRef(null);

  const [NavbarRef, NavbarInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const handleFitureClick = () => {
    if (fitureRef.current) {
      fitureRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <>
      <motion.div
        ref={NavbarRef}
        initial={{ opacity: 0, y: 20 }}
        animate={NavbarInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <Header py={"lg"}>
          <Container>
            <Flex justify={"space-between"} align={"center"}>
              <div style={{ display: "flex", gap: "1rem" }}>
                <Image
                  src={paper}
                  alt="Logo"
                  border="0"
                  style={{ width: "50px" }}
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Text style={{ margin: "0px" }}>Undangan</Text>
                  <Text style={{ margin: "0px" }}>Digital</Text>
                </div>
              </div>
              <Flex className={classes.itemNav}>
                <Text
                  onClick={handleFitureClick}
                  style={{ margin: "0px" }}
                  className={classes.item}
                >
                  Fitur
                </Text>
                <Text style={{ margin: "0px" }} className={classes.item}>
                  Pilihan Detail
                </Text>
                <Text style={{ margin: "0px" }} className={classes.item}>
                  Testimoni
                </Text>
              </Flex>
              <Menu className={classes.menu}>
                <Menu.Target>
                  <IconMenu2 />
                </Menu.Target>
                <Menu.Dropdown>
                  <Menu.Item className={classes.item}>Fitur</Menu.Item>
                  <Menu.Item className={classes.item}>Pilihan Detail</Menu.Item>
                  <Menu.Item className={classes.item}>Testimoni</Menu.Item>
                </Menu.Dropdown>
              </Menu>
            </Flex>
          </Container>
        </Header>
      </motion.div>
    </>
  );
};
