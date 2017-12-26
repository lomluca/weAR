<template>
<el-container>
  <!-- Header -->
  <el-header height="auto">
    <wear-header />
  </el-header>

  <!-- Page's main content -->
  <el-main>
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

        <div class="description">
          {{ item.description }}
        </div>
      </div>
  </el-main>

  <!-- Footer -->
  <el-footer height="auto">
    <wear-footer />
  </el-footer>
</el-container>
</template>

<script>
import WearHeader from '../../components/Header'
import WearFooter from '../../components/Footer'

export default {
  name: 'app',
  data () {
    return {
      carouselData: getCarouselData()['data'], // Defined in public/js/model.js
      imageBlockData: getImageBlockData()['data']
    }
  },
  components: {
    'wear-header': WearHeader,
    'wear-footer': WearFooter
  }
}
</script>

<style>
.el-header{
  box-sizing: content-box;
  padding: 0px;
}

.el-main {
  height: auto;
  overflow: initial;
}

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

.description {
  width: 100%;
  height: 15%;
}

img {
  max-width: 100%;
  max-height: 100%;
}
</style>
