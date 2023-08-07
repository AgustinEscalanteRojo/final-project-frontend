import styled from 'styled-components'
import theme from '../../styles/theme';

export const PerfilContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
  background-color: ${theme.colors.black};
`

export const Content = styled.div`
  margin-top: 18px;
  padding: 16px;
  color: ${theme.colors.white};
  display: flex;
  justify-content: center;

`;
