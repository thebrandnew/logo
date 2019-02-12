<template lang="pug">
  #app.theme-default.scene-normal.b-0.c-0
    router-view
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="stylus">
@import '~@/styles/_index'
  
#app
  width 100%
  height 100%
  font-family -apple-system, BlinkMacSystemFont, 'Helvetica Neue', 'PingFang SC', 'Microsoft YaHei', 'Source Han Sans SC', 'Noto Sans CJK SC', 'WenQuanYi Micro Hei', sans-serif
</style>

