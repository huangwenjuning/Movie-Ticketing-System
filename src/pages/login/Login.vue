<template>
  <div class="login">
    <div class="login-welcome">
      <span class="title color-regular-1 wt-500 fs-50x ">欢迎来到影</span>
    </div>
    <div class="login-info mt-20x">
      <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
      <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
    </div>
    <div class="login-btn">
      <mt-button @click.native="loginApp" size="normal" class="btn-style color-light">点击触发 handleClick</mt-button>
    </div>
  </div>
</template>
<script>
import apiService from '@/api/index';
export default {
  name: 'login',
  components: {
  },
  data () {
    return {
      username: '',
      password: null
    };
  },
  methods: {
    loginApp () {
      let params = {
        userName: this.username,
        userPassword: this.password
      };
      this.$http.post(apiService.POST_LOGIN, params).then(res => {
        console.log(res, 'res');
        if (res.data.count > 0) {
          this.$router.push({name: 'Index'});
        }
      });
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '~styles/var.styl'
.login
  position absolute
  top 0
  left 0
  right 0
  bottom 0
  background #fff
  .login-welcome
    .title
      display inline-block
      padding 1rem 0 0 .6rem
  .login-info
    display flex
    margin-top 2.4rem
    flex-direction column
    justify-content center
    align-items center
  .login-btn
    display flex
    margin-top 1.8rem
    justify-content center
    .btn-style
      width 5.8rem
      background $color-primary
</style>
