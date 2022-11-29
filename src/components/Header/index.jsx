import { Container, Profile, Logout } from './styles';
import { RiShutDownLine } from 'react-icons/ri';
import { useAuth } from '../../hooks/auth';


export const Header = () => {
  const { signOut } = useAuth();

  return (
    <Container>
      <Profile to = '/profile'>
        <img src="https://github.com/taianekarine.png" alt="Foto do  usuario" />
      
        <div>
          <span>Bem-vindo</span>
          <strong>Taiane Karine</strong>
        </div> 
            
      </Profile>

      <Logout onClick = {signOut}>
        <RiShutDownLine />
      </Logout>
    </Container>
  )
}