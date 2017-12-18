<template>  
<el-container>
  <!-- Header -->
  <el-header>
    <wear-header />
  </el-header>

  <!-- Page's main content -->
  <el-main> 
    <!-- Carousel -->
    <div class="block">
      <span class="demonstration">Switch when indicator is hovered (default)</span>
        <el-carousel height="150px">
          <el-carousel-item v-for="item in 4" :key="item">
            <h3>{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
    </div>   
  </el-main>

  <!-- Footer -->
  <el-footer>
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
      msg: 'Welcome to Your Vue.js App'
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
.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}  
 
.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}
  
.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>
