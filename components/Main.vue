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
    <div class="imageBlock" v-for="item in imageBlockData"
      :item="item"
      :key="item.id">
      <div class="blockRow">
        <template v-if="item.position == 0">
          <div class="blockCol">
            <div class="imageContainer">
              <a :href="item.href"><img :src="item.asset" :alt="item.alt"></a>
            </div>
          </div>
          <div class="blockCol">
            <div class="description">
              {{ item.description }}
            </div>
          </div>
        </template>
        <template v-else>
          <div class="blockRow">
            <div class="blockCol">
              <div class="description">
                {{ item.description }}
              </div>
            </div>
            <div class="blockCol">
              <div class="imageContainer">
                <a :href="item.href"><img :src="item.asset" :alt="item.alt"></a>
              </div>
            </div>
          </div>
        </template>
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

.imageBlock .blockRow {
  width: 100%;
  height: auto;
  display: inline-block;
  vertical-align: top;
}
.imageBlock .blockRow .blockCol {
  width: 50%;
  display: inline-block;
  float: left
}
.imageBlock .blockRow .blockCol .imageContainer {
  overflow: hidden;
}
</style>
