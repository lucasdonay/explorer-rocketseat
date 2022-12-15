import { Profile, Logout, Container } from "./styles";
import { RiShutDownLine } from 'react-icons/ri'

export function Header() {
  return(
    <Container>
      <Profile to='/profile'>
        <img src="https://github.com/lucasdonay.png" alt="Foto do Usuario" />
        <div>
          <span>Bem-Vindo</span>
          <strong>Lucas Donay</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  )
}