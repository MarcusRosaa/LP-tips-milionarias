import { PlansCards } from "../PlansCards"
import { Container } from "./styles"

export const Plans = () => {
  return (
    <Container>
      <div className="wrapper">
        <h2>Planos</h2>
        <div className="line"></div>
        <p className="label">Veja abaixo os valores dos nossos bilhetes prontos!</p>

        <PlansCards />
      </div>
    </Container>
  )
}
