<template lang="pug">
.demo
  .logo-temp.shadow-l.radius-m.b-0
    .x
      .symbol
      .group.y
        .name 四季花海
        .slogan Four Seasons
</template>

<script>
export default {
  name: 'Demo',
  data () {
    return {
      layout: 'x'
    }
  }
}
</script>

<style scoped lang="stylus">
@require '~@/styles/layout/_index'
.logo-temp
  width 400px
  height 300px
  grid(x-arr:center, y-arr:center)

.symbol
  background red
  width 80px
  height 80px
.name
  font-size 24px
  font-weight 800
  line-height 100%
.slogan
  font-size 16px
  font-weight 400
  line-height 100%
.x
  stack(x, gap: 16px, ali: center)
.y
  stack(y, gap: 4px)

</style>
