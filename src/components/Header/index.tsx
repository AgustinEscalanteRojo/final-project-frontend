// import { FC, memo, useCallback, useState, useEffect } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import type { Props } from './types'
// import { logout } from '../../services/api/auth'
// import Image from '../Image'
// import IconButton from '@mui/material/IconButton'
// import ProfileCircleIcon from '@mui/icons-material/AccountCircle'
// import LogoutIcon from '@mui/icons-material/Logout'
// import MenuIcon from '@mui/icons-material/Menu'
// import SearchIcon from '@mui/icons-material/Search'
// import PlusIcon from '@mui/icons-material/AddBoxOutlined'
// import theme from '../../styles/theme'
// import {
//   DeskButtonController,
//   Container,
//   LogoContainer,
//   MobileButtonController,
//   SearchArea,
// } from './styles'

// const Header: FC<Props> = ({ onLogout }) => {
//   const navigate = useNavigate()
//   // TODO no se usa
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
//   const [isSearchOpen, setIsSearchOpen] = useState(false)
//   const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768)
//   const [showProfileAndLogout, setShowProfileAndLogout] = useState(false) // Nuevo estado

//   const handleGoToProfile = useCallback(() => {
//     navigate('/profile')
//     setIsMobileMenuOpen(false)
//   }, [navigate])

//   const handleLogout = useCallback(async () => {
//     await logout()
//     onLogout()
//     navigate('/login')
//   }, [navigate, onLogout])

//   const handleGoToPost = useCallback(() => {
//     navigate('/create-post')
//   }, [navigate])

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen((prevState) => {
//       if (!prevState) {
//         setShowProfileAndLogout(true) // Mostrar los iconos al abrir el menú
//       } else {
//         setShowProfileAndLogout(false) // Ocultar los iconos al cerrar el menú
//       }
//       return !prevState
//     })
//   }

//   const toggleSearch = () => {
//     setIsSearchOpen((prevState) => !prevState)
//   }

//   useEffect(() => {
//     const handleWindowResize = () => {
//       setIsMobileView(window.innerWidth < 768)
//     }

//     window.addEventListener('resize', handleWindowResize)

//     return () => {
//       window.removeEventListener('resize', handleWindowResize)
//     }
//   }, [])

//   return (
//     <Container>
//       {isMobileView && (
//         <MobileButtonController>
//           <IconButton size="large" onClick={toggleMobileMenu}>
//             <MenuIcon sx={{ color: theme.colors.blue175, fontSize: 30 }} />
//           </IconButton>
//           {showProfileAndLogout && (
//             <div>
//               <IconButton size="large" onClick={handleGoToProfile}>
//                 <ProfileCircleIcon
//                   sx={{ color: theme.colors.blue175, fontSize: 30 }}
//                 />
//               </IconButton>
//               <IconButton size="large" onClick={handleLogout}>
//                 <LogoutIcon
//                   sx={{ color: theme.colors.blue175, fontSize: 30 }}
//                 />
//               </IconButton>
//             </div>
//           )}
//         </MobileButtonController>
//       )}
//       <LogoContainer>
//         <Link to="/dashboard">
//           <Image src="/logo&tipo.png" alt="logo&tipo" variant="logoHeader" />
//         </Link>
//       </LogoContainer>
//       {isMobileView && (
//         <MobileButtonController>
//           <IconButton size="large" onClick={toggleSearch}>
//             <SearchIcon
//               sx={{ color: theme.colors.blue175, fontSize: 30 }}
//             />
//           </IconButton>
//           <IconButton size="large" onClick={handleGoToPost}>
//             <PlusIcon sx={{ color: theme.colors.blue25, fontSize: 30 }} />
//           </IconButton>
//         </MobileButtonController>
//       )}
//       {!isMobileView && (
//         <DeskButtonController>
//           <IconButton
//             size="large"
//             onClick={handleGoToProfile}
//             sx={{
//               '&:hover': {
//                 '& svg': {
//                   color: theme.colors.blue75,
//                 },
//               },
//               '&:active': {
//                 '& svg': {
//                   color: theme.colors.blue25,
//                 },
//               },
//             }}
//           >
//             <ProfileCircleIcon
//               sx={{ color: theme.colors.blue75, fontSize: 35 }}
//             />
//           </IconButton>
//           <IconButton
//             size="large"
//             onClick={handleLogout}
//             sx={{
//               '&:hover': {
//                 '& svg': {
//                   color: theme.colors.blue75,
//                 },
//               },
//               '&:active': {
//                 '& svg': {
//                   color: theme.colors.blue75,
//                 },
//               },
//             }}
//           >
//             <LogoutIcon
//               sx={{ color: theme.colors.blue75, fontSize: 35 }}
//             />
//           </IconButton>
//           <IconButton
//             size="large"
//             onClick={toggleSearch}
//             sx={{
//               '&:hover': {
//                 '& svg': {
//                   color: theme.colors.blue75,
//                 },
//               },
//               '&:active': {
//                 '& svg': {
//                   color: theme.colors.blue25,
//                 },
//               },
//             }}
//           >
//             <SearchIcon
//               sx={{ color: theme.colors.blue75, fontSize: 35 }}
//             />
//           </IconButton>
//           <IconButton
//             size="large"
//             onClick={handleGoToPost}
//             sx={{
//               '&:hover': {
//                 '& svg': {
//                   color: theme.colors.blue75,
//                 },
//               },
//               '&:active': {
//                 '& svg': {
//                   color: theme.colors.white ,
//                 },
//               },
//             }}
//           >
//             <PlusIcon sx={{ color: theme.colors.blue75, fontSize: 35 }} />
//           </IconButton>
//         </DeskButtonController>
//       )}
//       {isSearchOpen && (
//         <SearchArea>
//           <input type="text" placeholder="Buscar recetas..." />
//         </SearchArea>
//       )}
//     </Container>
//   )
// }

// export default memo(Header)

import { FC, memo, useCallback, useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import type { Props } from './types'
import { logout } from '../../services/api/auth'
import Image from '../Image'
import IconButton from '@mui/material/IconButton'
import ProfileCircleIcon from '@mui/icons-material/AccountCircle'
import LogoutIcon from '@mui/icons-material/Logout'
import Home from '@mui/icons-material/CottageOutlined'
import PlusIcon from '@mui/icons-material/AddBoxOutlined'
import theme from '../../styles/theme'
import {
  DeskButtonController,
  Container,
  LogoContainer,
  MobileButtonController,
  ProfileCircleIconStyled,
  LogoutIconStyled,
  HomeIconStyled,
  PlusIconStyled,
} from './styles'

const Header: FC<Props> = ({ onLogout }) => {
  const navigate = useNavigate()

  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768)

  const handleGoToHome = useCallback(() => {
    navigate('/dashboard')
  }, [navigate])

  const handleGoToPost = useCallback(() => {
    navigate('/create-post')
  }, [navigate])

  const handleGoToProfile = useCallback(() => {
    navigate('/profile')
  }, [navigate])

  const handleLogout = useCallback(async () => {
    await logout()
    onLogout()
    navigate('/login')
  }, [navigate, onLogout])

  useEffect(() => {
    const handleWindowResize = () => {
      setIsMobileView(window.innerWidth < 768)
    }

    window.addEventListener('resize', handleWindowResize)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [])

  return (
    <Container>
      {!isMobileView && (
        <DeskButtonController>
          <IconButton
            size="large"
            onClick={handleGoToHome}
            sx={{
              '&:hover': {
                '& svg': {
                  color: theme.colors.aquaSky,
                },
              },
              '&:active': {
                '& svg': {
                  color: theme.colors.lagoonMist,
                },
              },
            }}
          >
            <Home sx={{ color: theme.colors.softSky, fontSize: 35 }} />
          </IconButton>

          <IconButton
            size="large"
            onClick={handleGoToPost}
            sx={{
              '&:hover': {
                '& svg': {
                  color: theme.colors.aquaSky,
                },
              },
              '&:active': {
                '& svg': {
                  color: theme.colors.lagoonMist,
                },
              },
            }}
          >
            <PlusIcon sx={{ color: theme.colors.softSky, fontSize: 35 }} />
          </IconButton>

          <IconButton
            size="large"
            onClick={handleGoToProfile}
            sx={{
              '&:hover': {
                '& svg': {
                  color: theme.colors.aquaSky,
                },
              },
              '&:active': {
                '& svg': {
                  color: theme.colors.lagoonMist,
                },
              },
            }}
          >
            <ProfileCircleIcon
              sx={{ color: theme.colors.softSky, fontSize: 35 }}
            />
          </IconButton>

          <IconButton
            size="large"
            onClick={handleLogout}
            sx={{
              '&:hover': {
                '& svg': {
                  color: theme.colors.aquaSky,
                },
              },
              '&:active': {
                '& svg': {
                  color: theme.colors.lagoonMist,
                },
              },
            }}
          >
            <LogoutIcon sx={{ color: theme.colors.softSky, fontSize: 35 }} />
          </IconButton>
        </DeskButtonController>
      )}

      {isMobileView && (
        <MobileButtonController>
          <IconButton size="large" onClick={handleGoToHome}>
            <HomeIconStyled />
          </IconButton>
          <IconButton size="large" onClick={handleGoToPost}>
            <PlusIconStyled />
          </IconButton>
        </MobileButtonController>
      )}

      <LogoContainer>
        <Link to="/dashboard">
          <Image src="/logo&tipo.png" alt="logo&tipo" variant="logoHeader" />
        </Link>
      </LogoContainer>

      {isMobileView && (
        <MobileButtonController>
          <IconButton size="large" onClick={handleGoToProfile}>
            <ProfileCircleIconStyled />
          </IconButton>
          <IconButton size="large" onClick={handleLogout}>
            <LogoutIconStyled />
          </IconButton>
        </MobileButtonController>
      )}
    </Container>
  )
}

export default memo(Header)
