import React, { Component } from "react";
import "./style.css";

class FormularioCadastro extends Component {

  constructor() {
    super()
    this.titulo = "";
  }

  handleMudancaTitulo(evento){
    this.titulo = evento.target.value
  }

  render() {
    return (
      <form className="form-cadastro ">
        <label>Título:</label>
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          onChange={this.handleMudancaTitulo.bind(this)}
        />
        <br />
        <label>Escreva sua nota:</label>
        <textarea
          rows={15}
          placeholder="Escreva sua nota..."
          className="form-cadastro_input"
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Criar Nota
        </button>
      </form>
    );
  }
}

export default FormularioCadastro;