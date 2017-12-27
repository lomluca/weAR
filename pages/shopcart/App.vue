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
          <el-button @click="confirmDialog = true">Checkout</el-button>
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
        <el-card class="box-card">
          <div slot="header" class="box-card-header">
            Delivery Address
          </div>
          <div class="box-card-body">
            <el-radio-group v-model="addressChoice" v-for="item in address" :key="item">
              <el-radio :label="item">{{ item }}</el-radio>
              <el-button class="el-icon-remove" size="mini" type="danger"></el-button>
            </el-radio-group>
            <hr>
            <el-button class="el-icon-circle-plus" size="mini" type="success">New</el-button>
          </div>
        </el-card>
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

export default {
  name: 'app',
  data: function() {
    return {
      //!!!!!! non funziona richiamando la funzione da model, non capisco perché
      shopcartData: [
        { id: 1, name: 'name', asset: '/assets/carousel/1.jpg', price:'10', quantity:'1', alt: 'Ad Banner 1', href: '#'  },
        { id: 2, name: 'name', asset: '/assets/carousel/2.jpg', price:'3', quantity:'3', alt: 'Ad Banner 2', href: '#'  },
        { id: 3, name: 'name', asset: '/assets/carousel/3.jpg', price:'4', quantity:'1', alt: 'Ad Banner 3', href: '#'  },
        { id: 4, name: 'name', asset: '/assets/carousel/4.jpg', price:'5', quantity:'2', alt: 'Ad Banner 4', href: '#'  },
        { id: 4, name: 'name', asset: '/assets/carousel/4.jpg', price:'5', quantity:'2', alt: 'Ad Banner 4', href: '#'  },
        { id: 4, name: 'name', asset: '/assets/carousel/4.jpg', price:'5', quantity:'2', alt: 'Ad Banner 4', href: '#'  },
        { id: 4, name: 'name', asset: '/assets/carousel/4.jpg', price:'5', quantity:'2', alt: 'Ad Banner 4', href: '#'  }
      ],
      address: [localStorage.address, 'via roma'],
      addressChoice: [localStorage.address][0],
      confirmDialog: false
    }
  },
  components: {
    'wear-header': WearHeader,
    'wear-footer': WearFooter
  },
  methods: {
    changeQuantity(id, value) {
      console.log(id + " " + value)
    }
  },
  computed: {
    total: function() {
      var total, i;
      for(i = 0, total = 0; i < this.shopcartData.length; i++) {
        total += this.shopcartData[i].price*this.shopcartData[i].quantity;
      }
      return total;
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
/* Address box */
.el-main .cartRightWrapper .box-card {
  margin: 0 15px 0 15px;
}
.el-main .cartRightWrapper .box-card .box-card-body .el-radio-group {
  width: 100%;
}
.el-main .cartRightWrapper .box-card .box-card-body .el-radio-group .el-radio {
  float: left;
}
.el-main .cartRightWrapper .box-card .box-card-body .el-button {
  float: right;
}


</style>
