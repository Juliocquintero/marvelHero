import styled from 'styled-components';
import { COLORS, FONTSIZES, SIZES } from '../../../styles/constant';

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  height: calc(${SIZES.xxlarge} * 1.5);
  background-color: ${COLORS.redMarvel};
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 720px) {
    max-width: 100%;
  }
`;

export const InnerLines = styled.div`
  height: 80%;
  width: 95%;
  border: 2px solid ${COLORS.lowWithe};
  color: ${COLORS.withe};
  display: flex;
  align-items: center;
  justify-content: center;
  & h1 {
    font-size: ${FONTSIZES.title};
    text-align: center;
  }
  @media (min-width: 720px) {
    width: 99%;
  }
`;
