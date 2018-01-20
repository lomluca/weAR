<template>
  <el-card class="box-card">
    <el-table
    height="500"
    :data="shopcartData">
      <el-table-column
        label="Item">
        <template slot-scope="scope">
          <div class="shopRowWrapper">
            <div class="itemWrapper">
              <img width="70px" height="70px" :src="scope.row.assets[0]" :alt="scope.row.alt" :href="scope.row.href"/>
            </div>
            <div class="itemWrapper">
              <a style="text-decoration: none" :href="scope.row.href"><p class="itemName">{{ scope.row.name }}</p></a>
              <span class="itemDescription">{{ scope.row.color }}, {{ scope.row.size }}</span>
            </div>
          </div>
        </template>
      </el-table-column>
      <el-table-column
        label="Price"
        width="100">
        <template slot-scope="scope">
          <div class="shopRowWrapper">
            <span>{{ scope.row.price }}</span>
            <i>€</i>
          </div>
        </template>
      </el-table-column>
      <el-table-column
        label="Quantity"
        width="150">
        <template slot-scope="scope">
          <div class="shopRowWrapper">
            <el-input-number v-model="quantities[scope.$index]" @change="changeQuantity(scope.$index, $event)" size="mini" controls-position="right" :min="1"></el-input-number>
          </div>
        </template>
      </el-table-column>
      <el-table-column
        label="Remove"
        width="80">
        <template slot-scope="scope">
          <div class="shopRowWrapper">
            <el-popover
            ref="deletePopover"
            placement="top"
            width="auto"
            v-model="deletepopoverVisible">
              <p>Are you sure to delete this?</p>
              <div style="text-align: right; margin: 0">
                <el-button size="mini" @click="deletepopoverVisible = false">cancel</el-button>
                <el-button type="danger" size="mini" @click="deleteCartItem(scope.row)">confirm</el-button>
              </div>
            </el-popover>

            <el-button
            size="mini"
            type="danger"
            icon="el-icon-remove"
            v-popover:deletePopover></el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>

    <transition name="fade">
      <div class="shopCartTableFooter" v-if="loggedIn && shopcartData.length > 0">
        <h1>Total: {{ total.toFixed(2) }}€</h1>
        <el-button style="float: right" type="primary" @click="checkoutClick">Checkout</el-button>
        <el-dialog
          title="Confirm purchase"
          :visible.sync="visible"
          :before-close="handleClose"
          :fullscreen="fullscreenDialog">
          <span>Do you want to confirm your purchases?</span>
          <hr>
          <span>Address</span>
          <wear-address-table :item="selectedAddress"/>
          <hr>
          <span>Card</span>
          <wear-card-table :item="selectedCard"/>
          <hr>
          <span>Total: {{ total }} €</span>
          <span slot="footer" class="dialog-footer">
            <el-button @click="visible = false">Cancel</el-button>
            <el-button type="primary" @click="confirmOrder">Confirm</el-button>
          </span>
        </el-dialog>
      </div>
    </transition>
  </el-card>
</template>

<script>
import WearAddressTable from './AddressTable'
import WearCardTable from './CardTable'

export default {
  name: 'wear-shop-cart',
  props: ['visible', 'selectedAddress', 'selectedCard'],
  data: function() {
    return {
      shopcartData: getShopCart(),
      quantities: [],
      deletepopoverVisible: false,
      fullscreenDialog: (window.innerWidth < 768)
    }
  },
  components: {
    'wear-address-table': WearAddressTable,
    'wear-card-table': WearCardTable
  },
  created: function() {
    //initialize quantities with localStorage content
    //localStorage is not responsive, we need an object defined in the vue instance
    for(var i = 0; i < this.shopcartData.length; i++) {
      this.quantities[i] = this.shopcartData[i].quantity;
    }
  },
  methods: {
    changeQuantity(index, value) {
      changeCartItemQuantity(index, value);
    },
    deleteCartItem(item) {
      this.deletepopoverVisible = false;
      deleteCartItem(item);
      this.shopcartData = getShopCart();
    },
    confirmOrder() {
      //update orders
      putOrder();
      //emit event for the cart icon badge
      lsEvents['shoppingCartInsert']()
      //update cart
      this.shopcartData = getShopCart();

      this.visible = false;
    },
    checkoutClick() {
      if(!getCards().length) {
        this.$message({
          type: 'error',
          message: 'Please insert a Credit Card to proceed to the checkout',
          customClass: 'wear-message'
        });
      }
      else if(!getAddresses().length) {
        this.$message({
          type: 'error',
          message: 'Please insert an Address to proceed to the checkout',
          customClass: 'wear-message'
        });
      }
      else if(!this.selectedCard) {
        this.$message({
          type: 'error',
          message: 'Please select a card to proceed to the checkout',
          customClass: 'wear-message'
        });
      }
      else if(!this.selectedAddress) {
        this.$message({
          type: 'error',
          message: 'Please select an address to proceed to the checkout',
          customClass: 'wear-message'
        });
      }
      else {
        this.visible = true;
      }
    }
  },
  computed: {
    total: function() {
      var total;
      for(var i = 0, total = 0; i < this.shopcartData.length; i++) {
        total += this.shopcartData[i].price*this.quantities[i];
      }
      return total;
    },
    loggedIn: function() {
      if(localStorage.loggedIn == 1)
        return true;
      else return false;
    }
  },
  mounted() {
    let that = this
    this.$nextTick(function() {
      window.addEventListener('resize', function(e) {
        that.fullscreenDialog = (window.innerWidth < 768)
      });
    })
  }
}
</script>

<style>
.shopRowWrapper {
  float: left;
}
.shopRowWrapper .itemWrapper {
  display: inline-block;
  height: 100%;
  text-align: left;
}
.shopRowWrapper .itemWrapper .itemName {
  font-size: 22px;
  text-align: left;
}
.shopRowWrapper .itemWrapper .itemDescription {
  font-size: 16px;
  text-align: left;
}
.shopCartTableFooter {
  float: right;
  margin-bottom: 10px;
}

/* animation on checkout button */
.fade-leave-active {
  transition: opacity .5s;
}
.fade-leave-to {
  opacity: 0;
}

.wear-message {
  z-index: 999999 !important;
}
</style>
