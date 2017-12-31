<template>
  <el-container>
    <!-- Header -->
    <el-header height="auto">
      <wear-header />
    </el-header>

    <!-- Main content -->
    <el-main>
      <wear-address-form :visible.sync="addressDialogFormVisible"/>
      <wear-card-form :visible.sync="cardDialogFormVisible"/>
      
      <template v-if="!isCollapsed">
        <!-- LEFT WRAPPER -->
        <div class="cartLeftWrapper">
          <wear-shop-cart :visible.sync="confirmDialogVisible"/>
        </div>

        <!-- RIGHT WRAPPER -->
        <div class="cartRightWrapper">
          <template v-if="loggedIn">
            <!-- address box -->
            <wear-info-box headerTitle="Delivery Address" :getContent="getAddresses" :deleteItem="deleteAddress" :visible.sync="addressDialogFormVisible" :innerTable="addressTable"/>
            
            <!-- credit card box -->
            <wear-info-box headerTitle="Credit Card" :getContent="getCards" :deleteItem="deleteCard" :visible.sync="cardDialogFormVisible" :innerTable="cardTable"/>
            
          </template>
          <template v-else>
            <el-card class="box-card">
              <div class="box-card-body">
                <h1>Please log-in to select your informations</h1>
              <div>
            </el-card>
          </template>
        </div>
      </template>

      <template v-else>
        <el-tabs type="card">
          <el-tab-pane label="ShopCart">
            <wear-shop-cart :visible.sync="confirmDialogVisible"/>
          </el-tab-pane>
          <el-tab-pane label="Address">
            <wear-info-box headerTitle="Delivery Address" :getContent="getAddresses" :deleteItem="deleteAddress" :visible.sync="addressDialogFormVisible" :innerTable="addressTable"/>
          </el-tab-pane>
          <el-tab-pane label="Credit Card">
            <wear-info-box headerTitle="Credit Card" :getContent="getCards" :deleteItem="deleteCard" :visible.sync="cardDialogFormVisible" :innerTable="cardTable"/>
          </el-tab-pane>
        </el-tabs>
      </template>
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
import WearShopCart from '../../components/ShopCartTable'
import WearCardForm from '../../components/CreditCardForm'
import WearAddressForm from '../../components/AddressForm'
import WearInfoCard from '../../components/InfoCard'
import WearAddressTable from '../../components/AddressTable'
import WearCardTable from '../../components/CardTable'

export default {
  name: 'app',
  data: function() {
    return {
      confirmDialogVisible: false,
      addressDialogFormVisible: false,
      cardDialogFormVisible: false,
      addressTable: WearAddressTable,
      cardTable: WearCardTable,
      windowWidth: window.innerWidth,
      isCollapsed: (window.innerWidth < 768)
    }
  },
  components: {
    'wear-header': WearHeader,
    'wear-footer': WearFooter,
    'wear-shop-cart': WearShopCart,
    'wear-card-form': WearCardForm,
    'wear-address-form': WearAddressForm,
    'wear-info-box': WearInfoCard,
    WearAddressTable,
    WearCardTable
  },
  methods: {
    //those methods are necessary for the InfoBox components
    getAddresses() {
      return getAddresses();
    },
    getCards() {
      return getCards();
    },
    deleteCard(index) {
      deleteCard(index);
    },
    deleteAddress(index) {
      deleteAddress(index);
    }
  },
  computed: {
    loggedIn: function() {
      if(localStorage.loggedIn == 1)
        return true;
      else return false;
    }
  },
  watch: {
    windowWidth(newWidth, oldWidth) {
      this.isCollapsed = (newWidth < 768);
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
  background-color: white
}

/* left Wrapper */
.cartLeftWrapper {
  width: 70%;
  display: inline-block;
  height: auto;
  float: left
}
/* Right Wrapper */
.cartRightWrapper {
  display: inline-block;
  width: 30%;
}
/* Info box */
.box-card {
  margin: 0 15px 15px 15px;
}


</style>
