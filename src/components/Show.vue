<template lang="pug">
.show
  .gridflow
    img(
      v-lazy="item"
      v-for="(item, index) in list"
      @click="showDetail(index)"
    )
    //- .result.shadow-m.radius-m result 1
    //- .result.shadow-m.radius-m result 2
    //- .result.shadow-m.radius-m result 3
    //- .result.shadow-m.radius-m result 4
</template>

<script>
export default {
  name: 'Show',
  data () {
    return {
      list: [
        '../../static/images/example.jpg',
        '../../static/images/example.jpg',
        '../../static/images/example.jpg',
        '../../static/images/example.jpg',
        '../../static/images/example.jpg',
        '../../static/images/example.jpg',
        '../../static/images/example.jpg',
        '../../static/images/example.jpg',
        '../../static/images/example.jpg',
        '../../static/images/example.jpg',
        '../../static/images/example.jpg',
        '../../static/images/example.jpg',
        '../../static/images/example.jpg',
        '../../static/images/example.jpg',
        '../../static/images/example.jpg',
        '../../static/images/example.jpg',
        '../../static/images/example.jpg',
        '../../static/images/example.jpg',
        '../../static/images/example.jpg',
        '../../static/images/example.jpg',
        '../../static/images/example.jpg',
        '../../static/images/example.jpg',
        '../../static/images/example.jpg',
        '../../static/images/example.jpg',
        '../../static/images/example.jpg',
        '../../static/images/example.jpg',
        '../../static/images/example.jpg',
        '../../static/images/example.jpg',
        '../../static/images/example.jpg',
        '../../static/images/example.jpg',
        '../../static/images/example.jpg',
        '../../static/images/example.jpg'
      ]
    }
  },
  methods: {
    showDetail: function (index) {
      this.$router.push({
        path: '/result',
        query: {
          id: index
        }
      })
    }
  },
  mounted () {
    this.axios
      .get('../logo/make')
      .then(response => (console.log(response.data)))
      // 返回logos的list
  }
}
</script>

<style scoped lang="stylus">
@require '~@/styles/layout/_index'
.gridflow
  gridflow()
  img
    width 300px
    height 200px
    border-radius 20px
    margin-bottom 20px
.result
  padding var(--length-m)
</style>
