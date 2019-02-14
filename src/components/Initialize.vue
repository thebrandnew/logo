<template lang="pug">
.initialize
  keep-alive
    router-view
  button(
    v-if="this.$route.path !== '/'"
    @click="goPrev"
  ) 上一个
  button(
    v-if="this.$route.path !== '/result'"
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
      if (this.$route.path === '/show') {
        this.$router.push({ path: '/' })
      } else {
        this.$router.push({ path: 'show' })
      }
    },
    goNext: function () {
      if (this.$route.path === '/') {
        this.$router.push({ path: 'show' })
      } else if (this.$route.path === '/show') {
        this.$router.push({ path: 'result' })
      }
    }
  }
}
</script>

<style scoped lang="stylus">
</style>
