import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { TextArea } from '../../components/TextArea'
import { Container,Form } from './styles'
import { NoteItem } from '../../components/NoteItem'
import { Section } from '../../components/Section'
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom'

export function New() {
  return(
    <Container>
      <Header/>
      <main>
        <Form>
          <header>
            <h1>Criar Nota</h1>
            <Link to='/'>voltar</Link>
          </header>
            <Input
            placeholder='Titulo'
            type='text'
            />
            <TextArea placeholder='Observações'/>

           <Section title='Links úteis'>
            <NoteItem value='https://www.instagram.com/'/>
            <NoteItem isNew placeholder='Novo Link'/>
           </Section>

           <Section title='Tags'>
            <div className='tags'>
              <NoteItem value='react'/>
              <NoteItem isNew placeholder='Nova tag'/>
            </div>
           </Section>

           <Button title='Salvar'/>
        </Form>
      </main>
    </Container>
  )
}