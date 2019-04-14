<template>
  <div class="film-card">
      <div class="film-card-container border-bottom">
          <div class="card-left">
              <img src="https://p1.meituan.net/128.180/movie/c63849c7a9de360a7b192bc322792a111705236.jpg" alt="">
          </div>
          <div class="card-center">
              <div class="card-center_title">反贪风暴</div>
              <div class="card-center_score">
                  <span class="score">评分</span><span class="score_num">9.2</span>
              </div>
              <div class="card-center_starring">主演：古天乐，郑嘉颖，林峰</div>
          </div>
          <div class="card-right">
              <mt-button type="danger" size="small">购票</mt-button>
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
  }
};
</script>
<style lang="stylus" scoped>
.film-card
    padding 0 .1rem
    background #fff
    .film-card-container
        padding .2rem 0
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
            .card-center_title
                color #000
                font-weight normal
                font-size .44rem
                letter-spacing .04rem
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
                margin-top .34rem
                font-size .3rem
                color #666
        .card-right
            margin 0 .2rem
            display flex
            align-items center
</style>
