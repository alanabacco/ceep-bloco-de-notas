import React, { Component } from "react";
import CardNota from "../CardNota";
import "./style.css";

class ListaDeNotas extends Component {

  // constructor(props){
  //   super(props);
  // }

  render() {
    return (
      <ul className="lista-notas">
        {this.props.notas.map((nota, index) => {
          return (
            <li className="lista-notas_item" key={index}>
              <CardNota
               indice={index}
                deletarNota={this.props.deletarNota}
                titulo={nota.titulo} 
                texto={nota.texto} 
              />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;