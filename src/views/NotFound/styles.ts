import styled from 'styled-components'
import theme from '../../styles/theme'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-family: Arial, sans-serif;
  background-color: ${theme.colors.transparentPurple};
`;

export const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 1rem;
`;

export const Message = styled.p`
  font-size: 1.5rem;
`;