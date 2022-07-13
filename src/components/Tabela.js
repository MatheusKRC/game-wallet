import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/index';

class Tabela extends Component {
  getTotalField = () => {
    const { expenses, removeTarget } = this.props;
    if (expenses) {
      return (
        expenses.map((info, index) => (
          <tr key={ index }>
            <td>{info.description}</td>
            <td>{info.tag}</td>
            <td>{info.method}</td>
            <td>
              {parseFloat(info.value).toFixed(2)}
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
            <td>
              <button
                type="button"
                data-testid="delete-btn"
                onClick={ () => removeTarget(info.id) }
              >
                Apagar

              </button>

            </td>

          </tr>
        ))

      );
    }
  }

  render() {
    const { expenses } = this.props;
    return (
      <table>

        <thead>
          <th>
            <td>Descrição</td>
            <td>Tag</td>
            <td>Método de pagamento</td>
            <td>Valor</td>
            <td>Moeda</td>
            <td>Câmbio utilizado</td>
            <td>Valor convertido</td>
            <td>Moeda de conversão</td>
            <td>Editar/Excluir</td>
          </th>

          {expenses && this.getTotalField()}

        </thead>

      </table>

    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  removeTarget: (expenses) => dispatch(removeExpense(expenses)),
});

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

Tabela.propTypes = {
  expenses: propTypes.arrayOf(propTypes.string).isRequired,
  removeTarget: propTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Tabela);
