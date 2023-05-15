import { Container, Profile, Search } from './styles';
import { Link } from 'react-router-dom';
export function Header({ children }) {
  return (
    <Container>
      <Link to="/">
        <h1>RocketMovies</h1>
      </Link>

      <Search>
        {children}
      </Search>
      
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
