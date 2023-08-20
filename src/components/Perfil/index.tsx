import { MoreHorizontal } from "lucide-react"

import avatarImg from "../../assets/img/avatar.png"
import * as S from "./styles"

export function Perfil() {
  return (
    <S.Container>
      <img src={avatarImg} alt="Avatar de fulano" />
      <div>
        <span>username</span>
        <span>olivia@e-learning.com</span>
      </div>
      <MoreHorizontal />
    </S.Container>
  )
}
