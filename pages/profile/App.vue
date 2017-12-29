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
              <el-button type="primary" @click="cardDialogFormVisible = true">Add</el-button>
              <!-- credit card dialog -->
              <wear-card-form :visible.sync="cardDialogFormVisible"/>
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
              <el-button type="primary" @click="addressDialogFormVisible = true">Add</el-button>
              <!-- address dialog -->
              <wear-address-form :visible.sync="addressDialogFormVisible"/>
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
import WearAddressForm from '../../components/AddressForm'
import WearCardForm from '../../components/CreditCardForm'

export default {
  name: 'app',
  data () {
    return {
      activeName: 'first',
      addressDialogFormVisible: false,
      cardDialogFormVisible: false,
      cards: JSON.parse(localStorage.cards),
      addresses: JSON.parse(localStorage.addresses),
      updateFullname: false,
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
    'wear-footer': WearFooter,
    'wear-address-form': WearAddressForm,
    'wear-card-form': WearCardForm
  },
  watch: {
    addressDialogFormVisible: function() {
      if(!this.addressDialogFormVisible)
        this.addresses = JSON.parse(localStorage.addresses);
    },
    cardDialogFormVisible: function() {
      if(!this.cardDialogFormVisible)
        this.cards = JSON.parse(localStorage.cards);
    }
  },
  methods: {
    handleClick(tab, event) {
        console.log(tab, event);
    },
    deleteCard(index) {
      deleteCard(index);
      this.cards = getCards();
    },
    deleteAddress(index) {
      deleteAddress(index);
      this.addresses = getAddresses();
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
