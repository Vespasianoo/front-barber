import { useNavigate } from "react-router-dom"
import imgHomePage from "../../assets/img/img-home.svg"
import { I } from "../../assets/icons"
import { Logo } from "../../components/Logo"
import * as S from "./styles"

export function Home() {
  const navigate = useNavigate()

  return (
    <S.Container>
      <S.Header>
        <S.SocialLinks>
          <li>
            <a href="#">
              <I.Instagram />
            </a>
          </li>
          <li>
            <a href="#">
              <I.Facebook />
            </a>
          </li>
          <li>
            <a href="#">
              <I.Linkedin />
            </a>
          </li>
        </S.SocialLinks>
        <Logo />
      </S.Header>
      <S.Main>
        <div>
          <h1>A arte do cuidado masculino</h1>
          <p>
            Invictus Barbearia: Seu estilo, nossa expertise. Descubra o cuidado
            e a confiança em cada corte.
          </p>
          <button onClick={() => navigate("/app")}>
            Entrar com o Google
            <I.Google />
          </button>
        </div>
        <img src={imgHomePage} alt="" />
      </S.Main>
    </S.Container>
  )
}
