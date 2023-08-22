import { I } from "../../assets/icons"
import { Logo } from "../Logo"

import { Perfil } from "../Perfil"
import * as S from "./styles"

export function MenuBar() {
  return (
    <S.Container>
      <S.TopSide>
        <Logo />

        <S.MenuLink to="/home">
          <I.Home />
          <span>Pagina inicial</span>
        </S.MenuLink>

        <S.MenuLink to="/new">
          <I.CalendarPlus />
          <span>Novo agendamento</span>
        </S.MenuLink>
      </S.TopSide>

      <S.BottonSide>
        <Perfil />
      </S.BottonSide>
    </S.Container>
  )
}
