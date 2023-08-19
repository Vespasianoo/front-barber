import * as S from "./styles"
import { I } from "../../assets/icons"
import logo from "../../assets/img/logo.png"
import imgMain from "../../assets/img/img-home.svg"
import { Button } from "../../components/Button"

export function Home() {
  return (
    <S.Container>
      <header>
        <ul>
          <li>
            <a href="#">
              <I.Twitter />
            </a>
          </li>
          <li>
            <a href="#">
              <I.Facebook />
            </a>
          </li>
          <li>
            <a href="#">
              <I.Twitter />
            </a>
          </li>
        </ul>

        <img src={logo} alt="" />
      </header>
      <main>
        <div>
          <h1>A arte do cuidado masculino</h1>
          <p>
            Invictus Barbearia: Seu estilo, nossa expertise. Descubra o cuidado
            e a confiança em cada corte
          </p>
          <Button>Entrar com o Google</Button>
        </div>
        <img src={imgMain} alt="" />
      </main>
    </S.Container>
  )
}
