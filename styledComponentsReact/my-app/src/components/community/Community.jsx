import Button from "../button/Button";
import {
  Li,
  AlignContent,
  Span,
  SubPhoto,
  Arrow,
  ButtonContainer,
} from "./StyledCommunity";

const Community = ({ index, text, showButton }) => {
  return (
    <Li>
      <AlignContent>
        <Span>1</Span>
        <Arrow>⬆️</Arrow>
        <SubPhoto></SubPhoto>
        <Span>r/greece</Span>
      </AlignContent>

      <ButtonContainer>
        <Button fontSize={"12px"} text={"Join"} padding={"5px 16px"}></Button>
      </ButtonContainer>
    </Li>
  );
};

export default Community;
