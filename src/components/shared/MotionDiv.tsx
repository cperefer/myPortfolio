import { motion } from "motion/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const MotionDiv = ({ children }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      viewport={{ once: false, amount: 0.2 }}
      style={{
        height: "200px",
        margin: "100vh 0",
      }}
    >
      {children}
    </motion.div>
  )
}
