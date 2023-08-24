import { Search } from "lucide-react"

import * as S from "./styles"

export function ChooseServices() {

  return (
    <S.Container>
      <header>
        <h2>Bora cortar esse cabelo!</h2>
        <h3>Qual serviço esta procurando?</h3>
        <div>
          <Search />
          <input type="text" placeholder="Qual corte está procurando" />
        </div>
      </header>
    </S.Container>
  )
}

// TODO - colocar acessibilidade no input