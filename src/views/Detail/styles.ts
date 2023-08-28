import styled from 'styled-components'
import theme from '../../styles/theme'

// // ********Inicio********ContenedoresPrincipales********Inicio********
// export const DetailsContainer = styled.div`
//   display: flex;
//   /* justify-content: space-between;
//   align-items: flex-start; */
//   padding: 0;
//   border: 10px yellow solid;

//   @media (max-width: 768px) {
//     flex-direction: column;
//     align-items: center;
//   }
// `

// export const Content = styled.div`
//   display: flex; /* Agregado para utilizar flexbox */
//   justify-content: space-between; /* Separa los elementos horizontalmente */
//   align-items: flex-start; /* Alinea los elementos en la parte superior */
//   border: 10px red solid;
//   background-color: blue;
//   width: 100%;
//   height: 100%;
// `
// // ********Fin********ContenedoresPrincipales********Fin********
// //**********************************************************************
// // ********Inicio********Imagen-Título-Descripción********Inicio********
// export const MainImageContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 550px;
//   height: auto;
//   border: 10px orange solid;
//   background-color: yellow;
//   margin-top: 150px;
//   margin-left: 100px;
//   margin-right: auto;
// `

// export const Title = styled.h1`
//   margin: 0px auto;
//   text-align: center;
//   text-decoration-line: underline;
//   font-size: 25px;
//   width: auto;
//   height: auto;
//   margin: 10px;
// `

// export const MainImage = styled.img`
//   margin: 0px auto;
//   align-self: center;
//   border: 10px purple solid;
//   max-width: 100%;
//   max-height: 100%;
//   margin: 10px;
// `

// export const ShortDescription = styled.p`
//   margin: 0px auto;
//   font-size: 13px;
//   font-weight: bold;
//   width: auto;
//   height: auto;
//   margin: 10px;
// `
// // ********Fin********Imagen-Título-Descripción********Fin********
// //**********************************************************************
// // ********Inicio********PasosReceta-ImágenesAdicionales********Inicio********
// export const StepsContainer = styled.div`
//   display: flex;
//   width: 500px;
//   height: auto;
//   border: 10px pink solid;
//   background-color: white;
//   margin-top: 150px;
//   margin-left: auto;
//   margin-right: 80px;
// `

// export const TextSteps = styled.p`
//   margin: 20px;
//   text-align: left;
//   font-size: 15px;
//   font-weight: bold;
//   width: auto;
//   height: auto;
// `

// export const SecondaryImages = styled.img`
//   align-self: center;
//   border: 10px purple solid;
//   max-width: 30%;
//   max-height: 30%;
//   margin: 10px;
// `
// // ********Fin********PasosReceta-ImágenesAdicionales********Fin********
// //********************************************************************** */
// // ********Inicio********Tiempo-Dificultad-Ingredientes-Comentarios********Inicio********

// export const MiscelaniaContainer = styled.div`
//   display: flex;
//   width: 500px;
//   height: auto;
//   border: 10px pink solid;
//   background-color: white;
//   margin-top: 1000px;
//   margin-left: auto;
//   margin-right: 80px;
// `

// export const MiscelaniaText = styled.p`
//   margin: 20px;
//   text-align: left;
//   font-size: 15px;
//   font-weight: bold;
//   width: auto;
//   height: auto;
// `

// ********Inicio********ContenedoresPrincipales********Inicio********
export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;

  @media (min-width: 769px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  width: 100%;
  padding: 20px;

  @media (min-width: 769px) {
    flex-wrap: nowrap;
  }
`
// ********Fin********ContenedoresPrincipales********Fin********
//**********************************************************************
// ********Inicio********Imagen-Título-Descripción********Inicio********
export const MainImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  height: auto;
  border: 2px solid ${theme.colors.buff};
  border-radius: 3%;
  background-color: ${theme.colors.cornsilk};
  box-shadow: 0px 0px 5px 0.2px black;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 769px) {
    width: 45%;
    margin-top: 150px;
    margin-left: 100px;
  }
`

export const Title = styled.h1`
  margin: 0;
  color: ${theme.colors.strongboldbuff};
  text-align: center;
  text-decoration-line: underline;
  font-size: 25px;
  padding: 10px;
`

export const MainImage = styled.img`
  align-self: center;
  border: 2px solid ${theme.colors.buff};
  border-radius: 3%;
  box-shadow: 0px 0px 5px 0.2px black;
  max-width: 100%;
  max-height: auto;
  margin: 10px;
`

export const ShortDescription = styled.p`
  font-size: 13px;
  font-weight: bold;
  text-align: center;
  padding: 10px;
`

// ********Fin********Imagen-Título-Descripción********Fin********

// ********Inicio********Tiempo-Dificultad-Ingredientes-Comentarios********Inicio********

// export const MiscelaniaContainer = styled.div`
//   order: 2;
//   display: flex;
//   width: 500px;
//   height: auto;
//   /* border: 2px solid ${theme.colors.buff}; */
//   /* border-radius: 3%;
//   background-color: ${theme.colors.cornsilk};
//   box-shadow: 0px 0px 5px 0.2px black; */
//   text-align: center;
//   margin-left: 10px;
//   margin: 0px;
// `

export const MiscelaniaContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  height: auto;
  border: 2px solid ${theme.colors.buff};
  border-radius: 3%;
  background-color: ${theme.colors.cornsilk};
  box-shadow: 0px 0px 5px 0.2px black;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 769px) {
    width: 45%;
    margin-top: 150px;
    margin-left: 10px;
  }
`

export const MiscelaniaText = styled.p`
  color: ${theme.colors.strongboldbuff};
  margin: 20px;
  text-align: left;
  font-size: 16px;
  font-weight: bold;

  ul {
    list-style-type: none;
  }

  li {
    display: flex;
    gap: 0.5em;
    align-items: center;
    margin-left: 20px;
  }

  ol {
    list-style-type: square;
    margin-left: 20px;
    padding-left: 20px;
  }
`

// ********Fin********Tiempo-Dificultad-Ingredientes-Comentarios********Fin********
//**********************************************************************
// ********Inicio********PasosReceta-ImágenesAdicionales********Inicio********
export const StepsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  height: auto;
  border: 2px solid ${theme.colors.buff};
  border-radius: 3%;
  background-color: ${theme.colors.cornsilk};
  box-shadow: 0px 0px 5px 0.2px black;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 769px) {
    width: 45%;
    margin-top: 150px;
    margin-right: 150px;
  }
`

export const TextSteps = styled.p`
  color: ${theme.colors.strongboldbuff};
  margin: 20px;
  text-align: left;
  font-size: 15px;
  font-weight: bold;
`

export const SecondaryImages = styled.img`
  align-self: center;
  border: 2px solid ${theme.colors.buff};
  border-radius: 3%;
  box-shadow: 0px 0px 5px 0.2px black;
  max-width: 40%;
  max-height: 40%;
  margin: 10px;
`
// ********Fin********PasosReceta-ImágenesAdicionales********Fin********
//********************************************************************** */
