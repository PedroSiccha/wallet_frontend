<template>
      <div>
        <h2>Pago</h2>
        <form @submit.prevent="SendPayment">
          <div v-if="error" class="error-message">{{ error }}</div>
          <div>
            <label for="document">Documento:</label>
            <input type="text" id="document" v-model="document" required>
          </div>
          <div>
            <label for="cellphone">Celular:</label>
            <input type="text" id="cellphone" v-model="cellphone" required>
          </div>
          <button type="submit">Realizar Pago</button>
        </form>
      </div>
    </template>
    
    <script>
    export default {
      data() {
        return {
          document: '',
          cellphone: '',
          error: '',
        };
      },
      methods: {
        SendPayment() {
          const payload = {
            document: this.document,
            cellphone: this.cellphone,
          };
    
           this.$api.initiatePayment(payload).then(response => {
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
    