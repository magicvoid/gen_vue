<template>
  <div class="search">
  	<div class="pickArea"  @click="onPickAreaClick">
  		<div class="area">成都</div>
  		<span :class="[modalVisible ? 'directActive' : 'direct','directing','icon-more_unfold']"></span>
  	</div>
    
    <div class="search-box">
       <div class="search-img search-position">
          <img  src="" ></img>
       </div>

       <input class="search-input search-position" placeholder="目的地/景点/门票/农庄/特产"/>
    </div>
    <modal v-show="modalVisible" @modalOff="onPickAreaClick" ></modal>
  </div>
</template>

<script>
import Modal from './modal'
export default{
	props: {
		search: {
			type: Object
		}
	},
	components:{
	  Modal
	},
	data(){
		return{
			modalVisible:false
		}
	},
	methods: {
		onPickAreaClick() {
			console.log(this.search)
			this.modalVisible = !this.modalVisible;
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../assets/css/fonts.css";
.search{
	width: 100%;
	height: 40px;
}
.pickArea{
	display: flex;
	width: 15%;
	height: 40px;
	float: left;
}
.area{
	flex: 3;
	text-align: center;
	line-height: 40px;
	height: 40px
}
.directing{
	flex: 1;
	height: 40px;
	text-align: center;
	line-height: 40px;
}
.directActive{
	transition: .5s;
    transform:rotate(-90deg);
}
.direct{
	transition: .5s;
    transform:rotate(0deg);
}

.search-box{
	width: 80%;
	height: 30px;
	position: relative;
	top: 50%;
	left: 2.5%;
	margin-top: -16px;
	float: left;
	border: 1px solid black;
}
.search-position{
	position: absolute;
	top:50%;
	margin-top: -10px;
}
.search-img{

	height:20px;
	width: 20px;
	left: 10px;
	border: 1px solid black;
}
.search-input{
	display: block;
	width: 80%;
	height: 20px;
	left: 40px;
	font-size: 12px;
	border: 1px solid black;
}

</style>
