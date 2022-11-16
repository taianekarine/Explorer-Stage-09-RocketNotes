import { Container } from './styles';

export const ButtonText = ({ title, isActive = false, ...rest }) => {
  return (
    <Container 
    type = 'button'
    isActive = {isActive}
     {...rest}
     >
      { title }
    </Container>
  );
}