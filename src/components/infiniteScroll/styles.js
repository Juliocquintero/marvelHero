import styled from 'styled-components';

export const ScrollX = styled.div`
  display: grid;

  grid-auto-flow: column;
  grid-auto-columns: 15rem;
  grid-template-rows: 22.5rem;
  margin: 1rem;
  padding: 2rem;
  overflow-x: auto;
  overflow-y: hidden;
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

export const ScrollY = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: space-between;
  gap: 2rem;
  padding-top: 2rem;
  margin: 0 auto;
  min-height: 76.5vh;
  max-height: 83vh;
  overflow: auto;
  @media (min-width: 560px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 720px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(5, 1fr);
  }

  &::-webkit-scrollbar {
    width: 1rem; /* width of the entire scrollbar */
  }

  &::-webkit-scrollbar-track {
    background: #dddddd; /* color of the tracking area*/
  }

  &::-webkit-scrollbar-thumb {
    background-color: #4c4c4d; /*color of the scroll thumb*/
    border-radius: 1px; /* roundness of the scroll thumb */
    border: 3px solid transparent; /* creates padding around scroll thumb */
  }
`;
