<template>
	<div id="List-two">
		<h2>框架排行（组件two）</h2>
		  <ul>
			<li v-for="item in newFrames">
				<span class="name">{{item.name}}</span>
				<span class="star">热度：{{item.star}}</span>
			</li>
		  </ul>
	</div>
  
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'ListTwo',
  computed:{
  	...mapState({
  		frames:'frames'
  	}),
  	newFrames(){
  		return this.$store.getters.changeFrames
  }
  }
  // computed:mapState({
	 //  frames:'frames'
  // })
  // computed:{
  // 	  frames(){
  // 		  return this.$store.state.frames
  // 	  }
  // }
  // props:['frames']
  // data(){
	 //  return{
		//   frames:[{
		// 		name:'vue.js',star:15
		//   },
		//   {
		// 		name:'React.js',star:13
		//   },{
		// 		name:'Angular.js',star:12
		//   }]
	 //  }
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	#List-two{
		background: #b7fcff;
		box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
		margin-bottom: 30px;
		padding: 10px 20px;
	}
	#List-two ul{
		padding: 0;
		list-style-type: none;
	}
	#List-two li{
		
		margin-right: 10px;
		margin-top: 10px;
		padding: 20px;
		background: rgba(255,255,255,0.7);
	}
	.star{
		font-weight: bold;
		color: #e829cc;
	}
</style>
