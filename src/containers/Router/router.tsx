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
import CreatePost from '../../views/CreatePost'
import PostDetailsView from '../../views/Post'
import Faq from '../../views/Faq'
import NotFound from '../../views/NotFound'
import UserDetailsPage from '../../views/UserDetailsPage'
import { getToken } from '../../services/storage/token'
import { CircularProgress } from '@material-ui/core'

const Router: FC = () => {
  const [isLoading, setIsLoading] = useState(false)

  const recreateLogin = useCallback(() => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }, [])

  const recreateLogOut = useCallback(() => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }, [])

  if (isLoading) {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
        }}
      >
        <CircularProgress color="primary" />
      </div>
    )
  }

  const ProtectedRoutes = ({ children }: { children: JSX.Element }) => {
    const token = getToken()
    const location = useLocation()
    if (!token) {
      return <Navigate to="/" replace state={{ from: location }} />
    }

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
          path="/users/:userId"
          element={
            <ProtectedRoutes>
              <UserDetailsPage onLogout={recreateLogOut} />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/postform"
          element={
            <ProtectedRoutes>
              <CreatePost onLogout={recreateLogOut} />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/posts/:postId"
          element={
            <ProtectedRoutes>
              <PostDetailsView onLogout={recreateLogOut} />
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
