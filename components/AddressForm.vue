<template>
  <el-dialog title="Add a new address" :visible.sync="visible">
    <el-form :model="form" :rules="editFormRules" ref="editFormModel">
      <el-form-item label="street" :label-width="formLabelWidth" prop="street">
        <el-input v-model="form.street" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="city" :label-width="formLabelWidth" prop="city">
        <el-input v-model="form.city" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="zip code" :label-width="formLabelWidth" prop="zipCode">
        <el-input v-model="form.zipCode" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="country" :label-width="formLabelWidth" prop="country">
        <el-input v-model="form.country" auto-complete="off"></el-input>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="visible = false">Cancel</el-button>
      <el-button type="primary" @click="submitForm('editFormModel')">Confirm</el-button>
    </span>
  </el-dialog>
</template>


<script>
export default {
  name: 'wear-address-form',
  props: ['visible'],
  data () {
    return {
      form: {
          street: "",
          city: "",
          zipCode: "",
          country: ""
      },
      formLabelWidth: '120px',
      editFormRules: {
        street: [
          { required: true, message: 'Please enter the street address', trigger: 'blur' }
        ],
        city: [
          { required: true, message: 'Please enter the city', trigger: 'blur' }
        ],
        zipCode: [
          { required: true, message: 'Please enter the zip code', trigger: 'blur' }
        ],
        country: [
          { required: true, message: 'Please enter the country', trigger: 'blur' }
        ]
      },
      birthdatPickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        }
      }
    }
  },
  computed: {
    address: function() {
      if (this.dialogFormVisible == false) {
        return localStorage.address
      } else return localStorage.address
    },
    fullname: function() {
      if (this.dialogFormVisible == false) {
        return localStorage.fullname
      } else return localStorage.fullname
    },
    mail: function() {
      if (this.dialogFormVisible == false) {
        return localStorage.email
      } else return localStorage.email
    },
    birthday: function() {
      var fieldsBirthday = localStorage.birthday.split(" ");
      fieldsBirthday.splice(4, 3) //remove time, gmt and cet
      fieldsBirthday.splice(0, 1) //remove day name
      var newBirthday = fieldsBirthday.join(" ")
      if (this.dialogFormVisible == false) {
        return newBirthday
      } else return newBirthday
    }
  },
  watch: {
    visible: function() {
      // When the internal value changes, we $emit an event
      // v-model will automatically update the parent value
      this.$emit('update:visible', this.visible);
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          var addresses = JSON.parse(localStorage.addresses)
          addresses.push(this.form)
          localStorage.setItem("addresses", JSON.stringify(addresses))
          this.addresses = addresses
          this.visible = false
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    }
  }
}
</script>
