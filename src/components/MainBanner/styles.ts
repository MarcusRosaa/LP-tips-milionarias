import { styled } from "styled-components";
import fixedBackgroundBanner from '../../assets/fixed-banner-background.png';
import fixedBackgroundBannerMobile from '../../assets/banner-fixed-mobile.png';

export const Container = styled.div`
  background-image: url(${fixedBackgroundBannerMobile});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center right;
  height: calc(100vh - 80px);
  color: #FFF;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  padding: 0 16px;

  @media (min-width: 768px) {
    background-image: url(${fixedBackgroundBanner});
    background-position: center;
    background-attachment: fixed;
  }

  .video {
    width: 100%;
    max-width: 700px;
    padding: 54% 0 0 0;
    position: relative;

    @media (min-width: 768px) {
      height: 400px;
      padding: 0;
    }

    iframe {
      border: none;
      border-radius: 12px;
      border-color: #D5D5D5;
      border-style: solid;
      border-width: 4px;
      background-color: #D5D5D5;
      @media (min-width: 768px) {
        border-width: 8px;
        border-radius: 28px;
      }
    }

    .thumbnail {
      width: 100%;
      height: auto;
      margin: 0;
      border-radius: 30px;
    }
  }

  h1 {
    font-size: 33.5px;
    @media (min-width: 768px) {
      font-size: 65px;
    }
  }

  img {
    width: 50px;
    height: 50px;
    margin-right: 8px;
    margin-bottom: 6px;

    @media (min-width: 768px) {
      width: 75px;
      height: 75px;
      margin-bottom: 12px;
    }
  }
`
export const Wrapper = styled.div`
  position: relative;
  z-index: 2;

  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div:first-child {
    display: flex;
    align-items: center;
  }
`

export const ButtonContainer = styled.div`
  margin-top: 36px;

  button {
    font-size: 13px;
    background-color: #F9C349;
    padding: 16px 40px;
    letter-spacing: 1px;
    font-weight: 500;
  }
`;

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

export const PlayVideo = styled.div`
  border-style: solid;
  border-width: 16px 0px 16px 26px;
  border-color: transparent transparent transparent white;
  margin-left: 6px;
`
