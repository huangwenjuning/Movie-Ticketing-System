<template>
  <div class="cinema-card">
    <div class="cinema-card_contaniner thin-border-bottom" @click="handleClickToDetail" v-for="(item, index) of cinemaList" :key="index">
        <div class="cinema-card_top">
            <div class="cinema-name fs-32x text-ellipsis">{{ item.cinemaName }}</div>
            <div class="low-price fs-28x color-primary">{{ item.lowPrice }}元<span class="color-regular-3 fs-24x">起</span></div>
        </div>
        <div class="cinema-card_center color-regular-2 fs-26x">
            <div class="cinema-address text-ellipsis">{{ item.cinemaAddress }}</div>
            <div class="cinema-distance">{{ item.distance }}</div>
        </div>
        <!-- <div class="cinema-card_bottom text-ellipsis">
            <span class="most-recent color-regular-2 fs-28x">最近场次</span>
            <span class="recent-date">{{ item.recentPlaying }}</span>
        </div> -->
    </div>
  </div>
</template>
<script>
export default {
  name: 'cinema-card',
  props: {
    cinemaList: {
      type: Array
    }
  },
  methods: {
    handleClickToDetail () {
      this.$router.push({name: 'CinemaDetail'});
    }
  }
};
</script>
<style lang="stylus" scoped>
.cinema-card
    background #fff
    .cinema-card_contaniner
        padding .3rem .2rem
        .cinema-card_top
            display flex
            justify-content space-between
            .cinema-name
                width 6rem
                color #333
        .cinema-card_center
            display flex
            justify-content space-between
            margin-top 0.1rem
            .cinema-address
              width 6.2rem
        .cinema-card_bottom
            margin-top .14rem
</style>
