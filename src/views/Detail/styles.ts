import styled from 'styled-components'
import theme from '../../styles/theme'

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0; /* Añade un espacio en los bordes para dispositivos de escritorio */

  @media (max-width: 768px) {
    padding: 0; /* Elimina el espacio en los bordes para dispositivos móviles */
  }
`

export const Content = styled.div`
  /* Estilos para el contenido, si es necesario */
`

export const Backgroundcolor = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-color: ${theme.colors.pastelMint};
`
