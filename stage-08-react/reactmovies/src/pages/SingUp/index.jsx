import { Container, Form, Background } from './styles';
import { Input } from '../../components/Input';
import { FiMail, FiLock, FiUser } from 'react-icons/fi';
import {Button} from '../../components/Button'
import { Link } from 'react-router-dom';
export function SingUp() {
  return (
    <Container>

      <Background/>

      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Crie sua conta</h2>

        <Input icon={FiUser} placeholder="Nome" type="text" />
        <Input icon={FiMail} placeholder="E-mail" type="text" />
        <Input icon={FiLock} placeholder="Senha" type="password" />


        <Button title="Cadastrar"/>

        <Link to='/logar'>Voltar para login</Link>
      </Form>

    

    </Container>
  );
}
