import { createRouter, createWebHistory } from 'vue-router';
import WalletBalance from './components/WalletBalance.vue';
import PaymentForm from './components/PaymentForm.vue';
import Registration from './views/Registration.vue';
import Wallet from './views/Wallet.vue';
import HomeView from './views/HomeView.vue';
import PaymentView from './views/PaymentView.vue';

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/wallet-balance',
    name: 'WalletBalance',
    component: WalletBalance,
  },
  {
    path: '/payment-form',
    name: 'PaymentForm',
    component: PaymentForm,
  },
  {
    path: '/registration',
    name: 'Registration',
    component: Registration,
  },
  {
    path: '/wallet',
    name: 'Wallet',
    component: Wallet,
  },
  {
    path: '/home',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/payment',
    name: 'Payment',
    component: PaymentView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
