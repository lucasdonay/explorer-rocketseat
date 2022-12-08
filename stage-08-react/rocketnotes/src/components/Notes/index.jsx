import { Container } from "./styles";
import { Tag } from '../Tags'

export function Notes({data, ...rest}) {
  return (
    <Container {...rest}>
        <h1>{data.title}
        {
          data.tags &&

          <footer>
            {
             data.tags.map( tag => <Tag key={tag.id} title={tag.name} /> )
            }
          </footer>
        }
        </h1>
    </Container>
  )
}