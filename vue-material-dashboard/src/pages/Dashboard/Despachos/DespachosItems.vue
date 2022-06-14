<template>

  <div class="">
<!--     {{despachos}}
     {{datos}} -->
      <div class="md-layout">
    <div class="md-layout-item md-size-100">
      <md-card>
        <md-card-header class="md-card-header-icon md-card-header-green">
          <div class="card-icon">
            <md-icon>assignment</md-icon>
          </div>
          <h4 class="title">Despachos</h4>
        </md-card-header>
        <md-card-content>
          <md-table v-model="despachos" table-header-color="green">
            <md-table-row slot="md-table-row" slot-scope="{ item }">
              <md-table-cell md-label="FullStar_ID">{{ item.Despacho_ID }}</md-table-cell>
              <md-table-cell md-label="Fecha Inicial">{{ item.fecha_inicial }}</md-table-cell>
              <md-table-cell md-label="Fecha Estado">{{item.fecha_st}}</md-table-cell>
              <md-table-cell md-label="Estado">{{ item.estado_out }}</md-table-cell>
              <md-table-cell md-label="OE">{{ item.sap_id }}</md-table-cell>
            </md-table-row>
          </md-table>
        </md-card-content>
      </md-card>
    </div>

    <div class="">

    </div>
 
    
       </div>
  </div>
</template>

<script>

export default {
name: "despachos-items",

    components: {
     
    },

    data: () => ({
      despachos: null,
      datos:null
    }),

    created() {
      this.getDespachos();
    },

    methods: {
      async getDespachos() {
        console.log('test');
        await this.$store.dispatch("despachos/items")
        const resp = await this.$store.getters["despachos/items"]
         this.despachos= resp.data.data
          this.datos= resp.data
        //this.datos=JSON.parse(this.despachos);
        console.log(this.despachos.datos);
      }
    }
  }

</script>

<style>

</style>        