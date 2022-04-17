import styled from "styled-components";
import Button from "../button/Button";
import Tag from "../tag/Tag";
import StyledCard from "./StyledCard";

const TagWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-weight: 400;
  height: 46px;
  border: 1px solid black;
  padding: 0;
  padding-top: 0;
  padding-bottom: 12px;
`;

const Card = (): JSX.Element => {
  return (
    <StyledCard>
      <TagWrapper>
        <Tag></Tag>
      </TagWrapper>
    </StyledCard>
  );
};

export default Card;
