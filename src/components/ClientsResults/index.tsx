import SimpleSlider from "../SimpleSlider"
import { Container, Wrapper } from "./styles"

export const ClientsResults = () => {
  return (
    <Container>
      <div className="background"></div>
      <Wrapper>
        <div className="description">
          <h2>Resultados de Clientes</h2>
          <div className="line"></div>
          <p>Temos vários relatos de clientes, que conseguiram ter ótimos resultados com nossas analises, veja abaixo alguns deles</p>
        </div>
        <div className="slider-container">
          <SimpleSlider />
        </div>
      </Wrapper>
    </Container>
  )
}
