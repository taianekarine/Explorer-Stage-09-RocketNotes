import { Container } from './styles';


export const TextArea = ({ value, ...rest }) => {
  
  return (
    <Container {...rest}>
      { value }

    </Container>




  )
}