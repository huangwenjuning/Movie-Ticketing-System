<template>
  <div class="film-detail">
    <NavBar />
    <FilmDetailCard />
  </div>
</template>
<script>
import FilmDetailCard from '@/components/FilmDetailCard';
import NavBar from '@/components/NavBar';
export default {
  name: 'film-detail',
  components: {
    NavBar,
    FilmDetailCard
  }
};
</script>
<style lang="stylus" scoped>

</style>
