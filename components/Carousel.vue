<template>
<el-carousel indicator-position="none" arrow="never" :height="imageHeight">
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
  props: ['items'],
  data() {
    return {
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth,
      imageHeight: (window.innerHeight*0.9)+'px'
    }
  },
  watch: {
    windowWidth(newWidth, oldWidth) {
      this.imageHeight = this.windowHeight;
    }
  },
  mounted() {
    let that = this;
    this.$nextTick(function() {
      window.addEventListener('resize', function(e) {
        this.windowHeight = window.innerHeight;
        this.windowWidth = window.innerWidth;
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
      font-size: 3.8em;
      font-weight: bold;
      text-shadow: 1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000;
  }

  .text_over_image_below {
      position: absolute;
      margin: auto;
      top: 57%;
      bottom: 43%;
      right: 30%;
      left: 51%;
      transform: translate(-50%, -50%);

      color:#fff;
      font-size: 1.5em;
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
    font-size: 3.8em;
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
    font-size: 1.5em;
    font-weight: bold;
    text-shadow: 1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000;
}

</style>
