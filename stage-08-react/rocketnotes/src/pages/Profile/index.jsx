import { FiArrowLeft,FiUser, FiMail, FiLock } from 'react-icons/fi'
import { Container, Form, Avatar } from "./styles";
import { Input } from '../../components/Input'
 
export function Profile() {
  return(
    <Container>
      <header>
        <a href="/">
        <FiArrowLeft />
        </a>
      </header>

      <Form>

        <Avatar>
        <img src="https://github.com/lucasdonay.png" alt="Foto do Usuario" />
        </Avatar>

        <div className='white'>
        <Input
        icon={FiUser}
        placeholder='Lucas Donay'
        type='text'
        />

         <Input
        icon={FiMail}
        placeholder='lucas.donay@gmail.com'
        type='text'
        />
        </div>

        <Input
        icon={FiLock}
        placeholder='Senha Atual'
        type='password'
        />

        <Input
        icon={FiLock}
        placeholder='Nova Senha'
        type='password'
        />

        

      </Form>
    </Container>
  )
}