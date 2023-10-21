import { styled } from "styled-components";

export const Container = styled.div`
  padding: 64px 24px;
  
  @media (min-width: 768px) {
    padding: 104px 60px;
  }
  
  .wrapper {
    max-width: 1140px;
    margin: 0 auto;
  }

  h2 {
    font-size: 32px;
    margin-bottom: 20px;
    color: #1E1810;
    font-weight: 500;
    line-height: .8;

    @media (min-width: 768px) {
      font-size: 56px;
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

  .label {
    margin-bottom: 40px;
    color: #62615C;
    font-size: 14.5px;

    @media (min-width: 768px) {
      font-size: 16px;
    }
  }
`