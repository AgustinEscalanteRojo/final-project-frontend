import styled from 'styled-components'
import theme from '../../styles/theme'


export const HeaderUser = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; 
`;

export const Names = styled.div`
margin-left: 10px;

`;

export const Username = styled.p`
margin-top: -6px;
font-size: 15px;

font-weight: bold;

`;


export const Userfirst = styled.p`
margin-top: -3px;
font-size: 13px;

`;




export const FollowButton = styled.button`
width: 50px;
height: 20px;
background-color: #3498db;
color: #fff; 
border: none;
border-radius: 20px;

font-size: 9px;
cursor: pointer;
transition: background-color 0.3s ease; 
&:hover {
  background-color: #2980b9; 
}
`;


export const CardContainer = styled.div`
margin-left: 8px;
margin-right: -13px;
 border: 1px solid ${theme.colors.blue175};
 border-radius: 20px;
`