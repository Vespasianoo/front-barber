import { ThemeProvider } from "styled-components"
import { AppRouter } from "./router"
import dark from "./styles/theme/dark"
import GlobalStyles from "./styles/GlobalStyles"

export function App() {
  return (
    <ThemeProvider theme={dark}>
      <AppRouter />
      <GlobalStyles />
    </ThemeProvider>
  )
}
