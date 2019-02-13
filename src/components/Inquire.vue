<template lang="pug">
.inquire
  input(
    type="text"
    placeholder="请输入关键词"
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
</style>
