import styled from 'styled-components'
import { AllergyIconProps } from './types'

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
  font-weight: bold;
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
  margin-left: 50px;

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
  margin-bottom: -30px;
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
  margin-bottom: 18px;
  font-weight: bold;
  margin-left: 30px;
  color: ${({ theme }) => theme.colors.greytitle};
`
export const StepsContainer = styled.div`
  margin-top: 105px;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: -14px;
  max-width: 600px;
`
export const StepTitle = styled.h3`
  font-size: 17px;
  font-weight: bold;
  margin-top: -1px;
  margin-bottom: 16px;
  margin-left: 30px;
  color: ${({ theme }) => theme.colors.greytitle};
`
export const Step = styled.div`

`
export const StepDescription = styled.p`
  font-size: 17px;
  font-weight: 600;
  font-style: italic;
  text-align: left;
  line-height: 1.3;
  margin-left: 35px;
  margin-right: 30px;
  color: ${({ theme }) => theme.colors.grey};
`
export const AllergyIcon = styled.img<AllergyIconProps>`
  margin-top: 8px;
  margin-bottom: -25px;
  width: 24px;
  height: 24px;

`
export const AllergyIconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: 40px;
  margin-top: 10px;
  margin-bottom: 10px;
`
export const AllergyTitle = styled.div`
  font-size: 17px;
  margin-top: 15px;
  font-weight: bold;
  margin-left: 30px;
  color: ${({ theme }) => theme.colors.greytitle};
`

export const CommentSection = styled.div`
  width: 1290px;
  margin-top: 20px;
  padding-top: 20px;
  margin-bottom: 50px;
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const CommentTitle = styled.h2`
  font-size: 17px;
  font-weight: bold;

  color: ${({ theme }) => theme.colors.greytitle};
`

export const CommentList = styled.ul`
  width: 1290px;
  list-style-type: none;
  padding: 0;
  display: flex; 
  flex-direction: column;
  overflow-x: auto; 
`

export const CommentItem = styled.li`
  margin-right: 10px; 
  font-size: 0.9em;
  flex: 0 0 auto; 
`

export const CommentForm = styled.form`
  display: flex;
  margin-top: 20px;
`

export const CommentInput = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 0.9em;
  margin-right: 10px;
`
export const CommentButton = styled.button`
   background-color: ${({ theme }) => theme.colors.green500}!important;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 0.9em;
  cursor: pointer;


  &:hover {
    background-color: #0056b3;
  }
`