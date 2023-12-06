import React, { useState } from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

import { fadeIn } from "@/components/Animations/FadeIn";
import Avatar from "@/components/Other/Avatar/Avatar";
import PaintTree from "@/components/Other/Paints/PaintTree/PaintTree";

import { aboutData } from "@/data/about";
import { AboutData, AboutInfo } from "@/interfaces/AboutInterface";

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <PaintTree />
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute -bottom-[100px] -left-[390px] z-[0] "
      >
        <Avatar opacity={true} />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 z-10">
            Histórias <span className="text-accent">cativantes</span> geram
            designs magníficos.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 z-10">
            Trabalhei como Editor VFX com
            expertise em pós-produção, Motion
            Graphics e 3D Edits. No ano de 2022 fiz
            uma transição de carreira e desde então
            venho me aprofundando no
            desenvolvimento Frontend
          </motion.p>
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8">
            <div className="flex flex-1 xl:gap-x-6">
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={2} duration={15} /> +
                </div>
                <div className="text-xs uppercase tracking-wide tracking-[1px] leading-[1.4] max-w-[100px]">Years of experience</div>
              </div>
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={650} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-wide tracking-[1px] leading-[1.4] max-w-[100px]">Satisfied Clients</div>
              </div>
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={20} duration={10} /> +
                </div>
                <div className="text-xs uppercase tracking-wide tracking-[1px] leading-[1.4] max-w-[100px]">Finished projects</div>
              </div>
              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={8} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-wide tracking-[1px] leading-[1.4] max-w-[100px]">Winning awards</div>
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
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item: AboutData, index: number) => (
              <div
                key={`about-${index}`}
                className={`${index === index &&
                  "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(index)}
              >
                {item.title}
              </div>
            ))}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item: AboutInfo, index: number) => (
              <div key={`info-${index}`} className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60">
                <div key={`title-${index}`} className="font-light mb-2 md:mb-0">{item.title}</div>
                <div key={`hidden-${index}`} className="hidden md:flex"></div>
                <div key={`stage-${index}`}>{item.stage}</div>
                <div key={`icons-${index}`} className="flex gap-x-4">
                  {item.icons?.map((icon, iconIndex) => (
                    <div key={`icon-${index}-${iconIndex}`} className="text-2xl text-white">
                      {icon}
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
