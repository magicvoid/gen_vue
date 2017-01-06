<template>
  <div id="app">
    
    <router-view></router-view>

    <div class="tab">

      <div class="tab-item">
        <router-link to="/play">
          <div class="tab-icon"></div>
          <p>游玩</p>
        </router-link>
      </div>

     <div class="tab-item">
         <router-link to="/sell">
          <div class="tab-icon"></div>
          <p>商城</p>
        </router-link>
      </div>

      <div class="tab-item">
         <router-link to="/me">
          <div class="tab-icon"></div>
          <p>我的</p>
        </router-link>
      </div>

    </div>
  </div>

</template>

<script>
export default {
  methods:{
  }
}

</script>

<style>
.tab{
  display: -webkit-flex;
  display: flex;
  height: 50px;
  width: 100%;
  border-top: 1px solid black;
  position: absolute;
  bottom: 0px;
}
.tab-item{
  flex: 1;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.router-link-active{
  color: black;
  text-decoration: none
}
.tab-icon{
  margin: 0 auto;
  width:20px;
  height: 20px;
}
.tab-item:nth-child(1) .tab-icon{
  background: url("../static/images/play.png");
  background-size: 100%
}
.tab-item:nth-child(2) .tab-icon{
  background: url("../static/images/sell.png");
  background-size: 100%
}
.tab-item:nth-child(3) .tab-icon{
  background: url("../static/images/mine.png");
  background-size: 100%
}
.tab-item:nth-child(1) .router-link-active .tab-icon{
  background: url("../static/images/mineActive.png");
  background-size: 100%
}
.tab-item:nth-child(2) .router-link-active .tab-icon{
  background: url("../static/images/sellActive.png");
  background-size: 100%
}
.tab-item:nth-child(3) .router-link-active .tab-icon{
  background: url("../static/images/mineActive.png");
  background-size: 100%
}
.tab-item p{
  margin-top: 2px;
}
</style>
