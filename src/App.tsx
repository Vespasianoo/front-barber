import { ThemeProvider } from 'styled-components'
import { AppRouter } from './router'
import dark from './styles/theme/dark'
import GlobalStyles from './styles/GlobalStyles'
import { AuthProvider } from './context/AuthContext'

export function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={dark}>
        <AppRouter />
        <GlobalStyles />
      </ThemeProvider>
    </AuthProvider>
  )
}

//TODO - remove px e colocar rem
