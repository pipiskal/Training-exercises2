import { Card, Ul, ButtonContainer, TagContainer } from "./StyledCard";

import Button from "./../button/Button";
import Tag from "./../tag/Tag";
import ListItem from "./../community/Community";
import Title from "./../title/Title";

const FinalCard = ({ tags }) => {
  return (
    <Card>
      <Title />
      <Ul>
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </Ul>
      <ButtonContainer>
        <Button text={"View All"} width={"100%"} padding={"9px 10px"}></Button>
      </ButtonContainer>
      <TagContainer>
        {tags.map((name) => (
          <Tag text={name} />
        ))}
      </TagContainer>
    </Card>
  );
};

export default FinalCard;
