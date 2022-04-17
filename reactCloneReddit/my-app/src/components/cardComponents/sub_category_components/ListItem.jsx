import styled from "styled-components";
import Button from "../Button";
const Li = styled.li`
  height: 50px;
  display: flex;
  justify-content: evenly;
  padding: 20px;
  margin-bottom: 3px;
  border-bottom: 1px solid rgb(204, 204, 204);
`;

const AlignSpans = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;

const Span = styled.span`
  display: inline-block;
  font-size: 16px;
  font-weight: 600;
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: end;
  align-items: center;
`;

const ListItem = ({ index, text, showButton }) => {
  return (
    <Li>
      <AlignSpans>
        <Span>{index}</Span>
        <Span>⬆️</Span>
        <Span>🦊</Span>
        <Span>{text}</Span>
      </AlignSpans>

      <ButtonContainer>
        {showButton ? (
          <Button
            width={"65px"}
            height={"30px"}
            fontSize={"15px"}
            text={"Join"}
          />
        ) : (
          <div></div>
        )}
      </ButtonContainer>
    </Li>
  );
};

export default ListItem;
