<template>
      <div class="right_col" role="main">
          <div class="">
            
            <h2>Billetera Virtual</h2>

            <div class="row top_tiles">
                  <router-link to="/registration">
                        <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                              <div class="tile-stats">
                                    <h3>Registro</h3>
                                    <p>Registre a un nuevo cliente.</p>
                              </div>
                        </div>
                  </router-link>
                  <router-link to="/wallet">
              <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <div class="tile-stats">
                  <h3>Cargar Billetera</h3>
                  <p>Recargue su billetera.</p>
                </div>
              </div>
            </router-link>
            <router-link to="/payment">
              <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <div class="tile-stats">
                  <h3>Realizar pago</h3>
                  <p>Realice un pago.</p>
                </div>
              </div>
            </router-link>
            </div>

            
            
      </div>
            </div>
      
      
</template>
<script>
export default {
}
</script>
    