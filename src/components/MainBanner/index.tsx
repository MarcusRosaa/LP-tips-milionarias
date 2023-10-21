import { ButtonContainer, Container, ShadowLayer, Wrapper } from "./styles"
import { Link } from 'react-scroll';

import logo from '../../assets/logo.png';

export const MainBanner = () => {
  return (
    <Container>
      <Wrapper>
        <div>
          <img src={logo} alt="Logo Tips Milionárias" />
          <h1>| Tips Milionárias</h1>
        </div>
        <div className="video"></div>
        <ButtonContainer>
          <Link to="about-container" smooth={true} duration={500}>
            <button>
              SAIBA MAIS
            </button>
          </Link>
        </ButtonContainer>
      </Wrapper>
      <ShadowLayer className="shadow"/>
    </Container>
  )
}
