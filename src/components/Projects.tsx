import React from 'react';
import Card from './Card';
import Badge from './Badge';

const Projects: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Meus Projetos</h2>
      <div className="flex flex-wrap">
        <Card title="Projeto 1" description="Este é um projeto incrível que utiliza React e Tailwind CSS.">
          <Badge color="primary">React</Badge>
          <Badge color="secondary">Tailwind CSS</Badge>
        </Card>
        <Card title="Projeto 2" description="Outro projeto incrível que utiliza Next.js e TypeScript.">
          <Badge color="primary">Next.js</Badge>
          <Badge color="secondary">TypeScript</Badge>
        </Card>
      </div>
    </div>
  );
};

export default Projects;
