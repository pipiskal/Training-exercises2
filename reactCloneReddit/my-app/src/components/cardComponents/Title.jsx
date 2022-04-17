import styled from "styled-components";

const Wrapper = styled.div`
  background-image: url(https://styles.redditmedia.com/t5_2qh8i/styles/bannerBackgroundImage_pxu0uuc6xlp81.jpg?format=pjpg&s=64f3a5341a23d64ae307c693525508070d129718);

  height: 80px;
  background-size: cover;
  position: relative;
  color: #fff;
  padding: 20px;
`;

const TitleInWrapper = styled.p`
  font-size: 18px;
  position: absolute;
  bottom: 10px;
  left: 20px;
  font-weight: 600;
`;

const Title = () => {
  return (
    <Wrapper>
      <TitleInWrapper>Top News Communities</TitleInWrapper>
    </Wrapper>
  );
};

export default Title;
