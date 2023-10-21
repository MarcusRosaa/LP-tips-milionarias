import { styled } from "styled-components";

import circle from '../../assets/ring-stroke.svg'

export const Container = styled.div`
  padding: 64px 24px 64px 24px;

  @media (min-width: 768px) {
    padding-left: 60px;
    padding-right: 60px;
    position: relative;

    .background {
      background-image: url(${circle});
      background-repeat: no-repeat;
      background-position: right center;
      background-size: 64% auto;
      opacity: 0.24;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      right: 20px;
    }
  }

  h2 {
    font-size: 32px;
    margin-bottom: 20px;

    @media (min-width: 768px) {
      font-size: 56px;
    }
  }

  p {
    color: #62625C;
    line-height: 28px;
    font-size: 14.5px;
    margin-bottom: 30px;

    @media (min-width: 768px) {
      font-size: 16px;
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
`

export const Wrapper = styled.div`
  max-width: 1140px;
  margin: 0 auto;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: left;
    gap: 20px;

    .slider-container {
      width: 50%;
    }

    .description {
      width: 30%;
    }
  }
`