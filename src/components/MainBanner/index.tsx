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
        <div className="video">
          <iframe
              allowFullScreen
              src="https://scripts.converteai.net/4890008e-a86d-404c-acf2-8732008dd7ea/players/65369e71a1e7020009844a50/embed.html"
              id="ifr_65369e71a1e7020009844a50"
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              referrerPolicy="origin"
            ></iframe>
        </div>
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
