import Vue from 'vue';
import Vuex from 'vuex';
import clientModule from './modules/client';
import walletModule from './modules/wallet';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    client: clientModule,
    wallet: walletModule,
  },
});