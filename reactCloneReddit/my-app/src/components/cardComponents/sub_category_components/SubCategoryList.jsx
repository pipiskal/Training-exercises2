import styled from "styled-components";
import ListItem from "./ListItem";

const listItems = [
  { text: "r/news", showbutton: false },
  { text: "r/UpliftingNews", showbutton: false },
  { text: "r/technews", showbutton: true },
  { text: "r/olympics", showbutton: true },
  { text: "r/offbeat", showbutton: true },
];

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  column-gap: 10px;
`;

const SubCategoryList = () => {
  // <TagsContainer>
  //       {tags.map((tag) => (
  //         <Tag text={tag} />
  //       ))}
  //     </TagsContainer>

  return (
    <Ul>
      {listItems.map((item, index) => (
        <ListItem
          text={item.text}
          index={index + 1}
          showButton={item.showbutton}
        />
      ))}
    </Ul>
  );
};

export default SubCategoryList;
