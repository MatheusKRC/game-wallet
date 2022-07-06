import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchWallet } from '../actions/index';

class Wallet extends React.Component {
  state = {
    // currencies: [],
    // expenses: [],
    // editor: false,
    // idToEdit: 0,
  }

componentDidMount = () => {
  this.submitCurrencies();
}

submitCurrencies = async () => {
  const { receiveCurrencies } = this.props;
  receiveCurrencies();
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

    </div>);
}
}

const mapDispatchToProps = (dispatch) => ({
  receiveCurrencies: () => dispatch(fetchWallet()),
});

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Wallet.propTypes = {
  email: propTypes.string.isRequired,
  receiveCurrencies: propTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
