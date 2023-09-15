import styled from 'styled-components'
import StarIcon from '@mui/icons-material/Star';


export const StarIconStyle = styled(StarIcon)`
color: ${({ theme }) => theme.colors.greytitle};
margin-top: 10px;
margin-left: 26px;
`

export const Container = styled.div`
  padding: 6px;
  border: 1px solid ${({ theme }) => theme.colors.blue175};
  background-color: ${({ theme }) => theme.colors.blue25};
  border-radius: 15px;
  max-width: 240px;
  padding: 5px;
  box-shadow: 15px 12px 20px rgba(0, 0, 0, 0.1);
`

export const Title = styled.h4`
  text-align: center;
  margin-top: -30px;
  margin-left: 20px;
  color: ${({ theme }) => theme.colors.greytitle};

  
`

export const Users = styled.div``
