import React from 'react';
import Card from '../../components/Card';
import './styles.css';
import { useEffect, useState } from 'react';
import { CardGuidesResponse, getGuides } from '../../services/guides';

export default function AcessibilityGuide() {
  const [cards, setCards] = useState<CardGuidesResponse[]>([]);
  const [loading, setLoading] = useState(true);

  const getCards = async () => {
    const cards = await getGuides()
    .catch((error) => {
      setLoading(false);
      alert('Erro');
    })
    if (cards) {
      setCards(cards.data);
      setLoading(false);
    }
  };

  useEffect(() => {
    getCards();
  }, []);

  return (
    loading ? ( 
      <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    ) : (
    <div>
      <h1 className="page-title" style={{ textAlign: 'center' }}>
        Guia de Acessibilidade
      </h1>
      <div className="conteiner_cards">
        {cards.map((item, key) => (
          <Card key={key} title={item.title} />
        ))}
      </div>
    </div>
  )
  )
}
