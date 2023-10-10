import { Button, Flex, Text } from "@mantine/core";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export const Order = () => {
  const [orderRef, orderInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const orderAnimations = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <motion.div
      ref={orderRef}
      initial="hidden"
      animate={orderInView ? "visible" : "hidden"}
      variants={orderAnimations}
      transition={{ duration: 0.5 }}
    >
      <Flex justify={"center"} direction={"column"} align={"center"}>
        <Text>Dapatkan Harga Promo Akses Semua Fitur</Text>
        <Text style={{ textDecoration: "line-through" }}>Rp.199.000</Text>
        <Text fz={"30px"}>Rp.50.000</Text>
        <Button
          color="green"
          leftIcon={<IconBrandWhatsapp />}
          className="bg-green-500"
        >
          Pesan Sekarang
        </Button>
      </Flex>
    </motion.div>
  );
};
