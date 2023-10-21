import { ButtonContainer, Container, ShadowLayer, Wrapper } from "./styles"

export const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <h2>Cuidado!</h2>
        <p>Amigos nós não atendemos no instagram,facebook ou whatsapp. Temos relatos de clientes que estão sendo enganados por pessoas que estão se passando por nós, atendemos apenas no telegram.</p>
        <h6>Ricardo</h6>
        <p>Tips Milionárias - Telegram</p>

        <ButtonContainer>
          <a href="https://t.me/astipsmilionarias" target="_blank">
            <button>
              ENTRAR NO GRUPO
            </button>
          </a>
        </ButtonContainer>
      </Wrapper>
      <ShadowLayer className="shadow"/>
    </Container>
  )
}
