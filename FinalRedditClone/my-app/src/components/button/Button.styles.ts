import styled from "styled-components";
import { blue, white, grey } from "../../colors";

const options = {
  color: {
    primary: white,
    secondary: blue,
  },
  background: {
    primary: blue,
    secondary: grey,
  },
  border: {
    primary: `1px solid ${blue}`,
    secondary: `1px solid ${grey}`,
  },
  size: {
    sm: {
      font: "13px",
      fontWeight: 550,
      padding: "4px 7px",
    },
    md: {
      font: "13px",
      fontWeight: 600,
      padding: "4px",
      paddingLeftRight: "4px 13px",
    },
    lg: {
      font: "15px",
      fontWeight: 800,
      padding: "13px",
      paddingLeftRight: "6.2px 0px",
    },
  },
};

// we say that the Wrapper will only accept size, color and expands
// they are all mandatory  that why we provide default values
// at the Button component

export const Text = styled.span`
  white-space: nowrap;
`;

// HOW CAN I REWRITE THIS
export const Wrapper = styled.button<{
  kind: "primary" | "secondary";
  size: "sm" | "md" | "lg";
  type: "button" | "submit";
}>`
  font-size: ${(props) => options.size[props.size].font};
  font-weight: ${(props) => options.size[props.size].fontWeight};
  background-color: ${(props) => options.background[props.kind]};
  border: ${(props) => options.border[props.kind]};
  color: ${(props) => options.color[props.kind]};
  padding: ${(props) =>
    props.size === "sm"
      ? options.size[props.size].padding
      : options.size[props.size].paddingLeftRight};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 9999px;

  cursor: pointer;

  &:hover {
  }
`;

// /* background: rgb(${(props) => hoverColors[props.bgColor].rgb}); */
