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
  border: 1px solid ${({ theme }) => theme.colors.lagoonMist};
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.softSky};
  box-shadow: 0 0 3px 0.2px ${({ theme }) => theme.colors.oceanicShadow};
  margin-top: 20px;
  margin-bottom: 25px;
  margin-left: 5px;
  margin-right: 5px;

  @media (min-width: 769px) {
    width: 45%;
    margin-top: 150px;
    margin-left: 100px;
    margin-right: 0; /* Para evitar que se aplique en dispositivos móviles */
  }
`

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.oceanicTitleBlue};
  font-size: 25px;
  margin: 0;
  padding: 10px;
  text-align: center;
  text-decoration-line: underline;
  text-transform: uppercase;
`

export const MainImage = styled.img`
  align-self: center;
  border-radius: 12px;
  border: 1.5px solid ${({ theme }) => theme.colors.lagoonMist};
  box-shadow: 0 0 3px 0.2px ${({ theme }) => theme.colors.oceanicShadow};
  margin: 10px;
  max-height: 20rem;
  width: 80%;
  object-fit: cover;
`

export const Information = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row;
  justify-content: space-around;
`

export const InformationOption = styled.div`
  align-items: center;
  color: ${({ theme }) => theme.colors.lagoonMist};
  display: flex;
  flex-flow: row;
  font-size: 18px;
  font-weight: bold;
`

export const IngredientTitle = styled.div`
  align-items: center;
  color: ${({ theme }) => theme.colors.oceanicTitleBlue};
  display: flex;
  flex-flow: row;
  font-size: 18px;
  font-weight: bold;
  text-decoration: underline;
  margin-top: 30px;
  margin-left: 55px;
`

export const IngredientsList = styled.ol`
  list-style-type: disc;
  margin-bottom: 0px;
  margin-left: 65px;
`

export const IngredientListOption = styled.li`
  color: ${({ theme }) => theme.colors.oceanicWriteBlue};
  font-weight: bold;
  font-size: 17px;
`

export const ShortDescription = styled.p`
  font-size: 15px;
  font-weight: 600;
  font-style: italic;
  text-align: left;
  line-height: 1.3;
  margin-top: 15px;
  margin-left: 40px;
  margin-right: 40px;
  padding: 10px;
  color: ${({ theme }) => theme.colors.oceanicWriteBlue};
`

export const StepsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  height: auto;
  border: 1px solid ${({ theme }) => theme.colors.lagoonMist};
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.softSky};
  box-shadow: 0 0 3px 0.2px ${({ theme }) => theme.colors.oceanicShadow};
  margin-top: 20px;
  margin-bottom: 25px;
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
  color: ${({ theme }) => theme.colors.oceanicWriteBlue};
  text-align: left;
  font-size: 17px;
  font-weight: bold;
`

export const StepTitle = styled.h3`
  color: ${({ theme }) => theme.colors.oceanicTitleBlue};
  text-decoration: underline;
  margin-left: 30px;
  margin-bottom: 0px;
`

export const StepDescription = styled.p`
  font-size: 16px;
  font-weight: 600;
  font-style: italic;
  text-align: left;
  line-height: 1.3;
  margin-left: 30px;
  margin-right: 30px;
  color: ${({ theme }) => theme.colors.oceanicWriteBlue};
`

export const StepImage = styled.img`
  align-self: center;
  border-radius: 3%;
  border: 1.5px solid ${({ theme }) => theme.colors.lagoonMist};
  box-shadow: 0 0 3px 0.2px ${({ theme }) => theme.colors.oceanicShadow};
  margin: 10px;
  max-height: 40%;
  max-width: 40%;
`
