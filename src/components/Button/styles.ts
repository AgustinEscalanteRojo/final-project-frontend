import styled from 'styled-components'
import type { Props } from './types'
import theme from '../../styles/theme'

export const CustomButton = styled.button<{ $variant: Props['variant'] }>`
  background-color: ${theme.colors.buff};
  color: ${theme.colors.white};
  padding: 10px 24px;
  border-radius: 30px;

  cursor: pointer;
  border: none;
  font-size: 13px;
  font-weight: bold;
  margin-top: 100px;
  text-transform: uppercase;
  transition: all 0.3s ease-in-out;
  min-width: 130px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: ${theme.colors.black};
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 8px ${theme.colors.blue700};
  }
`
