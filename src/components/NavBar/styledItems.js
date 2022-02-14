import styled from "styled-components";

export const Header = styled.header`
  padding: 2px 20px;
  background: #52596d;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Hero = styled.h1`
  width: 300px;
  display: flex;
  position: relative;
  span {
    width: 200px;
    font-size: 20px;
    display: flex;
    color: #fff;
  }
  svg {
    stroke: #fff;
    width: 30px;
  }
`;

export const Logo = styled.svg`
  stroke: #fff;
  width: 30px;
`;

export const SeachForm = styled.form`
  display: flex;
  width: 200px;
  background: #fff;
  border: solid 1px #fff;
  border-radius: 5px;
`;

export const Input = styled.input`
  padding: 5px;
  border: none;
  display: inline-block;
  width: 80%;
`;

export const SearchButton = styled.button`
  background: #52596d;
  width: 50px;
  cursor: pointer;
  border: none;
  padding: 5px;
  border-radius: 5px;
  display: inline-block;
`;
