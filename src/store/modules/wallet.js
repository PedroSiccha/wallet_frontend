
import walletService from '@/api/walletService';

export default {
  namespaced: true,
  state: {
    wallet: null,
  },
  mutations: {
    SET_WALLET(state, wallet) {
      state.wallet = wallet;
    },
  },
  actions: {
    deposit({ commit }, depositData) {
      return walletService.deposit(depositData)
        .then((response) => {
          const wallet = response.data.wallet;
          commit('SET_WALLET', wallet);
          return wallet;
        });
    },
    initiatePayment({ commit }, paymentData) {
      return walletService.initiatePayment(paymentData)
        .then((response) => {
          const session = response.data.session_id;
          return session;
        });
    },
    confirmPayment({ commit }, confirmationData) {
      return walletService.confirmPayment(confirmationData)
        .then((response) => {
          const wallet = response.data.wallet;
          commit('SET_WALLET', wallet);
          return wallet;
        });
    },
    checkBalance({ commit }, clientData) {
      return walletService.checkBalance(clientData)
        .then((response) => {
          const balance = response.data.balance;
          return balance;
        });
    },
  },
};