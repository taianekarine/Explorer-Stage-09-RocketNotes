import { useState, useEffect} from 'react';
import { Container, Links, Content } from './styles';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Section } from '../../components/Section';
import { Tag } from '../../components/Tag';
import { ButtonText } from '../../components/ButtonText'
import { useParams, useNavigate } from 'react-router-dom';
import { api } from '../../services/api';

export const Details = () => {
  const [data, setData] = useState(null)


  const params = useParams()
  
  const navigate = useNavigate()
  const handleBack = () => {
    navigate('/')
  }

  const handleRemove = async () => {
    const confirm = window.confirm('Deseja realmente remover a nota?');

    if(confirm) {
      await api.delete(`/notes/${params.id}`);
      handleBack()
    }
  }

  useEffect(() => {
    const fetchNote = async () => {
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data);
    }

    fetchNote();
  },[])

  return (
    <Container>
      <Header />

      {
        data &&
      <main>
        <Content>
  
          <ButtonText title = 'Excluir nota' onClick = {handleRemove}/>

          <h1>{data.title}</h1>
          <p>{data.description}</p>
      
          { data.links &&
            <Section title='Links úteis'>
              <Links>
                { 
                  data.links.map(link => (
                    <li> 
                        <a href={link.url} target = '_blank'>
                          {link.url}
                        </a>   
                      </li>
                  ))
                }
              </Links>
            </Section>
          }
          
          { data.tags &&

          <Section title='Marcadores'>
            {
              data.tags.map(tag => (
              <Tag title={tag.name} />
              ))
            }
          </Section>

          }

          <Button title = 'Voltar' onClick = {handleBack}/>
        </Content>
      </main> 
      }
    </Container>

  )


};
