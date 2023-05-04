import { Container, Form } from './styles';
import { Input } from '../../components/Input';
import { FiSearch, FiLock } from 'react-icons/fi';
import {Button} from '../../components/Button'

export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Faça seu login</h2>

        <Input icon={FiSearch} placeholder="E-mail" type="text" />
        <Input icon={FiLock} placeholder="senha" type="password" />


        <Button title="Entrar"/>
      </Form>
    </Container>
  );
}
