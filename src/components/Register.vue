<template lang="pug">
.register
  input(
    type="number"
    placeholder="请填写手机号码"
    v-model="tel"
  )
  button(
    @click="send(tel)"
  ) 点击发送短信
  input(
    type="number"
    placeholder="请填写短信验证码"
    v-model="number"
  )
  input(
    type="submit"
    value="提交"
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
        // this.axios
        //   .get('../logo/make')
        //   .then(response => (console.log(response.data)))
      }
    }
  }
}
</script>

<style scoped lang="stylus">
</style>
