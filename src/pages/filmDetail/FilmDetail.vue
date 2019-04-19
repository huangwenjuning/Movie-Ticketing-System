<template>
  <div class="film-detail">
    <NavBar />
    <FilmDetailCard :filmDetail="filmDetail" />
    <ContentBox :content="content" />
  </div>
</template>
<script>
import apiService from '@/api/index';
import FilmDetailCard from '@/components/FilmDetailCard';
import NavBar from '@/components/NavBar';
import ContentBox from './components/ContentBox';
export default {
  name: 'film-detail',
  data () {
    return {
      filmDetail: {},
      content: {}
    };
  },
  components: {
    NavBar,
    FilmDetailCard,
    ContentBox
  },
  methods: {
    getFilmDetail () {
      let param = this.$route.params;
      this.$http.post(apiService.POST_CURRENT_FILM_DETAIL, param).then(res => {
        console.log(res, 'res');
        if (res.data) {
          this.filmDetail = res.data.filmDetail;
          this.content.synopsis = this.filmDetail.synopsis;
        } else {
          this.filmDetail = '';
        }
      });
    }
  },
  mounted () {
    this.getFilmDetail();
  }
};
</script>
<style lang="stylus" scoped>

</style>
