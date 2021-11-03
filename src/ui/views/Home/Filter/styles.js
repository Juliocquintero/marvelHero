import styled from 'styled-components';

export const FilterWrapper = styled.div`
  width: 100%;
  min-width: 320px;
  background-color: #ffffff;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
export const Filter = styled.input`
  height: 60%;
  width: 60%;
  outline: none;
  border-radius: 0.5rem;
  border: 0.25rem solid #202020;
  padding-left: 1rem;
  text-overflow: ellipsis;
  @media (min-width: 720px) {
    width: 40%;
  }
`;

export const SearchButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  position: absolute;
  right: 23%;
  @media (min-width: 720px) {
    right: 31%;
  }
`;
