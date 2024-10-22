import styled from 'styled-components';

export const Container = styled.div`
  height: 100px;
  display: flex;
  background-color: #000; 
  box-shadow: 0 0 20px 3px;

  img {
  margin-left: 100px;
  height: 180px;
  width: 200px;
  margin-top:-45px;
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