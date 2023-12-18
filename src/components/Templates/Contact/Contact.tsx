import { useState } from 'react';
import { RiArrowRightLine } from 'react-icons/ri';
import { motion } from 'framer-motion';

import { fadeIn } from '@/components/Animations/FadeIn';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Verificação dos dados do formulário
    if (!formData.email || !formData.subject || !formData.message) {
      alert('Por favor, preencha todos os campos do formulário.');
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          html: `<p>${formData.message}</p>`,
        }),
      });

      if (!response.ok) {
        throw new Error(`Erro HTTP: ${response.status}`);
      }

      const data = await response.json();
      if (data.success) {
        alert('E-mail enviado com sucesso!');
        setFormData({ name: '', email: '', subject: '', message: '' }); // Resetar o formulário
      } else {
        alert('Falha ao enviar e-mail.');
      }
    } catch (error) {
      console.error('Erro ao enviar e-mail:', error);
      alert('Erro ao enviar e-mail. Verifique o console para mais detalhes.');
    }
  };
  
  return (
    <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
      <div className="flex flex-col w-full max-w-[700px]">
        <motion.h2
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h2 text-center mb-12"
        >
          Vamos <span className="text-accent">conversar.</span>
        </motion.h2>
        <motion.form
          variants={fadeIn('up', 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          onSubmit={handleSubmit}
          className="flex-1 flex flex-col gap-6 w-full mx-auto"
        >
          <div className="flex gap-x-6 w-full">
            <input
              type="text"
              name="name"
              placeholder="Nome"
              value={formData.name}
              onChange={handleChange}
              className="input"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="input"
            />
          </div>
          <input
            type="text"
            name="subject"
            placeholder="Assunto"
            value={formData.subject}
            onChange={handleChange}
            className="input"
          />
          <textarea
            name="message"
            placeholder="Mensagem"
            value={formData.message}
            onChange={handleChange}
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
  );
};

export default Contact;
