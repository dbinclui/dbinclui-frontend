import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
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
          <FacebookIcon style={{ color: 'white', fontSize: "32px" }} />
        </a>
        <a
          href="https://www.instagram.com/dbserver_ti/"
          target={'_blank'}
          rel="noopener noreferrer"
        >
          <InstagramIcon style={{ color: 'white', fontSize: "32px" }} />
        </a>
        <a
          href="https://twitter.com/dbserver_ti"
          target={'_blank'}
          rel="noopener noreferrer"
        >
          <TwitterIcon style={{ color: 'white', fontSize: "32px" }} />
        </a>
        <a
          href="https://br.linkedin.com/company/dbserver"
          target={'_blank'}
          rel="noopener noreferrer"
        >
          <LinkedInIcon style={{ color: 'white', fontSize: "32px" }} />
        </a>
        <p className="copyright">
          © {anoAtual} DBInclui - Todos os direitos reservados
        </p>
      </footer>
    </>
  );
};

export default Footer;
