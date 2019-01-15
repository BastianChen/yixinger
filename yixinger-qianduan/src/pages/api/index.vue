<template>
  <div>
    <div v-for="(item, index) of newsList" :key="index">
      <news :news="item"></news>
    </div>
  </div>
</template>

<script>

export default {

  data () {
    return{
      newsList: [],
    }
  },

  created () {
    this.getArticle()
    this.getPlace();
  },
  methods:{
    getArticle(){
      let url =`/User/getUser?openid=oE9el5Hx6LplsHe2roGhrkxkEUsk&language=zh`
      this.$httpWX.get({
        url: url
      }).then(res => {
        //this.newsList.push(...res.data.articleJSONArray)
        console.log("getArticle"+res.data.openid)
      })
    },
    getPlace(){
      let url =`/Place/getPlaceByUid?uid=df95f91c9c62cbb438221c0e`
      this.$httpWX.get({
        url: url
      }).then(res => {
        console.log("res"+res.message);
      })
    }
  }
}
</script>

<style>

</style>
