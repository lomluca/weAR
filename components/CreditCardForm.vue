<template>
  <el-dialog title="Add a credit card" :visible.sync="visible">
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
      <el-button @click="visible = false">Cancel</el-button>
      <el-button type="primary" @click="submitCCForm('creditCardFormModel')">Confirm</el-button>
    </span>
  </el-dialog>
</template>


<script>
var payform = require('payform');
var zeroFill = require('zero-fill')

export default {
  name: 'wear-card-form',
  props: ['visible'],
  data () {
    var validateCreditCard = (rule, value, callback) => {
      if( payform.validateCardNumber(value) ) {
        callback()
      } else {
        callback(new Error('Invalid credit card number'))
      }
    }
    return {
      creditCardForm: {
        owner: "",
        cardNumber: "",
        expirationDate: ""
      },
      formLabelWidth: '120px',
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
      }
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
    submitCCForm: function(formName) {
      this.$refs[formName].validate((valid) => {
        if(valid) {
          var cards = JSON.parse(localStorage.cards)
          var newCard = this.creditCardForm
          newCard.expirationDate = newCard.expirationDate.getFullYear() + '-' + zeroFill(2, newCard.expirationDate.getMonth() + 1)
          cards.push(newCard)
          localStorage.setItem("cards", JSON.stringify(cards))
          this.cards = cards
          this.visible = false
        } else {
          console.log("error submit!");
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
    }
  }
}
</script>
