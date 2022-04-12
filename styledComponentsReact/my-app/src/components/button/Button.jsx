import ButtonStyled from "./ButtonStyled";
// pername sm md lg
// den bazoume custom width and height

const Button = (props) => (
  <ButtonStyled
    width={props.width}
    height={props.width}
    fontSize={props.fontSize}
    padding={props.padding}
  >
    {props.text}
  </ButtonStyled>
);

export default Button;
