import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeExpense, editSave } from '../actions/index';

class Tabela extends Component {
  getTotalField = () => {
    const { expenses, removeTarget, editTarget } = this.props;
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
                data-testid="edit-btn"
                onClick={ () => editTarget(info.id) }
              >
                Editar

              </button>
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

        <th>Descrição</th>
        <th>Tag</th>
        <th>Método de pagamento</th>
        <th>Valor</th>
        <th>Moeda</th>
        <th>Câmbio utilizado</th>
        <th>Valor convertido</th>
        <th>Moeda de conversão</th>
        <th>Editar/Excluir</th>

        {expenses && this.getTotalField()}

      </table>

    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  removeTarget: (expenses) => dispatch(removeExpense(expenses)),
  editTarget: (expenses) => dispatch(editSave(expenses)),
});

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

Tabela.propTypes = {
  expenses: propTypes.arrayOf(propTypes.string).isRequired,
  removeTarget: propTypes.func.isRequired,
  editTarget: propTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Tabela);
