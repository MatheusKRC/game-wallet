// Coloque aqui suas actions
export const USER_ACTION = 'USER_ACTION';
export const WALLET_ACTION = 'WALLET_ACTION';
export const EXPENSES_ACTION = 'EXPENSES_ACTION';
export const EDIT_SAVE = 'EDIT_SAVE';
export const EDIT_EXPENSE = 'EDIT_EXPENSE';

export const userAction = (state) => ({
  type: 'USER_ACTION',
  state });

export const walletAction = (currencies) => ({
  type: 'WALLET_ACTION',
  currencies });

export const expensesAction = (expenses) => ({
  type: 'EXPENSES_ACTION',
  expenses });

export const removeExpense = (id) => ({
  type: 'REMOVE_EXPENSE',
  id,
});

export const editSave = (id) => ({
  type: 'EDIT_SAVE',
  id,
});

export function fetchWallet() {
  return async (dispatch) => {
    const request = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await request.json();
    const currencies = Object.keys(data).filter((coin) => coin !== 'USDT');
    dispatch(walletAction(currencies));
  };
}
