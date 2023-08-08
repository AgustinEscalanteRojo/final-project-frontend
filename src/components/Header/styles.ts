import { styled } from 'styled-components'
import theme from '../../styles/theme';

export const Container = styled.header`
  display: flex;
  flex-flow: row;
  background-color: ${theme.colors.black};
  justify-content: space-between;
  width: 100%;
  height: 90px;
  position: fixed;
`
export const Title = styled.h1`
  color: white;
  text-shadow:
    1px 1px 3px black,
    1px 1px 5px black;
  margin-left: 20px;
`

export const ButtonController = styled.div`

  gap: 30px;
  margin: 20px;
  margin-top: 20px;
  margin-right: 10px;
`
