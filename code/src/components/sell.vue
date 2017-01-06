<template>
  <div>qqqq</div>
</template>

<script>
	
var session = null;
export default{
	created() {
		var hash = location.hash
    var q = document.getElementById('q')
    if(hash != "#/play"){
      console.log(q)
      q.style.display = 'none'
    }
		if(location.hash == '#/sell' && session == null){
			
			this.$http.post('/alpha/api/article/query',{}).then((response) => {
	        session = response.body;
	        console.log(session)
	    	//sessionStorage.setItem("key",session)
      		});
		}
    }

 }

    
 
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
