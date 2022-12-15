import { FiMail, FiLock, FiUser } from 'react-icons/fi'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom'

import { Container, Form, Background } from "./styles";

export function SignUp() {
  return(
    <Container>
      <Background/>
      <Form>

        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links uteis</p>

        <h2>Crie sua Conta</h2>

        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
        />

        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
        />

        <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
        />

       <Button title="Criar Conta"/>

      <Link to='/'>
        Voltar para o login
      </Link>

      </Form>
     
    </Container>
  )
}