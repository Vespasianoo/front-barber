import { ThemeProvider } from "styled-components"
import GlobalStyles from "./styles/GlobalStyles"
import dark from "./styles/theme/dark"
import { AppRouter } from "./router"

export function App() {
  return (
    <ThemeProvider theme={dark}>
      <AppRouter />
      <GlobalStyles />
    </ThemeProvider>
  )
}
