import styled from "styled-components";

export const Container = styled.main`
  margin: 20px 15px;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Col = styled.div`
  flex: 1 0 0%;
  margin: 5px;
`;

export const Icon = styled.svg`
  stroke: #fff;
  width: 20px;
  height: 20px;
`;

export const Input = styled.input`
  padding: 5px;
  border: none;
`;

export const Button = styled.button`
  background: #52596d;
  width: 50px;
  cursor: pointer;
  border: none;
  padding: 5px;
  border-radius: 5px;
`;
