import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state =[
{desName:"Istanbul",
description:"innpera",
img:"../../assets/p2.jpg",
checkIt:false,
visited:false,
},
{desName:"A",
description:"innpera",
img:"../../assets/p2.jpg",
checkIt:false,
visited:false,
},
{desName:"B",
description:"innpera",
img:"/p2.jpg",
checkIt:false,
visited:false,
},
{desName:"C",
description:"innpera",
img:"../../assets/p2.jpg",
checkIt:false,
visited:false,
},
{desName:"D",
description:"innpera",
img:"../../assets/p2.jpg",
checkIt:false,
visited:false,
},

	

] 


	const mutations = {
  addIt(state ,n) {
   this.state[n].checkIt=true;
   console.log(this.state[n].checkIt);
  },
  removeIt (state,n) {
    this.state[n].checkIt=false;
    console.log(this.state[n].checkIt);
  },
  removeAllItem(state,n){
  	this.state.splice(n,1);

  }

}
  


const getters = {
  evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd'
}
export default new Vuex.Store({
  state,
  getters,
  mutations
})