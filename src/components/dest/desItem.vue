
<template>


<div class="row">
<!-- <div class="ui grid" > -->

<div class="col-sm-3 space-btw" v-for="item in $store.state ">
	<div class="ui card ">
  <a class="image" href="#">
  	 <!-- v-bind:src="item.img" -->
    <img src="../../assets/p2.jpg" >
  </a>

  <div class="content">
  	  <i class="heart outline icon large left floated" v-on:click="addToDes(item)" v-show="!item.checkIt"></i>
  	   <i class="heart  icon large left floated red" v-on:click="addToDes(item)" v-show="item.checkIt"></i>
    <a class="header" href="#">{{ item.desName}}</a>
    <div class="meta">
      <a>{{ item.description}}</a>
    </div>
  </div>
</div>
 </div>
<!-- </div> -->
</div>

	

	

</template>
<script type="text/javascript">
	
		export default {
  name: 'desItem',
 
data (){
	return{
   
	}

},
methods:{
	addToDes(itm){
		if(itm.checkIt==false){
				this.$store.commit('addIt', this.$store.state.indexOf(itm));

		}
		else if(itm.checkIt==true){
           this.$store.commit('removeIt', this.$store.state.indexOf(itm));
		}
	

	}
}



}
</script>
<style  >
.space-btw{
	margin-top: 20px;
	margin-left: 20px;
}	
	
</style>