<template>
<el-row>
  <el-col :xs="4" :sm="4" :md="2" :lg="2" :xl="2"><p>{{ item.name }}</p></el-col>

  <el-col :xs="16" :sm="16" :md="18" :lg="18" :xl="18"><img class="list-item-image" :src="item.assets[0]" :alt="item.name"></el-col>

  <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4">
    <el-container direction="vertical">
      <p>{{ item.price }} €</p>
      <el-button style="width:100%" type="primary">Try</el-button>
      <el-button style="width:100%;margin-left:0;">Add to Cart</el-button>
    </el-container>
  </el-col>
</el-row>
</template>

<script>
export default {
  name: 'wear-filter-bar',
  props: [ 'item' ],
  data: function() {
    return {
    }
  }
}
</script>

<style>
.list-item-image {
  width: 25%;
  height: 10%;
}
</style>
