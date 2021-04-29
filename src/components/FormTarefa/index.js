import { useState } from "react";
import { v4 as uuidv4, v4 } from 'uuid';  // Lib para gerar id's do tipi v4
import { Link } from "react-router-dom";

import { FiX } from "react-icons/fi";

import { Arquivados } from "../Arquivados";

import { Container, Form, Card } from "./styles";

export function FormTarefa() {
  const [tarefas, setTarefas] = useState([{}]); // Estado (variável especial do react) para guardar dados das tarefas criadas
  const [arquivadas, setArquivadas] = useState([{}]); // Estado para guardar dados das tarefas eliminadas => (Arquivadas)
  const [value, setValue] = useState([]); // Estado para manipulação de dados do input

  function handleSubmit(e) {
    e.preventDefault(); // Não deixa fazer refresh da página ao clicar no button "Adicional" 

    const novaTarefa = {  // Cria uma tarefa com o value do input e atribui um id diferente para cada tarefa
      id: v4(),
      nome: value // Pega no valor que está dentro do input
    }

    setTarefas([...tarefas, novaTarefa]); // Adiciona a nova tarefa ao estádo, conceito de imutabilidade
  }

  function handleDeleteTarefa(id) { // Função para eliminar tarefas

    let novaArquivada = { // Tarefa a ser arquivada
      data: tarefas.filter(tarefa => tarefa.id === id)  // Procura dentro de todas as tarefas, alguma com o mesmo id do que a tarefa que eliminamos
    }

    setArquivadas([...arquivadas, novaArquivada.data])  // Tarefa é arquivada
    // addArquivada(novaArquivada)
    // console.log(arquivadas)

    setTarefas(tarefas.filter(tarefa => tarefa.id !== id))  // Apaga a tarefa que clicamos do estádo de tarefas
  }

  return (
    <Container>
      <h1>Lista de Tarefas</h1>
      <Form onSubmit={handleSubmit}>
        <input
        placeholder="Insira a tarefa"
          type="text"
          value={value}
          onChange={(event) => setValue(event.target.value)} /> {/* Ao escrever no input, adiciona a letra atual ao estádo value */}
        <button type="submit">Adicionar</button> 
      </Form>

      {/* Faz o mapeamento de todas as "variaveis" que estão dentro do estádo tarefas e mostra cada uma delas */}
      {tarefas.map(tarefa => (  
        <Card key={tarefa.id}>  
          <ul>
            <li>{tarefa.nome}</li>
            <FiX size={20} cursor="pointer" onClick={() => handleDeleteTarefa(tarefa.id)}  />
          </ul>
        </Card>
      ))}

      <hr/>
      {/* Link do react-router-dom, que por sua vez envia todas as tarefas arquivadas para o componentes Arquivados */}
      <Link to={{
        pathname: "/arquivados",
        tarefaArquivadas: arquivadas
        }}>
        Ver tarefas arquivadas
      </Link>
    </Container>
  )
}