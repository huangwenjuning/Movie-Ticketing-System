<template>
  <div class="showing-list">
    <mt-navbar v-model="selected">
        <mt-tab-item id="1">正在热映</mt-tab-item>
        <mt-tab-item id="2">即将上映</mt-tab-item>
    </mt-navbar>

    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1" class="showing">
          <FilmCard />
      </mt-tab-container-item>
      <mt-tab-container-item id="2" class="showing">
          <FilmCard />
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<script>
import FilmCard from '@/components/FilmCard';
export default {
  name: 'showing-list',
  components: {
    FilmCard
  },
  data () {
    return {
      selected: '1'
    };
  }
};
</script>
<style lang="stylus" scoped>
.showing
  margin-top .2rem
</style>
