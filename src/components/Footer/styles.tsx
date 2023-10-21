import { styled } from "styled-components";
import backgroundImage from '../../assets/fixed-banner-background.png'

export const Container = styled.div`
  padding: 64px 24px 64px 24px;
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: right top;
  position: relative;

  @media (min-width: 768px) {
    padding: 104px 60px;
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

export const Wrapper = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1140px;
  margin: 0 auto;

  @media (min-width: 768px) {
    padding: 64px 0;
  }

  h2 {
    font-size: 32px;
    margin-bottom: 30px;
    color: #FFF;
  }

  h6 {
    font-size: 18px;
    margin-bottom: 10px;
    color: #FFF;
    letter-spacing: 2px;
  }

  p {
    font-size: 14.5px;
    line-height: 25px;
    color: #FFF;
    margin-bottom: 25px;
    
    @media (min-width: 768px) {
      max-width: 50%;
    }
  }
`

export const ShadowLayer = styled.div`
  background-color: rgba(0,0,0,0.85);
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  z-index: 1;
  transition: ease-in 0.3s; 

  @media (min-width: 768px) {
    background-color: rgba(0,0,0,0.4);
  }
`