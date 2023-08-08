import { FC, memo} from 'react'

import { PerfilContainer, Content } from './styles'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import type { Props } from './types'

const Followers: FC<Props> = ({ onLogout }) => {
  return (
    <PerfilContainer>
      <Header onLogout={onLogout} />
      <Content>
        
      </Content>
      <Footer />
    </PerfilContainer>
  )
}

export default memo(Followers)
