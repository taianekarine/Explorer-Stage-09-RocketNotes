import { useState } from 'react';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { TextArea } from '../../components/TextArea';
import { NoteItem } from '../../components/NoteItem';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { Container, Form } from './styles';
import { api } from '../../services/api';
import { useNavigate } from 'react-router-dom';


export const New = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const [links, setLinks] = useState([]);
  const [newLink, setNewLink] = useState('');

  const [tags, setTags] = useState([]);
  const [newTags, setNewTags] = useState('');

  const navigate = useNavigate();

  const handleAddLink = () => {
    setLinks(prevState => [...prevState, newLink])
    setNewLink('');
  }

  const handleRemoveLink = (deleted) => {
    setLinks(prevState => prevState.filter(link =>link !== deleted))
  }

  const handleAddTag = () => {
    setTags(prevState => [...prevState, newTags]);
    setNewTags('');
  }

  const handleRemoveTag = (deleted) => {
    setTags(prevState => prevState.filter(tag =>tag !== deleted))
  }

  const handleNewNote = async () => {
    if(!title) {
      alert('Digite o título da nota.')
    }

    if(newLink) {
      return alert('O campo link esta preenchido sem adicionar. Clique para adicionarr ou deixe o campo vazio.')
    }
    
    if(newTags) {
      return alert('O campo marcadores preenchido sem adicionar. Clique para adicionarr ou deixe o campo vazio.')
    }

    await api.post('/notes',  {
      title,
      description,
      tags,
      links
    });

    alert('Nota criada com sucesso!');
    navigate('/')
  }

  const handleBack = () => {
    navigate('-1')
  }


  return (
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <h1> Criar Nota </h1>
            <ButtonText title = 'Voltar' onClick = {handleBack}/>
          </header>


          <Input 
            placeholder = 'Título'
            onChange = {e => setTitle(e.target.value)}
          />

          <TextArea 
            placeholder = 'Observações'
            onChange = {e => setDescription(e.target.value)} 
          />

          <Section title = 'Links úteis'>
            {
              links.map((link, index) => (
                <NoteItem
                key = {String(index)}
                value = {link}
                onClick = {() => handleRemoveLink(link)} />
              ))
            }
            <NoteItem isNew 
            placeholder = 'Novo link'
            value = {newLink}
            onChange = {e => setNewLink(e.target.value)}
            onClick = {handleAddLink} />

          </Section>

          <Section title = 'Marcadores'>
            <div className='tags'> 
            {
              tags.map((tag, index) => (
                <NoteItem
                  key = {String(index)}
                  value = {tag}
                  onClick = {() => handleRemoveTag(tag)}
                />
              ))
            }

              <NoteItem 
                isNew 
                placeholder = 'Nova tag'
                onChange = {e => setNewTags(e.target.value)}
                value = {newTags}
                onClick = {handleAddTag} 
              />
            </div>
          </Section>

          <Button title = 'Salvar' onClick = {handleNewNote}/>

        </Form>
      </main>
    </Container>
  )

}