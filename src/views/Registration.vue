<template>

<div class="row">
              <div class="col-md-12 col-sm-12 col-xs-12">
                <div class="x_panel">
                  <div class="x_title">
                    <h2>Registro de cliente</h2>
                    <div class="clearfix"></div>
                  </div>
                  <div class="x_content">
                    <br />

                    <form @submit.prevent="registerClient" class="form-horizontal form-label-left">
                      <div v-if="error" class="error-message">{{ error }}</div>
                      <div class="form-group">
                        <label class="control-label col-md-3 col-sm-3 col-xs-12" for="document">Documento:</label>
                          <input type="text" id="document" v-model="document" class="form-control col-md-7 col-xs-12" required>
                        
                      </div>
                      <div class="form-group">
                        <label class="control-label col-md-3 col-sm-3 col-xs-12" for="name">Nombres:</label>
                          <input type="text" id="name" v-model="name" class="form-control col-md-7 col-xs-12" required>
                        
                      </div>
                      <div class="form-group">
                        <label class="control-label col-md-3 col-sm-3 col-xs-12" for="email">Email:</label>
                          <input type="email" id="email" v-model="email" class="form-control col-md-7 col-xs-12" required>
                        
                      </div>
                      <div class="form-group">
                        <label class="control-label col-md-3 col-sm-3 col-xs-12" for="cellphone">Celular:</label>
                          <input type="text" id="cellphone" v-model="cellphone" class="form-control col-md-7 col-xs-12" required>
                        
                      </div>
                      <div class="form-group col-md-3 col-sm-3 col-xs-12">
                        <button type="submit" class="btn btn-success">Registrar</button>
                      </div>                      
                    </form>
                  </div>
                </div>
              </div>
            </div>
    </template>
    
    <script>
    export default {
      name: 'ClientRegistration',
      data() {
        return {
          document: '',
          names: '',
          email: '',
          cellphone: '',
          error: '',
        };
      },
      methods: {
        registerClient() {
          const payload = {
            document: this.document,
            names: this.name,
            email: this.email,
            cellphone: this.cellphone,
          };
    
          this.$api.registerClient(payload).then(response => {
              this.balance = response.data.balance;
          })
          .catch(error => {
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
    