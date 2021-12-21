import React from 'react';
import Card from '../../components/Card';
import './styles.css';
import { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import api from '../../services/api';

interface Card {
  id: number;
  title: string;
  contents: string;
}

export default function AcessibilityGuide() {
  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    alert(`${api}`);
    async function getCards() {
      let response: AxiosResponse<Card[]>;
      try {
        response = await axios.get<Card[]>(`http://localhost:3000/topics/`);
        return response;
      } catch (err) {
        alert('erro');
      }
    }

    setTimeout(() => {
      getCards().then((cards) => {
        if (cards) {
          setCards(cards.data);
        }
      });
    }, 3000);
  }, []);

  return (
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
  );
}
