import Globalstyled from "./components/config/Globalstyled";
import Styled from "./components/Styled";
import Nav from "./components/Nav";
import "./App.css";
import Container from "./components/Container";
import { useState } from "react";
import GridIcon from "./components/GridIcon";

//imagens
import fundo from "./image/fundo.jpg";
import Icons from "./components/Icons";
import FormatImage from "./components/FormatImage";
import GridItens from "./components/GridItens";
import Image from "./components/ImageStyled";
import CapitainAmerica from "./image/CapitainAmerica.jpg";
import IronMan from "./image/IronMan.jpg";
import SpiderMan from "./image/SpiderMan.jpg";

//Textos
import Text from "./components/TextGrid";
import FormatText from "./components/FormatText";

//Footer
import Footer from "./components/Footer";
import FooterText from "./components/FooterText";
import FormatFooter from "./components/FormatFooter";
import ButtonTheme from "./components/ButtonThemeStyled";
import AlignNav from "./components/AlignNav";
import ColorTheme from "./components/ColorTheme";


function App() {
  const [blackMod, setBlackMode] = useState<boolean>(false);
  function blackMode() {
    setBlackMode(!blackMod);
  }

  return (
    <>
    <Container>
    <Globalstyled />
      <Styled>
        <ColorTheme backgroundcolor={blackMod ? "#050505" : "#f8f9fb"}
        color={blackMod ? "#f8f9fb" : "#050505"}> 

        <Nav backgroundImage={fundo}>
          <AlignNav>
            <h1>Heróis da Marvel</h1>
            <ButtonTheme onClick={blackMode}> Alterar Tema</ButtonTheme>
          </AlignNav>
        </Nav>
        <GridIcon>
          <Icons
            icon={"fa-desktop"}
            title={"Galeria de heróis da Marvel"}
            text={"IronMan"}
          />
          <Icons
            icon={"fa-buffer"}
            title={"Galeria de heróis da Marvel"}
            text={"Capitain América"}
          />
          <Icons
            icon={"fa-check"}
            title={"Galeria de heróis da Marvel"}
            text={"Spider Man"}
          />
        </GridIcon>
        <GridItens>
          <FormatText>
            <Text />
          </FormatText>
          <FormatImage>
            <Image backgroundImage={CapitainAmerica} />
          </FormatImage>
        </GridItens>

        <GridItens>
          <FormatImage>
            <Image backgroundImage={IronMan} />
          </FormatImage>
          <FormatText>
            <Text/>
          </FormatText>
        </GridItens>

        <GridItens>
          <FormatText>
            <Text />
          </FormatText>
          <FormatImage>
            <Image backgroundImage={SpiderMan} />
          </FormatImage>
        </GridItens>
        <Footer>
          <FormatFooter>
            <FooterText />
          </FormatFooter>
        </Footer>
        </ColorTheme>
      </Styled>
    </Container>
    </>
  );
}

export default App;
