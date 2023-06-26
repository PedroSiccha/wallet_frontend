import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8000/api', // Cambia esta URL por la URL de tu backend
  headers: {
    'Content-Type': 'application/json',
  },
});

export default {
  registerClient(payload) {
    return apiClient.post('/register', payload);
  },

  loadWallet(payload) {
    return apiClient.post('/deposit', payload);
  },

  initiatePayment(payload) {
    return apiClient.post('/pay', payload);
  },

  confirmPayment(payload) {
    return apiClient.post('/confirm', payload);
  },

  getWalletBalance(payload) {
    return apiClient.post(`/balance`, payload);
  },
};
