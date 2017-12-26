<template>
  <el-container>
    <!-- Header -->
    <el-header height="auto">
      <wear-header />
    </el-header>


    <!-- Main content -->
    <el-main style="overflow: initial">

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
      shopcart: getShopCartData()
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
.list-item-image {
  width: 25%;
  height: 10%;
}
</style>
