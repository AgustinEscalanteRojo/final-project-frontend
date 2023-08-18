// import { styled } from 'styled-components'
// import theme from '../../styles/theme'

// export const Container = styled.header`
//   display: flex;
//   flex-flow: row;
//   background-color: ${theme.colors.papayaWhip};
//   border-bottom: 5px solid ${theme.colors.buff};
//   justify-content: space-between;
//   width: 100%;
//   height: 90px;
//   position: fixed;
// `


// export const ButtonController = styled.div`
//   gap: 30px;
//   margin: 20px;
//   margin-top: 20px;
//   margin-right: 10px;
// `

// *********************************
// import styled from 'styled-components'
// import theme from '../../styles/theme'

// export const Container = styled.header`
//   display: flex;
//   flex-direction: column; /* Cambiamos el flujo a columna en dispositivos móviles */
//   background-color: ${theme.colors.papayaWhip};
//   border-bottom: 5px solid ${theme.colors.buff};
//   width: 100%;
//   height: auto; /* Cambiamos la altura a auto */
//   position: fixed;
//   padding: 10px; /* Añadimos un padding para separar el contenido de los bordes */

//   @media (min-width: 768px) {
//     /* Media query para dispositivos de escritorio */
//     flex-direction: row; /* Volver al flujo de fila */
//     justify-content: space-between;
//     height: 90px;
//     padding: 20px; /* Mayor padding para escritorio */
//   }
// `

// export const ButtonController = styled.div`
//   display: flex;
//   gap: 10px; /* Espaciado más ajustado en dispositivos móviles */

//   @media (min-width: 768px) {
//     gap: 30px;
//     margin: 0;
//     align-self: center; /* Centrar en el eje vertical en escritorio */
//   }
// `

import styled from 'styled-components'
import theme from '../../styles/theme'
import IconButton from '@mui/material/IconButton' // Importa IconButton de Material-UI

export const MobileIconButton = styled(IconButton)`
  background-color: black;
  border-radius: 50%;
`

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.black};
  border-bottom: 2px solid ${theme.colors.buff};
  width: 100%;
  height: 70px;
  position: fixed;
  z-index:1;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    height: 60px;
    padding: 20px;
  }
`


export const ButtonController = styled.div`
  display: flex;
  gap: 10px;

  @media (min-width: 768px) {
    gap: 30px;
    align-self: center;
  }
`

