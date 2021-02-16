import React, { Component } from 'react';
import './App.css';
import FormularioCadastro from './components/formularioCadastro';
import ListaDeNotas from "./components/ListaDeNotas"

class App extends Component {
  render() {
    return (
      <section>
        <FormularioCadastro />
        <ListaDeNotas />
      </section >
    );
  }
}

export default App;
