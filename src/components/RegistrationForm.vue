<template>
      <form @submit.prevent="register">
        <!-- Campos del formulario -->
        <div>
          <label for="document">Documento:</label>
          <input type="text" id="document" v-model="document" required>
        </div>
        <div>
          <label for="name">Nombres:</label>
          <input type="text" id="name" v-model="name" required>
        </div>
        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email" required>
        </div>
        <div>
          <label for="cellphone">Celular:</label>
          <input type="text" id="cellphone" v-model="cellphone" required>
        </div>
        <!-- Botón de envío -->
        <button type="submit">Registrarse</button>
      </form>
    </template>
    
    <script>
    export default {
      data() {
        return {
          document: '',
          name: '',
          email: '',
          cellphone: '',
        };
      },
      methods: {
        register() {
          const payload = {
            document: this.document,
            name: this.name,
            email: this.email,
            cellphone: this.cellphone,
          };
    
          // Llamar a la función de registro del backend
          this.$api.registerClient(payload)
        },
      },
    };
    </script>
    