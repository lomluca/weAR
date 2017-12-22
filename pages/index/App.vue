<template>
<el-container>
  <!-- Header -->
  <el-header height="auto">
    <wear-header />
  </el-header>

  <!-- Page's main content -->
  <el-main style="overflow: initial">
    <!-- Carousel -->
    <div class="block">
      <el-carousel indicator-position="outside">
        <el-carousel-item
          v-for="item in carouselData"
          :item="item"
          :key="item.id" >
          <a :href="item.href">
            <img :src="item.asset" :alt="item.alt">
          </a>
        </el-carousel-item>
      </el-carousel>
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
import WearNav from '../../components/Nav'

export default {
  name: 'app',
  data () {
    return {
      carouselData: getCarouselData()['data'] // Defined in public/js/model.js
    }
  },
  components: {
    'wear-header': WearHeader,
    'wear-nav': WearNav,
    'wear-footer': WearFooter
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
</style>
