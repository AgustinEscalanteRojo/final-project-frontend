import Router from './containers/Router/router'
import theme, { GeneralContainer } from './styles/theme'
import { ThemeProvider } from 'styled-components'

function App() {
  return (
    <GeneralContainer className="App">
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </GeneralContainer>
  )
}

export default App