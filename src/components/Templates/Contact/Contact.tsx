import { RiArrowRightLine } from "react-icons/ri";
import { motion } from "framer-motion";

import { fadeIn } from "@/components/Animations/FadeIn";
import PaintOne from "@/components/Other/Paints/PaintOne/PaintOne";
import PaintTree from "@/components/Other/Paints/PaintTree/PaintTree";

const Contact = () => {
  function handleSubmit(e: any) {
    e.preventDefault();
  }

  return (

    <div>
      <div className="container mx-auto">
      <PaintTree />
        <div className="mx-auto xl:py-32 mt-16 mb-14 xl:mb-0 xl:mt-0 text-center xl:text-left flex items-center justify-center">
          <div className="flex flex-col w-full max-w-[700px]">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 text-center xl:mb-12 mb-6"
            >
              Vamos <span className="text-accent">conversar.</span>
            </motion.h2>
            <motion.form
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              onSubmit={handleSubmit}
              className="flex-1 flex flex-col gap-6 w-full mx-auto"
            >
              <div className="flex gap-x-6 w-full">
                <input type="text" placeholder="nome" className="input" />
                <input type="text" placeholder="Email" className="input" />
              </div>
              <input type="text" placeholder="Assunto" className="input" />
              <textarea
                placeholder="Mensagem"
                className="textarea"
                cols={30}
                rows={10}
              ></textarea>
              <button className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group">
                <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-300">
                  Enviar
                </span>
                <RiArrowRightLine className="-tranlate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
              </button>
            </motion.form>
          </div>
        </div>
      </div>
      <PaintOne />
    </div>
  );
};


export default Contact;
