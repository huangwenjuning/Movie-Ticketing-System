<template>
  <div class="showing-list">
    <mt-navbar v-model="selected">
        <mt-tab-item id="1">正在热映</mt-tab-item>
        <mt-tab-item id="2">即将上映</mt-tab-item>
    </mt-navbar>

    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1" class="showing">
          <FilmCard :filmList="filmshowingList" />
      </mt-tab-container-item>
      <mt-tab-container-item id="2" class="showing">
          <FilmCard />
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<script>
import apiService from '@/api/index';
import FilmCard from '@/components/FilmCard';
export default {
  name: 'showing-list',
  components: {
    FilmCard
  },
  data () {
    return {
      selected: '1',
      filmshowingList: []
    };
  },
  methods: {
    getshowingFilmList () {
      this.$http.get(apiService.GET_PLAYING_LIST).then(res => {
        console.log(res, 'res');
        if (res.data) {
          this.filmshowingList = res.data.filmList;
        } else {
          this.tabbarList = [];
        }
      });
    }
  },
  created () {
    this.getshowingFilmList();
  }
};
</script>
<style lang="stylus" scoped>
.showing
  margin-top .2rem
</style>
