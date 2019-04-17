<template>
  <div class="cinema-detail">
    <NavBar />
    <SwiperFilm />
    <SwiperDate />
    <ScheduleCard />
  </div>
</template>
<script>
import NavBar from '@/components/NavBar';
import SwiperFilm from './components/SwiperFilm';
import SwiperDate from './components/SwiperDate';
import ScheduleCard from '@/components/ScheduleCard';
export default {
  name: 'cinema-detail',
  components: {
    NavBar,
    SwiperFilm,
    SwiperDate,
    ScheduleCard
  },
  data () {
    return {

    };
  }
};
</script>
<style lang="stylus" scoped>

</style>
