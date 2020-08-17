import React, { Component } from "react";

class FormularioDeCadastro extends Component {
    render() {
        return(
            <form>
                <input type="text" placeholder="Título"></input>
                <textarea placeholder="Escreva sua nota..."></textarea>
                <button>Criar Nota</button>
            </form>
        );
    }

}

export default FormularioDeCadastro;