import { Wrapper, Option, Span } from "./Select.Styles";

type SelectPropsType = {
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Select = ({ onChange }: SelectPropsType): JSX.Element => {
  return (
    <Wrapper onChange={onChange}>
      <Option>
        <Span>Relevant</Span>
      </Option>
      <Option>
        <Span>Points</Span>
      </Option>
    </Wrapper>
  );
};

export default Select;
