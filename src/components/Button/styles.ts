import styled from 'styled-components'
import type { Props } from './types'

export const CustomButton = styled.button<{ $variant: Props['variant'] }>`
  background-color: pink;
  color: red;

  border-radius: 4px;
  cursor: pointer;
  border: 2px solid white;
  font-size: 14px;
  transition: all 0.3s ease-in-out;
  min-width: 90px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border-color: lime;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 5px lime;
  }
`