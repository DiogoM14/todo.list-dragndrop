import { BrowserRouter, Route } from "react-router-dom";
import { Arquivados } from "./components/Arquivados";
import { FormTarefa } from "./components/FormTarefa";

export function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={FormTarefa} /> {/* Define o componente  FormTarefa como "path main" */}
      <Route path="/arquivados" component={Arquivados} />
    </BrowserRouter>
  )
}