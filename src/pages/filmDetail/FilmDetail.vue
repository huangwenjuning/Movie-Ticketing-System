<template>
  <div class="film-detail">
    <NavBar />
    <FilmDetailCard />
    <ContentBox />
  </div>
</template>
<script>
import FilmDetailCard from '@/components/FilmDetailCard';
import NavBar from '@/components/NavBar';
import ContentBox from './components/ContentBox';
export default {
  name: 'film-detail',
  data () {
    return {

    };
  },
  components: {
    NavBar,
    FilmDetailCard,
    ContentBox
  }
};
</script>
<style lang="stylus" scoped>

</style>
