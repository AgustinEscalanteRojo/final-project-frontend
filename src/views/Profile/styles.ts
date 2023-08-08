import styled from 'styled-components'
import theme from '../../styles/theme';

export const PerfilContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 

`

export const Content = styled.div`
  margin-top: 18px;
  padding: 16px;
  color: ${theme.colors.white};
  display: flex;
  justify-content: center;
  
`;



export const ButtonController = styled.div`
  display: flex;
  flex-flow: row wrap;
  
  gap: 10px;
  margin-top: 120px;
  margin-right: 10px;
`
