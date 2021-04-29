import { BrowserRouter, Route } from "react-router-dom";
import { Arquivados } from "./components/Arquivados";
import { FormTarefa } from "./components/FormTarefa";

export function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={FormTarefa} />
      <Route path="/arquivados" component={Arquivados} />
    </BrowserRouter>
  )
}