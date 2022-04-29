<template>
  <div id="app">
    <!-- <list-one :frames="frames"></list-one>
	<List-two :frames="frames"></List-two> -->
	<list-one></list-one>
	<List-two></List-two>
  </div>
</template>

<script>
import ListOne from './components/ListOne.vue'
import ListTwo from './components/ListTwo.vue'
export default {
  name: 'App',
  // data(){
  // 	  return{
  // 		  frames:[{
  // 				name:'vue.js',star:15
  // 		  },
  // 		  {
  // 				name:'React.js',star:13
  // 		  },{
  // 				name:'Angular.js',star:12
  // 		  }]
  // 	  }
  // },
  components: {
    ListOne,
	ListTwo
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
