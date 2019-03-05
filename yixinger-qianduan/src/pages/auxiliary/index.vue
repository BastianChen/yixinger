<template>
  <div class="index">
    <div class="auxiliary">
      <div class="content">
        <div>
          <div>
            <p>图像识别</p>
            <!--<p>{{item.address}}</p>-->
          </div>
          <img src="https://wzcb97.top/images/index/photo.jpg">
        </div>
      </div>
    </div>
    <div class="auxiliary">
      <div class="content">
        <div>
          <div>
            <p>文字识别</p>
            <!--<p>{{item.address}}</p>-->
          </div>
          <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551787214368&di=1603f11da101544e417a131ff1bb9ba5&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201406%2F18%2F20140618110551_vL3iQ.jpeg">
        </div>
      </div>
    </div>
    <div>
      <button
        type="primary"
        size="default"
        plain="false"
        bindtap="primary"
        style="background-color: #1989FA;border-color: #1989FA;color: #ffffff;width: 90%;margin-top: 20px"
      >
        图像识别
      </button>
    </div>
    <div>
      <button
        type="primary"
        size="default"
        plain="false"
        bindtap="primary"
        style="width: 90%;margin-top: 20px"
      >
        文字识别
      </button>
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
