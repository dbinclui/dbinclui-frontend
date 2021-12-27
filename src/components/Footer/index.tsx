import React from 'react';
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaLinkedin,
} from 'react-icons/fa';
import './styles.css';

let anoAtual = new Date().getFullYear();

export interface ComponentFooterProps {}

export const ComponentFooter: React.FC<
  ComponentFooterProps
> = (): JSX.Element => {
  return (
    <>
      <footer className="footer">
        <h1 className="titulo">O DBInclui</h1>
        <p className="descricao">
          Dissemina a cultura de inclusão dentro da DBServer, com foco na
          cultura surda. É destinado para todas as pessoas que desejam aprender
          LIBRAS e entender um pouco mais sobre inclusão de PCD`s na sociedade.
          Também aproveita o guia de acessibilidade e a apostila de Libras como
          fonte de informação de inclusão, assim como utiliza a API Libras para
          as funcionalidades específicas.
        </p>
        <a href="https://www.facebook.com/DBServerTI/" target={"_blank"} rel="noreferrer">
          <FaFacebookSquare size={40} color='#4267B2'/>
        </a>
        <a href="https://www.instagram.com/dbserver_ti/" target={"_blank"} rel="noreferrer">
          <FaInstagramSquare size={40} color='#C13584'/>
        </a>
        <a href="https://twitter.com/dbserver_ti" target={"_blank"} rel="noreferrer">
          <FaTwitterSquare size={40} color='#1DA1F2'/>
        </a>
        <a href="https://br.linkedin.com/company/dbserver" target={"_blank"} rel="noreferrer">
          <FaLinkedin size={40} color='#2867B2'/>
        </a>
        <p className="copyright">
          © {anoAtual} DBInclui - Todos os direitos reservados
        </p>
      </footer>
    </>
  );
};

export default ComponentFooter;
