import walletService from '@/api/walletService';

export default {
  namespaced: true,
  state: {
    client: null,
  },
  mutations: {
    SET_CLIENT(state, client) {
      state.client = client;
    },
  },
  actions: {
    registerClient({ commit }, clientData) {
      return walletService.registerClient(clientData)
        .then((response) => {
          const client = response.data.client;
          commit('SET_CLIENT', client);
          return client;
        });
    },
  },
};