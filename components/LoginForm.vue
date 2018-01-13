<template>
<el-dialog title="Login" :visible.sync="visible" :fullscreen="fullscreenDialog">
  <el-form :model="loginFormModel" status-icon :rules="loginFormRules" ref="loginFormModel" :label-position="labelPosition">
    <el-form-item label="Email" prop="email">
      <el-input type="email" v-model="loginFormModel.email" auto-complete="off"></el-input>
    </el-form-item> 

    <el-form-item label="Password" prop="pass">
      <el-input type="password" v-model="loginFormModel.pass" auto-complete="off"></el-input>
    </el-form-item>
   
    <span slot="footer" class="dialog-footer">
      <el-button type="primary" @click="submitForm('loginFormModel')">Submit</el-button>
    </span>
  </el-form>
</el-dialog>
</template>

<script>
import * as CryptoJS from 'crypto-js'

export default {
  name: 'wear-login-form',
  props: ['visible'],
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
      fullscreenDialog: (window.innerWidth < 768),
      labelPosition: (window.innerWidth < 768) ? "top" : "right",
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
  watch: {
    visible: function() {
      // When the internal value changes, we $emit an event
      // v-model will automatically update the parent value
      this.$emit('update:visible', this.visible);
    },
    windowWidth(newWidth, oldWidth) {
      this.labelPosition = (newWidth < 768) ? "top" : "right";
      this.fullscreenDialog = (newWidth < 768);
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
  },
  mounted() {
    let that = this;
    this.$nextTick(function() {
      window.addEventListener('resize', function(e) {
        that.windowWidth = window.innerWidth;
      });
    })
  },
}
</script>

<style>

</style>
