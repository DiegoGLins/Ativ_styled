import styled from "styled-components";

interface NavProps {
  backgroundImage: string;
  height?: string;
}

const Nav = styled.section<NavProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => `url(${props.backgroundImage})`};
  background-size: cover;
  width:100vw;
  height: ${(props) => props.height || "150px"};
  color: #ffffff;
  position: relative;
`;

export default Nav;