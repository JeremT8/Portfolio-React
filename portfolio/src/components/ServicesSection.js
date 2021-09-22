import React from 'react';
import { MdDesktopMac, MdCode, MdPhonelinkSetup } from 'react-icons/md';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';

const ServicesItemsStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServicesSection() {
  return (
    <ServicesItemsStyles>
      <div className="container">
        <SectionTitle subheading="Ce que je suis capable de faire" heading="Services" />
        <div className="services__allItems">
          <ServicesSectionItem
            icon={<MdCode />}
            title="Developpement Web"
            desc="Développement de site internet sous forme de projet. Site web responsive, avec de bon resultat SEO."
          />
          <ServicesSectionItem
            icon={<MdDesktopMac />}
            title="Design Web"
            desc="Réalisation de maquette, utilisation d'outil comme la suite Adobe."
          />
          <ServicesSectionItem
            icon={<MdPhonelinkSetup />}
            title="Developpement d'application"
            desc="Apprentissage du C#, réalisation de mini-jeu. "
          />
        </div>
      </div>
    </ServicesItemsStyles>
  );
}
