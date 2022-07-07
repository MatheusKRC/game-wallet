import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchWallet } from '../actions';
import Tabela from '../components/Tabela';

class Wallet extends React.Component {
  state = {
    expenses: [],
  }

  componentDidMount = () => {
    const { receiveCurrencies } = this.props;
    receiveCurrencies();
  }

  getCurrencies = () => {
    const { currencies } = this.props;
    const currency = currencies.map((coin, index) => (
      <option key={ index }>{coin}</option>
    ));
    return currency;
  }

  getMethod = () => {
    const payment = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const paymentMethods = payment.map((methods, index) => (
      <option key={ index }>{methods}</option>
    ));
    return paymentMethods;
  }

  getCategory = () => {
    const categories = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    const categoriesTag = categories.map((tag, index) => (
      <option key={ index }>{tag}</option>
    ));
    return categoriesTag;
  }

  handleChange = ({ target }) => {
    const { value, name } = target;
    const { expenses } = this.state;
    this.setState({ expenses: { [name]: value } });
    return expenses;
  };

  handleClick = () => {
    console.log('oi');
  }

  render() {
    const { email } = this.props;
    return (
      <div>
        <header>
          <h1>TrybeWallet</h1>
          <h2 data-testid="email-field">
            {`User: ${email}`}
          </h2>
          <h3 data-testid="total-field">0</h3>
          <h3 data-testid="header-currency-field">BRL</h3>
        </header>
        <form>
          <input
            type="text"
            data-testid="value-input"
            placeholder="Valor da despesa"
            onChange={ this.handleChange }
          />

          <br />

          <textarea
            type="text"
            data-testid="description-input"
            placeholder="Descrição"
            onChange={ this.handleChange }
          />

          <br />

          <label htmlFor="coin">
            Moeda
            <select
              id="coin"
              onChange={ this.handleChange }
            >
              {this.getCurrencies()}
            </select>

          </label>

          <select
            id="payment-methods"
            data-testid="method-input"
            onChange={ this.handleChange }
          >
            {this.getMethod()}
          </select>

          <select
            id="categories"
            onChange={ this.handleChange }
            data-testid="tag-input"
          >
            {this.getCategory()}
          </select>
        </form>

        <button
          type="button"
          onClick={ this.handleClick }
        >
          Adicionar despesa

        </button>

        <Tabela />

      </div>);
  }
}

const mapDispatchToProps = (dispatch) => ({
  receiveCurrencies: () => dispatch(fetchWallet()),
});

const mapStateToProps = (state) => ({
  email: state.user.email,
  currencies: state.wallet.currencies,
});

Wallet.propTypes = {
  email: propTypes.string.isRequired,
  currencies: propTypes.arrayOf(propTypes.string).isRequired,
  receiveCurrencies: propTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
