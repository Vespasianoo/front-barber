import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom"

import { Home } from "../pages/Home"
// import { Layout } from "../components/Layout"
// import { Escolha } from "../components/Escolha"

export const AppRouter = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route index path="/" element={<Home />} />

        {/* <Route path="/home" element={<Layout />}>
          <Route index path="/home" element={<Escolha />} />
        </Route> */}
      </>
    )
  )
  return <RouterProvider router={router} />
}
