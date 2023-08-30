import { MoreHorizontal } from "lucide-react"
import avatarImg from "../../assets/img/lek.jpg"
import * as S from "./styles"

export function Perfil() {
  return (
    <S.TriggerContainer>
      <img src={avatarImg} alt="Avatar de fulano" />
      <div>
        <span>username</span>
        <span>muleke@e-grilinho.com</span>
      </div>
      <MoreHorizontal />
    </S.TriggerContainer>
  )
}
