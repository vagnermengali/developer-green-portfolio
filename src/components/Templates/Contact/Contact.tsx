import { RiArrowRightLine } from "react-icons/ri";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { fadeIn } from "@/components/Animations/FadeIn";
import PaintOne from "@/components/Other/Paints/PaintOne/PaintOne";
import PaintTree from "@/components/Other/Paints/PaintTree/PaintTree";

interface UserData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const schema = yup.object().shape({
  name: yup.string().required("O nome é obrigatório"),
  email: yup.string().email("Email inválido").required("O email é obrigatório"),
  subject: yup.string().required("O assunto é obrigatório"),
  message: yup.string().required("A mensagem é obrigatória"),
});

const Contact = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<UserData> = (data) => {
    const templateParams = {
      name: data.name,
      subject: data.subject,
      message: data.message,
      email: data.email,
      url: window.location.href,
    };

    emailjs
      .send("service_690fb1r", "template_n9c9q7d", templateParams, "g-7_aa-swIuHF3gEg")
      .then(
        (response) => {
          console.log("EMAIL ENVIADO", response.status, response.text);
        },
        (err) => {
          console.log("ERROR", err);
        }
      );
  };

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
              onSubmit={handleSubmit(onSubmit)}
              className="flex-1 flex flex-col gap-6 w-full mx-auto"
            >
              <div className="flex gap-x-6 w-full">
                <Controller
                  name="name"
                  control={control}
                  render={({ field }) => (
                    <input
                      type="text"
                      placeholder="nome"
                      className={errors.name ? "input border-red/20" : "input"}
                      {...field}
                    />
                  )}
                />
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <input
                      type="text"
                      placeholder="Email"
                      className={errors.email ? "input border-red/20" : "input"}
                      {...field}
                    />
                  )}
                />
              </div>
              <Controller
                name="subject"
                control={control}
                render={({ field }) => (
                  <input
                    type="text"
                    placeholder="Assunto"
                    className={errors.subject ? "input border-red/20" : "input"}
                    {...field}
                  />
                )}
              />
              <Controller
                name="message"
                control={control}
                render={({ field }) => (
                  <textarea
                    className={errors.message ? "textarea border-red/20" : "textarea"}
                    placeholder="Mensagem"
                    cols={30}
                    rows={10}
                    {...field}
                  ></textarea>
                )}
              />
              <button
                type="submit"
                className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
              >
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
