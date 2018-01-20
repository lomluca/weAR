<template>
  <el-container direction="vertical">
    <!-- Header -->
    <wear-header />

    <!-- Main content -->
    <el-main style="padding-left:0;padding-right:0">
      <wear-address-form :visible.sync="addressDialogFormVisible"/>
      <wear-card-form :visible.sync="cardDialogFormVisible"/>

      <template v-if="!isCollapsed">
        <el-row :gutter="10">
          <!-- LEFT WRAPPER -->
          <el-col :span="loggedIn ? 16 : 24">
            <div class="grid-content">
              <wear-shop-cart
              class="box-card"
              :visible.sync="confirmDialogVisible"
              :selectedAddress="addressSelected"
              :selectedCard="cardSelected"/>
            </div>
          </el-col>

          <!-- RIGHT WRAPPER -->
          <el-col v-if="loggedIn" :span="8">
            <div class="grid-content">
              <template v-if="loggedIn">
                <!-- address box -->
                <wear-info-box
                class="box-card"
                headerTitle="Delivery Address"
                :getContent="getAddresses"
                :deleteItem="deleteAddress"
                :visible.sync="addressDialogFormVisible"
                :selected.sync="addressSelected"
                :innerTable="addressTable"/>

                <!-- credit card box -->
                <wear-info-box
                class="box-card"
                headerTitle="Credit Card"
                :getContent="getCards"
                :deleteItem="deleteCard"
                :visible.sync="cardDialogFormVisible"
                :selected.sync="cardSelected"
                :innerTable="cardTable"/>
              </template>
            </div>
          </el-col>
        </el-row>
      </template>

      <template v-else>
        <el-tabs type="card" style="border-radius: 5px">
          <el-tab-pane label="ShopCart">
            <wear-shop-cart
            :visible.sync="confirmDialogVisible"
            :selectedAddress="addressSelected"
            :selectedCard="cardSelected"/>
          </el-tab-pane>
          <el-tab-pane v-if="loggedIn" label="Address">
            <wear-info-box
            class="box-card"
            headerTitle="Delivery Address"
            :getContent="getAddresses"
            :deleteItem="deleteAddress"
            :visible.sync="addressDialogFormVisible"
            :selected.sync="addressSelected"
            :innerTable="addressTable"/>
          </el-tab-pane>
          <el-tab-pane v-if="loggedIn" label="Credit Card">
            <wear-info-box
            class="box-card"
            headerTitle="Credit Card"
            :getContent="getCards"
            :deleteItem="deleteCard"
            :visible.sync="cardDialogFormVisible"
            :selected.sync="cardSelected"
            :innerTable="cardTable"/>
          </el-tab-pane>
        </el-tabs>
      </template>
    </el-main>

    <!-- Footer -->
    <wear-footer />

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
      addressSelected: null,
      cardSelected: null,
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

.el-tabs--card>.el-tabs__header {
  border-bottom: none;
}
.el-tabs__header {
  margin: 0 0 1px 0;
}
.el-tabs__nav {
  background-color: white;
}

.el-col {
  border-radius: 4px;
}

.box-card {
  margin-bottom: 5px;
}
</style>
