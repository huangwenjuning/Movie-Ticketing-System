<template>
  <div class="cenima">
    <NavBar :title="title" :isShow="isShow" />
    <CinemaCard :cinemaList="cinemaList" />
  </div>
</template>
<script>
import apiService from '@/api/index';
import CinemaCard from '@/components/CinemaCard';
import NavBar from '@/components/NavBar';
export default {
  name: 'cenima',
  data () {
    return {
      cinemaList: [],
      title: '影院',
      isShow: false
    };
  },
  components: {
    NavBar,
    CinemaCard
  },
  methods: {
    getShowingCinemaList () {
      this.$http.get(apiService.GET_CINEMA_LIST).then(res => {
        if (res.data) {
          this.cinemaList = res.data.cinemaList;
        } else {
          this.cinemaList = [];
        }
      });
    }
  },
  created () {
    this.getShowingCinemaList();
  }
};
</script>
<style lang="stylus" scoped>

</style>
