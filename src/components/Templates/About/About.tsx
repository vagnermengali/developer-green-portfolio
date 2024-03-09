import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

import { fadeIn } from "@/components/Animations/FadeIn";
import Avatar from "@/components/Other/Avatar/Avatar";
import Icon from "@/components/Other/Icon/Icon";

import { aboutData } from "@/data/about";
import { AboutData, AboutInfo } from "@/interfaces/AboutInterface";


const About = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (window.innerWidth > 1024) {
      setIndex(1);
    } else {
      setIndex(0);
    }
  }, []);

  return (
    <div className=" bg-primary/30 h-[inherit] xl:py-32 pt-20 xl:mb-0 xl:my-0 text-center xl:text-left max-h-dvh">
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute -bottom-[100px] -left-[210px] z-[0] max-w-[460px] "
      >
        <Avatar opacity={true} />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        <div className="flex-1 flex flex-col justify-center">
          <h2
            className="h2 z-10">
            Meu <span className="text-accent">Percurso</span> no Desenvolvimento
          </h2>
          <p
            className="hidden xl:flex max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 z-10">
            Ingressei na carreira de TI por interesse em jogos, comecei a modificar códigos para melhorar jogos e, gradualmente, estudei por conta própria. Trabalhei meio período na Fixtoxs como desenvolvedor front-end, evoluindo para full stack. Após um curso em tempo integral, fui monitor na Kenzie Academy e, agora, sou desenvolvedor front-end na Wicomm, além de fazer projetos freelance como full stack.
          </p>
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8">
            <div className="flex flex-1 xl:gap-x-6">
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={4} duration={15} /> +
                </div>
                <div className="text-xs uppercase tracking-wide tracking-[1px] leading-[1.4] max-w-[100px]">Anos de experiência</div>
              </div>
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={75} duration={10} /> +
                </div>
                <div className="text-xs uppercase tracking-wide tracking-[1px] leading-[1.4] max-w-[100px]">Projetos finalizados</div>
              </div>
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={127} duration={10} /> +
                </div>
                <div className="text-xs uppercase tracking-wide tracking-[1px] leading-[1.4] max-w-[100px]">Avaliações positivas</div>
              </div>
              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={17} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-wide tracking-[1px] leading-[1.4] max-w-[100px]">Certificações Concluídas</div>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]">
          <div className="flex gap-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item: AboutData, index: number) => (
              <div
                key={`about-${index}`}
                className={`${index === index &&
                  "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  } cursor-pointer capitalize xl:text-lg xl:first:hidden relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0 text-[15px]`}
                onClick={() => setIndex(index)}
              >
                {item.title}
              </div>
            ))}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start scrollbar-none md:max-h-40 max-h-80 xl:overflow-hidden overflow-y-scroll xl:max-h-full">
            {aboutData[index].info.map((item: AboutInfo, index: number) => (
              <div key={`info-${index}`} className="flex-1 flex flex-col max-w-max gap-2 items-center text-white/60 xl:items-start">
                <div key={`title-${index}`} className={`font-light mb-2 md:mb-0 whitespace-nowrap ${item.title ? "" : "hidden"}`}>{item.title}</div>
                <div key={`hidden-${index}`} className="hidden md:flex"></div>
                <div key={`stage-${index}`}>{item.stage}</div>
                <div key={`icons-${index}`} className="flex gap-4 flex-wrap xl:justify-start justify-center xl xl:px-0 px-5 xl:max-w-[500px]">
                  {item.icons?.map((icon, iconIndex) => (
                    <div key={`icon-${index}-${iconIndex}`} className="text-2xl text-white/90">
                      <Icon className="" width={24} height={24} id={icon} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
