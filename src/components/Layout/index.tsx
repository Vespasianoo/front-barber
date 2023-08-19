import * as S from "./styles"

import { Outlet } from "react-router-dom"

export function Layout() {
  return (
    <S.Container>
      <nav>nav</nav>
      <Outlet />
    </S.Container>
  )
}
