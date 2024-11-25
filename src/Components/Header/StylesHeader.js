import styled from 'styled-components';

export const Container = styled.div`
  height: 100px;
  display: flex;
  background-color: rgba(0, 0, 0, 0.8);
  box-shadow: 0 0 20px 3px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
  
  @media(max-width: 500px) {
    height: 70px;
  }

  img {
    margin-left: 80px;
    height: 180px;
    width: 200px;
    margin-top: -45px;

    @media (max-width: 700px) {
    margin-left: 150px;
    }
    @media (max-width: 580px) {
    margin-left: 100px;
    }
    @media (max-width: 500px) {
    width: 180px;
    height: 150px;
    }
    @media (max-width: 470px) {
    margin-left: 60px;
    }
    @media (max-width: 380px) {
    margin-left: 30px;
    }
  }


  > svg {
    position: relative;
    color: #FFBC0E;
    width: 30px;
    height: 30px;
    margin-top: 32px;
    margin-left: 40px;
    cursor: pointer;

    @media (max-width: 500px) {
      margin-top: 20px;
    }
  }
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;