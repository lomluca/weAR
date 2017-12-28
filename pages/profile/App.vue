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
          </ul>
          <!--
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
          -->
        </div>
      </el-col>
      <el-col :sm="16">
        <div class="box">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="Credit cards" name="first">
              <template v-for="(card, index) in cards">
                <el-button style="float: right;position: relative;top: 50px;" type="primary" icon="el-icon-delete" @click="deleteCard(index)"></el-button>
                <ul class="list-info">
                  <li><span class="ligth-text">owner</span> <span class="bold-text">{{ card.owner }}</span></li>
                  <li><span class="ligth-text">number</span> <span class="bold-text">{{ card.cardNumber }}</span></li>
                  <li><span class="ligth-text">expiration</span> <span class="bold-text">{{ card.expirationDate }}</span></li>
                </ul>
              </template>
              <el-button type="primary" @click="showCCDialogForm()">Add</el-button>
              <el-dialog title="Add a credit card" :visible.sync="dialogCreditCardFormVisible">
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
                  <el-button type="primary" @click="submitCCForm('creditCardFormModel')">Confirm</el-button>
                </span>
              </el-dialog>
            </el-tab-pane>
            <el-tab-pane label="Addresses" name="second">
              <template v-for="(address, index) in addresses">
                <el-button style="float: right;position: relative;top: 50px;" type="primary" icon="el-icon-delete" @click="deleteAddress(index)"></el-button>
                <ul class="list-info">
                  <li><span class="ligth-text">street</span> <span class="bold-text">{{ address.street }}</span></li>
                  <li><span class="ligth-text">number</span> <span class="bold-text">{{ address.city }}</span></li>
                  <li><span class="ligth-text">zip code</span> <span class="bold-text">{{ address.zipCode }}</span></li>
                  <li><span class="ligth-text">country</span> <span class="bold-text">{{ address.country }}</span></li>
                </ul>
              </template>
              <el-button type="primary" @click="showDialogForm()">Add</el-button>
              <el-dialog title="Add a new address" :visible.sync="dialogFormVisible">
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
                  <el-button @click="dialogFormVisible = false">Cancel</el-button>
                  <el-button type="primary" @click="submitForm('editFormModel')">Confirm</el-button>
                </span>
              </el-dialog>
            </el-tab-pane>
          </el-tabs>
          <!--<img class="small" src="/assets/credit-card-logo.png">-->
          
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
var zeroFill = require('zero-fill')

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
      activeName: 'first',
      dialogFormVisible: false,
      dialogCreditCardFormVisible: false,
      cards: JSON.parse(localStorage.cards),
      addresses: JSON.parse(localStorage.addresses),
      updateFullname: false,
      form: {
          street: "",
          city: "",
          zipCode: "",
          country: ""
      },
      creditCardForm: {
        owner: "",
        cardNumber: "",
        expirationDate: ""
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
    }
  },
  components: {
    'wear-header': WearHeader,
    'wear-footer': WearFooter
  },
  methods: {
    handleClick(tab, event) {
        console.log(tab, event);
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          var addresses = JSON.parse(localStorage.addresses)
          addresses.push(this.form)
          localStorage.setItem("addresses", JSON.stringify(addresses))
          this.addresses = addresses
          this.dialogFormVisible = false
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    submitCCForm: function(formName) {
      this.$refs[formName].validate((valid) => {
        if(valid) {
          var cards = JSON.parse(localStorage.cards)
          var newCard = this.creditCardForm
          newCard.expirationDate = newCard.expirationDate.getFullYear() + '-' + zeroFill(2, newCard.expirationDate.getMonth() + 1)
          cards.push(newCard)
          localStorage.setItem("cards", JSON.stringify(cards))
          this.cards = cards
          this.dialogCreditCardFormVisible = false
        } else {
          console.log("error submit!");
          return false;
        }
      });
    },
    deleteCard: function(index) {
      var cards = JSON.parse(localStorage.cards)
      cards.splice(index, 1)
      localStorage.setItem("cards", JSON.stringify(cards))
      this.cards = cards
    },
    deleteAddress: function(index) {
      var addresses = JSON.parse(localStorage.addresses)
      addresses.splice(index, 1)
      localStorage.setItem("addresses", JSON.stringify(addresses))
      this.addresses = addresses
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
      this.form.street = ""
      this.form.zipCode = ""
      this.form.country = ""
      this.form.city = ""
      this.dialogFormVisible = true
    },
    showCCDialogForm: function() {
      this.creditCardForm.owner = ""
      this.creditCardForm.expirationDate = ""
      this.creditCardForm.cardNumber = ""
      this.dialogCreditCardFormVisible = true
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
