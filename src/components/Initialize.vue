<template lang="pug">
.initialize
  .stack-y-l
    .stack-y-m
      .t-2 My brand new logo
      .t-1 A professional design for everyone
    .stack-x-m
      div(
        class="step"
        :class="inputName"
      ) 1 输入名称
      div(
        class="step"
        :class="chooseLogo"
      ) 2 挑选 logo
      div(
        class="step"
        :class="download"
      ) 3 下载 logo
    keep-alive
      router-view
    .btns
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
    return {
      isCurrent: this.$route.path
    }
  },
  computed: {
    inputName: function () {
      return {
        current: this.$route.path === '/'
      }
    },
    chooseLogo: function () {
      return {
        current: this.$route.path === '/show'
      }
    },
    download: function () {
      return {
        current: this.$route.path === '/result'
      }
    }
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
@require '~@/styles/layout/_index'
.stack-y-l
  stack(y, gap: var(--length-l))
.stack-y-m
  stack(y, gap: var(--length-s))
.stack-x-m
  stack(x, gap: var(--length-m))

.step
  &.current
    color red
</style>
