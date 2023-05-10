
import { Header } from '../../components/Header';
import { Container, NewMovie,Content } from './styles';
import { FiPlus } from "react-icons/fi";

import { Movies } from '../../components/Movies';

export function Home() {
  return (
    <Container>
      <Header/>          

        <main>

          <header>
              <h1>Meus filmes</h1>

              <NewMovie to="/new">    
                  <FiPlus />              
                      Adicionar filme            
              </NewMovie>
         </header>

        <Content>
          <Movies/>
          <Movies/>
          <Movies/>
        </Content>


        </main>    


    </Container>
  );
}
