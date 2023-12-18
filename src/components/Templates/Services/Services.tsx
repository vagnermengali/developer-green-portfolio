import { motion } from "framer-motion";

import { fadeIn } from "@/components/Animations/FadeIn";
import ServiceSlider from "@/components/Other/ServiceSlider/ServiceSlider";
import PaintOne from "@/components/Other/Paints/PaintOne/PaintOne";
import PaintTree from "@/components/Other/Paints/PaintTree/PaintTree";

const Services = () => {

  return (
    <div className="h-auto bg-primary/30 py-36 flex items-center">
      <PaintTree />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-8"
            >
              Meus serviços <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0">
              Transformo conceitos em realidade digital, com especialização em design gráfico, desenvolvimento web e soluções visuais personalizadas para elevar a presença online da sua empresa.
            </motion.p>
          </div>
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]">
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
      <PaintOne />
    </div>
  );
};

export default Services;
