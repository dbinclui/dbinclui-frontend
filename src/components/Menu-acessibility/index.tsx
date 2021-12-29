import React, { useState } from 'react';
import './styles.css';


export default function AcessibilityMenu() {
  const [size, setSize] = useState(18)

  function resizeFont(e: 'up' | 'down') {
    let domEl: HTMLElement | null = document.querySelector('.box-welcome') as HTMLElement;
    let domElCard1: HTMLElement | null = document.querySelector('#card1') as HTMLElement;
    let domElCard2: HTMLElement | null = document.querySelector('#card2') as HTMLElement;
    let domElCard3: HTMLElement | null = document.querySelector('#card3') as HTMLElement;

    if (e === 'up') {
      domEl && (domEl.style.fontSize = `${size + 1}px`)
      domElCard1 && (domElCard1.style.fontSize = `${size + 1}px`)
      domElCard2 && (domElCard2.style.fontSize = `${size + 1}px`)
      domElCard3 && (domElCard3.style.fontSize = `${size + 1}px`)
      setSize(size + 1)
      return
    }
    domEl && (domEl.style.fontSize = `${size - 1}px`)
    domElCard1 && (domElCard1.style.fontSize = `${size - 1}px`)
    domElCard2 && (domElCard2.style.fontSize = `${size - 1}px`)
    domElCard3 && (domElCard3.style.fontSize = `${size - 1}px`)
    setSize(size - 1)
  }

  return (
    <>
      <div className="dropdown">
        <button className="button-up" onClick={() => resizeFont('up')}>+</button>
        <button onClick={() => resizeFont('down')}>-</button>
      </div>
    </>
  );
}
