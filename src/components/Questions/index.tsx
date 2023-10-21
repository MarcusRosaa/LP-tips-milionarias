import { Container, Wrapper, Description, QuestionsWrapper, Question, Image, ShadowLayer } from "./styles"
import messiImg from '../../assets/messi.png'

export const Questions = () => {
  return (
    <Container>
      <Wrapper>
      <div className="questions-image-content">
        <Description>
          <h5>Principais Dúvidas!</h5>
          <p>Veja abaixo as principais duvidas dos nossos clientes a sua pode estar aqui</p>
        </Description>
        <QuestionsWrapper>
          <Question>
            <h5>O resultado é garantido?</h5>
            <p>Nós não garantimos resultados, perdas podem acontecer nesse mercado de apostas esportivas, porém caso perca temos nossa garantia com acesso ao grupo vip!</p>
          </Question>
          <Question>
            <h5>Qual casa de apostas usar?</h5>
            <p>Recomendamos usar a bet365.com temos clientes que usam outras casa como betano,kto etc… acredito que possa usar qualquer casa</p>
          </Question>
          <Question>
            <h5>A previsão é de qual esporte?</h5>
            <p>Trabalhamos fazem mais de 8 anos nos mercados de futebol, apenas futebol!</p>
          </Question>
          <Question>
            <h5>Preciso ter experiência?</h5>
            <p>Não, nós enviamos uma aposta pronta para você copiar com odd e probabilidade alta!</p>
          </Question>
        </QuestionsWrapper> 
      </div>
        <Image>
          <img src={messiImg} alt="Jogador messi driblando" />
        </Image>
      </Wrapper>
      <ShadowLayer className="shadow"/>
    </Container>
  )
}
