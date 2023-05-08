import { useNavigate } from 'react-router-dom';
import { ButtonText } from '../../components/ButtonText';
import { FiArrowLeft, FiCamera, FiMail, FiUser, FiLock } from 'react-icons/fi';
import { Container, Form, Avatar } from './styles';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

export function Profile() {
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }
  return (
    <Container>
      <header>
        <ButtonText onClick={handleBack}>
          <FiArrowLeft />
          Voltar
        </ButtonText>
      </header>

      <Form>
        <Avatar>
          <img src="https://github.com/lucasdonay.png" alt="Img Donay" />

          <label htmlFor="avatar">
            <FiCamera />
            <input type="file" id="avatar" />
          </label>
        </Avatar>

        <div className="white">

        <Input placeholder="Lucas Donay" icon={FiUser} />
        <Input placeholder="lucas.donay@gmail.com" icon={FiMail} />

        <Input placeholder="Senha Atual" icon={FiLock} />
        <Input placeholder="Nova Senha" icon={FiLock} />
        </div>
        <Button title="Salvar" />
      </Form>
    </Container>
  );
}
