<template>
  <div class="navbar">
    <mt-header title="标题过长会隐藏后面的内容啊哈哈哈哈">
        <router-link to="/" slot="left">
            <mt-button icon="back">返回</mt-button>
        </router-link>
        <!-- <mt-button icon="more" slot="right"></mt-button> -->
    </mt-header>
  </div>
</template>
<script>
export default {
  name: 'navbar',
  data () {
    return {
      titleValue: '无骛'
    };
  },
  components: {
  }
};
</script>
<style lang="stylus" scoped>

</style>
<style lang="stylus">
@import '~styles/var.styl'

.mint-header
    background-color $color-primary
</style>
