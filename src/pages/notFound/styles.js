import styled from 'styled-components';
import { FONTSIZES } from '../../styles/constant';

export const Wrapper = styled.figure`
  background-color: ${(props) => (props.bgColor ? props.bgColor : '#fff')};
  min-height: 91.5vh;
  height: 100%;
  width: 100%;
  min-width: 320px;
  max-width: 100vw;
  display: grid;
  grid-template-areas:
    'caption'
    'image';
  align-items: center;
  grid-template-rows: 200px auto;
  @media (min-width: 768px) {
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 0.5fr;
    grid-template-areas: 'image caption';
    justify-content: space-between;
  }
`;

export const Image = styled.img`
  height: 100%;
  max-height: 90vh;
  width: 100%;
  grid-area: image;
  object-fit: cover;
`;

export const Caption = styled.figcaption`
  width: 100%;
  text-align: center;
  font-size: ${FONTSIZES.heroName};
  font-weight: bold;
  grid-area: caption;
  color: ${(props) => (props.fontColor ? props.fontColor : '#000000')};
`;
