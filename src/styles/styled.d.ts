import "styled-components"
declare module "styled-components" {
  export interface DefaultTheme {
    name: string
    colors: {
      background: string
      primaryColor: string
      primaryColorHover: string
      secondColor2: string
      textColor1: string
      textColor2: string
      textColor3: string
      textColor4: string
    }
  }
}
