import styled from 'styled-components';
import { COLORS, FONTSIZES } from '../../styles/constant';

export const HomeWrapper = styled.section`
  padding: 1rem;
  width: 100%;
  min-width: 320px;
  background-color: ${COLORS.black};
  height: 100%;
  min-height: 76.5vh;
  &::-webkit-scrollbar {
    display: none;
  }

  &::-webkit-scrollbar-track {
    display: none;
  }

  &::-webkit-scrollbar-thumb {
    display: none;
  }
`;

export const HTitle = styled.h1`
  font-size: 3.5rem;
  padding-left: 2rem;
  color: ${COLORS.withe};
`;

export const DefaultResult = styled.h2`
  color: ${COLORS.withe};
  font-size: ${FONTSIZES.title};
`;
