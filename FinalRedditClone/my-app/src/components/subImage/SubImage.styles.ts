import styled from "styled-components";

export const Wrapper = styled.div<{ subImage: string }>`
  position: relative;
  height: 80px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5)),
    url(${(props) => props.subImage});
  background-position: center;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

export const CardTitle = styled.span`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 15px;
  color: white;
  position: absolute;
  bottom: 10px;
  left: 14px;
  font-weight: 550; ;
`;
