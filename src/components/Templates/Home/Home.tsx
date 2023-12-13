import { motion } from "framer-motion";

import { fadeIn } from "@/components/Animations/FadeIn";
import ParticlesContainer from "@/components/Other/ParticlesContainer/ParticlesContainer";
import ProjectsBtn from "@/components/Other/ProjectsBtn/ProjectsBtn";
import Avatar from "@/components/Other/Avatar/Avatar";

const Home = () => {
  
  return (
    <div className="bg-primary/60 h-full">
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1">
            Transformando ideias <br /> em{" "}
            <span className="text-accent">Realidade Digital</span>
          </motion.h1>
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-8">
            Entusiasta de tecnologia com sólida experiência em desenvolvimento web. Proficiente em JavaScript e TypeScript, com foco especial em construção de interfaces modernas utilizando React.js e Next.js. Apaixonado por criar soluções elegantes e eficientes que impulsionam a experiência do usuário.
          </motion.p>
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <div>
            <motion.div
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="hidden xl:flex"
            >
              <ProjectsBtn />
            </motion.div>
          </div>
        </div>
      </div>
      <div className="w-[100vw] h-full absolute right-0 bottom-0">
        <div className="bg-none xl:bg-paints xl:bg-cover xl:bg-center xl:bg-no-repeat hue-rotate-[-20deg] w-full h-full absolute mix-blend-color-dodge translate-z-0">
        </div>
        <ParticlesContainer/>
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:-bottom-12 lg:right-[2%]">
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
