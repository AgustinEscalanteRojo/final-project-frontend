import styled from 'styled-components'
import theme from '../../styles/theme'
import { Link } from 'react-router-dom'

export const Container = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  z-index: 3;

  @media screen and (max-width: 768px) {
    position: fixed;
    bottom: 0;
    border: none;
    padding: 2.6px;
    max-height: none;
  }
`

export const Content = styled.div`
  background-color: ${theme.colors.grey800};
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

export const Text = styled.p`
  color: ${theme.colors.softSky};
  font-family: Oswald;
  font-size: 9px;
  font-weight: bold;
  margin-left: 10px;

  @media screen and (max-width: 768px) {
    padding: 0px 0;
  }
`

export const FAQLink = styled(Link)`
  color: ${theme.colors.softSky};
  font-family: Oswald;
  font-size: 9px;
  font-weight: bold;
  text-decoration: none;
  margin-right: 10px;

  &:hover {
    text-decoration: underline; 
  }

  @media screen and (max-width: 768px) {
    
  }
`
