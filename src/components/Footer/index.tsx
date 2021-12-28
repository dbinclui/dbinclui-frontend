import React from 'react';
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
  FaLinkedin,
} from 'react-icons/fa';
import './styles.css';

let anoAtual = new Date().getFullYear();

export interface FooterProps {}

export const Footer: React.FC<FooterProps> = (): JSX.Element => {
  return (
    <>
      <footer className="footer">
        <a
          href="https://www.facebook.com/DBServerTI/"
          target={'_blank'}
          rel="noreferrer"
        >
          <FaFacebookSquare size={40} color="#4267B2" />
        </a>
        <a
          href="https://www.instagram.com/dbserver_ti/"
          target={'_blank'}
          rel="noreferrer"
        >
          <FaInstagramSquare size={40} color="#C13584" />
        </a>
        <a
          href="https://twitter.com/dbserver_ti"
          target={'_blank'}
          rel="noreferrer"
        >
          <FaTwitterSquare size={40} color="#1DA1F2" />
        </a>
        <a
          href="https://br.linkedin.com/company/dbserver"
          target={'_blank'}
          rel="noreferrer"
        >
          <FaLinkedin size={40} color="#2867B2" />
        </a>
        <p className="copyright">
          © {anoAtual} DBInclui - Todos os direitos reservados
        </p>
      </footer>
    </>
  );
};

export default Footer;
