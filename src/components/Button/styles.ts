import styled from 'styled-components';
import type { Props } from './types';
import theme from '../../styles/theme';

export const CustomButton = styled.button<{ $variant: Props['variant'] }>`

  background-color: ${theme.colors.blue700};
  color: ${theme.colors.white};
  padding: 12px 24px;
  border-radius: 30px;

  cursor: pointer;
  border: none;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  transition: all 0.3s ease-in-out;
  min-width: 180px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: ${theme.colors.blue800};
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 8px ${theme.colors.blue700};
  }
`;