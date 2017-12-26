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
                <el-input-number v-model="scope.row.quantity"></el-input-number>
              </div>
            </template>
          </el-table-column>
        </el-table>
        <div class="shopCartTableFooter">
          <h1>Total: x</h1>
          <el-button>Checkout</el-button>
        </div>
      </div>

      <div class="cartRightWrapper">
        <h1>Delivery Address:</h1>
        <p>some address</p>
        <el-button>Edit</el-button>
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
      ]
    }
  },
  components: {
    'wear-header': WearHeader,
    'wear-footer': WearFooter
  }
}
</script>

<style>
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
  padding: 0px;
  height: auto;
}

.el-main .cartLeftWrapper {
  width: 70%;
  display: inline-block;
  height: auto;
  float: left
}
.el-main .cartRightWrapper {
  display: inline-block;
}

.el-main .cartLeftWrapper .shopRowWrapper {
  float: left;
}
.el-main .shopCartTableFooter {
  float: right;
}
</style>
