<template>
  <section>
    <!-- Carousel -->
    <div class="carouselBlock">
      <el-carousel indicator-position="outside">
        <el-carousel-item
          v-for="item in carouselData"
          :item="item"
          :key="item.id" >
          <a :href="item.href"><img :src="item.asset" :alt="item.alt"></a>
        </el-carousel-item>
      </el-carousel>
    </div>

    <!-- Other images -->
    <div class="imageBlock" >
      <div class="blockCol" v-for="item in imageBlockData"
      :item="item"
      :key="item.id">
        <div class="imageContainer">
          <a :href="item.href"><img :src="item.asset" :alt="item.alt"></a>
        </div>
        
        <div class="descriptionContainer">
          <div class="description">
            {{ item.description }}
          </div>
          <div class="price">
            {{ item.price }}
          </div>
        </div>
      </div>
  </section>
</template>

<script>
export default {
  name: 'wear-main',
  data () {
    return {
      carouselData: getCarouselData()['data'], // Defined in public/js/model.js
      imageBlockData: getImageBlockData()['data']
    }
  }
}
</script>

<style>
.el-carousel__item a {
  width: 100%;
  height: 100%;
}

.el-carousel__item img {
  width: 100%;
  height: 100%;
}

.carouselBlock {
  margin-bottom: 30px;
}

.imageBlock {
  width: 100%;
  height: auto;
  display: inline-block;
  vertical-align: top;
}

.blockCol {
  width: 33%;
  height: auto;
  display: inline-block;
}

.imageContainer {
  width: 100%;
  height: 85%;
}

.descriptionContainer {
  width: 100%;
  height: 15%;
}

img {
  max-width: 100%;
  max-height: 100%;
}

.description, .price {
  width: 50%;
  display: inline;
  padding: 10%;
}
</style>
