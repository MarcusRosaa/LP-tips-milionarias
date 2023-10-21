import { Container, Card, Price, Installments, ButtonContainer, ShadowLayer, Wrapper } from "./styles"
import { BiChevronRight, BiChevronsRight } from 'react-icons/bi';

export const PlansCards = () => {
  return (
    <Container>
      <Wrapper>
        <Card>
          <h6>1 Previsão </h6>
          <div className="list">
            <p>
              <div><BiChevronRight/></div>
              Recebe 1 bilhete com Odd 6
            </p>
            <p>
              <div><BiChevronRight/></div>
              Enviamos 1 bilhete e em caso de perdas enviamos no dia seguinte um novo bilhete de garantia
            </p>
            <p>
              <div><BiChevronsRight/></div>
              Caso a aposta de garantia perca, você recebe um acesso ao nosso grupo vip totalmente grátis!
            </p>
          </div>

          <Price>R$390,00</Price>
          <Installments>ou 12x 39,86</Installments>

          <ButtonContainer>
            <a href="https://google.com">
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
            <p>
              <div><BiChevronRight/></div>
              2 bilhetes com Odd 6 cada um
            </p>
            <p>
              <div><BiChevronRight/></div>
              Muito Alta probabilidade de vencer!
            </p>
            <p>
              <div><BiChevronRight/></div>
              Enviamos 2 bilhetes e em caso de não vencer, enviamos mais 2 bilhetes como garantia!
            </p>
            <p>
              <div><BiChevronsRight/></div>
              Caso a aposta de garantia perca, você recebe um acesso ao nosso grupo vip totalmente grátis!
            </p>
          </div>

          <Price>R$390,00</Price>
          <Installments>ou 12x 39,86</Installments>

          <ButtonContainer>
            <a href="https://google.com">
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
