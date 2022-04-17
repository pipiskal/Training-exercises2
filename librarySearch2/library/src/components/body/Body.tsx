import { Wrapper } from "./Body.styled";
import { BookType } from "./../../App";
import Input from "./../input/Input";
import Button from "./../button/Button"
import Select from 

type BodyPropsType = {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onInputChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSelectChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  data?: BookType[];
};

const Body = ({
  onClick,
  onInputChange,
  onSelectChange,
  data = [],
}: BodyPropsType): JSX.Element => {
  return (
    <Wrapper>
     
     
    </Wrapper>
  );
};

export default Body;
