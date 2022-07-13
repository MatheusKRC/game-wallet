import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchWallet, expensesAction } from '../actions';

const alimento = 'Alimentação';

class Forms extends Component {
  state = {
    id: 0,
    value: '',
    description: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
  }

  handleChange = ({ target }) => {
    const { value, name } = target;
    this.setState({ [name]: value });
  };

    componentDidMount = () => {
      const { receiveCurrencies } = this.props;
      receiveCurrencies();
    }

      getMethod = () => {
        const payment = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
        const paymentMethods = payment.map((methods, index) => (
          <option key={ index }>{methods}</option>
        ));
        return paymentMethods;
      }

      getCategory = () => {
        const categories = [alimento, 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
        const categoriesTag = categories.map((tag, index) => (
          <option key={ index }>{tag}</option>
        ));
        return categoriesTag;
      }

      handleClick = async () => {
        const { receiveExpenses } = this.props;
        const request = await fetch('https://economia.awesomeapi.com.br/json/all');
        const data = await request.json();
        receiveExpenses({ ...this.state, exchangeRates: data });
        this.setState(((prevState) => ({ id: prevState.id + 1,
        })));
        this.setState({ value: '' });
      }

      render() {
        const { currencies } = this.props;
        const { value, description, tag, currency, method } = this.state;
        return (
          <form>
            <input
              name="value"
              type="text"
              data-testid="value-input"
              value={ value }
              placeholder="Valor da despesa"
              onChange={ this.handleChange }
            />

            <br />

            <textarea
              name="description"
              type="text"
              data-testid="description-input"
              value={ description }
              placeholder="Descrição"
              onChange={ this.handleChange }
            />

            <br />

            <label htmlFor="coin">
              Moeda
              <select
                name="currency"
                id="coin"
                value={ currency }
                onChange={ this.handleChange }
              >
                {currencies && currencies.map((coin, index) => (
                  <option key={ index }>{coin}</option>
                ))}
              </select>

            </label>

            <select
              name="method"
              id="payment-methods"
              value={ method }
              data-testid="method-input"
              onChange={ this.handleChange }
            >
              {this.getMethod()}
            </select>

            <select
              name="tag"
              id="categories"
              value={ tag }
              data-testid="tag-input"
              onChange={ this.handleChange }
            >
              {this.getCategory()}
            </select>

            <button
              type="button"
              onClick={ this.handleClick }
            >
              Adicionar despesa

            </button>
          </form>

        );
      }
}

const mapDispatchToProps = (dispatch) => ({
  receiveCurrencies: () => dispatch(fetchWallet()),
  receiveExpenses: (payload) => dispatch(expensesAction(payload)),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

Forms.propTypes = {
  currencies: propTypes.arrayOf(propTypes.string),
  receiveCurrencies: propTypes.func,
  expenses: propTypes.arrayOf(),
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Forms);
