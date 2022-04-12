import { CommunityType } from "../../App";
import Button from "../button/Button";
import {
  Wrapper,
  CommunityStyled,
  CommunityProperties,
  Rank,
  Arrow,
  SubPhoto,
  SubTitle,
  ButtonWrapper,
} from "./Community.styles";

const Community = ({ rank, join, img, name }: CommunityType): JSX.Element => {
  return (
    <>
      <Wrapper>
        <CommunityStyled>
          <CommunityProperties>
            <Rank>{rank}</Rank>
            {/* i should not add the arrow here implicitely i should simply
            pass a string like TOP, BOTTOM and css should be the one that renders the style          
          */}
            <Arrow>⬆️</Arrow>
            <SubPhoto img={img}></SubPhoto>
            <SubTitle>r/{name}</SubTitle>
          </CommunityProperties>
          <ButtonWrapper>
            {join ? (
              <Button
                text="Join"
                size="md"
                kind="primary"
                onClick={() => window.open("link", "blank")}
              />
            ) : (
              <></>
            )}
          </ButtonWrapper>
        </CommunityStyled>
      </Wrapper>
    </>
  );
};

export default Community;
