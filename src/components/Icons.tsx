import { FaDesktop, FaBuffer, FaRegCheckCircle } from "react-icons/fa";
import StyledIcons from "./StyledIcons";

interface IconsProps {
  icon: string;
  title: string;
  text: string;
}

interface NavIcons {
  [key: string]: any;
}

const navIcons: NavIcons = {
  "fa-desktop": FaDesktop,
  "fa-buffer": FaBuffer,
  "fa-check": FaRegCheckCircle,
};

const Icons = ({ icon, title, text }: IconsProps) => {
  const IconChoosed = navIcons[icon];

  return (
    <>
      <StyledIcons>
        <IconChoosed size='2rem'/>
        <h2>{title}</h2>
        <p>{text}</p>
      </StyledIcons>
    </>
  );
};

export default Icons;
