import styled from 'styled-components'
import theme from '../../styles/theme';


export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
 
`


export const Content = styled.div`

  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${theme.colors.black};
`;