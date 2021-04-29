import { Container } from "./styles";
import { FiX } from 'react-icons/fi'

export function ListaTarefas({ nomeTarefa }) {
  return (
    <Container>
      <ul>
        <li>{nomeTarefa}</li>
        <FiX size={20} cursor="pointer" />
      </ul>
    </Container>
  )
}