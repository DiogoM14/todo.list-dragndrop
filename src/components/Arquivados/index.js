export function Arquivados(props) {
  // const [arquivadas, setArquivadas] = useState([{}])
  // let teste = {
  //   data: props.location.tarefaArquivadas
  // }

  // setArquivadas([...arquivadas, teste])

  
  const response = {
    data: props.location
  }

  // const { data } = response.data

  console.log(response) // Imprime todos as informações do componente FormTarefa (estádo arquivados)

  return (
    <>
      {/* {arquivadas.map(arquivada => (
        <h1>{arquivada.nome}</h1>
      ))} */}

      {/* <h1>{props.location}</h1> */}
    </>
  )
}