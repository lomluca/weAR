<template>
  <el-container>
    <!-- Header -->
    <el-header height="auto">
      <wear-header />
    </el-header>

    <!-- Main content -->
    <el-main style="padding-left:0;padding-right:0">
      <wear-address-form :visible.sync="addressDialogFormVisible"/>
      <wear-card-form :visible.sync="cardDialogFormVisible"/>

      <template v-if="!isCollapsed">
        <el-row :gutter="10">
          <!-- LEFT WRAPPER -->
          <el-col :span="16">
            <div class="grid-content">
              <wear-shop-cart class="box-card" :visible.sync="confirmDialogVisible"/>
            </div>
          </el-col>

          <!-- RIGHT WRAPPER -->
          <el-col :span="8">
            <div class="grid-content">
              <template v-if="loggedIn">
                <!-- address box -->
                <wear-info-box class="box-card" headerTitle="Delivery Address" :getContent="getAddresses" :deleteItem="deleteAddress" :visible.sync="addressDialogFormVisible" :innerTable="addressTable"/>

                <!-- credit card box -->
                <wear-info-box class="box-card" headerTitle="Credit Card" :getContent="getCards" :deleteItem="deleteCard" :visible.sync="cardDialogFormVisible" :innerTable="cardTable"/>

              </template>
              <template v-else>
                <el-card>
                  <div class="box-card-body">
                    <h1>Please log-in to select your informations</h1>
                  <div>
                </el-card>
              </template>
            </div>
          </el-col>
        </el-row>
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

footer div {
  margin-right: 0px;
}

.el-main {
  overflow: initial;
  padding: 10px 0px;
  height: auto;
}

.el-row {
  padding: 0 10px 0 10px;
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}

.el-col {
  border-radius: 4px;
}

</style>
