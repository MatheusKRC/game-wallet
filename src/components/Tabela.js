import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

class Tabela extends Component {
  getTotalField = () => {
    const { expenses } = this.props;
    if (expenses) {
      return (
        expenses.map((info, index) => (
          <tr key={ index }>
            <td>{info.description}</td>
            <td>{info.tag}</td>
            <td>{info.method}</td>
            <td>
              {info.value}
              .00
            </td>
            <td>{info.currency}</td>
            <td>{info.exchangeRates[info.currency].name.split('/Real Brasileiro')}</td>
            <td>{parseFloat(info.exchangeRates[info.currency].ask).toFixed(2)}</td>
            <td>
              {
                parseFloat(info.exchangeRates[info.currency].ask * info.value).toFixed(2)
              }

            </td>
            <td>Real</td>
          </tr>
        ))

      );
    }
  }

  render() {
    const { expenses } = this.props;
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
        </tr>
        {expenses && this.getTotalField()}

      </thead>

    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

Tabela.propTypes = {
  expenses: propTypes.arrayOf(propTypes.string).isRequired,
};

export default connect(mapStateToProps)(Tabela);
