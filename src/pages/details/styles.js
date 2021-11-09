import styled from 'styled-components';
import { BG, COLORS, FONTSIZES, SIZES } from '../../styles/constant';

export const DetailsWrapper = styled.div`
  background-color: ${COLORS.black};
  color: ${COLORS.withe};
  position: relative;
`;

export const ReturnButton = styled.button`
  & a {
    color: ${COLORS.lowWithe};
    font-size: ${SIZES.xxlarge};
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    position: fixed;
    z-index: 999;
    top: 6.5rem;
    right: 1.5rem;
    @media (min-width: 724px) {
      bottom: auto;
      top: 7.5rem;
    }
  }
`;
export const Hero = styled.figure`
  background-color: #000000;
  width: 100%;
  max-height: 100%;
  min-width: 320px;
  display: grid;

  grid-template-areas:
    'image '
    'name'
    'description';
  grid-template-columns: 1fr;
  gap: rem;
  grid-template-rows: ${(props) =>
    props.descriptionSize > 200
      ? `1fr minmax(6rem, auto) ${props.descriptionSize / 7}rem`
      : '1fr minmax(6rem, auto) 25rem'};
  align-items: center;
  align-content: center;
  color: #fafafa;
  background-image: ${BG.heroDetailsImg};
  position: relative;
  border-bottom: 3px solid #000000;

  @media (min-width: 400px) {
    grid-template-rows: auto minmax(6rem, auto) minmax(20rem, auto);
  }
  @media (min-width: 724px) {
    height: 60vh;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
      'image name'
      'image description';
    &::after {
      border-bottom-color: transparent;
      border-left-color: transparent;
      border-right-color: #000000;
      border-style: solid;
      border-top-color: transparent;
      border-width: 20vh 10vw 0 0;
      bottom: 0;
      content: '';
      position: absolute;
      right: 0;
      top: auto;
      z-index: 30;
    }
    &::before {
      border-bottom-color: transparent;
      border-right-color: transparent;
      border-top-color: #000000;
      border-left-color: transparent;
      border-style: solid;
      border-width: 20vh 10vw 0 0;
      top: 0;
      left: 0;
      content: '';
      position: absolute;
      z-index: 30;
    }
  }
`;

export const HeroImage = styled.img`
  grid-area: image;
  object-fit: fill;
  height: 100%;
  width: 100%;
  /* grid-template-areas:
      'image name'
      'image description';
  } */
`;

export const HeroTitle = styled.h3`
  grid-area: name;
  /* font-size: ${FONTSIZES.heroName}; */
  font-size: ${(props) => (props.nameLength.length > 30 ? FONTSIZES.title : FONTSIZES.heroName)};
  text-align: center;
  @media (min-width: 400px) {
    font-size: ${FONTSIZES.heroName};
  }
`;

export const HeroDescription = styled.figcaption`
  height: 5rem;
  font-size: ${FONTSIZES.p};
  vertical-align: middle;
  align-self: baseline;
  padding: 2rem;
  text-align: justify;
`;

export const ButtonMore = styled.a`
  width: 12rem;
  height: 4rem;
  font-size: ${FONTSIZES.cards};
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 1rem;
  right: 2rem;
  z-index: 60;
  text-decoration: none;
  color: ${COLORS.withe};
  background-color: ${COLORS.redMarvel};
  &:hover {
    color: ${COLORS.mustard};
  }

  &::after {
    border-bottom-color: transparent;
    border-left-color: transparent;
    border-right-color: ${COLORS.black};
    border-style: solid;
    border-top-color: transparent;
    border-width: 1.5rem 2rem 0 0;
    bottom: 0;
    content: '';
    position: absolute;
    right: 0;
    top: auto;
    z-index: 30;
  }
  &::before {
    border-bottom-color: transparent;
    border-right-color: transparent;
    border-top-color: ${COLORS.black};
    border-left-color: transparent;
    border-style: solid;
    border-width: 1.5rem 2rem 0 0;
    top: 0;
    left: 0;
    content: '';
    position: absolute;
    z-index: 30;
  }

  & span {
    text-align: center;
    margin: 0 auto;
    font-weight: bold;
  }
`;
