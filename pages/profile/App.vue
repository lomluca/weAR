<template>
<el-container>
  <!-- Header -->
  <el-header height="auto">
    <wear-header />
  </el-header>


  <!-- Main content -->
  <el-main style="overflow: initial">
    <el-row :gutter="10">
      <el-col :sm="8">
        <div class="box">
          <img class="small" src="/assets/widget-personal-info1.png">
          <!--<img class="profile-img":src="sourceImg" v-if="showImg"></img>
          <input type="file" accept="image/*"@change="changePic($event)"></input>-->
          <ul class="list-info">
            <li><span class="ligth-text">fullname</span> <span class="bold-text">{{ fullname }}</span></li>
            <li><span class="ligth-text">email</span> <span class="bold-text">{{ mail }}</span></li>
            <li><span class="ligth-text">birthday</span> <span class="bold-text">{{ birthday }}</span></li>
            <li><span class="ligth-text">address</span> <span class="bold-text">{{ address }}</span></li>
          </ul>
          <el-button type="primary" @click="showDialogForm()">Edit</el-button>
          <el-dialog title="Edit your personal info" :visible.sync="dialogFormVisible">
            <el-form :model="form" :rules="editFormRules" ref="editFormModel">
              <el-form-item label="fullname" :label-width="formLabelWidth" prop="fullname">
                <el-input v-model="form.fullname" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="email" :label-width="formLabelWidth" prop="email">
                <el-input type="email" v-model="form.email" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="birthday" :label-width="formLabelWidth" prop="birthday">
                <el-date-picker type="date" v-model="form.birthday" :picker-options="birthdatPickerOptions" style="width:100%"></el-date-picker>
              </el-form-item>
              <el-form-item label="address" :label-width="formLabelWidth" prop="address">
                <el-input v-model="form.address" auto-complete="off"></el-input>
              </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">Cancel</el-button>
              <el-button type="primary" @click="submitForm('editFormModel')">Confirm</el-button>
            </span>
          </el-dialog>
        </div>
      </el-col>
      <el-col :sm="16">
        <div class="box">
          <img class="small" src="/assets/credit-card-logo.png">
          <el-button type="primary" @click="dialogCreditCardFormVisible = true">{{ creditCardButtonMessage }}</el-button>
          <el-dialog title="Credit card info" :visible.sync="dialogCreditCardFormVisible">
            <el-form :model="creditCardForm" :rules="creditCardFormRules" ref="creditCardFormModel">
              <el-form-item label="owner" :label-width="formLabelWidth" prop="owner">
                <el-input v-model="creditCardForm.owner" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="number" :label-width="formLabelWidth" prop="cardNumber" style="float: left">
                <el-input v-model="creditCardForm.cardNumber" auto-complete="off"></el-input>
              </el-form-item>
              <img class="credit-card" 
                   src="/assets/visa.png" 
                   v-if="isVisa()"
                   style="position: relative;top: 7px;">
              <img class="credit-card" 
                   src="/assets/mastercard.png" 
                   v-if="isMastercard()"
                   style="position: relative;top: 7px;">
              <el-form-item label="Expiration date" :label-width="formLabelWidth" prop="expirationDate" style="clear: left">
                <el-date-picker
                  v-model="creditCardForm.expirationDate"
                  type="month"
                  placeholder="Pick a month"
                  style="width:100%">
                </el-date-picker>
              </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
              <el-button @click="dialogCreditCardFormVisible = false">Cancel</el-button>
              <el-button type="primary" @click="dialogCreditCardFormVisible = false">Confirm</el-button>
            </span>
          </el-dialog>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :xs="24">
        <div class="box">
          <p class="block-title">ORDERS</p>
        </div>
      </el-col>
    </el-row>
  </el-main>

  <!-- Footer -->
  <el-footer height="auto">
    <wear-footer />
  </el-footer>
</el-container>
</template>

<script>
import WearHeader from '../../components/Header'
import WearFooter from '../../components/Footer'

var payform = require('payform');

export default {
  name: 'app',
  data () {
    var validateCreditCard = (rule, value, callback) => {
      if( payform.validateCardNumber(value) ) {
        callback()
      } else {
        callback(new Error('Invalid credit card number'))
      }
    }
    return {
      dialogFormVisible: false,
      dialogCreditCardFormVisible: false,
      updateFullname: false,
      form: {
          fullname: "",
          email: "",
          birthday: "",
          address: ""
      },
      creditCardForm: {
        owner: "",
        cardNumber: "",
        expirationDate: ""
      },
      formLabelWidth: '120px',
      editFormRules: {
        fullname: [
          { required: true, message: 'Please enter your fullname', trigger: 'blur' }
        ],
        email: [
          { type: 'email', required: true, message: 'Please input correct email address', trigger: 'blur,change' }
        ],
        birthday: [
          { type: 'date', trigger: 'blur' }
        ]
      },
      creditCardFormRules: {
        owner: [
          { required: true, message: 'Please enter the owner', trigger: 'blur' }
        ],
        cardNumber: [
          { required: true, validator: validateCreditCard, trigger: 'blur,change' }
        ],
        expirationDate: [
          { type: 'date', required: true, trigger: 'blur' }
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
    },
    creditCardButtonMessage: function() {
      if(localStorage.creditCard) {
        return "Edit"
      }
      return "Add"
    }
  },
  components: {
    'wear-header': WearHeader,
    'wear-footer': WearFooter
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          localStorage.setItem("fullname", this.form.fullname);
          localStorage.setItem("email", this.form.email);
          localStorage.setItem("birthday", this.form.birthday);
          localStorage.setItem("address", this.form.address);
          this.dialogFormVisible = false
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    isVisa: function() {
      if(payform.parseCardType(this.creditCardForm.cardNumber) == 'visa') {
        return true;
      }
      return false;
    },
    isMastercard: function() {
      if(payform.parseCardType(this.creditCardForm.cardNumber) == 'mastercard') {
        return true;
      }
      return false;
    },
    showDialogForm: function() {
      this.form.fullname = this.fullname
      this.form.birthday = new Date(this.birthday)
      this.form.address = this.address
      this.form.email = this.mail
      this.dialogFormVisible = true
    }
  },
  beforeMount() {
    if(localStorage.loggedIn != 1) {
      window.location.href = 'index.html'
    }
  }
}
</script>

<style>
  img.credit-card {
    width: 55px;
    height: 30px;
  }
  img.small {
    width: 75px;
    height: 75px;
    display: block;
    margin: auto;
  }
  .el-header{
    box-sizing: content-box;
    padding: 0px;
  }
  .el-footer{
    box-sizing: content-box;
    padding: 0px;
  }

  ul.list-info {
    list-style-type: none;
    text-align: left;
  }

  span.light-text {
    font-family: "Helvetica Neue";
    font-size: 14px;
    font-style: italic;
    font-variant: normal;
    font-weight: 400;
    line-height: 20px;
  }

  .block-title {
    font-family: "Helvetica Neue";
    font-size: 24px;
    font-style: normal;
    font-variant: normal;
    font-weight: 400;
    line-height: 26px;
  }

  span.bold-text {
    font-family: "Helvetica Neue";
    font-size: 14px;
    font-style: normal;
    font-variant: normal;
    font-weight: 500;
    line-height: 15px;
  }

  .box {
    background-color: whitesmoke;
    padding: 10px;
    margin: 5px;
    min-height: 36px;
    border: 1px solid;
    border-color: rgb(202, 200, 204);
    box-shadow: 0 4px 5px 1px rgb(193, 186, 196)
  }

</style>
