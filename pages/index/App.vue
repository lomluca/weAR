<template>
<el-container>
  <!-- Header -->
  <el-header height="auto">
    <wear-header />
  </el-header>

  <!-- Page's main content -->
  <el-main>
    <wear-main />
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
import WearMain from '../../components/Main'

export default {
  name: 'app',
  components: {
    'wear-header': WearHeader,
    'wear-nav': WearNav,
    'wear-main': WearMain,
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
</style>
