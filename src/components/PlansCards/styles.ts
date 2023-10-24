import { styled } from "styled-components";
import grass from '../../assets/grass.jpg';

export const Container = styled.div`
  gap: 30px;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  h6 {
    letter-spacing: 1px;
    font-size: 39px;
    margin-bottom: 20px;
  }

  p {
    margin-bottom: 8px;
    padding-bottom: 8px;
    border-bottom: 1px solid rgba(255,255,255,0.08);
    line-height: 26px;
    font-size: 14.5px;

    @media (min-width: 768px) {
      font-size: 16px;
    }
  }

  .list p:last-child {
    border: none
  }
`
export const Wrapper = styled.div`
  position: relative;
  padding: 40px 24px 32px 24px;
  background-image: url(${grass});
  background-position: center right;
  background-size: cover;
  color: #FFF;  
  transition: ease-in 0.3s; 

  &:hover {
    .shadow {
      background-color: #1E1810;
      opacity: 0.8;
    }
  }

  @media (min-width: 768px) {
    padding: 64px 56px 40px 40px;
  }
`

export const Card = styled.div`
  position: relative;
  z-index: 2;

  .description-wrapper {
    display: flex;
    align-items: center;
  }

  .icon-container {
    display: flex;
    margin-bottom: 8px;
    padding-bottom: 8px;

    svg {
      font-size: 22px;
    }
  }

  p {
    display: flex;  
    align-items: center;
  }
`

export const Price = styled.h3`
  margin-top: 40px;
  margin-bottom: 12px;
  color: #F9C349;
  font-size: 39px;
  font-weight: 500;
  line-height: 1px;
`

export const Installments = styled.h4`
  color: #F9C349;
  font-size: 19px;
  font-weight: 500;
`

export const ButtonContainer = styled.div`
  margin-top: 28px;
  button {
    font-size: 12px;
    letter-spacing: 2px;
    font-weight: 500;
    padding: 16px 40px;
    background-color: #058AAD;
    color: #FFF;
  }
`

export const ShadowLayer = styled.div`
  background-color: rgba(0,0,0,0.5);
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
