<template lang="pug">
.stack-y
  .logo.shadow-l.radius-m.c-0 logo 预览加水印
  button 下载普通版 69元/次(点击支付)
  button 下载专业版 129元/次(点击支付)
  button 成为会员无限次下载
</template>

<script>
export default {
  name: 'Result',
  data () {
    return {}
  }
}
</script>

<style scoped lang="stylus">
@require '~@/styles/layout/_index'

.stack-y
  stack(y, gap: var(--length-l))
.logo
  padding 1rem

</style>
