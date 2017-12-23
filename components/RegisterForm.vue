<template>

<el-form :model="registerFormModel" status-icon :rules="registerFormRules" ref="registerFormModel" label-width="120px">
  <el-form-item label="Fullname" prop="fullname">
    <el-input type="text" v-model="registerFormModel.fullname" auto-complete="off"></el-input>
  </el-form-item>
 
  <el-form-item label="Email" prop="email">
    <el-input type="email" v-model="registerFormModel.email" auto-complete="off"></el-input>
  </el-form-item> 

  <el-form-item label="Password" prop="pass">
    <el-input type="password" v-model="registerFormModel.pass" auto-complete="off"></el-input>
  </el-form-item>
  
  <el-form-item label="Confirm" prop="checkPass">
    <el-input type="password" v-model="registerFormModel.checkPass" auto-complete="off"></el-input>
  </el-form-item>

  <el-form-item label="Birthday" prop="birthday">
    <el-date-picker type="date" v-model="registerFormModel.birthday" :picker-options="birthdatPickerOptions" style="width:100%"></el-date-picker>
  </el-form-item>
 
  <el-form-item label="Address" prop="address">
    <el-input type="text" v-model="registerFormModel.address" auto-complete="off"></el-input>
  </el-form-item> 
 
  <el-form-item>
    <el-button type="primary" @click="submitForm('registerFormModel')">Submit</el-button>
    <el-button @click="resetForm('registerFormModel')">Reset</el-button>
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
      } else {
        if (this.registerFormModel.checkPass !== '') {
          this.$refs.registerFormModel.validateField('checkPass');
        }
        callback();
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please input the password again'));
      } else if (value !== this.registerFormModel.pass) {
        callback(new Error('Two inputs don\'t match!'));
      } else {
        callback();
      }
    }
    return {
      registerFormModel: {
        fullname: '',
        email: '',
        address: '',
        email: '',
        address: '',
        pass: '',
        checkPass: '',
        birthday: '',
        acceptConditions: true
      },
      registerFormRules: {
        fullname: [
          { required: true, message: 'Please enter your fullname', trigger: 'blur' }
        ],
        email: [
          { type: 'email', required: true, message: 'Please input correct email address', trigger: 'blur,change' }
        ],
        pass: [
          { required: true, validator: validatePass, trigger: 'blur,change' }
        ],
        checkPass: [
          { required: true, validator: validatePass2, trigger: 'blur,change' }
        ],
        birthday: [
          { type: 'date', trigger: 'blur' }
        ]
      },
      birthdatPickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        }
      }
    }
  }, 
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          localStorage.setItem("loggedIn", 0)
          localStorage.setItem("fullname", this.registerFormModel.fullname);
          localStorage.setItem("email", this.registerFormModel.email);
          localStorage.setItem("pass", CryptoJS.SHA256(this.registerFormModel.pass));
          localStorage.setItem("birthday", this.registerFormModel.birthday);
          this.$emit('signupSuccess')
          // Do nothing, we don't care                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    alert('submit!');
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
