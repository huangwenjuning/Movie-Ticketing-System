<template>
  <div class="tabbar border-top">
    <template v-for="item in tabbarList">
      <router-link :to="item.path" :key="item.id">
        <div :class="{isSelected:checked[item.id], tabbar_item:'tabbar_item'}"
          @click="changColor(item.id)">
          <i :class="'iconfont' + ' ' + 'icon-' + item.icon"></i>
          <div class="tabbar_text">{{ item.text }}</div>
        </div>
      </router-link>
    </template>
  </div>
</template>
<script>
export default {
  name: 'TabBar',
  data () {
    return {
      tabbarList: [],
      checked: [true]
    }
  },
  methods: {
    changColor (index) {
      for (let i = 0; i < this.tabbarList.length; i++) {
        this.checked[i] = false
      }
      this.$set(this.checked, index, true)
    }
  },
  computed: {
  },
  created () {
    this.$http.get('/tabbar').then(res => {
      if (res.data) {
        this.tabbarList = res.data.tabbarList
      } else {
        this.tabbarList = []
      }
    })
  }
}
</script>
<style lang="stylus" scoped>
.tabbar
  display: flex
  position fixed
  padding .12rem 0
  bottom 0
  left 0
  right 0

  a
    display block
    flex 1

  .tabbar_item
    text-align center
    display flex
    flex: 1
    flex-direction column
    color #b3b3b3

    .iconfont
      margin-bottom .1rem
      font-size .36rem

    .tabbar_text
      font-size .2rem
      line-height .2rem

  .isSelected
    color #444
</style>
