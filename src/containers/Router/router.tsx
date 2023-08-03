import { FC, useCallback, useState } from 'react'
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom'
// import Signup from '../../views/Auth/Signup'
import Dashboard from '../../views/Dashboard'
import Login from '../../views/Auth/Login'
// import PostDetails from '../../views/PostDetails'
// import { getToken } from '../../services/storage/token'

const Router: FC = () => {
  const [isLoading, setIsLoading] = useState(false)

  const recreateLogin = useCallback(() => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }, [])

  const recreateLogOut = useCallback(() => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }, [])

  if (isLoading) {
    return <div>Cargando...</div>
  }

  //   const ProtectedRoutes = ({ children }: { children: JSX.Element }) => {
  //     const token = getToken()
  //     const location = useLocation()
  //     if (!token) {
  //       return <Navigate to="/" replace state={{ from: location }} />
  //     }

  //     return children
  //   }
  //TODO Descomentar cuando Mario meta el TOKEN
  //   const HandleSession = ({ children }: { children: JSX.Element }) => {
  //     const token = getToken()
  //     const location = useLocation()
  //     if (token) {
  //       if (
  //         location.pathname === '/signup' ||
  //         location.pathname === '/login' ||
  //         location.pathname === '/'
  //       ) {
  //         return <Navigate to="/dashboard" replace state={{ from: location }} />
  //       }
  //     }
  //     return children
  //   }

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route
          path="/*"
          element={
            <HandleSession>
              <Signup onSignup={recreateLogin} />
            </HandleSession>
          }
        />
        <Route
          path="/signup"
          element={
            <HandleSession>
              <Signup onSignup={recreateLogin} />
            </HandleSession>
          }
        />
        <Route
          path="/login"
          element={
            <HandleSession>
              <Login onLogin={recreateLogin} />
            </HandleSession>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoutes>
              <Dashboard onLogout={recreateLogOut} />
            </ProtectedRoutes>
          }
        /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default Router
