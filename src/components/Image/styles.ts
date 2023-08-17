import { styled } from 'styled-components';


export const CustomImg = styled.img<{ $variant: 'default' | 'logoHeader'}>`

  max-height: 300px;
  display: block;
  margin: 0 auto;


  ${(props) => {
    switch (props.$variant) {
      case 'logoHeader':
        return `
       
        height: 70px;
      
        float: left;
        margin-left: 10px;
        margin-top: 10px;
        `;

      default:
        return ''; 
    }
  }}
`;