import { MenuBar } from "../MenuBar"
import * as S from "./styles"

import { Outlet } from "react-router-dom"

export function Layout() {
  return (
    <S.Container>
      <MenuBar />
      <Outlet />
    </S.Container>
  )
}
