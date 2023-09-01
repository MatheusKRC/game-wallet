import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeExpense, editSave } from '../actions/index';
import trash from '../Images/trash.png';
import edit from '../Images/edit.png';

class Tabela extends Component {
  getTotalField = () => {
    const { expenses, removeTarget, editTarget } = this.props;
    if (expenses) {
      return (
        expenses.map((info, index) => (
          <tr key={ index } className="linhas">
            <td>{info.description}</td>
            <td>{info.tag}</td>
            <td>{info.method}</td>
            <td>
              {parseFloat(info.value).toFixed(2)}
            </td>
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
                className="buttonTable"
                data-testid="edit-btn"
                onClick={ () => editTarget(info.id) }
              >
                <img width="30px" src={ edit } alt="edit" />

              </button>
              <button
                type="button"
                className="buttonTable"
                data-testid="delete-btn"
                onClick={ () => removeTarget(info.id) }
              >
                <img width="30px" src={ trash } alt="lixeira" />

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
        <tbody>
          <tr className="table">
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

          {' '}
          {expenses && this.getTotalField()}
        </tbody>

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
