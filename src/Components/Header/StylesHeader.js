import styled from 'styled-components';

export const Container = styled.div`
  height: 100px;
  display: flex;
  background-color: #000; 
  box-shadow: 0 0 20px 3px;

  img {
    margin-left: 80px;
    height: 180px;
    width: 200px;
    margin-top: -45px;
  }

  > svg {
    position: relative;
    color: #FFBC0E;
    width: 30px;
    height: 30px;
    margin-top: 32px;
    margin-left: 40px;
    cursor: pointer;
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