<template>
  <div class="login_container">
    <div class="login_box">
      <!-- 头像区域 -->
      <div class="avatar_box">
        <img src="../assets/logo.jpg" alt="">
      </div>
      <!-- 登录表单区域 -->
      <el-form ref="loginFormRef" :model="loginForm" :rules="loginFormRules" label-width="0px" class="login_form">
        <!-- 用户名 -->
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" prefix-icon="iconfont icon-user" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input v-model="loginForm.password" prefix-icon="iconfont icon-3702mima" type="password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <!-- 按钮区域 -->
        <el-form-item class="btns">
          <el-button type="primary" @click="submitInfo">登录</el-button>
          <el-button type="info" @click="resetLoginForm('loginForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { reqLogin} from "../api/index.js";
import { mapState } from 'vuex'

export default {
  data() {
    return {
      // 这是登录表单的数据绑定对象
      loginForm: {
        username: 'haiyan',
        password: '123456'
      },
      // 这是表单的验证规则对象
      loginFormRules: {
        // 验证用户名是否合法
        username: [
          { required: true, message: '请输入登录名称', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ],
        // 验证密码是否合法
        password: [
          { required: true, message: '请输入登录密码', trigger: 'blur' },
          { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  amounted() {
this.$store.dispatch('getTokens',token)
  },
 computed:{
   ...mapState['Authorization']
 },
  methods: {
 
    //提交用户信息
    async submitInfo() {
      //预验证
      this.$refs.loginFormRef.validate(async valid => {
        if(valid) {
          //发送请求
          const result = await reqLogin(
            this.loginForm.username,
            this.loginForm.password
          );
          console.log(result);
          if(result.code == 200) {
            this.$message({
              message:"登录成功！",
              type:"success"
            });
            const token = result.token
            this.$store.dispatch('getTokens',token)
            this.$router.push("/admin")
          }
          else {
            //登录失败
            this.$message({
              message: "密码错误没得进",
              type: "warning"
            })
          }
        }
      })
    },
    //清空表单
     resetLoginForm() {
     this.$refs.loginFormRef.resetFields();
    },
  }
}
</script>

<style lang="less" scoped>
.login_container {
  background-color: #2b4b6b;
  height: 100%;
}

.login_box {
  width: 450px;
  height: 300px;
  background-color: #fff;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  .avatar_box {
    height: 130px;
    width: 130px;
    border: 1px solid #eee;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 0 10px #ddd;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #eee;
    }
  }
}

.login_form {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}

.btns {
  display: flex;
  justify-content: flex-end;
}
</style>
