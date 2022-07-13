// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'WALLET_ACTION':
    return { ...state, currencies: action.currencies };
  case 'EXPENSES_ACTION':
    return {
      ...state,
      expenses: [...state.expenses, action.expenses],
    };
  case 'REMOVE_EXPENSE':
    return {
      ...state,
      expenses: state.expenses.filter((remove) => remove.id !== action.id),
    };
  default:
    return state;
  }
};

export default wallet;
