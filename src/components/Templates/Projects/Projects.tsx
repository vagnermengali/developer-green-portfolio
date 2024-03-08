import { motion } from "framer-motion";

import { fadeIn } from "@/components/Animations/FadeIn";
import WorkSlider from "@/components/Other/WorkSlider/WorkSlider.";

const Projects = () => {

  return (
    <div className="bg-primary/30 xl:h-[inherit] h-auto xl:pt-[6%] xl:py-36 pt-16 pb-14 xl:pb-0 xl:mt-0 flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-6 xl:mb-0">
            <h2
              className="h2 xl:mt-12 "
            >
              Meus Projetos <span className="text-accent">.</span>
            </h2>
            <p
              className="xl:mb-4 max-w-[400px] mx-auto lg:mx-0">
              Explore meu portfólio de projetos como desenvolvedor frontend, onde cada linha de código conta uma história visual. De websites responsivos a experiências interativas, cada projeto demonstra meu compromisso em combinar estética e funcionalidade no mundo digital.
            </p>
          </div>
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]">
            <WorkSlider />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
