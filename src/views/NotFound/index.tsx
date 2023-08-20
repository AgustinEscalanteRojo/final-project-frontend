import { FC, memo } from 'react'
import { Container, Message, Title } from './styles';

const NotFound : FC = () => {
  return (
    <Container>
      <Title>Error 404</Title>
      <Message>page not found</Message>
    </Container>
  );
};

export default memo (NotFound)