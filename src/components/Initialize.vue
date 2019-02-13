<template lang="pug">
.initialize
  keep-alive
    router-view
  button(
    v-if="this.$route.path !== '/initialize/inquire'"
    @click="goPrev"
  ) 上一个
  button(
    v-if="this.$route.path !== '/initialize/result'"
    @click="goNext"
  ) 下一个
</template>

<script>
export default {
  name: 'Initialize',
  data () {
    return {}
  },
  methods: {
    /*
    共有三种情况
    1 inquire 输入关键词的搜索页面
    2 show 返回展示结果的展示页面
    3 result 展示想要购买的页面
    */
    goPrev: function () {
      let show = /show/gi
      if (show.test(this.$route.path)) {
        this.$router.push({ path: 'inquire' })
      } else {
        this.$router.push({ path: 'show' })
      }
    },
    goNext: function () {
      let inquire = /inquire/gi
      if (inquire.test(this.$route.path)) {
        this.$router.push({ path: 'show' })
      } else {
        this.$router.push({ path: 'result' })
      }
    }
  }
}
</script>

<style scoped lang="stylus">
</style>
