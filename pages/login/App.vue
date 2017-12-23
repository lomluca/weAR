<template>
<el-container>
  <!-- Header -->
  <el-header height="auto">
    <wear-header />
  </el-header>


  <!-- Main content -->
  <el-main style="overflow: initial">
    <wear-login-form @loginSuccess="loginCompleted"/>
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
import WearLoginForm from '../../components/LoginForm'

export default {
  name: 'app',
  data () {
    return {
      
    }
  },
  components: {
    'wear-header': WearHeader,
    'wear-footer': WearFooter,
    'wear-login-form': WearLoginForm
  },
  methods: {
    loginCompleted: function() {
      window.location.href = 'index.html'
    }
  }
}
</script>
