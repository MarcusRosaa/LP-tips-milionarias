import { ButtonContainer, Container } from "./styles"

import logo from '../../assets/logo.png';

export const MainBanner = () => {
  return (
    <Container>
      <div>
        <img src={logo} alt="Logo Tips Milionárias" />
        <h1>| Tips Milionárias</h1>
      </div>
      <div className="video"></div>
      <ButtonContainer>
        <button>
          SAIBA MAIS
        </button>
      </ButtonContainer>
    </Container>
  )
}
