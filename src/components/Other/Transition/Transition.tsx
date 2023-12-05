import { motion } from "framer-motion";

const Transition = () => {

  const transitionVariants = {
    initial: {
      x: "100%",
      widht: "100%",
    },
    animate: {
      x: "0%",
      widht: "0%",
    },
    exit: {
      x: ["0%", "100%"],
      widht: ["0%", "100%"],
    },
  };
  
  return (
    <>
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#0b0d0e]"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.1, duration: 0.3, ease: "easeInOut" }}
      >
      </motion.div>
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-[#0d1011]"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.2, duration: 0.3, ease: "easeInOut" }}
      >
      </motion.div>
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-[#111214]"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.3, duration: 0.3, ease: "easeInOut" }}
      >
      </motion.div>
    </>
  );
};

export default Transition;
