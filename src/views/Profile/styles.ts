import styled from 'styled-components';
import theme from '../../styles/theme';

export const PerfilContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const Content = styled.div`
  margin-top: 200px;
  padding: 0 100px; 
  color: ${theme.colors.white};
  text-align: center; 
`;

export const ButtonController = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 10px;
  margin-top: 50px; 
`;

export const Tittle = styled.h1`
  color: ${theme.colors.buff};
  font-size: 60px;
  font-style: italic;
  text-align: center;
  margin: 0; 
`;

export const AvatarContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 150px; 
`;

