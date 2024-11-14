import styled from 'styled-components';

export const CardPort = styled.div`
  background-color: #232b3b;
  border-radius: 20px;
  width: 60%;
  box-shadow: 0px 5px 5px #28354e;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 20px;
  height: fit-content;
  padding: 10px;
`;

export const ImgCard = styled.img`
  width: 100%;
  border-radius: 20px;
  padding: 3px;
`;

export const TitleCard = styled.h2`
  color: #FFBC0E;
  font-size: 30px;
  font-family: "DotGothic16", sans-serif;
  padding: 5px;
`;

export const DescriptionCard = styled.p`
  font-size: 15px;
  font-family: "Montserrat", sans-serif;
  color: white;
  padding: 20px;
`;

export const CardPage = styled.a`
  background-color: #FFBC0E;
  width: 40%;
  padding: 10px;
  border-radius: 20px;
  text-decoration: none;
  font-family: "Montserrat", sans-serif;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;
