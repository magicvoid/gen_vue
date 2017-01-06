<template>
  <div class="modal-box" @click="onModalClick">
  </div>
</template>

<script>

export default{
	methods:{
		onModalClick:function() {
			this.$emit('modalOff');
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.modal-box{
	z-index: 100;
	position: fixed;
	top: 0;
	width: 100%;
	height: 100vh;
	background: rgba(0,0,0,.5);
}
</style>
