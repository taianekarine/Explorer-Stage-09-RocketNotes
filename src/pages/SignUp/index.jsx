import { Container, Form, Background } from './styles';
import { FiMail, FiLock, FiUser } from 'react-icons/fi';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Link, useNavigate } from 'react-router-dom';
import { api } from '../../services/api'
import { useState } from 'react' // É um hook do react.

export const SignUp = () => {
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');


  const navigate = useNavigate()

  const handleSignUp = () => {
    if(!name || !email || !password){
      return alert('Preencha todos os campos!');
    }

    api.post('/users', { name, email, password })
    .then( () => {
      alert('Usuário cadastado com sucesso!');
      navigate('/');
    })
    .catch(error => {
      if(error.response){
        alert(error.response.data.message);
      } else { alert('Não foi possível fazer o cadastro. Tente novamente!')}
    })
  }

  return (
    <Container>
      <Background/>

      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis</p>

        <h2>Crie sua conta</h2>

        <Input
          placeholder = 'Nome'
          type = 'text'
          icon = {FiUser}
          onChange = {e => setName(e.target.value)}
        />

        <Input
          placeholder = 'E-mail'
          type = 'text'
          icon = {FiMail}
          onChange = {e => setEmail(e.target.value)}
        />

        <Input
          placeholder = 'Senha'
          type = 'password'
          icon = {FiLock}
          onChange = {e => setPassword(e.target.value)}
        />

       <Button title = 'Cadastrar' onClick = {handleSignUp}/>

       <Link to="/">Voltar para o login</Link>

      </Form>



    </Container>
  );

}