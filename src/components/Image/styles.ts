import { styled } from 'styled-components'

export const CustomImg = styled.img<{ $variant: 'default' | 'logoHeader' }>`
  max-height: 230px;
  display: block;
  margin: 0 auto;

  ${(props) => {
    switch (props.$variant) {
      case 'logoHeader':
        return `

        height: 70px;
        float: left;
        margin-left: 10px;
        
        @media (max-width: 768px) {
          align-items: center;
          display: flex;
          max-height: 200px;
          max-width: 100%;
          margin: 0 auto; 
          }
        `

      default:
        return `

        height: 50px;
        float: left;
        margin-left: 10px;
        
        @media (max-width: 768px) {
          align-items: center;
          display: flex;
          max-height: 200px;
          max-width: 100%; 
          margin: 0 auto; 
          }
        `
    }
  }}
`
