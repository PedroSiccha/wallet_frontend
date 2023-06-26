<template>
      <div>
        <h2>Cargar Billetera</h2>
        <form @submit.prevent="loadWallet">
          <div v-if="error" class="error-message">{{ error }}</div>
          <div>
            <label for="document">Documento:</label>
            <input type="text" id="document" v-model="document" required>
          </div>
          <div>
            <label for="cellphone">Celular:</label>
            <input type="text" id="cellphone" v-model="cellphone" required>
          </div>
          <div>
            <label for="value">Monto:</label>
            <input type="text" id="value" v-model="value" required>
          </div>
          <button type="submit">Cargar Billetera</button>
        </form>
      </div>
    </template>
    
    <script>
    export default {
      name: 'LoadWallet',
      data() {
        return {
          document: '',
          cellphone: '',
          value: null,
          error: '',
        };
      },
      methods: {
        loadWallet() {
          const payload = {
            document: this.document,
            cellphone: this.cellphone,
            value: this.value,
          };
  
          this.$api.loadWallet(payload).then(response => {
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
    