<template>
  <el-container>
    <!-- Header -->
    <el-header height="auto">
      <wear-header />
    </el-header>

    <!-- Main content -->
    <el-main>
      <div class="cartLeftWrapper">
        <el-card class="box-card">
          <el-table
             height="500"
            :data="shopcartData">
            <el-table-column
              label="Item"
              min-width="400">
              <template slot-scope="scope">
                <div class="shopRowWrapper">
                  <div class="itemWrapper">
                    <img width="70px" height="70px" :src="scope.row.asset" :alt="scope.row.alt" :href="scope.row.href"/>
                  </div>
                  <div class="itemWrapper">
                    <a style="text-decoration: none" :href="scope.row.href"><span class="itemName">{{ scope.row.name }}</span></a>
                    <span class="itemDescription">{{ scope.row.description }}</span>
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
        </el-card>
      </div>

      <div class="cartRightWrapper">
        <template v-if="loggedIn">
          <!-- address box -->
          <el-card class="box-card">
            <div slot="header" class="box-card-header">
              <span>Delivery Address</span>
            </div>
            <template v-if="address.length > 0">
              <el-radio-group v-model="addressChoice" v-for="item in address" :key="item">
                <el-radio :label="item">{{ item }}</el-radio>
                <div class='button-wrapper'>
                  <el-button class="el-icon-remove" size="mini" type="danger"></el-button>
                </div>
              </el-radio-group>
              <hr>
            </template>
            <v-app>
              <v-layout row justify-center>
                <v-dialog v-model="dialog" persistent max-width="500px">
                  <v-btn color="primary" dark slot="activator">New Address</v-btn>
                  <v-card>
                    <v-card-title>
                      <span class="headline">Shipping Address</span>
                    </v-card-title>
                    <v-card-text>
                      <v-container grid-list-md>
                        <v-layout wrap>
                          <v-flex xs12 sm6 md4>
                            <v-text-field label="First and last name" hint="example: John Smith" required></v-text-field>
                          </v-flex>
                          <v-flex xs12>
                            <v-text-field label="Street" hint="example: 10, Avenue des Begonias"
                              persistent-hint
                              required></v-text-field>
                          </v-flex>
                          <v-flex xs12>
                            <v-text-field label="City" required></v-text-field>
                          </v-flex>
                          <v-flex xs12 sm6>
                            <v-select
                              label="Country"
                              required
                              :items="['France', 'Italy', 'Germany', 'Spain']"
                            ></v-select>
                          </v-flex>
                          <v-text-field label="Additional info" hint="example: floor 1"
                              required
                          ></v-text-field>
                        </v-layout>
                      </v-container>
                      <small>*indicates required field</small>
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="blue darken-1" flat @click.native="dialog = false">Close</v-btn>
                      <v-btn color="blue darken-1" flat @click.native="dialog = false">Save</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-layout>
            </v-app>
          </el-card>
          <!-- credit card box -->
          <el-card class="box-card">
            <div slot="header" class="box-card-header">
              <span>Credit Card</span>
            </div>
            <template v-if="creditcard.length > 0">
              <el-radio-group v-model="cardChoice" v-for="item in creditcard" :key="item">
                <el-radio :label="item">
                  <ul>
                    <li>{{ item.owner }}</li>
                    <li>{{ item.cardNumber }}</li>
                    <li>{{ item.expirationDate }}</li>
                  </ul>
                </el-radio>
                <div class='button-wrapper'>
                  <el-button class="el-icon-remove" size="mini" type="danger"></el-button>
                </div>
              </el-radio-group>
              <hr>
            </template>
            <el-button class="el-icon-circle-plus" size="mini" type="success">New</el-button>
          </el-card>
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

export default {
  name: 'app',
  data: function() {
    return {
      shopcartData: getShopCart(),
      address: getAddresses(),
      addressChoice: getAddresses()[0],
      creditcard: getCards(),
      cardChoice: getCards()[0],
      confirmDialog: false,
      dialog: false
    }
  },
  components: {
    'wear-header': WearHeader,
    'wear-footer': WearFooter
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
        this.$alert('Please log-in to continue', 'Message', {
          confirmButtonText: 'OK'
        });
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
.cartLeftWrapper {
  width: 70%;
  display: inline-block;
  height: auto;
  float: left
}
.cartLeftWrapper .shopRowWrapper {
  float: left;
}
.cartLeftWrapper .shopRowWrapper .itemWrapper {
  display: inline-block;
  height: 100%;
}
.cartLeftWrapper .shopRowWrapper .itemWrapper .itemName {
  font-size: 22px;
}
.cartLeftWrapper .shopRowWrapper .itemWrapper .itemDescription {
  font-size: 12px;
}
.shopCartTableFooter {
  float: right;
  margin-bottom: 10px;
}

/* Right Wrapper */
.cartRightWrapper {
  display: inline-block;
  width: 30%;
}
/* Info box */
.cartRightWrapper .box-card {
  margin: 0 15px 15px 15px;
}
.cartRightWrapper .box-card .el-radio-group {
  display: table;
  width: 100%;
}
.cartRightWrapper .box-card .el-radio-group .el-radio {
  float: left;
}
.cartRightWrapper .box-card .el-radio-group .el-radio ul {
  width: 100%;
  display: inline-block;
  list-style-type: none;
  text-align: left
}
.cartRightWrapper .box-card .button-wrapper {
  display: table-cell;
  vertical-align: middle;
}
.cartRightWrapper .box-card .button-wrapper .el-button {
  vertical-align: middle;
  display: block;
  margin: 0 auto;
}
</style>
