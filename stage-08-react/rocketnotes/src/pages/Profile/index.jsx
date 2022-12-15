import { FiArrowLeft,FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'
import { Container, Form, Avatar } from "./styles";
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom'
 
export function Profile() {
  return(
    <Container>
      <header>
        <Link to="/">
        <FiArrowLeft />
        </Link>
      </header>

      <Form>

        <Avatar>
        <img src="https://github.com/lucasdonay.png" alt="Foto do Usuario" />

        <label htmlFor="avatar">
          <FiCamera/>
          <input id='avatar'
          type='file' />
        </label>
        
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

        <Button title='Salvar'/>

      </Form>
    </Container>
  )
}