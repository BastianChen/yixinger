<template>
  <div class="index">
    <div class="auxiliary">
      <div class="content">
        <div>
          <div>
            <p>图像识别</p>
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
          </div>
          <img
            src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551787214368&di=1603f11da101544e417a131ff1bb9ba5&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201406%2F18%2F20140618110551_vL3iQ.jpeg">
        </div>
      </div>
    </div>
    <div>
      <button
        type="primary"
        size="default"
        plain="false"
        bindtap="primary"
        @click="photoDistinguish()"
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
    <!--:title="message"-->
    <van-action-sheet
      :show="show"
      :actions="actions"
      cancel-text="取消"
      @cancel="onCancel"
      @select="onSelect"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      message: '请选择图像识别类型',
      actions: [
        {
          name: '通用图像识别'
        },
        {
          name: '植物识别'
        },
        {
          name: '动物识别'
        },
        {
          name: '菜品识别'
        }
      ],
      type: '',// 图像识别的类型
      typeName: ''// 图像识别的类型的名字
    }
  },
  methods: {
    photoDistinguish() {
      this.show = true;
    },
    onCancel() {
      this.show = false;
    },
    onSelect(index) {
      this.typeName = index.target.name;
      switch (this.typeName) {
        case '通用图像识别':
          this.type = 1;
          this.show = false;
          break;
        case '植物识别':
          this.type = 2;
          this.show = false;
          break;
        case '动物识别':
          this.type = 3;
          this.show = false;
          break;
        case '菜品识别':
          this.type = 4;
          this.show = false;
          break;
        default:
          break;
      }
      this.$router.push({
        path: `../distinguish/main`,
        query: {type: this.type}
      });
      console.log(this.type);
    }
  }
}
</script>

<style lang='scss' scoped>
  @import "./style.scss";
</style>
