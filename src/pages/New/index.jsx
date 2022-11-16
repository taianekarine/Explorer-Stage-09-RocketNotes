import { Link } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { TextArea } from '../../components/TextArea';
import { NoteItem } from '../../components/NoteItem';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';
import { Container, Form } from './styles';


export const New = () => {

  return (
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <h1> Criar Nota </h1>
            <Link to ='/'>Voltar</Link>
          </header>

          <Input placeholder = 'Título' />
          <TextArea placeholder = 'Observações' />

          <Section title = 'Links úteis'>
            <NoteItem value = 'https://rocketseat.com.br' />
            <NoteItem isNew placeholder = 'Novo link' />
          </Section>

          <Section title = 'Marcadores'>
            <div class='tags'> 
              <NoteItem value = 'rocketseat' />
              <NoteItem isNew placeholder = 'Nova tag' />
            </div>
          </Section>

          <Button title = 'Salvar' />

        </Form>
      </main>
    </Container>
  )

}