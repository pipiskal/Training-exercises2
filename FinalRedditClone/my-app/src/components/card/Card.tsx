import { Wrapper, ButtonWrapper, CommunityWrapper } from "./Card.styles";
import Tag from "../tag/Tag";
import { CommunityType, TagType } from "../../App";
import Button from "../button/Button";
import Community from "../community/Community";
import SubImage from "../subImage/SubImage";

type CardPropsTypes = {
  communities: CommunityType[];
  tags: TagType[];
  subImage: string;
};

// ego perimeno na paro ena Typo : TagType, CommunityType, string

const Card = ({ tags, communities, subImage }: CardPropsTypes): JSX.Element => {
  return (
    <Wrapper>
      <SubImage subImage={subImage} />

      {communities.map((community) => {
        return (
          <Community
            rank={community.rank}
            join={community.join}
            img={community.img}
            name={community.name}
          />
        );
      })}

      <ButtonWrapper>
        <Button
          text="View All"
          size="lg"
          kind="primary"
          onClick={() => window.open("link", "blank")}
        />
      </ButtonWrapper>

      <Tag tags={tags} />
    </Wrapper>
  );
};

export default Card;
