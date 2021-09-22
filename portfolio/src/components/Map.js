import React from 'react';
import styled from 'styled-components';
import MapImg from '../assets/images/map.png';
import PText from './PText';

const MapStyles = styled.div`
  background: url(${MapImg}) no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 400px;
  .container {
    position: relative;
    min-height: 400px;
  }
  .map__card {
    position: absolute;
    right: 10%;
    bottom: 10%;
    padding: 2rem;
    background: var(--deep-dark);
    width: 100%;
    max-width: 300px;
    border-radius: 12px;
  }
  .map__card__heading {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  .map__card__link {
    display: inline-block;
    font-size: 1.6rem;
    margin-top: 3rem;
    text-decoration: underline;
  }
  @media only screen and (max-width: 768px) {
    background-position: 80% center;
  }
  @media only screen and (max-width: 400px) {
    .map__card {
      max-width: none;
      right: auto;
    }
  }
`;

export default function Map() {
  return (
    <MapStyles>
      <div className="container">
        <div className="map__card">
          <h3 className="map__card__heading">Je suis ici !</h3>
          <PText>Poitiers, Vienne, Nouvelle-Aquitaine, France</PText>
          <a
            className="map__card__link"
            href="https://www.google.com/maps/place/86000+Poitiers/@46.5846841,0.3364377,13z/data=!3m1!4b1!4m5!3m4!1s0x47fdbe72439eb3ab:0x97de2319c5e09093!8m2!3d46.580224!4d0.340375"
            target="_blank"
            rel="noreferrer"
          >
            Ouvrir dans Google Maps
          </a>
        </div>
      </div>
    </MapStyles>
  );
}
