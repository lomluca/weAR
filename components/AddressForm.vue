<template>
  <el-dialog title="Add a new address" :visible.sync="visible" :fullscreen="fullscreenDialog">
    <el-form :model="form" :rules="editFormRules" ref="editFormModel"
             :label-position="labelPosition">

      <el-form-item @keyup.enter.native="submitForm('editFormModel')" label="street" :label-width="formLabelWidth" prop="street">
        <el-input v-model="form.street" auto-complete="off"></el-input>
      </el-form-item>

      <el-form-item label="city" :label-width="formLabelWidth" prop="city">
        <el-input @keyup.enter.native="submitForm('editFormModel')" v-model="form.city" auto-complete="off"></el-input>
      </el-form-item>

      <el-form-item label="zip code" :label-width="formLabelWidth" prop="zipCode">
        <el-input @keyup.enter.native="submitForm('editFormModel')" v-model="form.zipCode" auto-complete="off"></el-input>
      </el-form-item>

      <el-form-item label="country" :label-width="formLabelWidth" prop="country">
        <el-input @keyup.enter.native="submitForm('editFormModel')" v-model="form.country" auto-complete="off"></el-input>
      </el-form-item>
    </el-form>

    <span slot="footer" class="dialog-footer">
    <el-row :gutter="10">
      <el-col :md="8" style="margin-bottom: 10px">
        <el-button type="primary" 
                 icon="el-icon-location-outline"
                 @click="getMyCurrentPosition()"
                 :loading="loadingPosition">My current location</el-button>
      </el-col>
      <el-col :md="8" style="margin-bottom: 10px">
        <el-button @click="visible = false">Cancel</el-button>
      </el-col>
      <el-col :md="8" style="margin-bottom: 10px">
        <el-button type="success" @click="submitForm('editFormModel')">Confirm</el-button>
      </el-col>
      
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
      loadingPosition: false,
      windowWidth: window.innerWidth,
      formLabelWidth: '120px',
      labelPosition: (window.innerWidth < 768) ? "top" : "right",
      fullscreenDialog: (window.innerWidth < 768),
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
      },
      geoAddress: {street: '', city: '', province: '', zip: '', country: ''}
    }
  },
  watch: {
    visible: function() {
      // When the internal value changes, we $emit an event
      // v-model will automatically update the parent value
      this.$emit('update:visible', this.visible);
    },
    geoAddress: function(response) {
      this.loadingPosition = false
      this.form.street = response.street;
      this.form.city = response.city + ", " + response.province;
      this.form.zipCode = response.zip;
      this.form.country = response.country
    },
    windowWidth(newWidth, oldWidth) {
      this.labelPosition = (newWidth < 768) ? "top" : "right";
      this.fullscreenDialog = (newWidth < 768);
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
  methods: {
    getMyCurrentPosition: function() {
      this.loadingPosition = true;
      getGeoAddress(this);
    },
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
