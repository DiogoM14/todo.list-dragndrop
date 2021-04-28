import { useState } from "react";
import { ListaTarefas } from "../ListaTarefas";
import { Container, Form } from "./styles";

export function FormTarefa() {
  const [tarefas, setTarefas] = useState([]);
  const [value, setValue] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    setTarefas([...tarefas, value]);
    console.log(tarefas);
  }

  function handleDeleteTarefa(nome) {
    setTarefas(tarefas.filter(tarefa => tarefa !== nome))
    console.log("delete")
  }

  return (
    <Container>
      <h1>Lista de Tarefas</h1>
      <Form onSubmit={handleSubmit}>
        <input
        placeholder="Insira a tarefa"
          type="text"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <button type="submit">Adicionar</button>
      </Form>
      {tarefas.map(tarefa => (
        <ListaTarefas nomeTarefa={tarefa} />
      ))}

      {/* {tarefas.map(tarefa => (
          <ul>
            <li>{tarefa}</li>
            <FiX size={20} cursor="pointer" onClick={handleDeleteTarefa} />
          </ul>
      ))} */}

      <hr/>
      <a href="">Ver tarefas arquivadas</a>
    </Container>
  )
}