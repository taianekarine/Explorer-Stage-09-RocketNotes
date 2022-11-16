import { Container } from './style';

export const Tag = ({ title, ...rest }) => {
  return (
    <Container { ...rest } >
      { title }
    </Container>
  )
}