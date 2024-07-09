import React from 'react';

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="p-4 bg-codigo-certo-white text-codigo-certo-light-text dark:bg-codigo-certo-dark-bg dark:text-codigo-certo-dark-text"
    >
      <h2 className="text-xl font-semibold">Sobre</h2>
      <h3 className="mt-4 font-semibold">Objetivos de Carreira:</h3>
      <ul className="list-disc list-inside mt-2">
        <li>
          🎯 Liderar equipes de desenvolvimento de software, criando um ambiente
          onde a inovação seja a norma.
        </li>
        <li>
          🌱 Orientar talentos emergentes no ecossistema de tecnologia,
          compartilhando conhecimento para acelerar seu desenvolvimento
          profissional.
        </li>
      </ul>
    </section>
  );
};

export default About;
