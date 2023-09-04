import { FC, memo, useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { PerfilContainer, Content, Backgroundcolor } from './styles'
import type { Props } from './types'
import { User } from '../../models/User'

const Followers: FC<Props> = ({ onLogout}) => {


  return (
    <PerfilContainer>
      <Header onLogout={onLogout} />
      <Content>

      </Content>
      <Footer />
      <Backgroundcolor />
    </PerfilContainer>
  )
}

export default memo(Followers)
