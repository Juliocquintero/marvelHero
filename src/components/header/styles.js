import styled from 'styled-components';
import { COLORS, SIZES } from '../../styles/constant';

export const HeaderContainer = styled.header`
  width: 100%;
  min-width: 320px;
  background-color: ${COLORS.lowBlack};
  height: calc(${SIZES.xlarge} * 2);
  display: flex;
  justify-content: center;
  align-items: center;
  & div {
    justify-self: flex-start;
  }
`;
