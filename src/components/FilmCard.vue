<template>
  <div class="film-card">
      <div class="film-card-container thin-border-bottom" v-for="(item, index) in filmList" :key="index"  @click="handleClick(item.id)">
          <div class="card-left">
              <img :src="item.moviePoster" alt="">
          </div>
          <div class="card-center">
              <div class="card-center_title text-ellipsis">{{ item.filmName }}</div>
              <div class="card-center_score">
                  <span class="score">评分</span><span class="score_num">{{ item.filmScore }}</span>
              </div>
              <div class="card-center_starring text-ellipsis">主演：{{ item.filmActors }}</div>
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
  props: {
    filmList: {
      type: Array
    }
  },
  data () {
    return {
    };
  },
  methods: {
    handleClick (id) {
      console.log(id, 'id');
      let param = {
        filmId: id
      };
      this.$router.push({ name: 'FilmDetail', params: param });
    },
    handleClickToBuy () {
      console.log('buy');
    }
  },
  mounted () {
    console.log(this.filmList, 'this.filmList');
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
