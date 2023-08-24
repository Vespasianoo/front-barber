import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom"

import { Home } from "../pages/Home"
import { Layout } from "../components/Layout"
import { ChooseServices } from "../pages/ChooseServices"

export const AppRouter = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route index path="/" element={<Home />} />

        <Route path="/home" element={<Layout />}>
          <Route index path="/home" element={<h1>Você não agendamentos</h1>} />
        </Route>

        <Route path="/new" element={<Layout />}>
          <Route index path="/new" element={<ChooseServices />} />
        </Route>
      </>
    )
  )
  return <RouterProvider router={router} />
}
