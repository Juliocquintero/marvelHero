import styled from 'styled-components';
import { COLORS, FONTSIZES } from '../../../../styles/constant';

export const ItemWrapper = styled.li`
  background-color: ${COLORS.lowWithe};
  border-bottom: 1px solid #000000;
  padding: 0.5rem;
  cursor: pointer;
  & a {
    text-decoration: none;
    color: ${COLORS.black};
    font-size: ${FONTSIZES.cards};
  }
`;
