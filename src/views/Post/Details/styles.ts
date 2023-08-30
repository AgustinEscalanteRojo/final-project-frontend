import styled from 'styled-components'

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

export const MainImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  height: auto;
  border: 2px solid ${({ theme }) => theme.colors.buff};
  border-radius: 3%;
  background-color: ${({ theme }) => theme.colors.cornsilk};
  box-shadow: 0 0 5px 0.2px black;
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
  color: ${({ theme }) => theme.colors.strongboldbuff};
  font-size: 25px;
  margin: 0;
  padding: 10px;
  text-align: center;
  text-decoration-line: underline;
  text-transform: uppercase;
`

export const MainImage = styled.img`
  align-self: center;
  border-radius: 3%;
  border: 2px solid ${({ theme }) => theme.colors.buff};
  box-shadow: 0 0 5px 0.2px black;
  margin: 10px;
  max-height: 20rem;
  width: 80%;
  object-fit: cover;
`

export const ShortDescription = styled.p`
  font-size: 13px;
  font-weight: bold;
  text-align: left;
  line-height: 1.3;
  padding: 10px;
`

export const Information = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row;
  justify-content: space-around;
`

export const InformationOption = styled.div`
  align-items: center;
  color: ${({ theme }) => theme.colors.strongboldbuff};
  display: flex;
  flex-flow: row;
  font-size: 16px;
  font-weight: bold;
`

export const IngredientTitle = styled.div`
  align-items: center;
  color: ${({ theme }) => theme.colors.strongboldbuff};
  display: flex;
  flex-flow: row;
  font-size: 16px;
  font-weight: bold;
  margin-top: 16px;
`

export const IngredientsList = styled.ol`
  list-style-type: square;
`

export const IngredientListOption = styled.li``

export const StepsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  height: auto;
  border: 2px solid ${({ theme }) => theme.colors.buff};
  border-radius: 3%;
  background-color: ${({ theme }) => theme.colors.cornsilk};
  box-shadow: 0 0 5px 0.2px black;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 769px) {
    width: 45%;
    margin-top: 150px;
    margin-right: 150px;
  }
`

export const Steps = styled.div`
  display: flex;
  flex-flow: column;
`

export const Step = styled.div`
  color: ${({ theme }) => theme.colors.strongboldbuff};
  text-align: left;
  font-size: 15px;
  font-weight: bold;
`

export const StepTitle = styled.h5``

export const StepDescription = styled.p``

export const StepImage = styled.img`
  align-self: center;
  border-radius: 3%;
  border: 2px solid ${({ theme }) => theme.colors.buff};
  box-shadow: 0 0 5px 0.2px black;
  margin: 10px;
  max-height: 40%;
  max-width: 40%;
`
