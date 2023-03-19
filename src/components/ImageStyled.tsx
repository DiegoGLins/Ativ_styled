import styled from "styled-components";

interface ImageProps {
    backgroundImage: string;
  }

const Image = styled.div<ImageProps>`
background: ${(props) => `url(${props.backgroundImage})`};
background-size: cover;
background-repeat: no-repeat;
height: 100%;
width: 100%;
`;

export default Image;



  
   
  