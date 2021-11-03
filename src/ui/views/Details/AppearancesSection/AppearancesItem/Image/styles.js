import styled from 'styled-components';

export const ImageWrapper = styled.figure`
  /* width: 15rem; */
  /* height: 15rem; */
  display: grid;
  grid-template-rows: 1fr;
  align-items: center;
  position: relative;
  cursor: pointer;
  border: 0.3rem solid black;
  &:hover > figcaption {
    opacity: 100;
    top: 0;
    background-color: #00000090;
  }
`;

export const Caption = styled.figcaption`
  text-overflow: ellipsis;
  font-size: 1.5rem;
  line-height: 1.5rem;
  height: 100%;
  position: absolute;
  vertical-align: middle;
  padding-top: 50%;
  padding: 50% 1rem 0 1rem;
  font-weight: bold;
  top: -100%;
  opacity: 0;
  transition: all 0.3s;
  color: #ffffff;
  width: 100%;
`;

export const Img = styled.img`
  object-fit: fill;
  width: 100%;
  min-height: 22.5rem;
  height: 100%;
  border: 1px solid black;
  box-shadow: 0 7px 17px -8px rgb(0 0 0 / 80%);
`;
