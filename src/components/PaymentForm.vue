<template>
      <div>
        <h2>Pago</h2>
        <form @submit.prevent="makePayment">
          <div v-if="error" class="error-message">{{ error }}</div>
          <div>
            <label for="sessionId">ID de Sesión:</label>
            <input type="text" id="sessionId" v-model="sessionId" required>
          </div>
          <div>
            <label for="token">Token de Confirmación:</label>
            <input type="text" id="token" v-model="token" required>
          </div>
          <button type="submit">Confirmar Pago</button>
        </form>
      </div>
    </template>
    
    <script>
    export default {
      data() {
        return {
          sessionId: '',
          token: '',
          error: '',
        };
      },
      methods: {
        makePayment() {
          const payload = {
            session_id: this.sessionId,
            token: this.token,
          };
    
          // Llamar a la función del backend para confirmar el pago utilizando
           this.$api.confirmPayment(payload).then(response => {
                  this.balance = response.data.balance;
           }).catch(error => {
            if (error.response && error.response.data && error.response.data.message) {
              //this.error = error.response.data.message;
              this.error = 'Error con el servidor. Por favor, inténtalo de nuevo.';
            } else {
              this.error = 'Error desconocido. Por favor, inténtalo de nuevo.';
            }
          });
        },
      },
    };
    </script>
    