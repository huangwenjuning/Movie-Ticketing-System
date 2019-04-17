<template>
  <div class="swiper-film">
      <swiper :options="swiperOption" class="swiper-film-style">
        <swiper-slide><div class="active" @click="handleClickDate"><img style="width:2.2rem;height:3rem;" src="https://gw.alicdn.com/i1/TB1RO4vOxYaK1RjSZFnXXa80pXa_.jpg_160x160Q30s100.jpg" alt=""></div></swiper-slide>
        <swiper-slide>明天04月18日</swiper-slide>
        <swiper-slide>后天04月19日</swiper-slide>
        <swiper-slide>星期六04月20日</swiper-slide>
        <swiper-slide>04-21</swiper-slide>
        <swiper-slide>04-22</swiper-slide>
        <swiper-slide>04-23</swiper-slide>
      </swiper>
  </div>
</template>
<script>
export default {
  name: 'swiper-film',
  components: {
  },
  data () {
    return {
      swiperOption: {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        }
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
.swiper-film
    padding .1rem 0
    background #ffffff
</style>
<style lang="stylus">
.swiper-film-style
    height 2.8rem
    .swiper-wrapper
        .swiper-slide
            display flex
            justify-content center
            align-items center
            background-position: center;
            background-size: cover;
            width: 2.2rem;
            height: 3rem;
</style>
