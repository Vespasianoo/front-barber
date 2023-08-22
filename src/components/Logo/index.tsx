import logo from "../../assets/img/logotipe.png"
import * as S from "./styles"

export function Logo() {
  return (
    <S.Container href="/">
      <img src={logo} alt="" />
      <span>Invictus Barbearia</span>
    </S.Container>
  )
}
