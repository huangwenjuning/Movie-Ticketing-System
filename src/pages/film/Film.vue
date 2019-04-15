<template>
  <div class="film">
    <HeaderContainer />
    <ShowingList />
  </div>
</template>
<script>
import HeaderContainer from '@/components/HeaderContainer';
import ShowingList from './components/ShowingList';
export default {
  name: 'film',
  components: {
    HeaderContainer,
    ShowingList
  }
};
</script>
<style lang="stylus" scoped>

</style>
