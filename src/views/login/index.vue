<template>
  <div class="loginContent">
    <div class="leftpage">
      <img
        src="http://www-wms-java.itheima.net/img/title.ef005a7a.png"
        alt=""
      />

      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item prop="username">
          <el-input class="input" type="username" v-model="ruleForm.username"
            ><template #prefix> <i class="el-icon-mobile-phone"></i> </template
          ></el-input>
        </el-form-item>
        <el-form-item prop="pass">
          <el-input class="input" type="password" v-model="ruleForm.pass"
            ><template #prefix> <i class="el-icon-lock"></i> </template
            ><template #suffix> <i class="el-icon-view"></i> </template
          ></el-input>
        </el-form-item>
        <template>
          <!-- `checked` 为 true 或 false -->
          <el-checkbox v-model="checked" class="redio">记住密码</el-checkbox>
        </template>
        <el-form-item>
          <el-button
            type="primary"
            @click="submitForm('ruleForm')"
            class="button"
            >立即登录</el-button
          >
        </el-form-item>
      </el-form>
    </div>
    <div class="rightpage" width="560px"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: false,
      ruleForm: {
        username: "admin",
        pass: "111111",
      },
      rules: {
        username: [
          { required: true, trigger: "blur", message: "账号不能为空" },
          {
            pattern: /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i,
            trigger: "blur",
            message: "账号格式不对",
          },
        ],
        pass: [
          { required: true, trigger: "blur" },
          { min: 6, max: 16, trigger: "blur", message: "请输入密码6-16位" },
        ],
      },
    };
  },
  methods: {
    onSubmit(values) {
      console.log("submit", values);
    },
  },
};
</script>

<style scoped lang="less">
html,
body {
  height: 100%;
  width: 100%;

  .loginContent {
    width: 958px;
    height: 516px;
    display: flex;
    margin: auto;
    margin-top: 100px;
    .leftpage {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      width: 398px;
      height: 516px;
      border-radius: 40px 0 0 40px;
      box-shadow: 0 0 20px rgb(93 93 93 / 33%);

      img {
        width: 150px;
        height: 64px;
      }
      .demo-ruleForm {
        display: flex;
        flex-direction: column;
        justify-content: left;
        align-items: center;
        margin-left: -100px;
        .input {
          width: 280px;
          height: 50px;
          background-color: #f8f5f5 !important;
          border-bottom-left-radius: 0;
          border-top-left-radius: 0;
          margin-left: -6px;
          // margin-bottom: 40px;
          i {
            margin-top: 15px;
            font-size: 20px;
            .el-icon-view {
              // margin-right: 50px;
            }
          }
          /deep/.el-input__inner {
            background-color: #f8f5f5;
            height: 50px;
          }
        }
      }
    }
    .button {
      width: 280px;
      height: 50px;
      background: #ffb200;
      border-radius: 8px;
      box-shadow: 0 2px 9px 1px rgb(255 178 0 / 47%);
      font-size: 16px;
      font-weight: 600;
      text-align: center;
      color: #332929;
      line-height: 22px;
      // margin-left: -5px;
    }
    .redio {
      font-size: 14px;
      margin-bottom: 30px;
      color: black;
      margin-left: -90px;
    }
  }
  .rightpage {
    // float: right;
    background-image: url(http://www-wms-java.itheima.net/img/contentBg.1321d126.png);
    // background-position: 50%;
    background-repeat: no-repeat;
    // background: pink;
    background-size: cover;
    width: 560px;
    height: 516px;
    // box-shadow: 20px 0 20px rgb(93 93 93 / 33%);
  }
}
</style>
