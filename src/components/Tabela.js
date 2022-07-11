import React, { Component } from 'react';

class Tabela extends Component {
    handleClick = ({ target }) => {
      target.remove();
    }

    render() {
      return (

        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
            {/* <button
              data-testid="delete-btn"
              type="button"
              onClick={ this.handleClick }
            >
              Excluir

            </button> */}
          </tr>

        </thead>

      );
    }
}

export default Tabela;
