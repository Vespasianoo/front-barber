import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"

import { MoreHorizontal } from "lucide-react"

import * as S from "./styles"

export function Perfil() {
  const { avatarUrl, name, email } = useContext(AuthContext)

  return (
    <S.TriggerContainer>
      {avatarUrl && <img src={avatarUrl} />}
      <div>
        <span>{name}</span>
        <span>{email}</span>
      </div>
      <MoreHorizontal />
    </S.TriggerContainer>
  )
}
