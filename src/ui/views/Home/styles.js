import styled from 'styled-components';
import { COLORS, FONTSIZES } from '../../../styles/constant';

export const HomeWrapper = styled.section`
  padding: 1rem;
  width: 100%;
  min-width: 320px;
  background-color: ${COLORS.black};
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 auto;
  /* background-color: #0b0930; */

  gap: 2rem;
  padding-top: 2rem;
  /* Actually is not used because used carrousel*/
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
