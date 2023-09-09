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
margin-top: 110px;
  margin-left: 100px;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  border: 1px solid ${({ theme }) => theme.colors.blue175};
  background-color: ${({ theme }) => theme.colors.blue25};
  border-radius: 20px !important;
  box-shadow: 15px 12px 20px rgba(0, 0, 0, 0.1) !important;
  
`

export const TitleContainer = styled.div`
  font-size: 17px;
  margin: 15px;
  cursor: pointer;
  font-weight: bold;
  text-align: center;
  color: ${({ theme }) => theme.colors.greytitle};
  text-transform: uppercase;
`

export const IconDetailsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
  margin-left: 80px;
  color: ${({ theme }) => theme.colors.greytitle};
`
export const DiningIconContainer = styled.span`
  transform: scale(0.8);
  margin-left: 10px;

`

export const MainImage = styled.img`
  align-self: center;
  border-radius: 12px;
  border: 1.5px solid ${({ theme }) => theme.colors.blue175};
  margin: 7px;
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
margin-top: 110px;
  margin-left: 100px;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  border: 1px solid ${({ theme }) => theme.colors.blue175};
  background-color: ${({ theme }) => theme.colors.blue25};
  border-radius: 20px !important;
  box-shadow: 15px 12px 20px rgba(0, 0, 0, 0.1) !important;

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
