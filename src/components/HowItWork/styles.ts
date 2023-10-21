import { styled } from "styled-components";

export const Container = styled.div`
  padding: 64px 24px 0px 24px;

  @media (min-width: 768px) {
    padding-left: 60px;
    padding-right: 60px;
  }
`

export const Wrapper = styled.div`
  max-width: 1140px;
  margin: 0 auto;

  h2 {
    font-size: 32px;
    font-weight: 500;
    margin-bottom: 20px;

    @media (min-width: 1024px) {
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
`

export const Description = styled.div`
  p {
    color: #62615C;
    line-height: 28px;
    margin-bottom: 20px;
    font-size: 14.5px;

    @media (min-width: 1024px) {
      font-size: 16px;
    }
  }
`

export const Previsions = styled.div`
  margin: 48px 0 70px 0;

  h5 {
    font-size: 22px;
    margin-bottom: 16px;

    @media (min-width: 1024px) {
      font-size: 24px;
    }
  }

  .images {
    margin-bottom: 16px;
    
    img {
      width: 64px;
      height: auto;
      margin-right: 28px;
    }
  }

  p {
    color: #62615C;
    line-height: 28px;
    margin-bottom: 20px;
    font-size: 14.5px;

    @media (min-width: 1024px) {
      font-size: 16px;
    }
  }
`

export const Analysts = styled.div`
  @media (min-width: 1024px) {
    width: 50%;
  }

  h5 {
    font-size: 22px;
    margin-bottom: 16px;

    @media (min-width: 1024px) {
      font-size: 24px;
    }
  }

  img {
    width: 100%;
    max-width: 600px;
    height: auto;
    margin-bottom: 20px;
  }

  p {
    color: #62615C;
    line-height: 28px;
    margin-bottom: 20px;
    font-size: 14.5px;

    @media (min-width: 1024px) {
      font-size: 16px;
    }
  }
`

export const ResponsiveContainer = styled.div`
  @media (min-width: 1024px) {
    display: flex;
    gap: 55px;

    .half {
      width: 50%;
    }
  }
`

export const Guarantee = styled.div`
  padding: 64px 0 0 0;

  @media (min-width: 1024px) {
    padding: 120px 0;
  }
`