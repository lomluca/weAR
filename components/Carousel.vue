<template>
<el-carousel id="carousel" indicator-position="none" arrow="never">
  <el-carousel-item
    v-for="item in items"
    :item="item"
    :key="item.id" >
      <a :href="item.href"><img :src="item.asset" :alt="item.alt"></a>
      <span class="text_over_image">SALE</span>
      <span class="text_over_image_below">TRY YOUR STYLE NOW</span>
  </el-carousel-item>
</el-carousel>
</template>

<script>
export default {
  name: 'wear-carousel',
  //images are of dimension: 1900x1304
  props: ['items'],
  data() {
    return {
    }
  },
  mounted() {
    $('.el-carousel').css('height', (window.innerWidth*1304/1900)+'px')
    this.$nextTick(function() {
      window.addEventListener('resize', function(e) {
        $('.el-carousel').css('height', (window.innerWidth*1304/1900)+'px')
      });
    })
  }
}
</script>

<style>
.el-carousel__container {
  height: 100% !important;
}

.el-carousel__item img {
  width: 100%;
  height: auto;
}

@supports (-ms-ime-align: auto) {
  .text_over_image {
      position: absolute;
      margin: auto;
      top: 50%;
      bottom: 50%;
      right: 50%;
      left: 47%;
      transform: translate(-50%, -50%);

      color:#fff;
      font-size: 3.8vw;
      font-weight: bold;
      text-shadow: 1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000;
  }

  .text_over_image_below {
      position: absolute;
      margin: auto;
      top: 62% !important;
      bottom: 38% !important;
      right: 30%;
      left: 51%;
      transform: translate(-50%, -50%);

      color:#fff;
      font-size: 2vw;
      font-weight: bold;
      text-shadow: 1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000;
  }
}

.text_over_image {
    position: absolute;
    margin: auto;
    top: 50%;
    bottom: 50%;
    transform: translate(-50%, -50%);

    color:#fff;
    font-size: 3.8vw;
    font-weight: bold;
    text-shadow: 1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000;
}

.text_over_image_below {
    position: absolute;
    margin: auto;
    top: 57%;
    bottom: 43%;
    transform: translate(-50%, -50%);

    color:#fff;
    font-size: 2vw;
    font-weight: bold;
    text-shadow: 1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000;
}

</style>
