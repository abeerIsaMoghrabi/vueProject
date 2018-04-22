<template>
<div class="container-fluid colr">
	<div class="container">
		
	<div class="nbar">
		<div class="ui large horizontal divided list right floated">
  <div class="item">
   
    <div class="content">
      <button class="header" v-on:click="goToD"><span class="itemm">Destinations</span></button>
    </div>
  </div>
  <div class="item">
    
    <div class="content">
      <button class="header" v-on:click="goToW" ><span class="itemm">Wishlist</span></button>
    </div>
  </div>


	</div>
	</div>
</div>
</div>
</template>
<script type="text/javascript">
	
		export default {
  name: 'navBar',
 
data (){
	return{
      removet:true,

	}
},
	methods:{
		goToW(){
			// $router.go('/wis');
			// window.location.href = '/wis';

			this.$router.push('/wis');

		},
		goToD(){
			this.$router.push('/desItem');
		}
	}





}
</script>
<style  >
	.container-fluid{
		max-width: 100%;
		width: 100%;
	}
	.colr{
		background-color: #ff9a01;
		height: 70px;
	}
	.container{
	
		width: 80%;
		margin: auto;
	}
	.nbar{
		padding-top: 20px;
	}
	.itemm{
		color:white;
		font-size: 16px;
	}
	
</style>