import styled from "styled-components";

export const Li = styled.li`
  border-bottom: 2px solid rgb(26, 26, 27, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;

  &:last-child {
    border: 0;
  }
`;

export const AlignContent = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-left: 25px;
`;

export const Span = styled.span`
  font-size: 16px;
  font-weight: 600;
`;

export const SubPhoto = styled.div`
  background-image: url(https://styles.redditmedia.com/t5_2qh8i/styles/communityIcon_ogwevv6d9yg81.png);
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  /* border: 1px solid red; */
`;

export const Arrow = styled.div`
  display: inline-block;
  font-size: 16px;
  font-weight: 600;
`;

export const ButtonContainer = styled.div`
  margin-right: 13px;
`;
