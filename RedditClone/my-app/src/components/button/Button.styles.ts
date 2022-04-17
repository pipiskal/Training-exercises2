import styled from "styled-components";

const Wrapper = styled.button`
  font-family: Arial, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(0, 121, 211);
  border: 1px solid rgb(0, 121, 211);
  color: #fff;
  font-weight: 700;
  border: none;
  border-radius: 9999px;
  cursor: pointer;
  // line-height: 32px;

  &:hover {
    background-color: rgb(0, 131, 221);
  }
`;

export { Wrapper };
