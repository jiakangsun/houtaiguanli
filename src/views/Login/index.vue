<template>
  <div class="login-container">
    <div class="form-box">
      <el-form :model="loginForm" :rules="rules" ref="loginFormRef">
        <el-form-item prop="username">
          <el-input
            v-model="loginForm.username"
            prefix-icon="el-icon-user-solid"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="loginForm.password"
            prefix-icon="el-icon-lock"
          ></el-input>
        </el-form-item>
        <el-form-item class="btn-item">
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="info" @click="reset">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
// import { login } from '@/api/user'
export default {
  created () { },
  data () {
    return {
      loginForm: {
        // 字段名要和接口文档保持一致
        username: 'admin',
        password: '123456'
      },
      rules: {
        username: [
          { required: true, message: '用户名不能为空', trigger: 'blur' },
          { min: 3, max: 8, message: '长度在3到8之间', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' },
          { min: 3, max: 8, message: '长度在3到8之间', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    reset () {
      // 对整个表单进行重置，将所有字段值重置为初始值并移除校验结果
      this.$refs.loginFormRef.resetFields()
    },
    login () {
      // 二次校验
      this.$refs.loginFormRef.validate(valid => {
        if (valid) {
          this.$store.dispatch('user/setToken', this.loginForm)
        } else {
          this.$message.error('登录表单校验失败')
        }
      })
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.login-container {
  width: 100vw;
  height: 100vh;
  background-color: #2b4b6b;
  display: flex;
  justify-content: center;
  align-items: center;
  .form-box {
    width: 450px;
    height: 300px;
    background-color: #fff;
    padding: 50px 15px 0 15px;
    box-sizing: border-box;
    .btn-item {
      text-align: right;
    }
  }
}
</style>
