import Seo from "@/components/Other/Seo";
import About from "@/components/Templates/About/About";

const AboutPage = () => {
  return (
    <>
      <Seo
        title={'About'}
        description="Conheça a história por trás do desenvolvedor. Nesta seção, compartilho minha paixão pela tecnologia, minha jornada profissional e os valores que guiam meu trabalho."
      />
      <About />
    </>
  );
};

export default AboutPage;
