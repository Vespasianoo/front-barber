import { useContext, useEffect, useState } from "react"
import { api } from "../../services/api"
import { AuthContext } from "../../context/AuthContext"
import * as S from "./styles"

interface Agendamento {
  dia?: string
  horario?: string
  cut?: {
    id: string
    name: string
    price: string
    time: number
  }
  barber?: {
    name: string
  }
  message?: string
}

export function Dash() {
  const [scheduling, setScheduling] = useState<
    Agendamento[] | { message: string }
  >([])

  const { token } = useContext(AuthContext)

  useEffect(() => {
    const getAgendamentos = async () => {
      try {
        const response = await api.get("/users/scheduling", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        if (response.data) {
          setScheduling(response.data)
        }
      } catch (error) {
        console.error("Erro ao buscar agendamentos:", error)
      }
    }

    getAgendamentos()
  }, [])

  return (
    <S.Container>
      {Array.isArray(scheduling) ? (
        scheduling.map((item, index) => (
          <h1 key={index}>{item.barber?.name}</h1>
        ))
      ) : // TODO - fazer card para mostrar o agendamento ou usar outra maneira
      scheduling.message ? (
        <span>{scheduling.message}</span>
      ) : (
        <span>alo</span>
      )}
    </S.Container>
  )
}
