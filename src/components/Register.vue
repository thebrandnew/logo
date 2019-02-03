<template>
  <div class="register">
    <div>
      <input class="tel" type="number" placeholder="请填写手机号码" v-model="tel" />
      <button @click="send(tel)">点击发送短信</button>
    </div>
    <input class="number" type="number" placeholder="请填写短信验证码" v-model="number" />
  </div>
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
        // 在此需要封装一个messagebox提示窗
        console.log('弹窗提示')
      } else {
        // 如果电话正确 那么在此需要进行触发倒计时以及后端接口请求
        console.log(tel)
      }
    }
  }
}
</script>

<style scoped lang="less">
.register {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  input {
    width: 300px;
    height: 50px;
    outline: none;
    border: none;
    border-radius: 5px;
    padding-left: 20px;
    font-size: 18px;
  }
  div {
    margin-bottom: 20px;
    position: relative;
    button {
      position: absolute;
      right: 10px;
      top: 10px;
      width: 100px;
      height: 30px;
      outline: none;
      border: 1px solid #eee;
      border-radius: 50px;
    }
  }
}
</style>
