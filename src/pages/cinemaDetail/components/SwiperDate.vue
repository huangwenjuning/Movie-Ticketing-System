<template>
  <div class="swiper-date">
      <swiper :options="swiperOption" class="swiper-date-style">
        <swiper-slide><div class="active" @click="handleClickDate">今天04月17日</div></swiper-slide>
        <swiper-slide>明天04月18日</swiper-slide>
        <swiper-slide>后天04月19日</swiper-slide>
        <swiper-slide>星期六04月20日</swiper-slide>
        <swiper-slide>04-21</swiper-slide>
        <swiper-slide>04-22</swiper-slide>
        <swiper-slide>04-23</swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
  </div>
</template>
<script>
export default {
  name: 'swiper-date',
  components: {
  },
  data () {
    return {
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 30,
        freeMode: true
      }
    };
  },
  methods: {
    handleClickDate () {
      console.log('click');
    }
  }
};
</script>
<style lang="stylus" scoped>
.swiper-date
    background #ffffff
</style>
<style lang="stylus">
.swiper-date-style
    height .8rem
    .swiper-wrapper
        .swiper-slide
            display flex
            justify-content center
            align-items center
</style>
