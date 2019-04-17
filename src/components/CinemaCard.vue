<template>
  <div class="cinema-card" @click="handleClickToDetail">
    <div class="cinema-card_contaniner thin-border-bottom">
        <div class="cinema-card_top">
            <div class="cinema-name fs-32x text-ellipsis">完美世界影城</div>
            <div class="low-price fs-28x color-primary">21.9元<span class="color-regular-3 fs-24x">起</span></div>
        </div>
        <div class="cinema-card_center color-regular-2 fs-26x">
            <div class="cinema-address text-ellipsis">青山湖区榴云路商业街88号乐买家四楼</div>
            <div class="cinema-distance">2.1km</div>
        </div>
        <div class="cinema-card_bottom text-ellipsis">
            <span class="most-recent color-regular-2 fs-28x">最近场次</span>
            <span class="recent-date">19:00 </span>
            <span class="recent-date">19:00 </span>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'cinema-card',
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
        padding .2rem
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
        .cinema-card_bottom
            margin-top .14rem
</style>
