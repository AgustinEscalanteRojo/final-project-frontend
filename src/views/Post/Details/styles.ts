import styled from 'styled-components'

export const DetailsContainer = styled.div`
  display: flex;

  @media (min-width: 769px) {
    flex-direction: row;
    justify-content: space-between;
  }
`
export const MainContent = styled.div`
  width: 1290px;
  display: flex;
  margin: 140px auto;
  justify-content: center;
  flex-wrap: wrap;
  border: 1px solid ${({ theme }) => theme.colors.blue175};
  background-color: ${({ theme }) => theme.colors.blue25};
  border-radius: 20px !important;
  box-shadow: 15px 12px 20px rgba(0, 0, 0, 0.1) !important;
`
export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
`
export const TitleContainer = styled.div`
  font-size: 27px;
  margin: 25px;
  cursor: pointer;
  font-weight: bold;
  text-align: center;
  color: ${({ theme }) => theme.colors.greytitle};
  text-transform: uppercase;
`
export const IconDetailsContainer = styled.div`
  display: flex;
  align-items: center;
  transform: scale(1.1);
  color: ${({ theme }) => theme.colors.greytitle};
`
export const DiningIconContainer = styled.span`
  margin-top: 5px;
  transform: scale(0.8);
  margin-left: 70px;
  margin-right: 4px;
`
export const MainImage = styled.img`
  align-self: center;
  border-radius: 15px;
  border: 1.5px solid ${({ theme }) => theme.colors.blue175};
  margin: 9px;
  max-height: 20rem;
  width: 580px;
  object-fit: cover;
  border-radius: 20px;
`
export const IngredientTitle = styled.div`
  font-size: 17px;
  margin-top: 15px;
  cursor: pointer;
  font-weight: bold;
  margin-left: 30px;
  color: ${({ theme }) => theme.colors.greytitle};
`
export const IngredientsList = styled.ol`
  list-style-type: disc;
  margin-bottom: 0px;
  margin-left: 25px;
  font-size: 15px;
  font-style: italic;
`
export const IngredientListOption = styled.li`
  color: ${({ theme }) => theme.colors.grey};
  font-size: 17px;
`
export const Description = styled.p`
  font-size: 17px;
  margin-top: 30px;
  font-weight: 600;
  font-style: italic;
  text-align: left;
  line-height: 1.3;
  margin-left: 30px;
  margin-right: 30px;
  color: ${({ theme }) => theme.colors.grey};
`
export const StepsTitle = styled.div`
  font-size: 17px;
  margin-top: 15px;
  cursor: pointer;
  font-weight: bold;
  margin-left: 30px;
  color: ${({ theme }) => theme.colors.greytitle};
`
export const StepsContainer = styled.div`
  margin-top: 105px;

  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
`
export const StepTitle = styled.h3`
  font-size: 17px;
  margin-top: 15px;
  font-weight: bold;
  margin-left: 30px;
  color: ${({ theme }) => theme.colors.greytitle};
`
export const Step = styled.div``
export const StepDescription = styled.p`
  font-size: 17px;
  font-weight: 600;
  font-style: italic;
  text-align: left;
  line-height: 1.3;
  margin-left: 35px;
  margin-top: -10px;
  margin-right: 30px;
  color: ${({ theme }) => theme.colors.grey};
`
