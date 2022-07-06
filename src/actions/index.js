// Coloque aqui suas actions
export const USER_ACTION = 'USER_ACTION';
export const WALLET_ACTION = 'WALLET_ACTION';

export const userAction = (state) => ({
  type: 'USER_ACTION',
  state });

export const walletAction = (currencies) => ({
  type: 'WALLET_ACTION',
  currencies });

export function fetchWallet() {
  return async (dispatch) => {
    const request = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await request.json();
    const currencies = Object.keys(data).filter((coin) => coin !== 'USDT');
    dispatch(walletAction(currencies));
  };
}
