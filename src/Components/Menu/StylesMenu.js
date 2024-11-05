import styled from 'styled-components';

export const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.9);
  position: fixed;
  height: 100%;
  top: 0;
  left: 0;
  width: 300px;
  transform: ${({ menu }) => (menu ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 0.4s ease;
  z-index: 2;

  > svg {
    position: absolute;
    color: white;
    width: 30px;
    height: 30px;
    top: 32px;
    left: 32px;
    cursor: pointer;
  }
`;

export const Content = styled.div`
  margin-top: 100px;
`;
