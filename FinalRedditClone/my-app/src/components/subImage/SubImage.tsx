import { Wrapper, CardTitle } from "./SubImage.styles";

type SubImageProps = {
  subImage: string;
};

const SubImage = ({ subImage }: SubImageProps): JSX.Element => {
  return (
    <Wrapper subImage={subImage}>
      <CardTitle>Today's Top Growing Communities</CardTitle>
    </Wrapper>
  );
};

export default SubImage;
