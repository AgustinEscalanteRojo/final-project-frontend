import styled from 'styled-components'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

export const ArrowBackIconStyle = styled(ArrowBackIcon)`
  margin-top: 90px;
  margin-left: 10px !important;
  transform: scale(1.2);
  cursor: pointer;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.4);
  }
`
