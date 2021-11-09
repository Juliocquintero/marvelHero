import styled from 'styled-components';
import { COLORS } from '../../../styles/constant';

export const FilterWrapper = styled.div`
  width: 100%;
  min-width: 320px;
  opacity: ${(props) => (props.searchIsActive ? 100 : 0)};
  top: ${(props) => (props.searchIsActive ? '-100% ' : '0')};
  transition: all ease-in-out 0.35s;
  height: ${(props) => (props.searchIsActive ? '60px ' : '0')};
  position: relative;
  display: flex;
  justify-content: center;
  & div {
    background-color: ${COLORS.withe};
    height: 100%;
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export const Filter = styled.input`
  height: 60%;
  width: 60%;
  outline: none;
  border-radius: 0.5rem;
  border: 0.25rem solid ${COLORS.lowBlack};
  padding-left: 1rem;
  text-overflow: ellipsis;
  @media (min-width: 720px) {
    width: 40%;
  }
`;

export const ListSearch = styled.ul`
  position: absolute;
  top: 5rem;
  width: 60%;
  margin: 0 auto;
  z-index: 999;
  list-style: none;
  max-height: 15rem;
  overflow: auto;
  @media (min-width: 720px) {
    width: 40%;
  }
`;
