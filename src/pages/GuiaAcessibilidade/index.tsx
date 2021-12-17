import React from "react";
import Card from "../../components/Card";
import './styles.css';

const CARDS = [
  "O que é acessibilidade?",
  "Tipos de acessibilidade",
  "Boas práticas para inclusão",
  "Acessibilidade em eventos",
  "Acessibilidade em matéria",
  "Glossário",
];

export default function GuiaAcessibilidade() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Guia de Acessibilidade</h1>
      <div className="conteiner_cards">
        {CARDS.map((item) => (
          <Card title={item} />
        ))}
      </div>
    </div>
  );
}
