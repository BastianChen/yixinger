<template>
  <van-tabbar active="0">
    <van-tabbar-item icon="shop" @click="apiPage">POI</van-tabbar-item>
    <van-tabbar-item icon="search" dot @click="suggestionPage">搜索</van-tabbar-item>
    <van-tabbar-item icon="records" info="5" @click="regeocodingPage">逆地址</van-tabbar-item>
    <van-tabbar-item icon="gold-coin" info="20" @click="weatherPage">天气</van-tabbar-item>
  </van-tabbar>
</template>

<script>
    export default {
      data () {

      },
      methods: {
        apiPage () {
          console.log("Aaa");
          this.$router.push('../pages/search/search')
        },
        suggestionPage () {
          this.$router.push('../pages/suggestion/suggestion')
        },
        regeocodingPage () {
          this.$router.push('../pages/regeocoding/regeocoding')
        },
        weatherPage () {
          this.$router.push('../pages/weather/weather')
        }
      }
    }
</script>

<style scoped>

</style>
