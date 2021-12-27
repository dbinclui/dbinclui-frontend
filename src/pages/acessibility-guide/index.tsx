import React from 'react';
import Card from '../../components/Card';
import Footer from '../../components/Footer';
import './styles.css';

const CARDS = [
  'O que é acessibilidade?',
  'Tipos de acessibilidade',
  'Boas práticas para inclusão',
  'Acessibilidade em eventos',
  'Acessibilidade em matéria',
  'Glossário',
];

export default function AcessibilityGuide() {
  return (
    <div>
      <h1 className="page-title" style={{ textAlign: 'center' }}>
        Guia de Acessibilidade
      </h1>
      <div className="conteiner_cards">
        {CARDS.map((item, key) => (
          <Card key={key} title={item} />
        ))}
      </div>
      <Footer />
    </div>
  );
}
