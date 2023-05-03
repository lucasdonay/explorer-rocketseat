
import { Header } from '../../components/Header';
import { Container,NewMovie } from './styles';
import { FiPlus } from "react-icons/fi";


export function Home() {
  return (
    <Container>
      <Header>  
      </Header>   

        <main>
          <header>
              <h1>Meus filmes</h1>

              <NewMovie to='/new'>    
                  <FiPlus />              
                      Adicionar filme            
              </NewMovie>
         </header>


        </main>    


    </Container>
  );
}
