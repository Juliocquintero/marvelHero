import styled from 'styled-components';

export const HeroWrapper = styled.figure`
  background-color: #000000;
  width: 100%;
  max-height: 80vh;
  min-width: 320px;
  display: grid;

  grid-template-areas:
    'image '
    'name'
    'description';
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto 1fr;
  align-items: center;
  align-content: center;
  color: #fafafa;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='600' preserveAspectRatio='none' viewBox='0 0 1440 600'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1101%26quot%3b)' fill='none'%3e%3crect width='1440' height='600' x='0' y='0' fill='rgba(0%2c 0%2c 0%2c 0.99)'%3e%3c/rect%3e%3cpath d='M65 600L665 0L1068.5 0L468.5 600z' fill='url(%23SvgjsLinearGradient1102)'%3e%3c/path%3e%3cpath d='M542.2 600L1142.2 0L1295.2 0L695.2 600z' fill='url(%23SvgjsLinearGradient1102)'%3e%3c/path%3e%3cpath d='M1371 600L771 0L252 0L852 600z' fill='url(%23SvgjsLinearGradient1103)'%3e%3c/path%3e%3cpath d='M961.8 600L361.79999999999995 0L90.29999999999995 0L690.3 600z' fill='url(%23SvgjsLinearGradient1103)'%3e%3c/path%3e%3cpath d='M1085.9606264895563 600L1440 245.96062648955632L1440 600z' fill='url(%23SvgjsLinearGradient1102)'%3e%3c/path%3e%3cpath d='M0 600L354.0393735104437 600L 0 245.96062648955632z' fill='url(%23SvgjsLinearGradient1103)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1101'%3e%3crect width='1440' height='600' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='0%25' y1='100%25' x2='100%25' y2='0%25' id='SvgjsLinearGradient1102'%3e%3cstop stop-color='rgba(255%2c 0%2c 0%2c 0.04)' offset='0'%3e%3c/stop%3e%3cstop stop-opacity='0' stop-color='rgba(255%2c 0%2c 0%2c 0.04)' offset='0.66'%3e%3c/stop%3e%3c/linearGradient%3e%3clinearGradient x1='100%25' y1='100%25' x2='0%25' y2='0%25' id='SvgjsLinearGradient1103'%3e%3cstop stop-color='rgba(255%2c 0%2c 0%2c 0.04)' offset='0'%3e%3c/stop%3e%3cstop stop-opacity='0' stop-color='rgba(255%2c 0%2c 0%2c 0.04)' offset='0.66'%3e%3c/stop%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e");
  position: relative;
  border-bottom: 3px solid #000000;

  @media (min-width: 400px) {
    max-height: 70vh;
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

export const Image = styled.img`
  grid-area: image;
  object-fit: fill;
  height: 100%;
  width: 100%;
  @media (min-width: 724px) {
    width: 100%;
    grid-template-areas:
      'image name'
      'image description';
  }
`;

export const Name = styled.h3`
  grid-area: name;
  font-size: 4rem;
  text-align: center;
`;

export const Description = styled.figcaption`
  font-size: 2rem;
  vertical-align: middle;
  align-self: baseline;
  padding: 1rem;
  text-align: justify;
  height: 5rem;
`;

export const ButtonMore = styled.a`
  width: 10rem;
  height: 4rem;
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 1rem;
  right: 2rem;
  z-index: 60;
  text-decoration: none;
  color: #ffffff;
  background-color: #e62429;

  &::after {
    border-bottom-color: transparent;
    border-left-color: transparent;
    border-right-color: #000000;
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
    border-top-color: #000000;
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
