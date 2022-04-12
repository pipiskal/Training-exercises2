import { Wrapper, Span } from "./Button.styles";

type ButtonPropsType = {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Button = ({ onClick }: ButtonPropsType): JSX.Element => {
  return (
    <Wrapper onClick={onClick}>
      <Span>Search</Span>
    </Wrapper>
  );
};

export default Button;
