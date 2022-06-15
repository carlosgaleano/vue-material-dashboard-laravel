<template>
	<datatable title="Do not press the red buttons!"
	:columns="tableColumns1"
	:rows="tableRows1">
	<th slot="thead-tr">
		Actions
	</th>
	<template slot="tbody-tr" scope="props">
		<td>
			<button class="btn red darken-2 waves-effect waves-light compact-btn"
				@click="e => deleteItem(props.row, e)">
				<i class="material-icons white-text">delete</i>
			</button>
		</td>
	</template>
</datatable>
</template>

<script>
import DataTable from "vue-materialize-datatable";
export default {
  components: {
      
        datatable: DataTable
    },
     data: () => ({
      DataTable: null,
      datos:null,
   tableColumns1: [
			{
				label: "FullStar_ID",
				field: "Despacho_ID",
				numeric: false,
				html: false
			},
			{
				label: "fecha_inicial",
				field: "fecha_inicial",
				numeric: false,
				html: false
			},
			{
				label: "Estado",
				field: "estado_out",
				numeric: false,
				html: false
			},
			
		],
        tableRows1: [],
		tableRows2: [
			{
				charName: "Abu",
				firstAppearance: "Alladin (1992)",
				createdBy: "Joe Grant",
				voicedBy: "Frank Welker"
			},
			{
				charName: "Magic Carpet",
				firstAppearance: "Alladin (1992)",
				createdBy: "Randy Cartwright",
				voicedBy: "N/A"
			},
			{
				charName: "The Sultan",
				firstAppearance: "Alladin (1992)",
				createdBy: "Navid Negahban",
				voicedBy: "Douglas Seale"
			}
		],
    }),

    created() {
      this.getDespachos();
    },

    methods: {
      async getDespachos() {
        console.log('test');
        await this.$store.dispatch("despachos/items")
        const resp = await this.$store.getters["despachos/items"]
         this.tableRows1= resp.data.data
         this.datos= resp.data
        //this.datos=JSON.parse(this.despachos);
     
      },

	     deleteItem(row, e){

			console.log('datos a eliminar',row,e);

		 }
    }
}
</script>

<style>

</style>