<template>
  <div class="film-detail-card">
    <div class="film-detail-card-container">
      <div class="detail-card-container_left">
        <img :src="filmDetail.moviePoster" alt="">
      </div>
      <div class="detail-card-container_right">
        <div class="detail-card-center_head">
          <div class="film-name fs-48x color-regular-1 wt-700">{{ filmDetail.filmName }}</div>
        </div>
        <div class="detail-card-center_foot">
          <div class="card-center-foot_left">
            <div class="film-kind color-regular-3 fs-28x mt-5x">分类: {{ filmDetail.filmKinds[0] }}<span>{{ filmDetail.filmDuration }}</span></div>
            <div class="film-date color-regular-3 fs-28x mt-5x">上映时间：{{ filmDetail.releaseDate }}</div>
            <div class="film-like color-primary fs-30x wt-600 mt-10x">{{ filmDetail.filmWantPeople }}人想看</div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="blur-background"></div> -->
  </div>
</template>
<script>
export default {
  name: 'film-detail-card',
  props: {
    filmDetail: {
      type: Object
    }
  }
};
</script>
<style lang="stylus" scoped>
.film-detail-card
  background #ffffff
  // border-top-left-radius .24rem
  // border-top-right-radius .24rem
  position relative
  .film-detail-card-container
    display flex
    padding .2rem .2rem .1rem
    .detail-card-container_left
      img
        width 2.2rem
        height 3rem
  .detail-card-container_right
    margin-left .2rem
    display flex
    flex-direction column
    .detail-card-center_head
      width 4.6rem
    .detail-card-center_foot
      display flex
      justify-content space-between
      margin-top .24rem
      .card-center-foot_right
        display flex
        justify-content center
        align-items center
</style>
