import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
		  frames:[{
				name:'vue.js',star:15
		  },
		  {
				name:'React.js',star:13
		  },{
				name:'Angular.js',star:12
		  }]
  },
  getters: {
	  changeFrames(state){
		return state.frames.map(item=>{
			return{
				name:'**'+item.name+'**',
				star:item.star
			}
		})
	  }
  },
  mutations: {
	  addStar(state,num){
		  state.frames[0].star+=num;
	  }
  },
  actions: {
	  addStar(context,num){
		  context.commit('addStar',num);
	  }
  },
  modules: {
  }
})
