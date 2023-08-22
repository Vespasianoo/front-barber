import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom"

import { Home } from "../pages/Home"
import { Layout } from "../components/Layout"

export const AppRouter = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route index path="/" element={<Home />} />

        <Route path="/home" element={<Layout />}>
          <Route index path="/home" element={<h1>aqi vaio o restant</h1>} />
        </Route>

        <Route path="/new" element={<Layout />}>
          <Route index path="/new" element={<h1>novo agendamento</h1>} />
        </Route>
      </>
    )
  )
  return <RouterProvider router={router} />
}
