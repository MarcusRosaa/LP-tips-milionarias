import { styled } from "styled-components";
import fixedBackgroundBanner from '../../assets/fixed-banner-background.png';
import fixedBackgroundBannerMobile from '../../assets/banner-fixed-mobile.png';

export const Container = styled.div`
  background-image: url(${fixedBackgroundBannerMobile});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center right;
  height: calc(100vh - 200px);
  color: #FFF;

  padding: 0 16px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    background-image: url(${fixedBackgroundBanner});
    background-position: center;
  }

  .video {
    width: 100%;
    max-width: 492px;
    height: 276px;
    background-color: #CCC;
  }

  div:first-child {
    display: flex;
  }

  h1 {
    font-size: 33.5px;
  }

  img {
    width: 40px;
    height: 40px;
    margin-right: 8px;
  }
`

export const ButtonContainer = styled.div`
  margin-top: 36px;

  button {
    font-size: 13px;
    border: none;
    background-color: #F9C349;
    padding: 16px 40px;
    letter-spacing: 1px;
  }
`;