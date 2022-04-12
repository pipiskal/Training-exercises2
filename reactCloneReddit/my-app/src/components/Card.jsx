import styled from "styled-components";
import Button from "./cardComponents/Button";
import SubCategoryList from "./cardComponents/sub_category_components/SubCategoryList";
import Tag from "./cardComponents/Tag";
import Title from "./cardComponents/Title";

const Wrapper = styled.div`
  background-color: #f5f5f5;

  display: flex;
  flex-direction: column;
`;

const ButtonWrapper = styled.div`
  height: 56px;
  // border: 1px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TagsContainer = styled.div`
    
    height: 50px;
    // border: 1px solid green;
    display: grid;
    grid-template-colums
    grid-auto-flow: column;
    align-items: center;
  `;

const Card = ({ tags }) => {
  return (
    <Wrapper>
      <Title />

      <SubCategoryList />

      <ButtonWrapper>
        <Button
          width={"286px"}
          height={"32px"}
          fontSize={"24px"}
          text={"View All"}
        ></Button>
      </ButtonWrapper>
      <TagsContainer>
        {tags.map((tag) => (
          <Tag text={tag} />
        ))}
      </TagsContainer>
    </Wrapper>
  );
};

export default Card;
