// Sidebar.tsx

import React from 'react';

const Sidebar: React.FC = () => {
  const randomTitles = [
    'Destaques',
    'Categorias',
    'Projetos Recentes',
    'Tutoriais',
    'Artigos Populares',
    'Recursos Úteis',
    'Notícias Tecnológicas',
    'Eventos',
    'Ferramentas Favoritas',
  ];

  return (
    <div className="sidebar">
      <h2>Tópicos</h2>
      <ul>
        {randomTitles.map((title, index) => (
          <li key={index}>{title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;