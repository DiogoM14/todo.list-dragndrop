import { Container } from "./styles";
import { FiX } from 'react-icons/fi'

export function ListaTarefas({ nomeTarefa }) {
  // Componente de cada card de tarefas, individual
  return (
    <Container>
      <ul>
        <li>{nomeTarefa}</li> {/* Receber como prop o nome da tarefa, através do componente FormTarefa */}
        <FiX size={20} cursor="pointer" />
      </ul>
    </Container>
  )
}