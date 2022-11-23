import { Container, Links } from "./styles"
import { Button } from "../../components/Button"
import { Header } from "../../components/Header"
import { Section } from "../../components/Section"

export function Details() {
  return (
    <Container>
      <Header />

      <Section title="Links Uteis">  
          <Links>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          </Links>
      </Section>

      <Button title="Voltar"/>
    </Container>
  )
}