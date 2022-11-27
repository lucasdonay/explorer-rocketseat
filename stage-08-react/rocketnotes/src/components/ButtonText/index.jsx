import { Container } from "./styles";

export function ButtonText({ title, IsActive = false,...rest }) {
  return(
    <Container type="button"
    IsActive={IsActive}
     {...rest}
     >
      {title}
    </Container>
  )
}