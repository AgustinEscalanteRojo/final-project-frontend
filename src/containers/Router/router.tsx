import { FC, useCallback, useState } from 'react'
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom'
import Signup from '../../views/Auth/Signup'
import Login from '../../views/Auth/Login'
import Dashboard from '../../views/Dashboard'
import Profile from '../../views/Profile'
import Followers from '../../views/Followers'
import CreatePost from '../../views/CreatePost'
import Detail from '../../views/Detail'
import Faq from '../../views/Faq'
import NotFound from '../../views/NotFound'
import { getToken } from '../../services/storage/token'
import UpdatePost from '../../views/UpdatePost'

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
    return <div>Loading...</div>
  }

  const ProtectedRoutes = ({ children }: { children: JSX.Element }) => {
    // TODO: En desarollo, descomentar la ProtectedRoutes para volver a proteger las rutas,
    // const token = getToken()
    // const location = useLocation()
    // if (!token) {
    //   return <Navigate to="/" replace state={{ from: location }} />
    // }

    return children
  }

  const HandleSession = ({ children }: { children: JSX.Element }) => {
    const token = getToken()
    const location = useLocation()
    if (token) {
      if (
        location.pathname === '/signup' ||
        location.pathname === '/login' ||
        location.pathname === '/'
      ) {
        return <Navigate to="/dashboard" replace state={{ from: location }} />
      }
    }
    return children
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
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
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoutes>
              <Profile onLogout={recreateLogOut} />
            </ProtectedRoutes>
          }
        />

        <Route
          path="/followers"
          element={
            <ProtectedRoutes>
              <Followers onLogout={recreateLogOut} />
            </ProtectedRoutes>
          }
        />

        <Route
          path="/create-post"
          element={
            <ProtectedRoutes>
              <CreatePost onLogout={recreateLogOut} />
            </ProtectedRoutes>
          }
        />

        <Route
          path="/details"
          element={
            <ProtectedRoutes>
              <Detail onLogout={recreateLogOut} />
            </ProtectedRoutes>
          }
        />

        <Route
          path="/faq"
          element={
            <ProtectedRoutes>
              <Faq onLogout={recreateLogOut} />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/404"
          element={
            <ProtectedRoutes>
              <NotFound />
            </ProtectedRoutes>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
