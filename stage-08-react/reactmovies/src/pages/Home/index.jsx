import { Header } from '../../components/Header';
import { Container, NewMovie, Content } from './styles';
import { FiPlus } from 'react-icons/fi';
import { Input } from '../../components/Input';

import { Movies } from '../../components/Movies';

export function Home() {
  return (
    <Container>
      <Header>
        <div className="input">
          <Input placeholder="Pesquisar pelo título" />
        </div>
      </Header>

      <main>
        <header>
          <h1>Meus filmes</h1>

          <NewMovie to="/new">
            <FiPlus />
            Adicionar filme
          </NewMovie>
        </header>

        <Content>
          <Movies to="/detalhes" />
          <Movies to="/detalhes" />
          <Movies to="/detalhes" />
        </Content>
      </main>
    </Container>
  );
}
