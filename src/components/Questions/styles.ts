import { styled } from "styled-components";
import backgroundImg from '../../assets/celebration.jpg'

export const Container = styled.div`
  padding: 64px 24px 0px 24px;
  background-image: url(${backgroundImg});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  @media (min-width: 768px) {
    padding-left: 60px;
    padding-right: 60px;
    background-attachment: fixed;
  }
`
export const Wrapper = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  position: relative;
  z-index: 2;

  @media (min-width: 768px) {
    display: flex;
    gap: 15px;

    .questions-image-content {
      display: flex;
      flex-wrap: wrap;
      width: 60%;
    }
  }
`
export const Description = styled.div`
  padding-bottom: 24px;
  margin-bottom: 24px;
  border-bottom: 1px solid rgba(255,255,255,0.3);
  width: 100%;

  h5 {
    font-size: 22px;
    color: #FFF;
    margin-bottom: 8px;
    text-align: center;
    letter-spacing: 1px;

    @media (min-width: 768px) {
      text-align: left;
      font-size: 24px;
    }
  }

  p {
    line-height: 26px;
    color: #FFF;
    font-size: 14.5px;
    text-align: center;

    @media (min-width: 768px) {
      text-align: left;
      font-size: 16px;
    }
  }
`
export const QuestionsWrapper = styled.div`
  @media (min-width: 768px) {
    display: flex;
    gap: 10px;
  }
  
  h5 {
    font-size: 22px;
    color: #FFF;
    margin-bottom: 8px;
    text-align: center;
    letter-spacing: 1px;

    @media (min-width: 768px) {
      text-align: left;
      font-size: 24px;
    }
  }

  p {
    line-height: 26px;
    color: #FFF;
    font-size: 14.5px;
    text-align: center;

    @media (min-width: 768px) {
      text-align: left;
      font-size: 16px;
      line-height: 30px;
    }
  }
`
export const Question = styled.div`
  margin-bottom: 20px;

  @media (min-width: 768px) {
    width: 25%;
  }
`
export const Image = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 45px;

  @media (min-width: 768px) {
    margin-top: 0;
    width: 35%;
  }

  img {
    width: 85%;
    height: auto;
    max-width: 300px;

    @media (min-width: 768px) {
      width: 100%;
    }
  }
`

export const ShadowLayer = styled.div`
  background-color: rgba(0,0,0,0.7);
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  z-index: 1;
  transition: ease-in 0.3s; 
`