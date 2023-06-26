<template>
      <div>
        <div v-if="error" class="error-message">{{ error }}</div>
        <h2>Saldo de la Billetera</h2>
        <p>Documento: <input type="text" id="document" v-model="document" required></p>
        <p>Celular: <input type="text" id="cellphone" v-model="cellphone" required></p>
        <p>Saldo: {{ balance }}</p>
        <button @click="getBalance">Consultar Saldo</button>
      </div>
    </template>
    
    <script>
    export default {
      data() {
        return {
          document: '',
          cellphone: '',
          balance: null,
          error: '',
        };
      },
      methods: {
        getBalance() {
          const payload = {
            document: this.document,
            cellphone: this.cellphone,
          };
    
          // Llamar a la función del backend para obtener el saldo de la billetera utilizando
          this.$api.getWalletBalance(payload).then(response => {
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
    