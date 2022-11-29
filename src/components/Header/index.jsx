import { Container, Profile, Logout } from './styles';
import { RiShutDownLine } from 'react-icons/ri';
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';
import avatarPlaceholder from '../../assets/avatar_placeholder.svg';
import { useNavigate, Link } from 'react-router-dom';



export const Header = () => {
  const { signOut , user} = useAuth();
  const navigate = useNavigate()
  
  const handleSignOut = () => {
    signOut()
  }

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
  
  return (
    <Container>
      <Profile to = '/profile'>
        <img src={avatarUrl} alt={user.name}/>
      
        <div>
          <span>Bem-vindo/a</span>
          <strong>
            <Link to = '/profile'>
            {user.name}
            </Link>
            </strong>
        </div> 
            
      </Profile>

      <Logout onClick = {handleSignOut}>
        <RiShutDownLine />
      </Logout>
    </Container>
  )
}