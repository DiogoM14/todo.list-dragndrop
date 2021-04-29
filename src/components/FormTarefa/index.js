import { useState } from "react";
import { FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Container, Form, Card } from "./styles";
import { v4 as uuidv4, v4 } from 'uuid';
import { Arquivados } from "../Arquivados";

export function FormTarefa() {
  const [tarefas, setTarefas] = useState([{}]);
  const [arquivadas, setArquivadas] = useState([{}]);
  const [value, setValue] = useState([]);

  // const { addArquivada } = useArquivadas

  function handleSubmit(e) {
    e.preventDefault();

    const novaTarefa = {
      id: v4(),
      nome: value
    }

    setTarefas([...tarefas, novaTarefa]);
    // console.log(tarefas);
  }

  function handleDeleteTarefa(id) {

    let novaArquivada = {
      data: tarefas.filter(tarefa => tarefa.id === id)
    }

    setArquivadas([...arquivadas, novaArquivada.data])
    // addArquivada(novaArquivada)
    // console.log(arquivadas)

    setTarefas(tarefas.filter(tarefa => tarefa.id !== id))
  }

  return (
    <Container>
      <h1>Lista de Tarefas</h1>
      <Form onSubmit={handleSubmit}>
        <input
        placeholder="Insira a tarefa"
          type="text"
          value={value}
          onChange={(event) => setValue(event.target.value)} />
        <button type="submit">Adicionar</button>
      </Form>

      {tarefas.map(tarefa => (
        <Card key={tarefa.id}>
          <ul>
            <li>{tarefa.nome}</li>
            <FiX size={20} cursor="pointer" onClick={() => handleDeleteTarefa(tarefa.id)}  />
          </ul>
        </Card>
      ))}

      <hr/>
      <Link to={{
        pathname: "/arquivados",
        tarefaArquivadas: arquivadas
        }}>
        Ver tarefas arquivadas
      </Link>

      <Arquivados arquivadas={arquivadas} />
    </Container>
  )
}