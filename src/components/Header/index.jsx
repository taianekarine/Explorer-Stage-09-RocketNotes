import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from './styles';


export const Header = () => {
  return (
    <Container>
      <Profile to = '/profile'>
        <img src="https://github.com/taianekarine.png" alt="Foto do  usuario" />
      
        <div>
          <span>Bem-vindo</span>
          <strong>Taiane Karine</strong>
        </div> 
            
      </Profile>

      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  )
}