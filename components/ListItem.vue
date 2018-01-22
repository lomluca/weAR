<template>
<el-card class="list-item" :body-style="{ padding: '0px' }" 
    vocab="http://schema.org/" typeof="Product">
  <img :id="uniqueId" :src="this.item.assets[0]" :key="uniqueId" :alt="item.name" class="list-item-image li-image-top"
    v-on:mouseover="loopImage()"
    v-on:mouseout="loopImage()"
    property="image">
  <!-- The below image is never shown, it is here for the solo purpose of preloading an asset -->
  <img :src="this.item.assets[1]" class="list-item-image-preload">
  <el-container direction="vertical" style="padding: 14px;">
    <span class="list-item-main-label" property="name">{{ item.name  }}</span>
    <div class="bottom clearfix">
      <el-row>
        <span class="list-item-price-label" style="float:left"
            property="price" :content="item.price">
          {{ item.price }} <span property="priceCurrency" content="EUR">€</span>
        </span>
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
      uniqueId: 'card-id-' + this.item.id,
      currentImageIdx: 0,
      fadeInDuration: 350,
      fadeOutDuration: 350
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
    loopImage() {
      this.currentImageIdx = (this.currentImageIdx + 1) % 2
      let imgSrc = this.item.assets[this.currentImageIdx]
      let id = '#' + this.uniqueId
      $(id).fadeOut(this.fadeInDuration, function() {
        $(id).attr('src', imgSrc)
      }).fadeIn(this.fadeInDuration)
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

.list-item-image-preload {
  height: 0;
  width: 0;
  display: none;
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
