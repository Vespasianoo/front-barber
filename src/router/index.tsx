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

        <Route path="/app" element={<Layout />}>
          <Route index path="/app" element={<h1>Você não agendamentos</h1>} />
          <Route path="/app/new" element={<ChooseServices />} />
        </Route>

        {/* <Route path="/new" element={<Layout />}>
        </Route> */}
      </>
    )
  )
  return <RouterProvider router={router} />
}
