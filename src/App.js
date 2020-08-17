import React from 'react';
import ListaDeNotas from './componentes/ListaDeNotas/ListaDeNotas';
import FormularioDeCadastro from './componentes/FormularioDeCadastro/FormularioDeCadastro';
import "./assets/reset.css";


function App() {
  return (
    <section>
      <FormularioDeCadastro />
      <ListaDeNotas />
    </section>
  );
}

export default App;
