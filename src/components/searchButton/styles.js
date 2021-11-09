import styled from 'styled-components';
import { COLORS, SIZES } from '../../styles/constant';

export const Button = styled.button`
  font-size: ${(props) => (props.section === 'header' ? SIZES.large : SIZES.medium)};
  color: ${(props) => (props.section === 'header' ? COLORS.withe : COLORS.black)};
  background: transparent;
  border: none;
  cursor: pointer;
  position: absolute;
  outline: none;
  right: ${(props) => (props.section === 'header' ? '10%' : '25%')};
  @media (min-width: 720px) {
    right: ${(props) => (props.section === 'header' ? '5%' : '31%')};
  }
`;
