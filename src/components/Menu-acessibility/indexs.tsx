import React from "react";
import Card from '../../components/Card'
import './styles.css';
import { useEffect, useState } from 'react';
import { CardGuidesResponse, getGuides } from "../../services/guides";

export default function  AcessibililityGuide() {
    const [cards, setCards] = useState<CardGuidesResponse[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const getCards = async () => {
        await getGuides()
        .then((response) => {
            const { data } = response!.data;
            setCards(data);
            setError(false);
        })
        .catch((error) => {
            setError(true);
        })
        .finally(() => {
            setLoading(false);
        });
    }

    useEffect(() => {
        getCards();
    }, []);

    return loading ? (
        <div className="lds-spinner">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    ) : error ? (
        <p className="error"> Desculpe, Ocorreu um erro ao carregar a página</p>
    ) : (
        <div>
            <h1 className="page-title" style={{ textAlign: 'center'}}>
                Guia de Acessibilidade
            </h1>
            <div className="container_cards">
                {cards.map((item, key) => (
                    <Card key={key} title={item.title} />
                ))}
            </div>
        </div>
    );
}