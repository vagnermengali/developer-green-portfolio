import Seo from "@/components/Other/Seo";
import Projects from "@/components/Templates/Projects/Projects";

const ProjectsPage = () => {
  return (
    <>
      <Seo
        title={'Projetos • Vagner Mengali • Portfólio'}
        description="Explore uma galeria de projetos inspiradores e inovadores. Cada projeto é uma demonstração do meu compromisso com a excelência técnica e a entrega de soluções sob medida para os clientes."
      />
      <Projects />
    </>
  );
};

export default ProjectsPage;
