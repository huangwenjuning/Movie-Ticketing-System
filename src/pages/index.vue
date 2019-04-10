<template>
  <div>
    <router-view></router-view>
    <tab-bar></tab-bar>
  </div>
</template>
<script>
import TabBar from '../components/TabBar'
export default {
  name: 'Index',
  components: {
    TabBar
  }
}
</script>
