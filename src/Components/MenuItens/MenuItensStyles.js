import styled from 'styled-components';
import ('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: black; 
  font-family: "Montserrat", sans-serif;
  font-weight: 100;
  font-size: 40px;
  color: white;
  padding: 30px;
  cursor: pointer;
  border-radius: 10px;
  margin: 0 15px 20px;

  > svg {
    margin: 0 20px;
  }

  &:hover {
    background-color: #1A202C;
  }
`;