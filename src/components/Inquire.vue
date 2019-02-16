<template lang="pug">
  .stack-y
    .form-item
      .t-0.c-0 你的品牌名称是什么
      input(
        type="text"
        placeholder="请输入品牌名称"
        v-model="searchWord"
      )
    .form-item
      .t-0.c-0 用不超过三个词描述你的品牌
      input(
        type="text"
        placeholder="例如：动感，简约，圆形"
        v-model="searchWord"
      )
</template>

<script>
export default {
  name: 'Inquire',
  data () {
    return {
      searchWord: ''
    }
  },
  beforeRouteLeave (to, from, next) {
    console.log(this.searchWord)
    next()
  }
}
</script>

<style scoped lang="stylus">
@require '~@/styles/layout/_index'

.stack-y
  stack(y, gap: var(--length-m))
.form-item
  stack(y, gap: var(--length-s))
</style>
