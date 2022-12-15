import { Container, Brand, Menu, Search, Content, NewNote } from './styles'
import { FiPlus, FiSearch} from 'react-icons/fi'

import { Input } from '../../components/Input'

import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'

import { Section } from '../../components/Section'
import { Notes } from '../../components/Notes'

export function Home() {
  return(
    <Container>
      <Brand>
      <h1>Rocketnotes</h1>
      </Brand>
        <Header />
        <Menu>
          <li><ButtonText IsActive title="Todos" /></li>
          <li><ButtonText title='Frontend'/></li>
          <li><ButtonText title='Nodejs'/></li>
          <li><ButtonText title='React'/></li>
        </Menu>

          <Search>
             <Input placeholder="Pesquise aqui" icon={FiSearch}/>
          </Search>

            <Content>
              <Section title="Minhas Notas">

                  <Notes data={{
                    title: 'React',
                    tags: [
                      {id: '1', name: 'react'},
                      {id: '2', name: 'rocktseat'}
                    ]
                  }}/>
                   <Notes data={{
                    title: 'React',
                    tags: [
                      {id: '1', name: 'vue'},
                      {id: '2', name: 'ingressolive'}
                    ]
                  }}/>

              </Section>
            </Content>

              <NewNote to='/new'>
                <FiPlus/>Criar Nota
              </NewNote>
    </Container>
  )
}