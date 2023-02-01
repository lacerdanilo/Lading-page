import styled from "styled-components";

export const Conteiner = styled.button`
  background-color: #17a4d0;
  border: 1px solid #17a4d0;
  color: #fff;
  font-size: 14px;
  font-weight: 400;
  width: 200px;
  height: 60px;
  border-radius: 100px;
  margin-top: 50px;
  transition: all 0.25s ease-out;
  box-shadow: 0px 0px 17px -8px transparent;

  &:hover {
    background-color: #F8FDFF;
    color: #17a4d0;
    box-shadow: 0px 0px 17px -5px #17a4d0;
  }
`;
