import Seo from "@/components/Other/Seo";
import Services from "@/components/Templates/Services/Services";

const ServicesPage = () => {
  return (
    <>
      <Seo
        title={'Serviços'}
        description="Descubra uma gama abrangente de serviços de desenvolvimento de software personalizados para atender às necessidades de empresas e empreendedores. De desenvolvimento web e mobile a consultoria em TI, estou pronto para transformar suas ideias em realidade digital."
      />
      <Services />
    </>
  );
};

export default ServicesPage;
