import { I } from "../../assets/icons"
import logo from "../../assets/img/logotipe.png"
import { Perfil } from "../Perfil"
import * as S from "./styles"

export function MenuBar() {
  return (
    <S.Container>
      <S.TopSide>
        <a href="" id="logo">
          <img src={logo} alt="" />
          <span>Invictus Barbearia</span>
        </a>

        <S.MenuLink to="/home" className="active">
          <I.Home />
          <span>Pagina inicial</span>
        </S.MenuLink>

        <S.MenuLink to="/home">
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
