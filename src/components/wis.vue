<template>
<div class="table-body">
	<table class="ui celled table ">
  <thead>
    <tr><th>Destination Name</th>
    <th>Destination Details</th>
    <th>Checked </th>
    <th>Remove </th>
  </tr></thead>
  <tbody>
    <tr v-for="item in $store.state" v-if="item.checkIt">
      <td>
        {{ item.desName}}
      </td>
      <td>{{ item.description}}</td>
      <td> <i class="check  icon large  "  v-show="!item.visited" v-on:click="checkVisite(item)"></i>
      	<i class="check  icon large green "  v-show="item.visited" v-on:click="checkVisite(item)"></i></td>
       <td><i class="trash alternate  icon large  "   v-on:click="removeItem(item)"></i></td>
    </tr>
   
  </tbody>
  
</table>

</div>


</template>

<script type="text/javascript">
	
		export default {
  name: 'desList',
  components:{
  
  },
 
data (){
	return{

	}

},
methods:{
checkVisite(item){
   	if(item.visited){
   		item.visited=false;

   	}
 	else if(!item.visited){
   		item.visited=true;

   	}

   },
   removeItem(item){
   	this.$store.commit('removeAllItem', this.$store.state.indexOf(item));
   }	

}



}
</script>
<style  >
	
	.table-body{
		width: 50%;
		margin: auto;
	}
</style>