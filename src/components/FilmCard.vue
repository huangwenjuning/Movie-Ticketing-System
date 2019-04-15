<template>
  <div class="film-card" @click="handleClick">
      <div class="film-card-container thin-border-bottom">
          <div class="card-left">
              <img src="https://p1.meituan.net/128.180/movie/c63849c7a9de360a7b192bc322792a111705236.jpg" alt="">
          </div>
          <div class="card-center">
              <div class="card-center_title text-ellipsis">反贪风暴</div>
              <div class="card-center_score">
                  <span class="score">评分</span><span class="score_num">9.2</span>
              </div>
              <div class="card-center_starring text-ellipsis">主演：古天乐，郑嘉颖，林峰</div>
          </div>
          <div class="card-right">
              <mt-button type="danger" size="small" @click.stop.prevent="handleClickToBuy">购票</mt-button>
          </div>
      </div>
  </div>
</template>
<script>
export default {
  name: 'film-card',
  data () {
    return {
    };
  },
  methods: {
    handleClick () {
      this.$router.push({ name: 'FilmDetail' });
    },
    handleClickToBuy () {
      console.log('buy');
    }
  }
};
</script>
<style lang="stylus" scoped>
.film-card
    background #fff
    .film-card-container
        padding .2rem
        display flex
        .card-left
            img
                width 1.34rem
                height 1.84rem
        .card-center
            margin-left .2rem
            display flex
            flex-direction column
            flex 1 0 auto
            width 2rem
            .card-center_title
                color #000
                font-weight normal
                font-size .44rem
                letter-spacing .02rem
                line-height .44rem
            .card-center_score
                margin-top .14rem
                .score
                    font-size .3rem
                    color #666
                .score_num
                    margin-left 0.14rem
                    font-size .34rem
                    color #fea54c
            .card-center_starring
                margin-top .35rem
                font-size .3rem
                color #666
        .card-right
            margin 0 .2rem
            display flex
            align-items center
</style>
