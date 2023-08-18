import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom"

import { Home } from "../pages/Home"

export const AppRouter = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Home />} />
      </>
    )
  )
  return <RouterProvider router={router} />
}
