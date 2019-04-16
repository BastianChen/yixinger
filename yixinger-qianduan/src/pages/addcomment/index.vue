<template>
  <div>
    ss
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: ''
      }
    },
    onLoad(opts) {
      this.title = opts.title;
      wx.setNavigationBarTitle({
        title: this.title,
        success: function (res) {
          // success
        }
      })
    },
    mounted() {
    },
    methods: {}
  }
</script>

<style scoped>

</style>
