import { motion } from "framer-motion";

import { fadeIn } from "@/components/Animations/FadeIn";
import ServiceSlider from "@/components/Other/ServiceSlider/ServiceSlider";

const Services = () => {

  return (
    <div className="bg-primary/30 xl:pt-[6%] xl:py-36 pt-16 pb-14 xl:pb-0 xl:mt-0 flex items-start xl:h-screen">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-6 xl:mb-0">
            <h2
              className="h2 xl:mt-8"
            >
              Meus serviços <span className="text-accent">.</span>
            </h2>
            <p
              className="xl:mb-4 mb-0 max-w-[400px] mx-auto lg:mx-0">
              Transformo conceitos em realidade digital, com especialização em design gráfico, desenvolvimento web e soluções visuais personalizadas para elevar a presença online da sua empresa.
            </p>
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
    </div>
  );
};

export default Services;
