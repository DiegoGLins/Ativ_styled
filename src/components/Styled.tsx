import styled from "styled-components";

interface StyledProps {
  backgroundcolor?: string;
  color?: string;
}

const Styled = styled.div<StyledProps>`
  background-color: ${(props) => props.backgroundcolor || "#ffffff"};
  color: ${(props) => props.color || "#100"};
`;

export default Styled;
