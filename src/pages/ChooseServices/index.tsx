import { useEffect, useState } from "react"
import { api } from "../../services/api"

import { Search } from "lucide-react"
import { Cut } from "../../components/Cut"

import { CutProps } from "../../components/Cut"

import * as S from "./styles"



export function ChooseServices() {
  const [cuts, setCuts] = useState<CutProps[]>([])

  useEffect(() => {
    api.get("/cuts").then(response => {
      setCuts(response.data)
    })
  }, [])


  return (
    <S.Container>
      <header>
        <h2>Bora cortar esse cabelo!</h2>
        <h3>Qual serviço esta procurando?</h3>
      </header>

      <main>
        <div>
          <Search />
          <input type="text" placeholder="Qual corte está procurando" />
        </div>
        <ul>
            {cuts.map(cut =>{
              return (
                <Cut key={cut.id} name={cut.name} price={cut.price} time={cut.time} url={`/new/${cut.id}`}/>
              )
            })}
        </ul>
        

      </main>
    </S.Container>
  )
}

// TODO - ao clicar no button vai para o model para escolher a data
// TODO - colocar acessibilidade no input