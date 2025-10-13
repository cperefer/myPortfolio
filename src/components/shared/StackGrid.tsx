import { TechStack } from "../data/TechStacks";
import { motion } from "motion/react";

interface Props {
  stack: string;
  technologies: TechStack[]
}

export const StackGrid = ({ stack, technologies }: Props) => {
  return (
    <>
      <motion.div
        className="col-span-12 md:col-span-5 flex items-center pt-5"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <p className="text-lg font-semibold uppercase tracking-wider w-full text-center md:text-left">
          {stack}
        </p>
      </motion.div>

      <motion.div
        className="col-span-12 md:col-span-7"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.1 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 transition-all"
        >
          {technologies.map(({ name, img }, index) => (
            <motion.div
              key={name}
              className="flex flex-col items-center justify-center text-center"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeInOut" }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <img src={img} alt={name} className="w-12 h-12 object-contain mb-2" />
              <p className="text-sm font-medium">{name}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

