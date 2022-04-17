import React from "react";
import { Wrapper } from "./Tag.styles";
import Button from "../button/Button";
import { TagType } from "../../App";

export type TagsType = {
  tags: TagType[];
};

const Tag = ({ tags }: TagsType): JSX.Element => {
  return (
    <Wrapper>
      {tags.map((tag, index) => (
        <Button key={index} text={tag.name} size="sm" kind="secondary" />
      ))}
    </Wrapper>
  );
};

export default Tag;
