import * as Dialog from "@radix-ui/react-dialog"
import { I } from "../../assets/icons"
import { Logo } from "../Logo"

import { Perfil } from "../Perfil"

import * as S from "./styles"
import { Modal } from "../Modal"

export function MenuBar() {
  return (
    <S.Container>
      <S.TopSide>
        <Logo />

        <S.MenuLink to="/app" end>
          <I.Home />
          <span>Pagina inicial</span>
        </S.MenuLink>

        <S.MenuLink to="/app/new">
          <I.CalendarPlus />
          <span>Novo agendamento</span>
        </S.MenuLink>
      </S.TopSide>

      <S.BottonSide>
        <Dialog.Root>
          <Perfil />
          <Modal />
        </Dialog.Root>
      </S.BottonSide>
    </S.Container>
  )
}
