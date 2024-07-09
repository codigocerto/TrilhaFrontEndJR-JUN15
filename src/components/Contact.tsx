import React from 'react';

const Contact: React.FC = () => {
  return (
    <section
      id="motivations"
      className="p-4 bg-codigo-certo-white text-codigo-certo-light-text dark:bg-codigo-certo-dark-bg dark:text-codigo-certo-dark-text"
    >
      <h2 className="text-xl font-semibold">Motivações</h2>
      <h3 className="mt-4 font-semibold">Impacto Profissional:</h3>
      <ul className="list-disc list-inside mt-2">
        <li>
          📈 Entregar consistentemente soluções de alta qualidade em ambientes
          de desenvolvimento dinâmicos, desde startups ágeis até grandes
          empresas de tecnologia.
        </li>
        <li>
          📢 Alcançar milhares de pessoas com insights técnicos, simplificando
          conceitos complexos e promovendo as melhores práticas da indústria.
        </li>
        <li>
          ✨ Focado em aprimorar minhas habilidades em tecnologia, capacitar
          colegas e alcançar novos patamares de excelência.
        </li>
      </ul>
      <h3 className="mt-4 font-semibold">Vamos Conectar:</h3>
      <p className="mt-2">
        🤝 Estou ansioso para contribuir com minha expertise técnica para uma
        equipe que valorize progresso e inovação.
      </p>
    </section>
  );
};

export default Contact;
