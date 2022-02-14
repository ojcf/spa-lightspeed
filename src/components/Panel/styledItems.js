import styled from "styled-components";

export const PanelHeader = styled.h3`
  background: #52596d;
  border-radius: 5px 5px 0 0;
  padding: 5px;
  color: #fff;
  font-size: 16px;
  span {
    position: relative;
    bottom: 3px;
  }
`;

export const PanelContent = styled.div`
  width: 100%;
  background: #fff;
  padding: 20px;
  border-radius: 0 0 5px 5px;
  box-shadow: 0 1px 3px 0 #ccc, 0 1px 2px -1px #ccc;
  strong {
    padding-right: 10px;
  }
`;

export const PanelContainer = styled.section`
  width: 100%;
`;
