import styled from "styled-components";

// background color when hovered  rgb(204, 204, 204);

const Span = styled.span`
  color: rgb(0, 121, 211);
  padding: 8px;
  border-radius: 15px;
  margin-left: 10px;
  background-color: rgb(234, 234, 234);
  font-weight: 600;
`;

const Tag = ({ text }) => {
  return <Span>{text}</Span>;
};

export default Tag;
