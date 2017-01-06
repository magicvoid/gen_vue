<template>
<div>
  <search :search="search"></search>
</div>
  
</template>

<script>
import Search from './search'

export default{
  data() {
	return {
		search: {}
	}
  },
  components:{
    Search
  },
  created() {
  	this.$http.post('/alpha/api/article/query',{}).then((response) => {
	    	this.search = response.body;
	    	console.log(this.search)
  		})	
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
