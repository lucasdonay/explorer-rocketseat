import { Container } from "./styles"
import { Button } from "../../components/Button"

export function Details() {
  return (
    <Container>
      <h1>Hello Word</h1>
      <p>teste</p>
      <Button title="Entrar" loading/>
      <Button title="Teste"/>
      <Button title="Castrar"/>
      <Button title="Logar"/>
    </Container>
  )
}