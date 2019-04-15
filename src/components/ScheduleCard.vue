<template>
  <div class="cinema-detail">
    <div class="cinema-detail-container flex-box thin-border-bottom">
        <div class="cinema-detail_left flex-box">
            <div class="cinema-detail-left_lt">
                <div class="color-regular-1 fs-40x">16:20</div>
                <div class="color-regular-3 fs-24x">18:37散场</div>
            </div>
            <div class="cinema-detail-left_ct">
                <div class="color-regular-1 fs-32x">原版2D</div>
                <div class="color-regular-3 fs-24x mt-5x">1号厅</div>
            </div>
            <div class="cinema-detail-left_rt">
                <div class="fs-36x sale-price">21.9元</div>
                <div class="color-regular-3 fs-24x mt-2x">原价30.99元</div>
            </div>
        </div>
        <div class="cinema-detail_right flex-center">
              <mt-button type="danger" size="small" @click.stop.prevent="handleClickToBuy">购票</mt-button>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'cinema-detail',
  components: {
  },
  methods: {
    handleClickToBuy () {
      console.log('buy');
    }
  }
};
</script>
<style lang="stylus" scoped>
.cinema-detail
    background #ffffff
    .cinema-detail-container
        padding .1rem .2rem
        .cinema-detail_left
            width 6rem
            .cinema-detail-left_lt,
            .cinema-detail-left_ct,
            .cinema-detail-left_rt
                width 1.8rem
                height 1rem
            .cinema-detail-left_rt
                .sale-price
                    color #ff4d64
</style>
