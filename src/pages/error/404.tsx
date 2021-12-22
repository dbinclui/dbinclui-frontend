import React from 'react';
import Error404 from '../../components/svgs/404';
import './styles.css';

export default function Error() {
  return (
    <>
      <div className="page-erros">
        <div className="icon-errro">
          <Error404 />
        </div>
        <div className="box">
          <p>Desculpe, a página não foi encontrada!</p>
        </div>
      </div>
    </>
  );
}
