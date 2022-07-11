import React from 'react';
import Tabela from '../components/Tabela';
import Forms from '../components/Forms';
import Header from '../components/Header';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Forms />
        <Tabela />
      </div>
    );
  }
}

export default Wallet;
