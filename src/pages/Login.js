import propTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { userAction } from '../actions';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    disabled: true,
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value }, this.handleValidate());
  };

  // Referencia: https://www.horadecodar.com.br/2020/09/13/como-validar-email-com-javascript/
  handleValidate = () => {
    const { email, password } = this.state;
    const re = /\S+@\S+\.\S+/;
    const minLength = 5;

    if (re.test(email) && password.length >= minLength) {
      this.setState({ disabled: false });
    } else { this.setState({ disabled: true }); }
  }

  handleClick = () => {
    const { emailAction, history } = this.props;
    emailAction(this.state);
    history.push('/carteira');
  };

  render() {
    const { email, disabled, password } = this.state;

    return (

      <div>
        <input
          name="email"
          type="email"
          data-testid="email-input"
          minLength="6"
          onChange={ this.handleChange }
          value={ email }
          required
        />
        <input
          name="password"
          type="password"
          data-testid="password-input"
          onChange={ this.handleChange }
          value={ password }
          required
        />

        <button
          type="button"
          id="entrar"
          onClick={ this.handleClick }
          disabled={ disabled }
        >
          Entrar

        </button>

      </div>

    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  emailAction: (email) => dispatch(userAction(email)),
  receiveCurrencies: () => dispatch(fetchWallet()),
});

Login.propTypes = {
  emailAction: propTypes.func.isRequired,
  history: propTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
