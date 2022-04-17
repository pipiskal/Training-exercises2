import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CommunityStyled = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 7px 0;
  width: 100%;
  border-bottom: 2px solid rgb(0, 0, 0, 0.06);
`;

export const CommunityProperties = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-left: 20px;
`;

export const Rank = styled.div`
  font-size: 14px;
  font-weight: bold;
`;

export const Arrow = styled.div``;

export const SubPhoto = styled.div<{ img: string }>`
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  height: 34px;
  width: 34px;
  /* border: 1px solid red; */
`;

export const SubTitle = styled.span`
  font-family: Georgia, "Times New Roman", Times, serif;
  font-size: 14px;
  font-weight: bold;
`;

export const ButtonWrapper = styled.div`
  margin-right: 11px; ;
`;
