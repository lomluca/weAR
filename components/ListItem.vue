<template>
<el-card class="list-item" :body-style="{ padding: '0px' }">
  <img :src="item.assets[0]" :alt="item.name" class="list-item-image">
  <el-container direction="vertical" style="padding: 14px;">
    <span class="list-item-main-label">{{ item.name  }}</span>
    <div class="bottom clearfix">
      <el-row>
        <span class="list-item-price-label" style="float:left">{{ item.price }} €</span>
        <el-container style="width:60%;float:right;" direction="vertical">
          <el-button type="primary" class="list-item-button" @click="tryOn(item)">Try</el-button>
          <!-- <el-button class="list-item-button" style="margin-left:0" @click="addToCart(item)">Add To Cart</el-button> -->
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
  },
  methods: {
    addToCart(item) {
      addToCart(item);
      this.$message({
        showClose: true,
        message: 'Item successfully added',
        type: 'success',
        duration: 1000,
        customClass: 'wear-message'
      });
    },
    tryOn(item) {
      window.location.href = 'try-on.html?id=' + this.item.id
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
  text-overflow: ellipsis;
  overflow: hidden;
  width: 100%;
  white-space: nowrap;
  font-size: 1.2em;
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
  font-size: 0.8em;
}

.list-item-price-label {
  width: 30%;
  font-size: 1em;
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

.wear-message {
  z-index: 9999 !important;
}
</style>
