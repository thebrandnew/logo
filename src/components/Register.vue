<template lang="pug">
div.register
  div
    input.tel(
      type="text"
      placeholder="请填写手机号码"
      v-model="tel"
    )
    button(
      @click="send(tel)"
    ) 点击发送短信

  input.number(
    type="text"
    placeholder="请填写短信验证码"
    v-model="number"
  )
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      tel: '',
      timer: 60,
      number: ''
    }
  },
  methods: {
    send: (tel) => {
      if (tel.length !== 11) {
        console.log('弹窗提示')
      } else {
        console.log(tel)
      }
    }
  }
}
</script>

<style scoped lang="stylus">
.register
  height: 100vh
  display: flex
  align-items: center
  justify-content: center
  flex-direction: column
  input
    width: 300px
    height: 50px
    outline: none
    border: none
    border-radius: 5px
    padding-left: 20px
    font-size: 18px
  div
    margin-bottom: 20px
    position: relative
    button
      position: absolute
      right: 10px
      top: 10px
      width: 100px
      height: 30px
      outline: none
      border: 1px solid #eee
      border-radius: 50px
</style>
