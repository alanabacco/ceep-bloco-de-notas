import React, { Component } from "react";
import "./style.css";

class FormularioCadastro extends Component {

  constructor(props) {
    super(props)
    this.titulo = "";
    this.texto = "";
  }

  _handleMudancaTitulo(evento) {
    evento.stopPropagation();
    this.titulo = evento.target.value;
  }

  _handleMudancaTexto(evento) {
    evento.stopPropagation();
    this.texto = evento.target.value;
  }

  _criarNota(evento) {
    evento.preventDefault();
    evento.stopPropagation();
    this.props.criarNota(this.titulo, this.texto);
  }

  render() {
    return (
      <form className="form-cadastro" onSubmit={this._criarNota.bind(this)}>
        <label htmlFor="form-cadastro_titulo">Título:</label>
        <input
          type="text"
          placeholder="Título"
          id="form-cadastro_titulo"
          className="form-cadastro_input"
          onChange={this._handleMudancaTitulo.bind(this)}
        />
        <br />
        <label htmlFor="form-cadastro_nota">Escreva sua nota:</label>
        <textarea
          rows={15}
          placeholder="Escreva sua nota..."
          id="form-cadastro_nota"
          className="form-cadastro_input"
          onChange={this._handleMudancaTexto.bind(this)}
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Criar Nota
        </button>
      </form>
    );
  }
}

export default FormularioCadastro;