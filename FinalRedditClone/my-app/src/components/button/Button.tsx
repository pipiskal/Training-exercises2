import { Wrapper, Text } from "./Button.styles";

// i should not pass height and width directly into the props
// it should have a property size : with different values sm, lg etc

//creating the Type that the button should accept

// We should pass less props --> size = font-size , padding ,

// kind --> primary secondary inverted

export type ButtonPropsTypes = {
  text: string;
  kind?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  type?: "button" | "submit";
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  expands?: boolean;
};

// Everything we pass on the styledComponent
// declaring that the button will be type ButtonProps
// text is mandatory the rest is option but we provide them some default options
// in case we dont pass them from the parent

// catching the props
const Button = ({
  text,
  kind = "primary",
  size = "sm",
  type = "button",
  expands = false,
  onClick,
}: ButtonPropsTypes): JSX.Element => {
  return (
    <Wrapper kind={kind} size={size} type={type}>
      <Text>{text}</Text>
    </Wrapper>
  );
};

export default Button;
