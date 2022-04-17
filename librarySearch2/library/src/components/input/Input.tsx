import { Wrapper } from "./Input.styles.";

type InputPropsType = {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ onChange }: InputPropsType): JSX.Element => {
  return <Wrapper placeholder="Search Something" onChange={onChange}></Wrapper>;
};

export default Input;
