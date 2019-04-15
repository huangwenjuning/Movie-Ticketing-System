<template>
  <div class="film">
    <Header />
    <ShowingList />
  </div>
</template>
<script>
import Header from '@/components/Header';
import ShowingList from './components/ShowingList';
export default {
  name: 'film',
  components: {
    Header,
    ShowingList
  }
};
</script>
<style lang="stylus" scoped>

</style>
