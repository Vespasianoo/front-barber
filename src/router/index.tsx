import { useContext } from "react"
import {
  createBrowserRouter,
  createRoutesFromElements,
  redirect,
  Route,
  RouterProvider
} from "react-router-dom"

import { Layout } from "../components/Layout"
import { Home } from "../pages/Home"
import { ChooseServices } from "../pages/ChooseServices"

import { AuthContext } from "../context/AuthContext"
import { Dash } from "../pages/Dash"

export const AppRouter = () => {
  const { token } = useContext(AuthContext)

  const noToken = () => {
    if (!token) return redirect("/")
    return null
  }

 
  
  const isToken = () => {
    if (token) {
      return redirect("/app")
    }
    return null
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route index path="/" element={<Home />} loader={isToken} />

        <Route path="/app" element={<Layout />} loader={noToken}>
          <Route index path="/app" element={<Dash />} />
          <Route path="/app/new" element={<ChooseServices />} />
        </Route>
      </>
    )
  )
  return <RouterProvider router={router} />
}
