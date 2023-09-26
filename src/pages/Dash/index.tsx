import { useContext, useEffect, useState } from "react"

import { AuthContext } from "../../context/AuthContext"
import { api } from "../../services/api"

import { CardScheduling } from "../../components/CardScheduling"

import imgDash from "../../assets/img/img-dsh.svg"
import * as S from "./styles"

interface SchedulingProps {
  id: string
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

export function Dash() {
  const [scheduling, setScheduling] = useState<
    SchedulingProps[] | { message: string }
  >([])

  const { token, singOut } = useContext(AuthContext)

  useEffect(() => {
    const getAgendamentos = async () => {
      try {
        const response = await api.get("/users/scheduling", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        setScheduling(response.data)
      } catch (error: any) {
        console.error("Erro ao buscar agendamentos:", error)
        if (error.response.data.statusCode === 401) {
          alert("Você não está autenticado")
          return singOut()
        }
      }
    }

    getAgendamentos()
  }, [])

  return (
    <S.Container>
      {Array.isArray(scheduling) ? (
        scheduling.map(item => (
          <CardScheduling
            key={item.id}
            id={item.id}
            dia={item.dia}
            cut={item.cut}
            horario={item.horario}
            barber={item.barber}
          />
        ))
      ) : (
        <S.Content>
          <img src={imgDash} alt="" />
          <span>{scheduling.message}</span>
          <S.Button to="/app/new">Agende agora</S.Button>
        </S.Content>
      )}
    </S.Container>
  )
}

// TODO - trocar nome da page do component para o nome completo ou um nome melhor
// TODO - fazer card para mostrar o agendamento ou usar outra maneira
