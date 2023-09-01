import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import logo from '../Images/LogoName.png';

class Header extends Component {
 getTotalField = () => {
   const { expenses } = this.props;
   if (expenses) {
     const total = expenses.reduce((acc,
       val) => acc + Number(val.value) * Number(val.exchangeRates[val.currency].ask), 0);
     return (
       <h3 className="value" data-testid="total-field">{`${(total).toFixed(2)}BRL`}</h3>
     );
   }
 }

 render() {
   const { email, expenses } = this.props;
   return (
     <header>
       <img className="logoH" src={ logo } alt="logo" />
       <h2 className="name" data-testid="email-field">
         {`User: ${email}`}
       </h2>
       {expenses && this.getTotalField() }

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
