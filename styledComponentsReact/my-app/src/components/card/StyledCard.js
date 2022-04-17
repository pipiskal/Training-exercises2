import styled from "styled-components";

export const Card = styled.div`
  width: 310px;
  border: 1px solid rgb(26, 26, 27, 0.2);
  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.5);
  border-radius: 5px 5px 5px 5px; /*TL TR BR BL*/
`;

export const Ul = styled.ul`
  display: block;
  border-bottom: 1px solid rgb(26, 26, 27, 0.1);
  list-style: none;
`;

export const ButtonContainer = styled.div`
  padding: 12px;
  width: 286;
  background-color: white;
  // border: 1px solid green;
`;

export const TagContainer = styled.div`
  margin-top: 8px;
  margin-bottom: 20px;
  margin-left: 6px;
`;
