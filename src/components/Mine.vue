<template lang="pug">
.mine
  .title 我的logo
  .show
    img(
      v-lazy="item"
      v-for="(item) in list"
    )
</template>

<script>
export default {
  name: 'Mine',
  data () {
    return {
      list: [
        '../../static/images/example.jpg',
        '../../static/images/example.jpg',
        '../../static/images/example.jpg',
        '../../static/images/example.jpg',
        '../../static/images/example.jpg',
        '../../static/images/example.jpg'
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
@require '~@/styles/layout/_index'
.mine
  margin auto
.title
  font-size 40px
  position absolute
  top 30px
  left 40px
.show
  width 100vw
  height 100vh
  margin-top 100px
  display flex
  justify-content center
  align-items center
  // justify-content flex-start
  flex-wrap wrap
  img
    width 500px
    height 400px
    margin-right 20px
    border-radius 20px
    margin-bottom 20px
</style>
