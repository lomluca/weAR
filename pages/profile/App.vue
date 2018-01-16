<template>
<el-container direction="vertical">
  <!-- Header -->
  <wear-header />


  <!-- Main content -->
  <el-main>
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
        </div>
      </el-col>
      <el-col :sm="16">
        <div class="box">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="Credit cards" name="first">
              <template v-for="(card, index) in cards">
                <el-button style="float: right;position: relative;top: 50px;" type="primary" icon="el-icon-delete" @click="deleteCard(index)"></el-button>
                <wear-card-table :item="card"/>
              </template>
              <el-button type="primary" @click="cardDialogFormVisible = true" icon="el-icon-circle-plus">Add</el-button>
              <!-- credit card dialog -->
              <wear-card-form :visible.sync="cardDialogFormVisible"/>
            </el-tab-pane>
            <el-tab-pane label="Addresses" name="second">
              <template v-for="(address, index) in addresses">
                <el-button style="float: right;position: relative;top: 50px;" type="primary" icon="el-icon-delete" @click="deleteAddress(index)"></el-button>
                <wear-address-table :item="address"/>
              </template>
              <el-button type="primary" @click="addressDialogFormVisible = true" icon="el-icon-circle-plus">Add</el-button>
              <!-- address dialog -->
              <wear-address-form :visible.sync="addressDialogFormVisible"/>
            </el-tab-pane>
          </el-tabs>


        </div>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :xs="24">
        <div class="box">
          <p class="block-title">ORDERS</p>
          <past-order-table></past-order-table>
        </div>
      </el-col>
    </el-row>
  </el-main>

  <!-- Footer -->
  <wear-footer />
</el-container>
</template>

<script>
import WearHeader from '../../components/Header'
import WearFooter from '../../components/Footer'
import WearAddressForm from '../../components/AddressForm'
import WearCardForm from '../../components/CreditCardForm'
import PastOrderTable from '../../components/PastOrderTable'
import AddressTable from '../../components/AddressTable'
import CardTable from '../../components/CardTable'

export default {
  name: 'app',
  data () {
    return {
      fullname: localStorage.fullname,
      mail: localStorage.email,
      activeName: 'first',
      addressDialogFormVisible: false,
      cardDialogFormVisible: false,
      cards: JSON.parse(localStorage.cards),
      addresses: JSON.parse(localStorage.addresses),
      updateFullname: false,
    }
  },
  computed: {
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
    'wear-card-form': WearCardForm,
    'past-order-table': PastOrderTable,
    'wear-address-table': AddressTable,
    'wear-card-table': CardTable
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

  .el-main {
    overflow: initial;
    height: auto;
    background-color: white;
  }

  .block-title {
    font-size: 24px;
    font-style: normal;
    font-variant: normal;
    font-weight: 400;
    line-height: 26px;
  }

  .box {
    background-color: white;
    padding: 10px;
    margin: 5px;
    min-height: 36px;
    border: 1px solid;
    border-color: rgb(202, 200, 204);
    box-shadow: 0 4px 5px 1px rgb(193, 186, 196)
  }

</style>
