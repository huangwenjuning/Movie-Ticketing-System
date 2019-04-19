<template>
  <div class="content-box">
    <mt-navbar v-model="selected">
        <mt-tab-item id="1">影院</mt-tab-item>
        <mt-tab-item id="2">简介</mt-tab-item>
        <mt-tab-item id="3">热评</mt-tab-item>
    </mt-navbar>

    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1" class="showing">
        <Cinema class="mt-5x" />
      </mt-tab-container-item>
      <mt-tab-container-item id="2" class="showing">
          <Detail :synopsis="content.synopsis" class="mt-5x" />
      </mt-tab-container-item>
      <mt-tab-container-item id="3" class="showing">
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<script>
import Cinema from '@/components/CinemaCard';
import Detail from './Detail.vue';
export default {
  name: 'film-detail',
  props: {
    content: {
      type: Object
    }
  },
  data () {
    return {
      selected: '1'
    };
  },
  components: {
    Cinema,
    Detail
  }
};
</script>
<style lang="stylus" scoped>
.content-box
    margin-top .14rem
    background #ffffff
    .showing
      margin-top .1rem
</style>
