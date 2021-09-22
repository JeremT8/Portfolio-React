import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';

const FooterStyle = styled.div`
  background-color: var(--deep-dark);
  padding-top: 10rem;
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Jeremy Tillet</h1>
          <PText>
            Développeur Full Stack avec un préference pour le Front-End. 
            Attaché au design, je produis des sites internets design, responsive, en respectant les normes UI et UX. 
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Liens Importants"
            links={[
              {
                title: 'Accueil',
                path: '/',
                type: 'Link',
              },
              {
                type: 'Link',
                title: 'A Propos',
                path: '/about',
              },
              {
                type: 'Link',
                title: 'Projets',
                path: '/projects',
              },
              {
                type: 'Link',
                title: 'Contact',
                path: '/contact',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Information de Contact"
            links={[
              {
                title: '+33 (0)610604674',
                path: 'tel:+33610604674',
              },
              {
                title: 'jeremytilletpro@gmail.com',
                path: 'mailto:jeremytilletpro@gmail.com',
              },
              {
                title: 'Poitiers, Vienne, Nouvelle-Aquitaine, France',
                path: 'https://www.google.com/maps/place/86000+Poitiers/@46.5846841,0.3364377,13z/data=!3m1!4b1!4m5!3m4!1s0x47fdbe72439eb3ab:0x97de2319c5e09093!8m2!3d46.580224!4d0.340375',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="Liens de mes Reseaux"
            links={[
              {
                title: 'Facebook',
                path: 'https://www.facebook.com/jerem.shaaqx.1',
              },
              {
                title: 'Twitter',
                path: 'https://twitter.com/jerem_tlt',
              },
              {
                title: 'Instagram',
                path: 'https://www.instagram.com/jerem_tlt',
              },
              {
                title: 'GitHub',
                path: 'https://github.com/JeremT8',
              }
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>
            © 2021 - Jeremy Tillet | Designed By{' '}
            <a target="_blank" rel="noreferrer" href="https://github.com/JeremT8">
              JeremT8
            </a>{' '}
          </PText>
        </div>
      </div>
    </FooterStyle>
  );
}
