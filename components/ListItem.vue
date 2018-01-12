<template>
<el-card class="list-item" :body-style="{ padding: '0px' }">
  <img :id="uniqueId" :src="cardImage" :key="uniqueId" :alt="item.name" class="list-item-image"
    v-on:mouseover="loopImage()"
    v-on:mouseout="loopImage()">
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
      uniqueId: 'card-id-' + this.item.id,
      cardImage: this.item.assets[0],
      currentImageIdx: 0,
      fadeInDuration: 250,
      fadeOutDuration: 250
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
      console.log(this.uniqueId)
      this.currentImageIdx = (this.currentImageIdx + 1) % 2
      let imgSrc = this.item.assets[this.currentImageIdx]
      let id = '#' + this.uniqueId
      $(id).fadeOut(this.fadeInDuration, function() {
        $(id).attr('src', imgSrc)
        $(id).fadeIn(this.fadeInDuration)
      })
    },
    tryOn(item) {
      window.location.href = 'try-on.html?id=' + this.item.id
    },
    enter: function (el, done) {
      var vm = this
      Velocity(el,
        { opacity: 1 },
        {
          duration: this.fadeInDuration,
          complete: function () {
            done()
            if (!vm.stop) vm.show = false
          }
        }
      )
    },
    leave: function (el, done) {
      var vm = this
      Velocity(el,
        { opacity: 0 },
        {
          duration: this.fadeOutDuration,
          complete: function () {
            done()
            vm.show = true
          }
        } 
      )
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
