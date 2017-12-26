<template>
<el-card :body-style="{ padding: '0px' }">
  <img :src="item.assets[0]" :alt="item.name" class="list-item-image">
  <div style="padding: 14px;">
    <span>{{ item.name  }}</span>
    <div class="bottom clearfix">
      <span class="price-label">{{ item.price }}</span>
      <el-button type="primary" class="button">Try</el-button>
      <el-button class="button">Add To Cart</el-button>
    </div>
  </div>
</el-card>
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
  width: 30%;
  display: block;
}
</style>
