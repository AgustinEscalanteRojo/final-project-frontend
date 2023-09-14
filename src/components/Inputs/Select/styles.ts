import styled from 'styled-components'
import { Box, Select } from '@mui/material'

export const Container = styled(Box)``

export const MaterialSelect = styled(Select)`
  flex: 1 0 auto;
  border-bottom: none;
  width: 100%;

  &&& {
    .MuiNativeSelect-root {
      font-size: 0.9rem;
    }

    &.Mui-focused > select {
      background: none;
    }

    ::before,
    ::after {
      display: none;
    }
  }
`
