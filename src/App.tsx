import Router from './containers/Router/router'
import theme from './styles/theme'
import { ThemeProvider } from 'styled-components'

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </div>
  )
}

export default App
