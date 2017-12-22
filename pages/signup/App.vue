<template>
<el-container>
  <!-- Header -->
  <el-header height="auto">
    <wear-header />
  </el-header>


  <el-main style="overflow: initial">
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
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    'wear-header': WearHeader,
    'wear-footer': WearFooter
  }
}
</script>
