import { ButtonContainer, Container, ImageContainer } from "./styles"
import oddsImages from '../../assets/resultados.png'

export const About = () => {
  return (
    <Container>
      <div className="wrapper">
        <h2>O que é a Tips Milionárias?</h2>
        <div className="line"></div>
        <p>Ricardo é o fundador da Tips Milionárias, focado em trazer as melhores analises do mercado esportivo, iniciamos nossa jornada em 2018, buscamos os melhores analistas lucrativos em odds altas de fora do Brasil, montamos uma equipe com 12 pessoas e hoje atendemos todo o Brasil, já são mais de 2 mil clientes!</p>

        <ButtonContainer>
          <a href="https://google.com.br">
            <button>
              ENTRAR NO GRUPO OFICIAL
            </button>
          </a>
        </ButtonContainer>

        <ImageContainer>
          <img src={oddsImages} alt="Odds altas" />
        </ImageContainer>
      </div>
    </Container>
  )
}
