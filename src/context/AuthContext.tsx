import { ReactNode, createContext, useState, useEffect } from "react"
import { useCookies } from "react-cookie"
import decode from "jwt-decode"

interface authProps {
  children: ReactNode
}

interface User {
  name: string
  email: string
  avatarUrl: string
}

interface contextProps extends User {
  token: string | null
  singOut: () => void
}

// verificar padrao maiuscula

export const AuthContext = createContext<contextProps>({} as contextProps)

export function AuthProvider({ children }: authProps) {
  const [cookies] = useCookies(["token"])
  const token = cookies["token"]

  const [user, setUser] = useState<User>({} as User)

  useEffect(() => {
    if (token) {
      const user: User = decode(token)
      setUser({
        name: user.name,
        email: user.email,
        avatarUrl: user.avatarUrl
      })
    }
  }, [token])

  const singOut = () => {
    return (document.cookie =
      "token" + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;")
  }

  return (
    <AuthContext.Provider
      value={{
        singOut,
        token,
        name: user.name,
        email: user.email,
        avatarUrl: user.avatarUrl
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
// verificar se existe cookie pra enviar
