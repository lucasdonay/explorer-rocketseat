import { Container } from './style';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { ButtonText } from '../../components/ButtonText';
import { FiArrowLeft } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';
import { NoteItem } from '../../components/NoteItem';

export function New() {
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }
  return (
    <Container>
      <Header>
        <div className="input">
          <Input placeholder="Pesquisar pelo título" />
        </div>
      </Header>

      <main>
        <header>
          {' '}
          <ButtonText onClick={handleBack}>
            <FiArrowLeft />
            Voltar
          </ButtonText>
        </header>

        <h2>Novo Filme</h2>

        <form action="">
          <div className="inputs">
            <Input placeholder="Título" />
            <Input placeholder="Sua nota (de 0 a 5)" />
          </div>
          <textarea
            name=""
            id="observacoes"
            cols="30"
            rows="10"
            placeholder="Observações"
          ></textarea>
        </form>

        <div className="marcadores">
          <h3>Marcadores</h3>

          <div className="tags">
            <NoteItem value="React" />
            <NoteItem isNew={true} placeholder="Novo Marcador" />
          </div>
        </div>

        <div className="buttons">
          <Button title="Excluir Filme" className="button-one" />
          <Button title="Salvar alterações" />
        </div>
      </main>
    </Container>
  );
}
