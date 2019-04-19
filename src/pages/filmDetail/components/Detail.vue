<template>
  <div class="detail">
    <div class="brief">
      <div>
        <p class="brief-content fs-36x color-regular-2">{{ synopsis }}</p>
      </div>
    </div>
    <div class="actor"></div>
  </div>
</template>
<script>
export default {
  name: 'detail',
  props: {
    synopsis: {
      type: String
    }
  },
  components: {
  }
};
</script>
<style lang="stylus" scoped>
.detail
    background #ffffff
    .brief-content
      line-height 1.5
      margin .1rem .2rem
</style>
