import React, { Component } from "react";
import "./style.css";
import {ReactComponent as DeleteSVG} from "../../assets/img/delete.svg";
import {ReactComponent as EditNoteSVG} from "../../assets/img/edit_note.svg";

class CardNota extends Component {

  apagar(){
    const indice = this.props.indice;
    this.props.deletarNota(indice);
  }

  render() {
    return (
      <section className="card-nota">
        <header className="card-nota_cabecalho">
          <h3 className="card-nota_titulo">{this.props.titulo}</h3>
        </header>
        <p className="card-nota_texto">{this.props.texto}</p>
        <footer>
          <EditNoteSVG alt="editar nota" onClick={() => console.log("editar")} />
          <DeleteSVG alt="deletar nota" onClick={this.apagar.bind(this)} />
        </footer>
      </section>
    );
  }
}

export default CardNota;