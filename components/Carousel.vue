<template>
<el-carousel indicator-position="none" arrow="never" :height="imageHeight">
  <el-carousel-item
    v-for="item in items"
    :item="item"
    :key="item.id" >
      <a :href="item.href"><img :src="item.asset" :alt="item.alt"></a>
      <span class="text_over_image">SALE</span>
  </el-carousel-item>
</el-carousel>
</template>

<script>
export default {
  name: 'wear-carousel',
  props: ['items'],
  data() {
    return {
      imageHeight: (window.innerHeight*0.9)+'px'
    }
  },
  mounted() {
    let that = this;
    this.$nextTick(function() {
      window.addEventListener('resize', function(e) {
        that.imageHeight = (window.innerHeight*0.9)+'px';
      });
    })
  }
}
</script>

<style>
.el-carousel {

}
.el-carousel__item a {
  width: 100%;
  height: 100%;
}

.el-carousel__item img {
  width: 100%;
  height: 100%;
}

.text_over_image {
    position: absolute;
    margin: auto;
    top: 50%;
    bottom: 50%;
    transform: translate(-50%, -50%);

    color:#fff;
    font-size: 4em;
    font-weight: bold;
    text-shadow: 1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000;
}
</style>
