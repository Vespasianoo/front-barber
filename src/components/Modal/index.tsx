import { useNavigate } from "react-router-dom"
import { LogOut } from "lucide-react"

import * as S from "./styles"

export function Modal() {
  const navigate = useNavigate()
  const handleLogOut = () => navigate("/")

  return (
    <S.PortalContainer>
      <S.ContentMain>
        <button onClick={handleLogOut}>
          <LogOut size={18} />
          Sair
        </button>
      </S.ContentMain>
    </S.PortalContainer>
  )
}
