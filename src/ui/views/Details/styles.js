import styled from 'styled-components';

export const DetailsWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.95);
  color: #ffffff;
  position: relative;
`;

export const ReturnButton = styled.button`
  color: #ffffff;
  font-size: 5rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
  position: fixed;
  z-index: 999;
  bottom: 2.5rem;
  right: 1.5rem;
  @media (min-width: 724px) {
    bottom: auto;
    top: 5.5rem;
  }
`;
