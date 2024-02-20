import Seo from "@/components/Other/Seo";
import Home from "@/components/Templates/Home/Home";

const HomePage = () => {
  return (
    <>
      <Seo
        title={'Homepage'}
        description="Descubra um ponto de partida dinâmico para explorar meu mundo de desenvolvimento de software, com insights sobre minhas habilidades, experiência e abordagem única para resolver desafios tecnológicos."
      />
      <Home />
    </>
  );
};

export default HomePage;
