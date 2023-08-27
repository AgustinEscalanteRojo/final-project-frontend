import styled from 'styled-components'
import {
  Button as MuiButton,
  Typography as MuiTypography,
  Box as MuiBox,
} from '@material-ui/core'
import theme from '../../styles/theme'

export const Box = styled(MuiBox)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${theme.colors.purple400};
`

export const Button = styled(MuiButton)`
  color: white;
`

export const Typography = styled(MuiTypography)`
  color: white;
`
