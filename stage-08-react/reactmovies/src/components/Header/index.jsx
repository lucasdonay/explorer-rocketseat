import { Container, Profile } from './styles';
import { Input } from '../../components/Input';
import { Link } from 'react-router-dom';
export function Header() {
  return (
    <Container>
      <Link to="/">
        <h1>RocketMovies</h1>
      </Link>

      <Input placeholder="Pesquisar pelo título" />
      <Profile>
        <div>
          <Link to="/profile">
            <span>Lucas Donay</span>
          </Link>
          <span className="sair">sair</span>
        </div>

        <Link to="/profile">
          <img src="https://github.com/lucasdonay.png" alt="Img Donay" />
        </Link>
      </Profile>
    </Container>
  );
}
