<template>
  <div class="navbar">
    <mt-header :title="title">
        <div @click="$router.go(-1)" slot="left" v-if="isShow">
            <mt-button icon="back">返回</mt-button>
        </div>
        <!-- <mt-button icon="more" slot="right"></mt-button> -->
    </mt-header>
  </div>
</template>
<script>
export default {
  name: 'navbar',
  props: {
    title: {
      type: String
    },
    isShow: {
      type: Boolean,
      default: true
    }
  },
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
