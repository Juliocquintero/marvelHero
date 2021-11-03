import styled from 'styled-components';

export const AppearancesList = styled.div`
  display: grid;
  /* grid-template-columns: auto; */
  grid-auto-flow: column;
  grid-auto-columns: 15rem;
  grid-template-rows: 22.5rem;
  /* justify-content: space-around; */
  margin: 1rem;
  padding: 1rem;
  overflow-x: auto;
  overscroll-behavior: contain;
  scroll-snap-type: x proximity;
  gap: 1rem;
  &::-webkit-scrollbar {
    height: 1rem; /* width of the entire scrollbar */
  }

  &::-webkit-scrollbar-track {
    background: #dddddd80; /* color of the tracking area*/
  }

  &::-webkit-scrollbar-thumb {
    background-color: #4c4c4d80; /*color of the scroll thumb*/
    border-radius: 1px; /* roundness of the scroll thumb */
    border: 3px solid transparent; /* creates padding around scroll thumb */
  }
`;

export const ListHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  justify-content: space-between;
`;

export const ListName = styled.span`
  font-size: 1.5rem;
  text-transform: uppercase;
  font-weight: bold;
`;
