import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import Button from '../components/Button';
import AboutImg from '../assets/images/about-page-img.png';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <div>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Bonjour, je suis <span>Jérémy Tillet</span>
              </p>
              <h2 className="about__heading">Un développeur Full Stack Junior</h2>
              <div className="about__info">
                <PText>
                  Je suis originaire de Poitiers. Et comme ont dit ont est jamais mieux que chez soi.
                  Depuis mon enfance j'ai toujours été attiré par ce qui concerne l'informatique, que ce soit les jeux vidéos ou bien la création.
                  J'aimais aussi quelques fois dessiner ou même explorer des fichiers internes de mon PC sans me poser la question des conséquences, vous l'avez compris je suis curieux.
                  <br /> <br />
                  J'ai terminé mes etudes par un Baccalauréat Professionnel afin de devenir Opticien, j'ai par la suite travaillé 4 années dans un magasin en tant que Monteur-Vendeur, ce qui m'a permis de découvrir le monde du travail ainsi que le développement personnel grâce aux responsabilités qu'on m'a confié.
                  <br />
                  <br />
                  Et puis en 2020, j'ai décidé de quitter mon Job et de suivre une formation de reconversion professionnel dans le développement informatique. Grâce à cette experience j'ai pu développer également mon mental et ma determination.
                </PText>
              </div>
              <Button btnText="Télécharger mon CV" btnLink="#" />
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Diplome</h1>

              <AboutInfoItem
                title="Formation :"
                items={["O'Clock, format télépresentiel / Formation Développeur Web et Web Mobile  -> Obtenue"]}
              />
              <AboutInfoItem
                title="Lycée :"
                items={[' Baccalauréat Professionnel Monteur Vendeur en Optique Lunetterie -> Obtenue']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Mes compétences</h1>

              <AboutInfoItem
                title="FrontEnd :"
                items={['HTML', 'CSS', 'JavaScript', 'ReactJS', 'Bootstrap']}
              />
              <AboutInfoItem
                title="BackEnd :"
                items={['NodeJS', 'CMS : WordPress', 'PHP', 'C#']}
              />
              <AboutInfoItem
                title="Other : "
                items={['Photoshop', 'Whymsical', 'Figma', 'Trello', 'GITHUB', 'Methodologie Scrum']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Experiences</h1>

              <AboutInfoItem
                title="Mai 2021 - "
                items={['Développeur Web / Réalisation de projets.']}
              />
              <AboutInfoItem
                title="Juillet 2020 - "
                items={["Reconversion Professionnel dans le dév. "]}
              />
              <AboutInfoItem
                title="2016 - 2020"
                items={["Monteur Vendeur en Optique Lunetterie en CDI / Optic 2000, La Souterraine (23)"]}
              />
            </div>
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </div>
  );
}
