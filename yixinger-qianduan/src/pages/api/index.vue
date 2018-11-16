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
  },
  methods:{
    getArticle(){
      let url =`/getArticleByType?typeNumber=1&start=20}`
      this.$httpWX.post({
        url: url
      }).then(res => {
        this.newsList.push(...res.data.articleJSONArray)
        console.log(res)
      })
    }
  }
}
</script>

<style>

</style>
