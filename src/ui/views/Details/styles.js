import styled from 'styled-components';
import { COLORS, SIZES } from '../../../styles/constant';

export const DetailsWrapper = styled.div`
  background-color: ${COLORS.black};
  color: ${COLORS.withe};
  position: relative;
`;

export const ReturnButton = styled.button`
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
`;
