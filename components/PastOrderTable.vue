<template>
  <el-table
    :data="pastOrderData"
    style="width: 100%"
    stripe>
    <el-table-column
      width="180">
      <template slot-scope="scope">
        <img width="70px" height="70px" :src="scope.row.assets[0]" :alt="scope.row.alt" :href="scope.row.href"/>
      </template>
    </el-table-column>
    <el-table-column
      prop="brand"
      label="Brand"
      width="180"
      header-align="center">
    </el-table-column>
    <el-table-column
      prop="name"
      label="Description"
      width="180"
      header-align="center">
    </el-table-column>
    <el-table-column
      prop="price"
      label="Price"
      width="180"
      header-align="center">
    </el-table-column>
    <el-table-column
      label="Status"
      width="180"
      header-align="center">
      <template slot-scope="scope">
        <p>Shipping</p>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    methods: {
      
    },
    data() {
      return {
        pastOrderData: getOrders()
      }
    }
  }
</script>