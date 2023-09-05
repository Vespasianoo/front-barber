import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { auth } from "../../services/firebase"
import { api } from "../../services/api"

import { Logo } from "../../components/Logo"
import { I } from "../../assets/icons"
import { useCookies } from "react-cookie"
import imgHomePage from "../../assets/img/img-home.svg"

import * as S from "./styles"

export function Home() {
  const [cookies, setCookie] = useCookies(["token"])

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider()
    try {
      const response = await signInWithPopup(auth, provider)

      const userData = await api.post("register", {
        name: response.user.displayName,
        email: response.user.email,
        avatarUrl: response.user.photoURL
      })

      const { token } = userData.data

      const cookieExpiresInSecondes = 60 * 60 * 24 * 30

      setCookie("token", token, { path: "/", maxAge: cookieExpiresInSecondes })

      // caso de problema no build usar o metodo de baixo
      // const cookie = `token=${token}; max-age=${cookieExpiresInSecondes}; path=/`
      // document.cookie = cookie
    } catch (error) {
      console.error(error)
      alert("Por favor tente novamente, se o erro persistir tente mais tarde.")
    }
  }

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
          <button onClick={handleGoogleSignIn}>
            Entrar com o Google
            <I.Google />
          </button>
        </div>
        <img src={imgHomePage} alt="" />
      </S.Main>
    </S.Container>
  )
}
