import { Container, Card, Price, Installments, ButtonContainer, ShadowLayer, Wrapper } from "./styles"
import { BiChevronRight, BiChevronsRight } from 'react-icons/bi';

export const PlansCards = () => {
  return (
    <Container>
      <Wrapper>
        <Card>
          <h6>1 Previsão </h6>
          <div className="list">
            <div className="description-wrapper">
              <div className="icon-container"><BiChevronRight/></div>
              <p>
                Recebe 1 bilhete com Odd 6
              </p>
            </div>
            <div className="description-wrapper">
              <div className="icon-container"><BiChevronRight/></div>
              <p>
                Enviamos 1 bilhete e em caso de perdas enviamos no dia seguinte um novo bilhete de garantia
              </p>
            </div>
            <div className="description-wrapper">
              <div className="icon-container"><BiChevronsRight/></div>
              <p>
                Caso a aposta de garantia perca, você recebe um acesso ao nosso grupo vip totalmente grátis!
              </p>
            </div>
            
          </div>

          <Price>R$390,00</Price>
          <Installments>ou 12x 39,86</Installments>

          <ButtonContainer>
            <a href="https://go.perfectpay.com.br/PPU38CNBB1C">
              <button>
                COMPRAR
              </button>
            </a>
          </ButtonContainer>
        </Card>
        <ShadowLayer className="shadow"/>
      </Wrapper>

      <Wrapper>
        <Card>
          <h6>2 Previsões </h6>
          <div className="list">
            <div className="description-wrapper">
              <div className="icon-container"><BiChevronRight/></div>
              <p>
                2 bilhetes com Odd 6 cada um
              </p>
            </div>
            <div className="description-wrapper">
              <div className="icon-container"><BiChevronRight/></div>
              <p>
                Muito Alta probabilidade de vencer!
              </p>
            </div>
            <div className="description-wrapper">
              <div className="icon-container"><BiChevronRight/></div>
              <p>
                Enviamos 2 bilhetes e em caso de não vencer, enviamos mais 2 bilhetes como garantia!
              </p>
            </div>
              
            <div className="description-wrapper">
              <div className="icon-container"><BiChevronsRight/></div>
              <p>
                Caso a aposta de garantia perca, você recebe um acesso ao nosso grupo vip totalmente grátis!
              </p>
            </div>
          </div>

          <Price>R$295,00 - Cada</Price>
          <Installments>Compre 2 e ganhe 190 reais de desconto</Installments>

          <ButtonContainer>
            <a href="https://go.perfectpay.com.br/PPU38CNBI8O">
              <button>
                COMPRAR
              </button>
            </a>
          </ButtonContainer>
        </Card>
        <ShadowLayer className="shadow"/>
      </Wrapper>
    </Container>
  )
}
