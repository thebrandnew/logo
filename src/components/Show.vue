<template lang="pug">
.show
  .gridflow
    .result.shadow-m.radius-m result 1
    .result.shadow-m.radius-m result 2
    .result.shadow-m.radius-m result 3
    .result.shadow-m.radius-m result 4
</template>

<script>
export default {
  name: 'Show',
  data () {
    return {}
  }
}
</script>

<style scoped lang="stylus">
@require '~@/styles/layout/_index'
.gridflow
  gridflow()
.result
  padding var(--length-m)
</style>
