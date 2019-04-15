<template>
  <div class="content-box">
    <mt-navbar v-model="selected">
        <mt-tab-item id="1">影院</mt-tab-item>
        <mt-tab-item id="2">详情</mt-tab-item>
        <mt-tab-item id="3">热评</mt-tab-item>
    </mt-navbar>

    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1" class="showing">
      </mt-tab-container-item>
      <mt-tab-container-item id="2" class="showing">
          <Detail />
      </mt-tab-container-item>
      <mt-tab-container-item id="3" class="showing">
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<script>
import Detail from './Detail.vue';
export default {
  name: 'film-detail',
  data () {
    return {
      selected: '1'
    };
  },
  components: {
    Detail
  }
};
</script>
<style lang="stylus" scoped>
.content-box
    margin-top .14rem
    background #ffffff
</style>
