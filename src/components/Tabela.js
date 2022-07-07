import React, { Component } from 'react';

class Tabela extends Component {
  render() {
    return (

      <header>
        <th>Descrição</th>
        <th>Tag</th>
        <th>Método de pagamento</th>
        <th>Valor</th>
        <th>Moeda</th>
        <th>Câmbio utilizado</th>
        <th>Valor convertido</th>
        <th>Moeda de conversão</th>
        <th>Editar/Excluir</th>
      </header>

    );
  }
}

export default Tabela;
