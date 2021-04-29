import { useState } from "react"

export function Arquivados(props) {
  const [arquivadas, setArquivadas] = useState([{}])
  // let teste = {
  //   data: props.location.tarefaArquivadas
  // }

  // setArquivadas([...arquivadas, teste])

  
  const response = {
    data: props.location
  }

  // const { data } = response.data

  console.log(response)

  return (
    <>
      {/* {arquivadas.map(arquivada => (
        <h1>{arquivada.nome}</h1>
      ))} */}

      {/* <h1>{props.location}</h1> */}
    </>
  )
}