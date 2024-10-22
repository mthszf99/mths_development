import styled from 'styled-components';

export const Container = styled.div`
  background-color: rgba(0,0,0,0.9);
  position: fixed;
  height: 100%;
  top: 0px;
  left: 0px;
  width: 300px;
  left: ${props => props.menu ? '0' : '-100%'};
  animation: showMenu .4s;

  Link {
  text-decoration: none;
  }

  > svg {
    position: fixed;
    color: white;
    width: 30px;
    height: 30px;
    margin-top: 32px;
    margin-left: 32px;
    cursor: pointer;
  }

  @keyframes showMenu {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 300px;
    }
  }
`;

export const Content = styled.div`
  margin-top: 100px;
`;