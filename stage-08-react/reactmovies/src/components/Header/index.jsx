import { Container, Profile } from './styles';

export function Header() {
  return (
     <Container>    
      <h1>RocketMovies</h1>
        <Profile>
          <div>
            <span>Lucas Donay</span>
            <span className='sair'>sair</span>
          </div>
          <img src="https://github.com/lucasdonay.png" alt="Img Donay" />
        </Profile>
    </Container>
  );
}
