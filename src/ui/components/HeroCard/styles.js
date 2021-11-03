import styled from 'styled-components';

export const Card = styled.div`
  display: grid;
  grid-template-rows: 1fr 4rem;
  row-gap: 1rem;
  max-height: 310px;
  align-content: space-around;
  width: 100%;
  max-width: 280px;
  /* background-color: #ffffff30; */
  background-image: linear-gradient(
    0,
    #05050590 0,
    #06060690 15%,
    #08080890 30%,
    #0c0c0c90 50%,
    #10101090 75%,
    #18181890 80.67%,
    #20202090 100%
  );
  box-shadow: 0.5rem 1rem 20px -8px #00000090;
  margin: 0 auto;
  cursor: pointer;
`;

export const Image = styled.img`
  height: 100%;
  max-height: 260px;
  width: 100%;
  object-fit: fill;
`;

export const Name = styled.p`
  text-decoration: none;
  color: #fff;
  padding-left: 1rem;
  font-weight: bold;
  font-size: 1.8rem;
  line-height: 2rem;
  vertical-align: middle;
`;
