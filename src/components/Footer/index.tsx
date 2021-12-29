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
          rel="noopener noreferrer"
        >
          <FaFacebookSquare size={40} color="white" />
        </a>
        <a
          href="https://www.instagram.com/dbserver_ti/"
          target={'_blank'}
          rel="noopener noreferrer"
        >
          <FaInstagramSquare size={40} color="white" />
        </a>
        <a
          href="https://twitter.com/dbserver_ti"
          target={'_blank'}
          rel="noopener noreferrer"
        >
          <FaTwitterSquare size={40} color="white" />
        </a>
        <a
          href="https://br.linkedin.com/company/dbserver"
          target={'_blank'}
          rel="noopener noreferrer"
        >
          <FaLinkedin size={40} color="white" />
        </a>
        <p className="copyright">
          © {anoAtual} DBInclui - Todos os direitos reservados
        </p>
      </footer>
    </>
  );
};

export default Footer;
