import { v4 as uuidv4 } from 'uuid';
// import ProjectImg from '../images/projectImg.png';
import UTrackerImg from '../images/utracker.jpg';
import GreenCtgImg from '../images/greenctg.jpg';
import CoinTrackerImg from '../images/cointracker.jpg';
import CavinImg from '../images/cavinimg.png';

const projects = [
  {
    id: uuidv4(),
    name: 'Find 6 Friends',
    desc: 'Une application web permettant de trouver des compagnons de jeu sur Rainbow Six Siege.',
    img: CavinImg,
  },
  {
    id: uuidv4(),
    name: 'MID-eSport',
    desc: 'Un site de news tourné sur le monde eSport et de la eCompetition.',
    img: CoinTrackerImg,
  },
  {
    id: uuidv4(),
    name: 'MyFlix',
    desc: 'Création de mon site de streaming vidéo.',
    img: GreenCtgImg,
  },
  {
    id: uuidv4(),
    name: 'Mon Portfolio',
    desc: 'Réalisation de mon portfolio, en utilisant ReactJS.',
    img: UTrackerImg,
  },
];

export default projects;
