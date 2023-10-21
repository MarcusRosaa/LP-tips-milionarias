import { Analysts, Container, Description, Previsions, Wrapper, ResponsiveContainer, Guarantee } from "./styles"

import moneyPile from '../../assets/money-mount.png'
import dollarSymbol from '../../assets/simbolo-do-dolar.png'
import analystsImg from '../../assets/analistas.jpg'

export const HowItWork = () => {
  return (
    <Container>
      <Wrapper>
        <h2>Como funciona?</h2>
        <div className="line"></div>
        
        <ResponsiveContainer>
          <div className="half">
            <Description>
                <p>Temos analistas nas principais ligas do mundo com 8 anos de experiência e informações privilegiadas, nós analisamos as ligas,equipes,jogadores e com nosso método montamos um bilhete pronto para você copiar com alta segurança e fechamos o dia com +70%</p>
                <p>Enviamos apostas com probabilidade alta e montamos com odd 6 onde você ganha 6 vezes o valor que apostar</p>
                <p>Exemplo: <br/> Aposta R$100 <br /> Ganha R$600 ✅</p>
              </Description>

              <Previsions>
                <h5>
                  Previsões de Alta Qualidade!
                </h5>
                <div className="images">
                  <img src={dollarSymbol} alt="Símbolo do dólar" />
                  <img src={moneyPile} alt="Pilha de dinheiro" />
                </div>
                <p>
                  Nós não apostamos com o seu dinheiro! Trabalhamos apenas prestando um serviço de analise de jogos, vamos enviar nossa analise para você!
                  <br/><br/>
                  Você irá receber nossa analise no seu telegram após o pagamento, iremos enviar todos os detalhes de onde apostar, quais times e mercados de apostas, você precisa apenas ter uma conta em uma casa de apostas para copiar nossa analise. Na sua casa você pode apostar qualquer valor recomendamos o mínimo de 150 reais para ter um bom lucro!
                </p>
              </Previsions>
          </div>

          <Analysts>
            <img src={analystsImg} alt="Analistas" />
            <h5>Analistas Profissionais</h5>
            <p>
              Nós trabalhamos com uma grande equipe de 12 analistas profissionais no mercado de apostas, só trabalhamos com futebol! ⚽️
              <br />
              <br />
              Estamos focados o dia inteiro para trazer as melhores entradas para você!
            </p>
          </Analysts>
        </ResponsiveContainer>


        <Guarantee>
          <ResponsiveContainer>
            <Description>
              <h2>Qual a garantia?</h2>
              <div className="line"></div>
              <p>Nossa garantia funciona assim, caso a aposta perca enviaremos no dia seguinte uma nova aposta grátis de garantia, se a garantia também perder coisa que raramente acontece você recebe um acesso ao nosso grupo vip!</p>
              <p>Grupo vip as vagas estao encerradas, estamos dando uma vaga apenas para quem perder a aposta de garantia!</p>
            </Description>
            <Description>
              <h2>O que tem no grupo vip?</h2>
              <div className="line"></div>
              <p>Dentro do grupo vip nós postamos todos os dias às 21 horas os jogos dos bilhetes para você apostar, as partidas acontecem no dia seguinte, enviamos os mesmos jogos dos bilhetes que são postado o resultado final no grupo free!</p>
              <p>O acesso ao grupo vip é vitalicio, ou seja, para sempre e você não paga nada!</p>
            </Description>
          </ResponsiveContainer>
        </Guarantee>
      </Wrapper>
    </Container>
  )
}
