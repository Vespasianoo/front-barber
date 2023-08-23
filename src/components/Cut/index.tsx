import { Link } from "react-router-dom"
import * as S from "./styles"

export interface CutProps {
  id?: number
  name: string
  price: string
  time: number
  url: string
}

export function Cut({name,price,time, url}:CutProps) {
  return (
    <S.Container>
      <S.Left>
        <S.Span>{name}</S.Span>
        <S.Span>{time}min</S.Span>
      </S.Left>
      <S.Right>
        <S.Span>R$ {price}</S.Span>
        <Link to={url}>SELECIONAR</Link>
      </S.Right>
    </S.Container>
  )
}

