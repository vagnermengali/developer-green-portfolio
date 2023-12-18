import { motion } from "framer-motion";

import { fadeIn } from "@/components/Animations/FadeIn";
import TestimonialSlider from "@/components/Other/TestimonialSlider/TestimonialSlider";

const Indications = () => {

  return (
    <div className="h-full bg-primary/30 py-32 text-center">
      <div className="container mx-auto h-full flex flex-col justify-center">
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h2 mb-8 xl:mb-0"
        >
          Recomendações de <span className="text-accent">colegas.</span>
        </motion.h2>
        <motion.div
          variants={fadeIn("right", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <TestimonialSlider />
        </motion.div>
      </div>
    </div>
  );
};

export default Indications;
