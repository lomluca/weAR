<template>
<el-container>
  <!-- Header -->
  <el-header height="auto">
    <wear-header />
  </el-header>


  <!-- Main content -->
  <el-main style="overflow: initial">
    <wear-register-form v-if="showForm" @signupSuccess="signupCompleted" />
    <p v-else>We have sent a confirmation e-mail to <b>{{ email }}</b>. Please, confirm your account before starting shopping. <a href="index.html">Go to home page</a></p> 
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
import WearRegisterForm from '../../components/RegisterForm'

export default {
  name: 'app',
  data () {
    return {
      showForm: true,
      email: ""
    }
  },
  components: {
    'wear-header': WearHeader,
    'wear-footer': WearFooter,
    'wear-register-form': WearRegisterForm
  },
  methods: {
    signupCompleted: function() {
      this.showForm = false
      this.email = localStorage.email
      this.$message({
          message: 'Signup succeded',
          type: 'success'
      });
    }
  }
}
</script>
