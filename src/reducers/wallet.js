// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  wallet: {
    currencies: [],
    expenses: [],
    editor: false,
    idToEdit: 0,
  },
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'WALLET_ACTION':
    return {
      currencies: Object.keys(action.state).filter((remove) => remove !== 'USDT') };

  default:
    return state;
  }
};

export default wallet;
