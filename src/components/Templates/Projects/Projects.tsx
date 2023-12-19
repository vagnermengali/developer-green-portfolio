import { motion } from "framer-motion";

import { fadeIn } from "@/components/Animations/FadeIn";
import WorkSlider from "@/components/Other/WorkSlider/WorkSlider.";
import PaintOne from "@/components/Other/Paints/PaintOne/PaintOne";
import PaintTree from "@/components/Other/Paints/PaintTree/PaintTree";

const Projects = () => {

  return (
    <div className="xl:h-full h-fit bg-primary/30 xl:py-36 mt-16 mb-14 xl:mb-0 xl:mt-0 flex items-center">
      <PaintTree />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-6 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-12 "
            >
              Meus Projetos <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="xl:mb-4 max-w-[400px] mx-auto lg:mx-0">
              Explore meu portfólio de projetos como desenvolvedor frontend, onde cada linha de código conta uma história visual. De websites responsivos a experiências interativas, cada projeto demonstra meu compromisso em combinar estética e funcionalidade no mundo digital.
            </motion.p>
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
      <PaintOne />
    </div>
  );
};

export default Projects;
