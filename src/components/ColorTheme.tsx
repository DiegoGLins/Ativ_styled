import styled from "styled-components";

interface ColorThemeProps {
  backgroundcolor?: string;
  color?: string;
}

const ColorTheme = styled.div<ColorThemeProps>`
  background-color: ${(props) => props.backgroundcolor || "#080808"};
  color: ${(props) => props.color || "#fffff"};
`;

export default ColorTheme;