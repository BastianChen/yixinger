<template>
  <div class="index">
    <div class="photo">
      <div>
        <div>
          <p>图像识别</p>
          <!--<p>{{item.address}}</p>-->
        </div>
        <img src="../../../static/images/dingwei.png">
      </div>
    </div>
    <div class="text">
      <div>
        <div>
          <p>文字识别</p>
          <!--<p>{{item.address}}</p>-->
        </div>
        <img :src="'../../../static/images/dingwei.png'">
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "index.vue"
}
</script>

<style lang='scss' scoped>
  @import "./style.scss";
</style>
