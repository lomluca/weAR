<template>
  <el-container>
    <!-- Header -->
    <el-header height="auto">
      <wear-header />
    </el-header>

    <!-- Main content -->
    <el-main>
      <div class="cartLeftWrapper">
        <el-table
          :data="shopcartData">
          <el-table-column
            label="Item">
            <template slot-scope="scope">
              <div class="shopRowWrapper">
                <img width="70px" height="70px" :src="scope.row.asset" :alt="scope.row.alt" :href="scope.row.href"/>
                <span style="margin-left: 10px">{{ scope.row.name }}</span>
              </div>
            </template>
          </el-table-column>
          <el-table-column
            label="Price">
            <template slot-scope="scope">
              <div class="shopRowWrapper">
                <span>{{ scope.row.price }}</span>
                <i>€</i>
              </div>
            </template>
          </el-table-column>
          <el-table-column
            label="Quantity">
            <template slot-scope="scope">
              <div class="shopRowWrapper">
                <el-input-number v-model="scope.row.quantity" size="mini" controls-position="right" @change="changeQuantity(scope.row.id, $event)" :min="0"></el-input-number>
              </div>
            </template>
          </el-table-column>
        </el-table>
        <div class="shopCartTableFooter">
          <h1>Total: {{ total }}€</h1>
          <el-button @click="checkoutClick">Checkout</el-button>
          <el-dialog
            title="Confirm purchase"
            :visible.sync="confirmDialog"
            width="30%"
            :before-close="handleClose">
            <span>Do you want to confirm your purchases?</span>
            <span slot="footer" class="dialog-footer">
              <el-button @click="confirmDialog = false">Cancel</el-button>
              <el-button type="primary" @click="confirmDialog = false">Confirm</el-button>
            </span>
          </el-dialog>
        </div>
      </div>

      <div class="cartRightWrapper">
        <template v-if="loggedIn">
          <wear-info-box _headerContent="Delivery Address" :_bodyContent="address"/>
          <wear-info-box _headerContent="Credit Card" :_bodyContent="creditcard"/>
        </template>
        <template v-else>
          <el-card class="box-card">
            <div class="box-card-body">
              <h1>Please log-in to select your informations</h1>
            <div>
          </el-card>
        </template>
      </div>
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
import WearInfoBox from '../../components/InfoBox'

export default {
  name: 'app',
  data: function() {
    return {
      shopcartData: getShopCart(),
      address: getAddresses(), //to be changed, it should be already an array
      creditcard: getCards(),
      confirmDialog: false
    }
  },
  components: {
    'wear-header': WearHeader,
    'wear-footer': WearFooter,
    'wear-info-box': WearInfoBox
  },
  methods: {
    changeQuantity(id, value) {
      console.log(id + " " + value)
    },
    checkoutClick() {
      if(this.loggedIn) {
        this.confirmDialog = true
      }
      else {
        this.$message('Please log-in');
      }
    }
  },
  computed: {
    total: function() {
      var total, i;
      for(i = 0, total = 0; i < this.shopcartData.length; i++) {
        total += this.shopcartData[i].price*this.shopcartData[i].quantity;
      }
      return total;
    },
    loggedIn: function() {
      if(localStorage.loggedIn == 1)
        return true;
      else return false;
    }
  }
}
</script>

<style>
/* general layout */
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
  box-sizing: content-box;
  padding: 10px;
  height: auto;
}

/* left Wrapper */
.el-main .cartLeftWrapper {
  width: 70%;
  display: inline-block;
  height: auto;
  float: left
}
.el-main .cartLeftWrapper .shopRowWrapper {
  float: left;
}
.el-main .shopCartTableFooter {
  float: right;
}

/* Right Wrapper */
.el-main .cartRightWrapper {
  display: inline-block;
  width: 30%;
}
/* Info box */
.el-main .cartRightWrapper .box-card {
  margin: 0 15px 15px 15px;
}
.el-main .cartRightWrapper .box-card .el-radio-group {
  width: 100%;
}
.el-main .cartRightWrapper .box-card .el-radio-group .el-radio {
  float: left;
}
.el-main .cartRightWrapper .box-card .el-button {
  float: right;
}


</style>
