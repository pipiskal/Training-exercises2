import styled from "styled-components";

const ButtonStyle = styled.button`
  /* Adapt the width and height based on props */

  width: ${(props) => props.width};
  height: ${(props) => props.height};
  font-size: ${(props) => props.fontSize};

  background-color: rgb(0, 121, 211);
  border: 1px solid rgb(0, 121, 211);
  border-radius: 20px;
  font-weight: 600;
  color: white;
`;

const Button = (props) => {
  return (
    <ButtonStyle
      width={props.width}
      height={props.height}
      fontSize={props.fontSize}
    >
      {props.text ? props.text : "join"}{" "}
    </ButtonStyle>
  );
};

export default Button;
