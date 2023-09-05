import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"

import { LogOut } from "lucide-react"

import * as S from "./styles"

export function Modal() {
  const { singOut } = useContext(AuthContext)

  return (
    <S.PortalContainer>
      <S.ContentMain>
        <button onClick={singOut}>
          <LogOut size={18} />
          Sair
        </button>
      </S.ContentMain>
    </S.PortalContainer>
  )
}
