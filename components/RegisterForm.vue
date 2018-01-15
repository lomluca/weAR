<template>
<el-dialog title="Signup" :visible.sync="visible" :fullscreen="fullscreenDialog">
  <el-form :model="registerFormModel" :rules="registerFormRules" ref="registerFormModel" :label-position="labelPosition">
    <el-form-item label="Fullname" prop="fullname">
      <el-input @keyup.enter.native="submitForm('registerFormModel')" type="text" v-model="registerFormModel.fullname" auto-complete="off"></el-input>
    </el-form-item>
   
    <el-form-item label="Email" prop="email">
      <el-input @keyup.enter.native="submitForm('registerFormModel')" type="email" v-model="registerFormModel.email" auto-complete="off"></el-input>
    </el-form-item> 

    <el-form-item label="Password" prop="pass">
      <el-input @keyup.enter.native="submitForm('registerFormModel')" type="password" v-model="registerFormModel.pass" auto-complete="off"></el-input>
    </el-form-item>
    
    <el-form-item label="Confirm" prop="checkPass">
      <el-input @keyup.enter.native="submitForm('registerFormModel')" type="password" v-model="registerFormModel.checkPass" auto-complete="off"></el-input>
    </el-form-item>

    <el-form-item label="Birthday" prop="birthday">
      <el-date-picker type="date" v-model="registerFormModel.birthday" :picker-options="birthdatPickerOptions" style="width:100%"></el-date-picker>
    </el-form-item>
  </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button style="color:white" type="primary" @click="submitForm('registerFormModel')">Submit</el-button>
      <el-button @click="resetForm('registerFormModel')">Reset</el-button>
    </span>
  
</el-dialog>
</template>

<script>
import * as CryptoJS from 'crypto-js'

export default {
  name: 'wear-signup-form',
  props: ['visible'],
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
      windowWidth: window.innerWidth,
      fullscreenDialog: (window.innerWidth < 768),
      labelPosition: (window.innerWidth < 768) ? "top" : "right",
      registerFormModel: {
        fullname: '',
        email: '',
        email: '',
        pass: '',
        checkPass: '',
        birthday: null,
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
          localStorage.setItem("loggedIn", 0)
          localStorage.setItem("fullname", this.registerFormModel.fullname);
          localStorage.setItem("email", this.registerFormModel.email);
          localStorage.setItem("pass", CryptoJS.SHA256(this.registerFormModel.pass));
          localStorage.setItem("birthday", this.registerFormModel.birthday);
          var emptyArray = []
          localStorage.setItem("cards", JSON.stringify(emptyArray))
          localStorage.setItem("addresses", JSON.stringify(emptyArray))
          this.$message({
            message: 'Signup completed!',
            type: 'success'
          });
          this.visible = false
          // Do nothing, we don't care alert('submit!');
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
  }
}
</script>

<style>

</style>
