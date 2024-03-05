import dynamic from 'next/dynamic';

const Seo = dynamic(() => import('@/components/Other/Seo'));
const Contact = dynamic(() => import('@/components/Templates/Contact/Contact'));

const ContactPage = () => {
  return (
    <>
      <Seo
        title={'Contact'}
        description="Pronto para iniciar uma conversa sobre seu próximo projeto? Entre em contato comigo aqui. Estou ansioso para discutir suas ideias e como posso ajudá-lo a alcançar seus objetivos de desenvolvimento de software."
      />
      <Contact />
    </>
  );
};

export default ContactPage;
