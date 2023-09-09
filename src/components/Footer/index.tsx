import { FC, memo } from 'react'
import { Container, Content, Text, FAQLink } from './styles'

const Footer: FC = () => {
  return (
    <Container>
      <Content>
        <Text>© 2023 Shared Flavours</Text>
        <FAQLink to="/faq">
          Do you have any questions? Visit our FAQ's section
        </FAQLink>
      </Content>
    </Container>
  )
}

export default memo(Footer)
