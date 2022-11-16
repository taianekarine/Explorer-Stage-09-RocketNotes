import { Container, Links, Content } from './styles';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Section } from '../../components/Section';
import { Tag } from '../../components/Tag';
import { ButtonText } from '../../components/ButtonText'


export const Details = () => {

  return (
    <Container>
      <Header />

      <main>
        <Content>
  
          <ButtonText title = 'Excluir nota' />

          <h1>Introdução ao React</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Et id non aspernatur consectetur dolorum mollitia. 
            Aspernatur minus perferendis nulla cumque similique asperiores 
            aliquid, consequatur illum incidunt optio, a, obcaecati quos.</p>

          <Section title='Links úteis'>
            <Links>
              <li> <a href="#"></a> https://www.rocketseat.com.br </li>
              <li> <a href="#"></a> https://www.rocketseat.com.br </li>

            </Links>
          </Section>

          <Section title='Marcadores'>
            <Tag title='express' />
            <Tag title='nodejs' /> 
          </Section>

          <Button title = 'Voltar'/>
        </Content>
      </main> 
    </Container>

  )


};
