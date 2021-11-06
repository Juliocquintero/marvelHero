import styled from 'styled-components';
import { COLORS, SIZES } from '../../../styles/constant';

export const LoaderContainer = styled.div`
  display: block;
  position: relative;
  width: ${SIZES.xlarge};
  height: ${SIZES.xxlarge};
  margin: 0 auto;

  & div {
    display: inline-block;
    position: absolute;
    left: 8px;
    width: 10px;
    background: ${COLORS.redMarvel};
    animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
  }
  & div:nth-child(1) {
    left: 8px;
    animation-delay: -0.24s;
  }
  & div:nth-child(2) {
    left: 24px;
    animation-delay: -0.12s;
  }
  & div:nth-child(3) {
    left: 40px;
    animation-delay: 0;
  }
  @keyframes lds-facebook {
    0% {
      top: 8px;
      height: 54px;
    }
    50%,
    100% {
      top: 24px;
      height: 32px;
    }
  }
`;
