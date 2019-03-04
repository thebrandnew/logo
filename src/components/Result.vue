<template lang="pug">
.stack-y
  .logo.shadow-l.radius-m.c-0 logo 预览加水印
  img(
    src='../../static/images/example.jpg'
  )
  button(
    @click="pay('common')"
  ) 下载普通版 69元/次(点击支付)
  button(
    @click="pay('special')"
  ) 下载专业版 129元/次(点击支付)
  button(
    @click="pay('upstage')"
  ) 成为会员无限次下载
</template>

<script>
export default {
  name: 'Result',
  data () {
    return {}
  },
  methods: {
    pay: function (type) {
      console.log(type)
      if (type === 'common') {
        this.axios
          .get('../payment/create')
          .then(response => (console.log(response.data)))
      } else if (type === 'special') {
        this.axios
          .get('../payment/create')
          .then(response => (console.log(response.data)))
      } else {
        this.axios
          .get('../payment/create')
          .then(response => (console.log(response.data)))
      }
    }
  },
  mounted () {
    // 在此直接展示image
    console.log(this.$route.query)
  }
}
</script>

<style scoped lang="stylus">
@require '~@/styles/layout/_index'

.stack-y
  stack(y, gap: var(--length-l))
.logo
  padding 1rem
button
  cursor pointer
img
  width 100px
  height 100px
</style>
