import { styled } from "styled-components";

export const Container = styled.div`
  background-color: #000;
  padding: 64px 24px;
  color: #FFF;
  
  .wrapper {
    max-width: 1140px;
    margin: 0 auto;
  }

  @media (min-width: 768px) {
    padding: 104px 60px 160px;
    
  }

  h2 {
    font-size: 32px;
    margin-bottom: 20px;
    font-weight: 400;

    @media (min-width: 768px) {
      font-size: 56px;
      font-weight: 500;
    }
  }

  .line {
    border-bottom: 3px solid #F9C349;
    width: 56px;
    margin-bottom: 20px;

    @media (min-width: 768px) {
      width: 80px;
    }
  }

  p {
    margin-bottom: 34.5px;
    line-height: 28px;
    font-size: 14.5px;


    @media (min-width: 768px) {
      max-width: 50%;
      font-size: 16px;
    }
  }
`

export const ButtonContainer = styled.div`
  margin-bottom: 20px;

  button {
    font-size: 12px;
    letter-spacing: 2px;
    font-weight: 500;
    padding: 16px 40px;
    background-color: #1670AA;
    color: #FFF;
  }
`

export const ImageContainer = styled.div`
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
  }

  img {
    width: 100%;
    height: auto;
    max-width: 500px;
  }
`;