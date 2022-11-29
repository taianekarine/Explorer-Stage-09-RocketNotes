import { useState } from 'react';
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi';
import { Container, Form, Avatar } from './styles';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input'
import { useAuth } from '../../hooks/auth';
import { Link } from 'react-router-dom';

export const Profile = () => {
    const { user, updateProfile } = useAuth();

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [passwordOld, setPasswordOld] = useState();
    const [passwordNew, setPasswordNew] = useState();
    const [avatar, setAvatar] = useState(null);


    const handleUpdate = async () => {
      const user = {
        name,
        email,
        password: passwordNew,
        old_password: passwordOld,
      }

      await updateProfile({ user });

    };

    




  return (
    <Container>
    <header>
      <Link to = '/'> <FiArrowLeft /></Link>
    </header>
    

    <Form>

      <Avatar>
        <img src={avatar} 
        alt="Foto do usuário" />
      
        <label htmlFor="avatar">
          <FiCamera />

          <input 
            id = 'avatar'
            type = 'file'
            onChange = {handleChangeAvatar}
          />

        </label>
      </Avatar>


      <Input
       placeholder = 'Nome'
       type = 'text'
       icon = {FiUser} 
       value = {name}
       onChange = {e => setName(e.target.value)}
      />

      <Input
       placeholder = 'E-mail'
       type = 'email'
       icon = {FiMail} 
       value = {email}
       onChange = {e => setEmail(e.target.value)}
      />

      <Input
       placeholder = 'Senha atual'
       type = 'password'
       icon = {FiLock} 
       onChange = {e => setPasswordOld(e.target.value)}
      />

      <Input
       placeholder = 'Nova senha'
       type = 'password'
       icon = {FiLock} 
       onChange = {e => setPasswordNew(e.target.value)}
      />

      <Button title = 'Salvar' onClick={handleUpdate}/>
    </Form>

    </Container>

  )

   


}