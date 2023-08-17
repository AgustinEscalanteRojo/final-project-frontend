import { styled } from 'styled-components'
import theme from '../../styles/theme';

export const Container = styled.header`
  display: flex;
  flex-flow: row;
  background-color: ${theme.colors.transparentBlack};
  justify-content: space-between;
  width: 100%;
  height: 90px;
  position: fixed;
`

export const ButtonController = styled.div`

  gap: 30px;
  margin: 20px;
  margin-top: 20px;
  margin-right: 10px;
`

