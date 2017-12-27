<template>
<el-card class="list-item" :body-style="{ padding: '0px' }">
  <img :src="item.assets[0]" :alt="item.name" class="list-item-image">
  <el-container direction="vertical" style="padding: 14px;">
    <span class="list-item-main-label">{{ item.name  }}</span>
    <div class="bottom clearfix">
      <el-row>
        <span class="list-item-price-label" style="float:left">{{ item.price }} €</span>
        <el-container style="width:70%;float:right;" direction="vertical">
          <el-button type="primary" class="list-item-button">Try</el-button>
          <el-button class="list-item-button" style="margin-left:0">Add To Cart</el-button>
        <el-container>
      </el-row>
    </div>
  </el-container>
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
.list-item {
  margin: 10px;
}

.list-item-main-label {
  text-align: left;
}

.list-item-image {
  width: 100%;
  display: block;
}

.list-item-button {
  width: 100%;
  margin: 0;
  float: right;
  margin-bottom: 5px;
}

.list-item-price-label {
  width: 30%;
  font-size: 13px;
  color: #999;
  text-align: left;
}

.bottom {
  line-height: 12px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
                  
.clearfix:after {
  clear: both
}
</style>
