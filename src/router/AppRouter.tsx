import React, {type ReactNode } from "react"
import { Route, Routes } from "react-router-dom"
import ErrorPage from "../components/pages/ErrorPage/ErrorPage"

const HomePage = React.lazy(() => import("../components/pages/HomePage/HomePage"))
const ToursPage = React.lazy(() => import("../components/pages/ToursPage/ToursPage"))

interface RouteType{
  index?: boolean
  path: string
  element: ReactNode
}

const RouteNames = {
  home: "/",
  tours: "/tours/:id?"
}

const publicRotues: RouteType[] = [
  {index: true, path: RouteNames.home, element: <HomePage/>},
  {path: RouteNames.tours, element: <ToursPage/>}
]

function AppRouter(){
  return(
    <Routes>
      {publicRotues.map(e => 
        <Route index={e.index} path={e.path} element={e.element}/>  
      )}
      <Route path="*" element={<ErrorPage message="Ошибка 404. Страница не найдена"/>}/>
    </Routes>
  )
}

export default AppRouter