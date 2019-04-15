<template>
  <div class="header-container">
    <div class="header-city">
      <div class="header-city_name color-light fs-28x">南昌<i>icon</i></div>
    </div>
    <div class="header-search">
      <input type="text" v-model="searchValue" placeholder="可搜索电影和影院🔍">
    </div>
  </div>
</template>
<script>
export default {
  name: 'header-container',
  data () {
    return {
      searchValue: ''
    };
  }
};
</script>
<style lang="stylus" scoped>
@import '~styles/var.styl'
.header-container
  background $color-primary
  padding .1rem
  display flex
  justify-content space-between
  .header-city
    display flex
    justify-content cneter
    align-items center
  .header-search
    input
      width 5.8rem
      border 1px solid #999
      border-radius .1rem
      height .6rem
      background #fff
      padding .05rem .1rem
</style>
