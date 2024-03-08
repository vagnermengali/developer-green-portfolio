import Seo from "@/components/Other/Seo";
import Indications from "@/components/Templates/Indications/Indications";

const IndicationsPage = () => {
  return (
    <>
      <Seo
        title={'Indicações'}
        description="Testemunhe o reconhecimento de clientes satisfeitos. Nesta seção, compartilho depoimentos e recomendações que validam minha expertise e compromisso com a satisfação do cliente."
      />
      <Indications />
    </>
  );
};

export default IndicationsPage;
