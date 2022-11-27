import { Container, Brand, Menu, Search, Content, NewNote } from './styles'
import { FiPlus, FiSearch} from 'react-icons/fi'

import { Input } from '../../components/Input'

import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'

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
              <h1>Minhas Notas</h1>
            </Content>

              <NewNote>
                <FiPlus/>Criar Nota
              </NewNote>
    </Container>
  )
}