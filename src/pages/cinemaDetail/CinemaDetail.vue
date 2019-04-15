<template>
  <div class="cinema-detail">
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">01-21</mt-tab-item>
      <mt-tab-item id="5">09-12</mt-tab-item>
      <mt-tab-item id="6">10-20</mt-tab-item>
      <mt-tab-item id="4">10-20</mt-tab-item>
      <mt-tab-item id="5">10-20</mt-tab-item>
      <mt-tab-item id="6">10-20</mt-tab-item>
      <mt-tab-item id="7">10-20</mt-tab-item>
    </mt-navbar>

    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1" class="showing">
        <ScheduleCard />
      </mt-tab-container-item>
      <mt-tab-container-item id="2" class="showing">
      </mt-tab-container-item>
      <mt-tab-container-item id="3" class="showing">
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<script>
import ScheduleCard from '@/components/ScheduleCard';
export default {
  name: 'cinema-detail',
  components: {
    ScheduleCard
  },
  data () {
    return {
      selected: '1'
    };
  }
};
</script>
<style lang="stylus" scoped>

</style>
