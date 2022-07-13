import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

class Header extends Component {
 getTotalField = () => {
   const { expenses } = this.props;
   if (expenses) {
     const total = expenses.reduce((acc,
       val) => acc + Number(val.value) * Number(val.exchangeRates[val.currency].ask), 0);
     return (
       <h3 data-testid="total-field">{(total).toFixed(2)}</h3>
     );
   }
 }

 render() {
   const { email, expenses } = this.props;
   return (
     <header>
       <h1>TrybeWallet</h1>
       <h2 data-testid="email-field">
         {`User: ${email}`}
       </h2>
       {expenses && this.getTotalField()}
       <h3 data-testid="header-currency-field">BRL</h3>
     </header>

   );
 }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: propTypes.string.isRequired,
  expenses: propTypes.arrayOf(propTypes.string).isRequired,
};

export default connect(mapStateToProps)(Header);
