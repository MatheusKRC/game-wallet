// Coloque aqui suas actions
export const USER_ACTION = 'USER_ACTION';
export const WALLET_ACTION = 'WALLET_ACTION';

export const userAction = (state) => ({
  type: 'USER_ACTION',
  state });

export const walletAction = (state) => ({
  type: 'WALLET_ACTION',
  state });

export function fetchWallet() {
  return (dispatch) => {
    fetch('https://economia.awesomeapi.com.br/json/all')
      .then((response) => response.json())
      .then((currencies) => dispatch(walletAction(currencies)));
  };
}
