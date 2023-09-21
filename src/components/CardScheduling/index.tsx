import * as S from "./styles"

interface SchedulingProps {
  id?: string
  dia: string
  horario: string
  cut: {
    id: string
    name: string
    price: string
    time: number
  }
  barber: {
    name: string
  }
}

export function CardScheduling({ dia, horario, cut, barber }: SchedulingProps) {
  return (
    <S.Container>
      <span>{dia}</span>
      <span>{horario}</span>
      <span>{cut.name}</span>
      <span>{barber.name}</span>
    </S.Container>
  )
}
