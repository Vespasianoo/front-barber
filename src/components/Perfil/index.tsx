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
// tirar o email do token e para isso provavelmente ver o retorno do google e pegar o id e ver a aula nlw
// TODO - fazer logica para dimunuir o nome do user deixar apena dois nomes
