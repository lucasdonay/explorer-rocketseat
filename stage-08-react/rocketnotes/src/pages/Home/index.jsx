import { Container, Brand, Menu, Search, Content, NewNote } from './styles'

import { Header } from '../../components/Header'

export function Home() {
  return(
    <Container>
      <Brand>
      <h1>Rocketnotes</h1>
      </Brand>
        <Header />
        <Menu>
          <li>teste</li>
          <li>teste</li>
          <li>teste</li>
        </Menu>

          <Search>
              <input type="text" title='teste'/>
          </Search>

            <Content>
              
            </Content>

              <NewNote>
                
              </NewNote>
    </Container>
  )
}