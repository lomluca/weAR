<template>

<el-form :model="loginFormModel" status-icon :rules="loginFormRules" ref="loginFormModel" label-width="120px">
  <el-form-item label="Email" prop="email">
    <el-input type="email" v-model="loginFormModel.email" auto-complete="off"></el-input>
  </el-form-item> 

  <el-form-item label="Password" prop="pass">
    <el-input type="password" v-model="loginFormModel.pass" auto-complete="off"></el-input>
  </el-form-item>
 
  <el-form-item>
    <el-button type="primary" @click="submitForm('loginFormModel')">Submit</el-button>
  </el-form-item>
</el-form>

</template>

<script>
import * as CryptoJS from 'crypto-js'

export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please input the password'));
      } else if (CryptoJS.SHA256(value) != localStorage.pass) {
        callback(new Error('Wrong password'));
      } else {
        callback();
      }
    }

    var validateMail = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please input the e-mail address'));
      } else if (value != localStorage.email) {
        callback(new Error('Wrong e-mail address'));
      } else {
        callback();
      }
    }

    return {
      loginFormModel: {
        email: '',
        pass: '',
      },
      loginFormRules: {
        email: [
          { type: 'email', required: true, validator: validateMail, trigger: 'submit' }
        ],
        pass: [
          { required: true, validator: validatePass, trigger: 'submit' }
        ]
      },
    }
  }, 
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          localStorage.setItem("loggedIn", 1)
          this.$emit('loginSuccess')
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>

<style>

</style>
